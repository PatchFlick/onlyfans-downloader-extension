// OnlyFans Downloader Content Script
// Modern JavaScript - No jQuery dependency
// Manifest V3 compatible
// Enhanced DM support with fallback mechanisms

class OnlyFansDownloader {
  constructor() {
    this.posts = {};
    this.dmPosts = {};
    this.images = {};
    this.videos = {};
    this.uniqueClass = 'of-downloader-' + Math.random().toString(36).substring(2, 9);
    this.quality = 'full';
    this.isDMContext = false;
    
    this.init();
  }

  async init() {
    // Get user preferences
    const prefs = await this.getStorageData({ quality: 'full' });
    this.quality = prefs.quality;
    
    // Detect if we're in DM context
    this.isDMContext = window.location.pathname.includes('/my/chats/');
    
    // Start monitoring
    this.startMonitoring();
  }

  async getStorageData(defaults) {
    return new Promise((resolve) => {
      chrome.storage.sync.get(defaults, resolve);
    });
  }

  startMonitoring() {
    // Monitor for posts
    this.monitorPosts();
    
    // Monitor for DMs
    this.monitorDMs();
    
    // Set up periodic checks
    setInterval(() => {
      this.monitorPosts();
      this.monitorDMs();
    }, 2000);
  }

  monitorPosts() {
    const posts = document.querySelectorAll('.b-post');
    posts.forEach(post => {
      if (post.querySelector('.' + this.uniqueClass)) return;
      
      this.processPost(post);
    });
  }

  monitorDMs() {
    const messages = document.querySelectorAll('.b-chat__message');
    messages.forEach(message => {
      if (message.querySelector('.' + this.uniqueClass)) return;
      
      this.processMessage(message);
    });
  }

  async processPost(post) {
    try {
      const dateElement = post.querySelector('.b-post__date');
      if (!dateElement) return;

      const href = dateElement.href;
      const postId = this.extractPostId(href);
      
      if (!postId || !this.posts[postId] || !this.posts[postId].media) return;

      const usernameElement = post.querySelector('.g-user-username');
      if (!usernameElement) return;
      
      const username = usernameElement.textContent.split('@')[1]?.trim() || 'unknown';
      
      const downloadButtons = this.createDownloadButtons(
        this.posts[postId].media,
        username
      );
      
      if (downloadButtons.length > 0) {
        post.appendChild(this.createButtonContainer(downloadButtons));
      }
    } catch (error) {
      console.error('Error processing post:', error);
    }
  }

  async processMessage(message) {
    try {
      // Use DM-specific processing if in DM context
      if (this.isDMContext) {
        await this.processDMMessage(message);
      } else {
        await this.processRegularMessage(message);
      }
    } catch (error) {
      console.error('Error processing message:', error);
    }
  }

  async processDMMessage(message) {
    try {
      const username = this.getDMUsername();
      const downloadButtons = [];

      // Enhanced DM content detection with multiple fallbacks
      const mediaFound = await this.extractDMMedia(message, downloadButtons, username);

      if (mediaFound && downloadButtons.length > 0) {
        message.children[0].appendChild(this.createButtonContainer(downloadButtons));
      }
    } catch (error) {
      console.error('Error processing DM message:', error);
    }
  }

  async processRegularMessage(message) {
    try {
      const username = document.querySelector('h1.g-page-title span.g-user-name')?.textContent?.trim() || 'unknown';
      const downloadButtons = [];

      // Handle different message types
      if (message.querySelector('.swiper-container')) {
        // Multiple images
        const images = message.querySelectorAll('.swiper-container img');
        images.forEach(img => {
          const cleanSrc = this.cleanUrl(img.src);
          if (this.images[cleanSrc]) {
            downloadButtons.push([this.images[cleanSrc], username, 'download']);
          } else {
            downloadButtons.push([img.src, username, 'download']);
          }
        });
      } else if (message.classList.contains('m-photo')) {
        // Single photo
        const img = message.querySelector('.post_media img');
        if (img) {
          downloadButtons.push([img.src, username, 'download']);
        }
      } else if (message.classList.contains('m-audio')) {
        // Audio
        const source = message.querySelector('source');
        if (source) {
          downloadButtons.push([source.src, username, 'audio']);
        }
      } else if (message.querySelector('.post_gif')) {
        // GIF
        const source = message.querySelector('source');
        if (source) {
          downloadButtons.push([source.src, username, 'gif']);
        }
      } else if (message.querySelector('.m-video')) {
        // Video
        const img = message.querySelector('.m-video img');
        if (img) {
          const videoData = this.getVideoData(img.src);
          if (videoData) {
            downloadButtons.push([videoData, username, this.quality === 'full' ? 'original' : this.quality + 'p']);
          }
        }
      }

      if (downloadButtons.length > 0) {
        message.children[0].appendChild(this.createButtonContainer(downloadButtons));
      }
    } catch (error) {
      console.error('Error processing regular message:', error);
    }
  }

