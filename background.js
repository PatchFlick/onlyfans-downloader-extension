// Background service worker for OnlyFans Downloader
// Manifest V3 compatible

// Handle download requests from content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (!message || !Array.isArray(message) || message.length < 2) {
    return;
  }

  const [url, filename] = message;
  
  if (!url || typeof url !== 'string') {
    console.error('Invalid URL provided for download');
    return;
  }

  // Validate URL is from OnlyFans
  if (!url.includes('onlyfans.com')) {
    console.error('Download URL must be from OnlyFans domain');
    return;
  }

  // Get user preferences
  chrome.storage.sync.get({ autoCreateFolder: true }, (prefs) => {
    const downloadOptions = {
      url: url,
      conflictAction: 'uniquify',
      saveAs: false
    };

    if (prefs.autoCreateFolder && filename) {
      downloadOptions.filename = `${filename}/${getFilenameFromUrl(url)}`;
    }

    chrome.downloads.download(downloadOptions, (downloadId) => {
      if (chrome.runtime.lastError) {
        console.error('Download failed:', chrome.runtime.lastError);
      }
    });
  });
});

// Helper function to extract filename from URL
function getFilenameFromUrl(url) {
  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    const filename = pathname.split('/').pop();
    
    // If no filename in path, generate one
    if (!filename || filename === '') {
      return `onlyfans_${Date.now()}.jpg`;
    }
    
    return filename;
  } catch (error) {
    return `onlyfans_${Date.now()}.jpg`;
  }
}

// Handle extension installation
chrome.runtime.onInstalled.addListener(() => {
  console.log('OnlyFans Downloader installed successfully');
}); 