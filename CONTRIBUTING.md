# Contributing to OnlyFans Downloader Extension

Thank you for your interest in contributing to the OnlyFans Downloader Extension! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### **Reporting Issues**
- Use the GitHub issue tracker
- Provide detailed information about the problem
- Include steps to reproduce the issue
- Mention your browser version and extension version

### **Feature Requests**
- Describe the feature you'd like to see
- Explain why it would be useful
- Consider the impact on security and performance

### **Code Contributions**
- Fork the repository
- Create a feature branch (`git checkout -b feature/amazing-feature`)
- Make your changes
- Test thoroughly
- Commit your changes (`git commit -m 'Add amazing feature'`)
- Push to the branch (`git push origin feature/amazing-feature`)
- Open a Pull Request

## 🛠 Development Setup

### **Prerequisites**
- Google Chrome browser
- Basic knowledge of JavaScript and Chrome Extensions
- Git

### **Local Development**
1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/onlyfans-downloader.git
   cd onlyfans-downloader
   ```

2. **Load in Chrome**
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the project folder

3. **Make changes and test**
   - Edit files as needed
   - Click "Reload" in the extensions page to test changes
   - Check the console for any errors

## 📋 Code Standards

### **JavaScript**
- Use ES6+ features (arrow functions, async/await, classes)
- Follow consistent naming conventions
- Add comments for complex logic
- Handle errors appropriately
- No external dependencies unless absolutely necessary

### **Security**
- Validate all inputs
- Sanitize URLs and data
- Follow Chrome extension security best practices
- Never use `eval()` or similar dynamic code execution
- Keep permissions minimal

### **Performance**
- Minimize DOM queries
- Use efficient algorithms
- Avoid memory leaks
- Consider bundle size

## 🧪 Testing

### **Manual Testing**
- Test on different OnlyFans pages
- Verify download functionality
- Check error handling
- Test with different video qualities
- Verify settings persistence

### **Security Testing**
- Validate URL inputs
- Check for XSS vulnerabilities
- Verify permission usage
- Test with malicious inputs

## 📝 Pull Request Guidelines

### **Before Submitting**
- [ ] Code follows the project's style guidelines
- [ ] All tests pass
- [ ] Security considerations addressed
- [ ] Documentation updated if needed
- [ ] No console errors or warnings

### **PR Description**
- Clearly describe the changes
- Link to any related issues
- Include screenshots if UI changes
- Mention any breaking changes

## 🔒 Security Considerations

### **What to Avoid**
- Adding unnecessary permissions
- Using external scripts or libraries
- Storing sensitive data
- Making requests to unknown domains
- Using deprecated APIs

### **What to Include**
- Input validation
- Error handling
- Secure communication
- Minimal permissions
- Content Security Policy compliance

## 📚 Resources

### **Chrome Extension Development**
- [Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/)
- [Manifest V3 Migration Guide](https://developer.chrome.com/docs/extensions/mv3/intro/)
- [Security Best Practices](https://developer.chrome.com/docs/extensions/mv3/security/)

### **JavaScript**
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [ES6+ Features](https://es6-features.org/)

## 🎯 Project Goals

- **Security First**: Maintain high security standards
- **User Privacy**: Protect user data and privacy
- **Performance**: Keep the extension fast and efficient
- **Reliability**: Ensure stable functionality
- **Maintainability**: Write clean, readable code

## 📞 Getting Help

- **Issues**: Use the GitHub issue tracker
- **Discussions**: Use GitHub Discussions for questions
- **Security**: Report security issues privately

## 🙏 Thank You

Thank you for contributing to making this extension better for everyone! Your contributions help improve the user experience and maintain the security of the extension.

---

**Note**: This project is for educational purposes. Contributors are responsible for complying with OnlyFans' terms of service and applicable laws. 