  async extractDMMedia(message, downloadButtons, username) {
    let mediaFound = false;

    // Method 1: Check for multiple images (swiper container)
    if (message.querySelector('.swiper-container')) {
      mediaFound = true;
      const images = message.querySelectorAll('.swiper-container img');
      images.forEach(img => {
        const enhancedUrl = this.enhanceImageUrl(img.src);
        downloadButtons.push([enhancedUrl, username, 'download']);
      });
    }

    // Method 2: Check for single photo with multiple selectors
    else if (message.classList.contains('m-photo') || message.querySelector('.post_media img')) {
      mediaFound = true;
      const img = message.querySelector('.post_media img') || 
                  message.querySelector('img[src*="onlyfans"]') ||
                  message.querySelector('img');
      if (img) {
        const enhancedUrl = this.enhanceImageUrl(img.src);
        downloadButtons.push([enhancedUrl, username, 'download']);
      }
    }

    // Method 3: Check for audio with fallback selectors
    else if (message.classList.contains('m-audio') || message.querySelector('audio')) {
      mediaFound = true;
      const source = message.querySelector('source') || 
                    message.querySelector('audio source');
      if (source && source.src) {
        downloadButtons.push([source.src, username, 'audio']);
      }
    }

    // Method 4: Check for GIF with fallback selectors
    else if (message.querySelector('.post_gif') || message.querySelector('video[src*="gif"]')) {
      mediaFound = true;
      const source = message.querySelector('source') || 
                    message.querySelector('video source');
      if (source && source.src) {
        downloadButtons.push([source.src, username, 'gif']);
      }
    }

    // Method 5: Enhanced video detection with multiple fallbacks
    else if (message.querySelector('.m-video') || message.querySelector('video')) {
      mediaFound = true;
      const videoUrl = await this.extractVideoUrl(message);
      if (videoUrl) {
        downloadButtons.push([videoUrl, username, this.quality === 'full' ? 'original' : this.quality + 'p']);
      }
    }

    // Method 6: Generic image detection (fallback)
    else {
      const genericImages = message.querySelectorAll('img[src*="onlyfans"]');
      if (genericImages.length > 0) {
        mediaFound = true;
        genericImages.forEach(img => {
          const enhancedUrl = this.enhanceImageUrl(img.src);
          downloadButtons.push([enhancedUrl, username, 'download']);
        });
      }
    }

    return mediaFound;
  }

  async extractVideoUrl(message) {
    try {
      // Method 1: Try to get video data from stored data
      const img = message.querySelector('.m-video img') || message.querySelector('video img');
      if (img) {
        const videoData = this.getVideoData(img.src);
        if (videoData) {
          return videoData;
        }
      }

      // Method 2: Try to get video source directly
      const videoElement = message.querySelector('video');
      if (videoElement) {
        // Check for source element
        const source = videoElement.querySelector('source');
        if (source && source.src) {
          return source.src;
        }
        
        // Check for video src attribute
        if (videoElement.src) {
          return videoElement.src;
        }
      }

      // Method 3: Try to extract from data attributes
      const videoContainer = message.querySelector('.m-video') || message.querySelector('[data-video]');
      if (videoContainer) {
        const dataVideo = videoContainer.getAttribute('data-video');
        if (dataVideo) {
          return dataVideo;
        }
      }

      // Method 4: Try to find video URL in any attribute
      const allElements = message.querySelectorAll('*');
      for (const element of allElements) {
        const attributes = element.attributes;
        for (const attr of attributes) {
          if (attr.value && attr.value.includes('onlyfans') && 
              (attr.value.includes('.mp4') || attr.value.includes('video'))) {
            return attr.value;
          }
        }
      }

      return null;
    } catch (error) {
      console.error('Error extracting video URL:', error);
      return null;
    }
  }

  enhanceImageUrl(url) {
    if (!url) return url;
    
    try {
      // Try to get higher quality version
      const urlObj = new URL(url);
      
      // Remove size parameters to get original
      urlObj.searchParams.delete('w');
      urlObj.searchParams.delete('h');
      urlObj.searchParams.delete('size');
      
      // Add quality parameter if not present
      if (!urlObj.searchParams.has('quality')) {
        urlObj.searchParams.set('quality', '100');
      }
      
      return urlObj.toString();
    } catch (error) {
      // If URL parsing fails, return original
      return url;
    }
  }

  getDMUsername() {
    // Multiple methods to get username in DM context
    const selectors = [
      'h1.g-page-title span.g-user-name',
      '.g-user-name',
      '.chat-header .username',
      '[data-username]',
      '.user-info .name'
    ];

    for (const selector of selectors) {
      const element = document.querySelector(selector);
      if (element) {
        const username = element.textContent?.trim();
        if (username) {
          return username;
        }
      }
    }

    // Fallback: try to extract from URL
    const pathParts = window.location.pathname.split('/');
    const usernameFromUrl = pathParts.find(part => part && !part.includes('chats') && !part.includes('my'));
    
    return usernameFromUrl || 'unknown';
  }

