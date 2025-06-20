// OnlyFans Downloader Popup Script
// Modern JavaScript - No jQuery dependency
// Manifest V3 compatible

class PopupManager {
  constructor() {
    this.init();
  }

  async init() {
    try {
      // Wait for DOM to be ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => this.setupEventListeners());
      } else {
        this.setupEventListeners();
      }
    } catch (error) {
      console.error('Error initializing popup:', error);
    }
  }

  async setupEventListeners() {
    try {
      // Load user preferences
      await this.loadPreferences();
      
      // Set up radio button listeners
      this.setupRadioButtons();
      
      // Set up checkbox listeners
      this.setupCheckboxes();
      
    } catch (error) {
      console.error('Error setting up event listeners:', error);
    }
  }

  async loadPreferences() {
    try {
      // Load quality preference
      const qualityPrefs = await this.getStorageData({ quality: 'full' });
      const qualityElement = document.getElementById(qualityPrefs.quality);
      if (qualityElement) {
        qualityElement.checked = true;
        qualityElement.parentElement.classList.add('checked');
      }

      // Load folder preference
      const folderPrefs = await this.getStorageData({ autoCreateFolder: true });
      const folderElement = document.getElementById('folder');
      if (folderElement) {
        folderElement.checked = folderPrefs.autoCreateFolder;
      }
    } catch (error) {
      console.error('Error loading preferences:', error);
    }
  }

  setupRadioButtons() {
    const radioButtons = document.querySelectorAll('.segmented label input[type=radio]');
    radioButtons.forEach(radio => {
      radio.addEventListener('change', async (event) => {
        if (event.target.checked) {
          const value = event.target.value;
          
          try {
            await this.setStorageData({ quality: value });
            this.showStatus('Preference saved. Page refresh needed to take effect.');
            
            // Update UI
            this.updateRadioButtonUI(event.target);
          } catch (error) {
            console.error('Error saving quality preference:', error);
            this.showStatus('Error saving preference.');
          }
        }
      });
    });
  }

  setupCheckboxes() {
    const checkboxes = document.querySelectorAll('.container-checkbox input[type=checkbox]');
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', async (event) => {
        const isChecked = event.target.checked;
        
        try {
          await this.setStorageData({ autoCreateFolder: isChecked });
          this.showStatus('Preference saved.');
        } catch (error) {
          console.error('Error saving folder preference:', error);
          this.showStatus('Error saving preference.');
        }
      });
    });
  }

  updateRadioButtonUI(selectedRadio) {
    // Remove 'checked' class from all siblings
    const siblings = selectedRadio.parentElement.parentElement.children;
    Array.from(siblings).forEach(sibling => {
      sibling.classList.remove('checked');
    });
    
    // Add 'checked' class to selected radio's parent
    selectedRadio.parentElement.classList.add('checked');
  }

  showStatus(message) {
    const statusElement = document.getElementById('status');
    const statusFolderElement = document.getElementById('status-folder');
    
    if (statusElement) {
      statusElement.textContent = message;
      setTimeout(() => {
        statusElement.textContent = '';
      }, 2000);
    }
    
    if (statusFolderElement) {
      statusFolderElement.textContent = message;
      setTimeout(() => {
        statusFolderElement.textContent = '';
      }, 2000);
    }
  }

  async getStorageData(defaults) {
    return new Promise((resolve) => {
      chrome.storage.sync.get(defaults, resolve);
    });
  }

  async setStorageData(data) {
    return new Promise((resolve) => {
      chrome.storage.sync.set(data, resolve);
    });
  }
}

// Initialize popup when script loads
const popupManager = new PopupManager();