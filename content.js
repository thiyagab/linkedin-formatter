// LinkedIn Formatter - content.js
// Uses proper Unicode Mathematical Alphanumeric Symbols for text formatting
// Compatible with LinkedIn, Twitter, Instagram, and other social media platforms

(function() {
  'use strict';

  // Unicode Mathematical Alphanumeric Symbols mappings
  // Based on Unicode standard U+1D400–U+1D7FF range
  
  const NORMAL_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
  // Mathematical Bold (U+1D400-U+1D433 for capitals, U+1D41A-U+1D44D for lowercase, U+1D7CE-U+1D7D7 for digits)
  const BOLD_CHARS = "𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗";
  
  // Mathematical Italic (U+1D434-U+1D467 for capitals, U+1D44E-U+1D481 for lowercase, numbers stay normal)
  const ITALIC_CHARS = "𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧0123456789";
  
  // Mathematical Bold Italic (U+1D468-U+1D49B for capitals, U+1D49C-U+1D4CF for lowercase)
  const BOLD_ITALIC_CHARS = "𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗";
  
  // Mathematical Sans-Serif Bold (U+1D5D4-U+1D607 for capitals, U+1D608-U+1D63B for lowercase)
  const SANS_BOLD_CHARS = "𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵";
  
  // Mathematical Sans-Serif Italic (U+1D63C-U+1D66F for capitals, U+1D670-U+1D6A3 for lowercase)
  const SANS_ITALIC_CHARS = "𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵";
  
  // Mathematical Monospace (U+1D670-U+1D6A3 for capitals, U+1D6A4-U+1D6D7 for lowercase)
  const MONOSPACE_CHARS = "𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿";
  
  // Double-struck (blackboard bold) - popular for mathematical notation
  const DOUBLE_STRUCK_CHARS = "𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝕒𝕓𝕔𝕕𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡";

  // Create character mapping objects for efficient conversion
  // Properly handles Unicode surrogate pairs by using Array.from
  const createCharMap = (targetChars) => {
    const map = {};
    const normalArray = Array.from(NORMAL_CHARS);
    const targetArray = Array.from(targetChars);
    
    for (let i = 0; i < normalArray.length && i < targetArray.length; i++) {
      map[normalArray[i]] = targetArray[i];
    }
    return map;
  };

  // Create reverse mapping for converting Unicode back to normal text
  const createReverseCharMap = (targetChars) => {
    const reverseMap = {};
    const normalArray = Array.from(NORMAL_CHARS);
    const targetArray = Array.from(targetChars);
    
    for (let i = 0; i < normalArray.length && i < targetArray.length; i++) {
      reverseMap[targetArray[i]] = normalArray[i];
    }
    return reverseMap;
  };

  const STYLE_MAPS = {
    bold: createCharMap(BOLD_CHARS),
    italic: createCharMap(ITALIC_CHARS),
    boldItalic: createCharMap(BOLD_ITALIC_CHARS),
    sansBold: createCharMap(SANS_BOLD_CHARS),
    sansItalic: createCharMap(SANS_ITALIC_CHARS),
    monospace: createCharMap(MONOSPACE_CHARS),
    doubleStruck: createCharMap(DOUBLE_STRUCK_CHARS)
  };

  // Create combined reverse map from all Unicode styles back to normal
  const REVERSE_MAP = (() => {
    const reverseMap = {};
    const allStyleChars = [
      BOLD_CHARS, ITALIC_CHARS, BOLD_ITALIC_CHARS, 
      SANS_BOLD_CHARS, SANS_ITALIC_CHARS, MONOSPACE_CHARS, DOUBLE_STRUCK_CHARS
    ];
    
    allStyleChars.forEach(styleChars => {
      const normalArray = Array.from(NORMAL_CHARS);
      const targetArray = Array.from(styleChars);
      
      for (let i = 0; i < normalArray.length && i < targetArray.length; i++) {
        reverseMap[targetArray[i]] = normalArray[i];
      }
    });
    
    return reverseMap;
  })();

  // Convert text using Unicode character mapping
  // Properly handles Unicode surrogate pairs
  function convertText(text, styleMap) {
    let result = '';
    
    // Use Array.from to properly handle Unicode characters including surrogate pairs
    const chars = Array.from(text);
    
    for (const char of chars) {
      if (styleMap[char]) {
        result += styleMap[char];
      } else {
        result += char;
      }
    }
    
    return result;
  }

  // Convert Unicode-formatted text back to normal text
  function convertToNormal(text) {
    return convertText(text, REVERSE_MAP);
  }

  // Check if text contains any Unicode formatting characters
  function hasUnicodeFormatting(text) {
    const chars = Array.from(text);
    return chars.some(char => REVERSE_MAP[char]);
  }

  // Detect the current style of the text (if any)
  function detectCurrentStyle(text) {
    const chars = Array.from(text);
    const styleNames = Object.keys(STYLE_MAPS);
    
    for (const styleName of styleNames) {
      const styleChars = styleName === 'bold' ? BOLD_CHARS :
                        styleName === 'italic' ? ITALIC_CHARS :
                        styleName === 'boldItalic' ? BOLD_ITALIC_CHARS :
                        styleName === 'sansBold' ? SANS_BOLD_CHARS :
                        styleName === 'sansItalic' ? SANS_ITALIC_CHARS :
                        styleName === 'monospace' ? MONOSPACE_CHARS :
                        styleName === 'doubleStruck' ? DOUBLE_STRUCK_CHARS : '';
      
      const styleArray = Array.from(styleChars);
      
      // Check if any character in the text matches this style
      for (const char of chars) {
        if (styleArray.includes(char)) {
          return styleName;
        }
      }
    }
    
    return null;
  }

  // Advanced text insertion that works well with LinkedIn's editor
  function insertTextAdvanced(newText) {
    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) return false;

    try {
      const range = selection.getRangeAt(0);
      const editor = document.querySelector('.ql-editor[contenteditable="true"]');
      
      if (!editor) return false;

      // Store the original selected text for comparison
      const originalText = selection.toString();
      if (!originalText.trim()) return false;

      // Use LinkedIn's preferred method - create a new text node
      const textNode = document.createTextNode(newText);
      
      // Delete the original selection
      range.deleteContents();
      
      // Insert the new text node
      range.insertNode(textNode);
      
      // Position cursor after the new text
      range.setStartAfter(textNode);
      range.collapse(true);
      selection.removeAllRanges();
      selection.addRange(range);

      // Dispatch input event to notify LinkedIn's editor
      const inputEvent = new Event('input', {
        bubbles: true,
        cancelable: true
      });
      
      // Add a small delay to allow LinkedIn to process
      setTimeout(() => {
        editor.dispatchEvent(inputEvent);
        editor.focus();
      }, 10);

      return true;
    } catch (error) {
      console.warn('LinkedIn Formatter: Advanced insertion failed:', error);
      return false;
    }
  }

  // Fallback: Copy to clipboard
  async function copyToClipboardSafely(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      // Fallback for older browsers
      try {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        const success = document.execCommand('copy');
        document.body.removeChild(textarea);
        return success;
      } catch (fallbackError) {
        console.warn('Clipboard fallback failed:', fallbackError);
        return false;
      }
    }
  }

  // Main formatting function with reverse conversion support
  function formatSelectedText(style) {
    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) {
      showNotification('Please select some text first', 'warning');
      return;
    }

    const selectedText = selection.toString();
    if (!selectedText.trim()) {
      showNotification('Please select some text first', 'warning');
      return;
    }

    // Check if the selected text already has Unicode formatting
    if (hasUnicodeFormatting(selectedText)) {
      // If it has formatting, convert back to normal
      const normalText = convertToNormal(selectedText);
      const currentStyle = detectCurrentStyle(selectedText);
      
      console.log(`LinkedIn Formatter: Converting ${currentStyle || 'formatted'} text back to normal`);
      console.log('Original:', selectedText);
      console.log('Normal:', normalText);
      
      if (insertTextAdvanced(normalText)) {
        // showNotification(`Removed ${currentStyle || 'Unicode'} formatting`, 'success');
      } else {
        copyToClipboardSafely(normalText).then(success => {
          if (success) {
            showNotification('Normal text copied to clipboard! Paste it manually (Ctrl+V)', 'info');
          } else {
            showNotification('Formatting removal failed. Please try again.', 'error');
          }
        });
      }
      return;
    }

    // If no formatting, apply the requested style
    const styleMap = STYLE_MAPS[style];
    if (!styleMap) {
      showNotification('Invalid style selected', 'error');
      return;
    }

    const convertedText = convertText(selectedText, styleMap);
    console.log(`LinkedIn Formatter: Converting "${selectedText}" to ${style}`);
    console.log('Style map sample:', Object.entries(styleMap).slice(0, 5));
    console.log('Converted result:', convertedText);
    console.log('Character codes:', Array.from(convertedText).map(c => c.charCodeAt(0).toString(16)));

    // Try direct insertion first
    if (insertTextAdvanced(convertedText)) {
      // showNotification(`Text formatted as ${style}!`, 'success');
    } else {
      // Fallback to clipboard
      copyToClipboardSafely(convertedText).then(success => {
        if (success) {
          showNotification(`${style} text copied to clipboard! Paste it manually (Ctrl+V)`, 'info');
        } else {
          showNotification('Formatting failed. Please try again.', 'error');
        }
      });
    }
  }

  // Notification system
  function showNotification(message, type = 'info') {
    // Remove existing notification
    const existing = document.querySelector('.lk-formatter-notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = 'lk-formatter-notification';
    notification.textContent = message;
    
    const colors = {
      success: { bg: '#d4edda', border: '#c3e6cb', text: '#155724' },
      warning: { bg: '#fff3cd', border: '#ffeaa7', text: '#856404' },
      error: { bg: '#f8d7da', border: '#f5c6cb', text: '#721c24' },
      info: { bg: '#d1ecf1', border: '#bee5eb', text: '#0c5460' }
    };
    
    const color = colors[type] || colors.info;
    
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 12px 16px;
      background: ${color.bg};
      border: 1px solid ${color.border};
      color: ${color.text};
      border-radius: 4px;
      font-size: 14px;
      font-family: system-ui, -apple-system, sans-serif;
      z-index: 10000;
      max-width: 300px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 4000);
  }

  // Create styled button
  function createStyledButton(text, title, onClick, isActive = false) {
    const button = document.createElement('button');
    button.type = 'button';
    button.innerHTML = text;
    button.title = title;
    button.className = `lk-format-btn ${isActive ? 'active' : ''}`;
    
    button.style.cssText = `
      padding: 6px 10px;
      margin: 0 2px;
      border: 1px solid ${isActive ? '#0073b1' : '#ccc'};
      border-radius: 3px;
      background: ${isActive ? '#0073b1' : 'white'};
      color: ${isActive ? 'white' : '#333'};
      cursor: pointer;
      font-size: 13px;
      font-family: system-ui, -apple-system, sans-serif;
      transition: all 0.2s ease;
      min-width: 32px;
    `;
    
    button.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      onClick();
    });
    
    // Hover effects
    button.addEventListener('mouseenter', () => {
      if (!isActive) {
        button.style.background = '#f0f2f5';
        button.style.borderColor = '#0073b1';
      }
    });
    
    button.addEventListener('mouseleave', () => {
      if (!isActive) {
        button.style.background = 'white';
        button.style.borderColor = '#ccc';
      }
    });
    
    return button;
  }

  // Build the formatting toolbar
  function buildFormattingToolbar() {
    const toolbar = document.createElement('div');
    toolbar.className = 'lk-formatter-toolbar';
    toolbar.setAttribute('role', 'toolbar');
    toolbar.setAttribute('aria-label', 'Text formatting toolbar');
    
    toolbar.style.cssText = `
      margin: 10px 0;
      padding: 8px;
      border: 1px solid #e0e0e0;
      border-radius: 6px;
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
      display: flex;
      flex-wrap: wrap;
      gap: 2px;
      align-items: center;
      font-family: system-ui, -apple-system, sans-serif;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    `;

    // Add title
    const title = document.createElement('span');
    title.textContent = '';
    title.style.cssText = `
      color: #0073b1; 
      font-weight: 600; 
      margin-right: 8px;
      font-size: 13px;
    `;
    // toolbar.appendChild(title);

    // Define buttons with preview text
    const buttons = [
      { 
        text: '𝐁', 
        title: 'Bold - Mathematical Bold Unicode', 
        style: 'bold',
        preview: '𝐁𝐨𝐥𝐝'
      },
      { 
        text: '𝐼', 
        title: 'Italic - Mathematical Italic Unicode', 
        style: 'italic',
        preview: '𝐼𝑡𝑎𝑙𝑖𝑐'
      },
      { 
        text: '𝑩𝑰', 
        title: 'Bold Italic - Mathematical Bold Italic', 
        style: 'boldItalic',
        preview: '𝑩𝒐𝒍𝒅𝑰𝒕𝒂𝒍𝒊𝒄'
      },
      { 
        text: '𝗦𝗕', 
        title: 'Sans Bold - Mathematical Sans-Serif Bold', 
        style: 'sansBold',
        preview: '𝗦𝗮𝗻𝘀𝗕𝗼𝗹𝗱'
      },
      { 
        text: '𝘚𝘐', 
        title: 'Sans Italic - Mathematical Sans-Serif Italic', 
        style: 'sansItalic',
        preview: '𝘚𝘢𝘯𝘴𝘐𝘵𝘢𝘭𝘪𝘤'
      },
      { 
        text: '𝙼', 
        title: 'Monospace - Mathematical Monospace', 
        style: 'monospace',
        preview: '𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎'
      }
    ];

    // Create buttons
    buttons.forEach(({ text, title, style, preview }) => {
      const button = createStyledButton(text, `${title}\nPreview: ${preview}`, () => {
        formatSelectedText(style);
      });
      toolbar.appendChild(button);
    });

    // Add separator
    const separator = document.createElement('div');
    separator.style.cssText = 'width: 1px; height: 20px; background: #ccc; margin: 0 6px;';
    toolbar.appendChild(separator);

   

    return toolbar;
  }

  // Enhanced modal injection with better duplicate prevention
  function injectFormattingToolbar(modalContainer) {
    if (!modalContainer) return;
    
    // Multiple duplicate checks
    if (modalContainer._lkFormatterInjected) return;
    if (modalContainer.querySelector('.lk-formatter-toolbar')) return;
    
    setTimeout(() => {
      // Double-check after timeout
      if (modalContainer._lkFormatterInjected) return;
      if (modalContainer.querySelector('.lk-formatter-toolbar')) return;
      
      // Find the editor
      const editor = modalContainer.querySelector('.ql-editor[contenteditable="true"]');
      console.log('Editor..', editor);
      if (!editor) return;
      console.log('In ...', editor);
      // Mark as injected immediately
      modalContainer._lkFormatterInjected = true;

      // Find the best container for the toolbar
      const editorContainer = editor.closest('.ql-container') || 
                             editor.closest('.editor-container') || 
                             editor.closest('[data-test-editor-container]') ||
                             editor.parentElement;
      
      if (!editorContainer) {
        modalContainer._lkFormatterInjected = false;
        return;
      }

      // Final duplicate check
      if (editorContainer.parentNode.querySelector('.lk-formatter-toolbar')) {
        return;
      }

      // Create and insert toolbar
      const toolbar = buildFormattingToolbar();
      
      try {
        editorContainer.parentNode.insertBefore(toolbar, editorContainer);
        console.log('LinkedIn Formatter: Successfully injected formatting toolbar');
      } catch (error) {
        console.warn('LinkedIn Formatter: Failed to inject toolbar:', error);
        modalContainer._lkFormatterInjected = false;
      }
    }, 600);
  }

  // Enhanced modal detection
  function findAndInjectIntoModals() {
    const modalSelectors = [
      "[data-test-modal-id='sharebox']",
      "[data-test-modal-id='share-update-v2']",
      ".share-creation-state",
      ".artdeco-modal[role='dialog']",
      "[data-test-modal-container='true']"
    ];

    let injected = false;
    
    modalSelectors.forEach(selector => {
      const modals = document.querySelectorAll(selector);
      modals.forEach(modal => {
        if (modal.querySelector('.ql-editor[contenteditable="true"]') && 
            !modal._lkFormatterInjected && 
            !modal.querySelector('.lk-formatter-toolbar')) {
          injectFormattingToolbar(modal);
          injected = true;
        }
      });
    });

    return injected;
  }

  // Enhanced DOM observer
  let observerTimeout;
  const debouncedObserver = new MutationObserver((mutations) => {
    clearTimeout(observerTimeout);
    observerTimeout = setTimeout(() => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue;
          
          // Skip our own elements
          if (node.classList?.contains('lk-formatter-toolbar') || 
              node.classList?.contains('lk-formatter-notification')) continue;
          
          // Check for LinkedIn modal elements
          const isModalElement = node.getAttribute && (
            node.getAttribute('data-test-modal-id') === 'sharebox' ||
            node.getAttribute('data-test-modal-id') === 'share-update-v2' ||
            node.classList?.contains('share-creation-state') ||
            node.getAttribute('role') === 'dialog'
          );

          if (isModalElement) {
            injectFormattingToolbar(node);
          } else if (node.querySelector) {
            // Check for nested modals
            const nestedModal = node.querySelector(
              "[data-test-modal-id='sharebox'], [data-test-modal-id='share-update-v2'], .share-creation-state"
            );
            if (nestedModal && 
                nestedModal.querySelector('.ql-editor[contenteditable="true"]')) {
              injectFormattingToolbar(nestedModal);
            }
          }
        }
      }
    }, 300); // Debounce by 300ms
  });

  // Start observing
  debouncedObserver.observe(document.body, { 
    childList: true, 
    subtree: true 
  });

  // Initialize function
  function initialize() {
    findAndInjectIntoModals();
    console.log('LinkedIn Unicode Formatter: Extension initialized successfully');
    console.log('Supported styles:', Object.keys(STYLE_MAPS));
  }

  // Initialize after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(initialize, 1200));
  } else {
    setTimeout(initialize, 1200);
  }

  // Handle LinkedIn SPA navigation
  let currentUrl = location.href;
  new MutationObserver(() => {
    if (location.href !== currentUrl) {
      currentUrl = location.href;
      setTimeout(findAndInjectIntoModals, 1500);
    }
  }).observe(document, { subtree: true, childList: true });

})();