  extractPostId(href) {
    if (href.includes('/my/chats/')) {
      return href.substring(href.indexOf('=') + 1);
    }
    const parts = href.split('/');
    return parts[3];
  }

  cleanUrl(url) {
    return url ? url.split('?')[0] : url;
  }

  getVideoData(thumbnailUrl) {
    const cleanUrl = this.cleanUrl(thumbnailUrl);
    const videoData = this.videos[cleanUrl];
    
    if (!videoData) return null;
    
    if (this.quality === '240' && videoData['240']) {
      return videoData['240'];
    } else if (this.quality === '720' && videoData['720']) {
      return videoData['720'];
    } else if (videoData.full) {
      return videoData.full;
    }
    
    return null;
  }

  createDownloadButtons(media, username) {
    const buttons = [];
    
    media.forEach(item => {
      if (item.type === 'photo') {
        const url = item.full || item.preview;
        buttons.push([url, username, 'download']);
      } else if (item.type === 'video') {
        const videoData = {};
        videoData.full = item.source?.source;
        
        if (item.videoSources?.[240]) {
          videoData['240'] = item.videoSources[240];
        }
        if (item.videoSources?.[720]) {
          videoData['720'] = item.videoSources[720];
        }
        
        // Store video data
        if (item.preview) {
          this.videos[this.cleanUrl(item.preview)] = videoData;
          this.videos[this.cleanUrl(item.squarePreview)] = videoData;
          this.videos[this.cleanUrl(item.thumb)] = videoData;
        }
        
        const downloadUrl = this.getVideoDownloadUrl(videoData);
        if (downloadUrl) {
          buttons.push([downloadUrl, username, this.quality === 'full' ? 'original' : this.quality + 'p']);
        }
      }
    });
    
    return buttons;
  }

  getVideoDownloadUrl(videoData) {
    if (this.quality === '240' && videoData['240']) {
      return videoData['240'];
    } else if (this.quality === '720' && videoData['720']) {
      return videoData['720'];
    } else if (videoData.full) {
      return videoData.full;
    }
    return null;
  }

  createButtonContainer(buttons) {
    const container = document.createElement('div');
    container.className = this.uniqueClass;
    container.style.cssText = 'display: flex !important; flex-wrap: wrap !important;';
    
    const shadow = container.attachShadow({ mode: 'closed' });
    
    if (buttons.length === 1) {
      shadow.appendChild(this.createButton(buttons[0]));
    } else if (buttons.length > 1) {
      shadow.appendChild(this.createButton(buttons, true));
      shadow.appendChild(this.createButton(buttons, false, true));
    }
    
    return container;
  }

  createButton(data, isAll = false, isCopy = false) {
    const button = document.createElement('button');
    button.style.cssText = `
      padding: 3px 6px;
      font-size: 13px;
      line-height: 1.5;
      border-radius: 3px;
      color: #fff;
      background-color: #00aff0;
      border: none;
      display: inline-block;
      margin: 4px 12px 4px 0;
      font-weight: 700;
      text-align: center;
      vertical-align: middle;
      cursor: pointer;
      white-space: nowrap;
      font-family: "Open Sans", sans-serif;
    `;
    
    if (isCopy) {
      button.textContent = data.length === 1 ? 'copy link' : 'copy links';
    } else if (isAll) {
      button.textContent = data.length === 2 ? 'both ' + data.length : 'all ' + data.length;
    } else {
      button.textContent = data[2];
    }
    
    const link = document.createElement('a');
    link.style.margin = '0 12px 0 0';
    link.appendChild(button);
    
    if (isCopy) {
      link.addEventListener('click', () => {
        const urls = data.map(item => item[0]).filter(Boolean).join('\n');
        this.copyToClipboard(urls);
        button.textContent = 'copied to clipboard!';
        setTimeout(() => {
          button.textContent = data.length === 1 ? 'copy link' : 'copy links';
        }, 2500);
      });
    } else {
      link.addEventListener('click', () => {
        data.forEach(item => {
          chrome.runtime.sendMessage(item);
        });
      });
    }
    
    return link;
  }

  copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    document.body.appendChild(textarea);
    textarea.value = text;
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }

  // Store post data (called from external script)
  storePostData(postId, data, isDM = false) {
    if (isDM) {
      this.dmPosts[postId] = data;
    } else {
      this.posts[postId] = data;
    }
  }

  // Store media data
  storeMediaData(thumbnailUrl, mediaUrl) {
    this.images[this.cleanUrl(thumbnailUrl)] = mediaUrl;
  }
}

// Initialize the downloader
const downloader = new OnlyFansDownloader();

// Listen for messages from background script (if needed for future features)
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Handle any future messages here
  sendResponse();
});

// Make downloader available globally for debugging
window.onlyFansDownloader = downloader; 