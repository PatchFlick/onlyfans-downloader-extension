# OnlyFans Downloader Extension

A Chrome extension that adds download buttons for OnlyFans images and videos.

## 🚀 **Updated for 2025 - Modern & Secure**

This extension has been completely modernized with the latest security standards and best practices:

### **What's New (v4.5.15)**
- ✅ **Manifest V3** - Latest Chrome extension standard
- ✅ **No jQuery dependency** - Pure modern JavaScript
- ✅ **Enhanced security** - Stricter content security policy
- ✅ **Better error handling** - Robust error management
- ✅ **Modern ES6+ code** - Async/await, classes, arrow functions
- ✅ **Service Worker** - Replaces deprecated background scripts
- ✅ **Reduced permissions** - Only necessary permissions requested

## 🔒 **Security Improvements**

### **Before (v4.5.14)**
- Manifest V2 (deprecated)
- jQuery 3.4.1 (vulnerable)
- `webRequest` permission (overly broad)
- Inline script execution allowed
- Persistent background script

### **After (v4.5.15)**
- Manifest V3 (current standard)
- No external dependencies
- Minimal permissions (`storage`, `downloads`)
- Strict content security policy
- Service worker (non-persistent)

## 📋 **Permissions**

The extension now requests only the minimum necessary permissions:

- `storage` - Save user preferences
- `downloads` - Download files
- `*://*.onlyfans.com/*` - Access OnlyFans content

**Removed:** `webRequest` permission (no longer needed)

## 🛠 **Installation**

### **For Development/Testing:**

1. **Download the extension files**
2. **Open Chrome** and navigate to `chrome://extensions/`
3. **Enable "Developer mode"** (toggle in top right)
4. **Click "Load unpacked"** and select the extension folder
5. **Visit OnlyFans** and look for download buttons

### **For Production:**
- The extension should be published to the Chrome Web Store for automatic updates

## 🎯 **Usage**

1. **Subscribe/follow** a creator on OnlyFans
2. **Visit their profile** or posts
3. **Look for download buttons** that appear under posts
4. **Click to download** images or videos
5. **Adjust quality settings** in the extension popup

## 💬 **Direct Message (DM) Support**

The extension now includes **enhanced support for direct message content** with multiple fallback mechanisms:

### **Supported DM Content Types:**
- ✅ **Multiple Images** - Carousel/slider images
- ✅ **Single Photos** - Individual photo messages
- ✅ **Videos** - Video messages with quality options
- ✅ **Audio Files** - Voice messages and audio content
- ✅ **GIFs** - Animated GIF content
- ✅ **Generic Images** - Any OnlyFans image content

### **Enhanced Features:**
- 🔧 **Multiple Detection Methods** - Uses various selectors to find content
- 🎯 **Fallback Mechanisms** - If primary method fails, tries alternatives
- 📱 **Image Quality Enhancement** - Attempts to get highest quality versions
- 🎬 **Video URL Extraction** - Multiple methods to find video sources
- 👤 **Smart Username Detection** - Multiple ways to identify the creator
- 🛡️ **Error Isolation** - DM processing errors won't break regular posts

### **How DM Processing Works:**
1. **Detects DM Context** - Automatically identifies when you're in a chat
2. **Scans Messages** - Looks for media content in each message
3. **Multiple Fallbacks** - If one method fails, tries others
4. **Quality Enhancement** - Attempts to get best available quality
5. **Adds Download Buttons** - Places buttons directly on messages

### **DM Troubleshooting:**
- **Buttons not appearing**: Try refreshing the page
- **Video quality issues**: DM videos may have limited quality options
- **Audio not downloading**: Check if audio element is present
- **Multiple images**: Use "all" button to download everything at once

## ⚙️ **Settings**

Access settings by clicking the extension icon:

- **Video Quality**: Original, 240p, or 720p
- **Folder Organization**: Automatically create folders for each creator

## 🔧 **Technical Details**

### **Architecture**
- **Service Worker** (`background.js`) - Handles downloads and messaging
- **Content Script** (`content.js`) - Injects download buttons into OnlyFans pages
- **Popup** (`popup.html` + `popup.js`) - User interface for settings

### **Security Features**
- **Content Security Policy**: Only allows scripts from extension
- **Shadow DOM**: Isolates injected buttons from page styles
- **Input validation**: All URLs validated before download
- **Error handling**: Comprehensive error catching and logging

### **Code Quality**
- **ES6+ JavaScript**: Modern syntax and features
- **Async/await**: Clean asynchronous code
- **Classes**: Object-oriented design
- **Error boundaries**: Robust error handling
- **Type checking**: Runtime validation of data

## 🐛 **Troubleshooting**

### **Buttons don't appear:**
1. **Refresh the page** - Sometimes needed after installation
2. **Disable other extensions** - Some may interfere (especially "Dark Reader")
3. **Check console** - Look for error messages in DevTools
4. **Verify subscription** - You must be subscribed to the creator

### **Downloads don't start:**
1. **Check permissions** - Ensure extension has download permission
2. **Wait longer** - OnlyFans servers can be slow
3. **Try different quality** - Some videos may not have all qualities

## 📝 **Changelog**

### **v4.5.15 (2025-06-19)**
- ✨ **Major modernization** to Manifest V3
- 🔒 **Security improvements** with stricter CSP
- 🗑️ **Removed jQuery dependency**
- 🚀 **Performance improvements** with service worker
- 🐛 **Better error handling** and logging
- 📦 **Reduced bundle size** by ~50%
- 💬 **Enhanced DM support** with multiple fallback mechanisms
- 🎯 **Improved content detection** for various media types
- 🔧 **Robust video URL extraction** with multiple methods
- 📱 **Better image quality enhancement** for DM content

### **v4.5.14 (Previous)**
- Legacy Manifest V2
- jQuery dependency
- Broader permissions

## 🤝 **Contributing**

This extension is maintained for educational and personal use. Please respect OnlyFans' terms of service and only download content you have permission to access.

## 📄 **License**

This project is for educational purposes. Users are responsible for complying with OnlyFans' terms of service and applicable laws.

## 🔗 **Support**

- **Issues**: Check the console for error messages
- **Updates**: Follow the developer on Twitter for announcements

---

**Note**: This extension requires an active OnlyFans subscription to access content. Batch downloading is not available due to OnlyFans restrictions. 
