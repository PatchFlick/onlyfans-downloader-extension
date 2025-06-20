# OnlyFans Downloader Extension

A Chrome extension that adds download buttons for OnlyFans images and videos.

## 📋 **Table of Contents**

### **🚀 Getting Started**
- [Installation](#-installation)
- [Browser Installation Guide](#-browser-installation-guide)
- [Usage](#-usage)
- [Post-Installation Setup](#-post-installation-setup)

### **💬 Features**
- [Direct Message (DM) Support](#-direct-message-dm-support)
- [Settings](#️-settings)
- [Installation Methods](#-installation-methods)

### **🔧 Technical**
- [Technical Details](#-technical-details)
- [Troubleshooting](#-troubleshooting)
- [Troubleshooting Installation](#-troubleshooting-installation)

### **🔒 Security & Legal**
- [Security Notes](#-security-notes)
- [Contributing](#-contributing)
- [License](#-license)

### **📚 Documentation**
- [Changelog](#-changelog)
- [Support](#-support)
- [AI Contributors](#-ai-contributors)

---

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

## 🌐 **Browser Installation Guide**

### **Google Chrome**
1. **Download** the extension files to your computer
2. **Open Chrome** and go to `chrome://extensions/`
3. **Enable "Developer mode"** (toggle switch in top right corner)
4. **Click "Load unpacked"** button
5. **Select the extension folder** containing `manifest.json`
6. **Extension should appear** in your extensions list
7. **Pin the extension** to toolbar for easy access (optional)
8. **Visit OnlyFans** and start using!

### **Microsoft Edge**
1. **Download** the extension files to your computer
2. **Open Edge** and go to `edge://extensions/`
3. **Enable "Developer mode"** (toggle switch in top right corner)
4. **Click "Load unpacked"** button
5. **Select the extension folder** containing `manifest.json`
6. **Extension should appear** in your extensions list
7. **Pin the extension** to toolbar for easy access (optional)
8. **Visit OnlyFans** and start using!

### **Brave Browser**
1. **Download** the extension files to your computer
2. **Open Brave** and go to `brave://extensions/`
3. **Enable "Developer mode"** (toggle switch in top right corner)
4. **Click "Load unpacked"** button
5. **Select the extension folder** containing `manifest.json`
6. **Extension should appear** in your extensions list
7. **Pin the extension** to toolbar for easy access (optional)
8. **Visit OnlyFans** and start using!

### **Opera Browser**
1. **Download** the extension files to your computer
2. **Open Opera** and go to `opera://extensions/`
3. **Enable "Developer mode"** (toggle switch in top right corner)
4. **Click "Load unpacked"** button
5. **Select the extension folder** containing `manifest.json`
6. **Extension should appear** in your extensions list
7. **Pin the extension** to toolbar for easy access (optional)
8. **Visit OnlyFans** and start using!

### **Vivaldi Browser**
1. **Download** the extension files to your computer
2. **Open Vivaldi** and go to `vivaldi://extensions/`
3. **Enable "Developer mode"** (toggle switch in top right corner)
4. **Click "Load unpacked"** button
5. **Select the extension folder** containing `manifest.json`
6. **Extension should appear** in your extensions list
7. **Pin the extension** to toolbar for easy access (optional)
8. **Visit OnlyFans** and start using!

### **Firefox (Limited Support)**
⚠️ **Note**: This extension is primarily designed for Chromium-based browsers. Firefox support may be limited.

1. **Download** the extension files to your computer
2. **Open Firefox** and go to `about:debugging`
3. **Click "This Firefox"** tab
4. **Click "Load Temporary Add-on"**
5. **Select the `manifest.json` file** from the extension folder
6. **Extension should appear** in the list
7. **Visit OnlyFans** and test functionality

**Firefox Limitations:**
- May not support all Chrome extension APIs
- Some features might not work as expected
- Requires manual reloading after browser restart

## 📦 **Installation Methods**

### **Method 1: Load Unpacked (Recommended for Development)**
- **Best for**: Testing, development, custom modifications
- **Pros**: Easy to update, full control, no signing required
- **Cons**: Requires developer mode, manual updates

### **Method 2: Chrome Web Store (Recommended for Users)**
- **Best for**: Regular users, automatic updates
- **Pros**: Automatic updates, easy installation, verified
- **Cons**: Requires publishing, review process

### **Method 3: CRX File (Advanced Users)**
- **Best for**: Advanced users, offline installation
- **Pros**: Single file, portable
- **Cons**: Requires manual updates, security warnings

## 🔧 **Troubleshooting Installation**

### **Extension Not Loading:**
1. **Check file structure** - Ensure `manifest.json` is in the root folder
2. **Verify manifest version** - Should be `"manifest_version": 3`
3. **Check for errors** - Look at the extensions page for error messages
4. **Try different folder** - Move extension to a different location
5. **Restart browser** - Sometimes needed after enabling developer mode

### **Extension Not Working:**
1. **Check permissions** - Ensure extension has necessary permissions
2. **Verify OnlyFans URL** - Make sure you're on `onlyfans.com`
3. **Check console errors** - Press F12 and look for error messages
4. **Disable other extensions** - Some may interfere
5. **Refresh the page** - Sometimes needed after installation

### **Common Error Messages:**
- **"Manifest file is missing or unreadable"** - Check file path and permissions
- **"Extension is invalid"** - Verify manifest.json syntax
- **"Permission denied"** - Check folder permissions
- **"Could not load extension"** - Try restarting browser

## 🎯 **Post-Installation Setup**

### **First Time Setup:**
1. **Visit OnlyFans** and log in to your account
2. **Navigate to a creator's profile** or posts
3. **Look for download buttons** under posts (may take a few seconds)
4. **Click the extension icon** to access settings
5. **Configure quality preferences** (Original, 240p, 720p)
6. **Enable folder organization** if desired

### **Verifying Installation:**
- ✅ **Extension icon appears** in browser toolbar
- ✅ **Download buttons appear** under OnlyFans posts
- ✅ **Settings popup opens** when clicking extension icon
- ✅ **Downloads start** when clicking download buttons

### **Recommended Settings:**
- **Video Quality**: Original (for best quality)
- **Folder Organization**: Enabled (for better file management)
- **Auto-download**: Disabled (for user control)

## 🔒 **Security Notes**

### **Developer Mode:**
- **Only enable** when installing unpacked extensions
- **Disable after installation** for better security
- **Be careful** with extensions from unknown sources

### **Extension Permissions:**
- **storage**: Saves your preferences
- **downloads**: Allows file downloads
- **onlyfans.com**: Access to OnlyFans content only

### **Safe Installation:**
- **Download from trusted sources** only
- **Verify file integrity** before installation
- **Check permissions** before enabling
- **Report suspicious behavior** immediately

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

- **Twitter**: [@extension_dev](https://twitter.com/extension_dev)
- **Issues**: Check the console for error messages
- **Updates**: Follow the developer on Twitter for announcements

---

**Note**: This extension requires an active OnlyFans subscription to access content. Batch downloading is not available due to OnlyFans restrictions.

## 🤖 **AI Contributors**

This extension has been modernized and enhanced with the assistance of AI experts:

### **Development Team:**
- **🖥️ Cursor AI** - Primary development and modernization
- **👨‍💻 Mike (AI 10x Coder)** - Code review and optimization
- **🔒 John (AI Cybersecurity Expert)** - Security audit and vulnerability assessment

### **Contributions:**
- **Manifest V3 Migration** - Modern Chrome extension standards
- **Security Hardening** - Comprehensive security improvements
- **DM Support Enhancement** - Robust direct message functionality
- **Code Modernization** - ES6+ JavaScript, no jQuery dependency
- **Documentation** - Comprehensive guides and troubleshooting

---

## ⚠️ **Important Disclaimer**

### **Support & Maintenance:**
- **This extension is provided "as is"** without warranty
- **No guaranteed support** - use at your own discretion
- **AI contributors are not responsible** for:
  - Extension breaking due to OnlyFans changes
  - Browser updates affecting functionality
  - User account issues or violations
  - Any damages or losses

### **User Responsibility:**
- **Test thoroughly** before relying on the extension
- **Monitor for updates** and OnlyFans changes
- **Report issues** through GitHub but understand response is not guaranteed
- **Use responsibly** and in compliance with OnlyFans terms of service
- **Backup important content** using multiple methods

### **AI Limitations:**
- **AI contributors cannot provide ongoing support**
- **No real-time monitoring** of OnlyFans changes
- **No automatic updates** when OnlyFans breaks functionality
- **Users must take responsibility** for their own usage

### **If Extension Stops Working:**
1. **Check OnlyFans for changes** - they may have updated their site
2. **Try refreshing the page** - sometimes fixes temporary issues
3. **Check browser console** for error messages
4. **Disable other extensions** that might interfere
5. **Report issues on GitHub** but understand fixes may not be immediate
6. **Consider alternative methods** for content backup

**Bottom Line: Use this extension at your own discretion and responsibility. The AI contributors have done their best to create a robust, secure, and modern extension, but ongoing functionality depends on OnlyFans not making breaking changes.**

--- 
