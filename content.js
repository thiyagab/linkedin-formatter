// LinkedIn Formatter - content.js v5.0 - Ultimate Combined Strategy
// Uses proper Unicode Mathematical Alphanumeric Symbols for text formatting
// Compatible with LinkedIn, Twitter, Instagram, and other social media platforms

(function() {
  'use strict';

  console.log('🚀 LinkedIn Formatter v7.0 LOADING - Universal LinkedIn Profile Support');

  // Unicode Mathematical Alphanumeric Symbols mappings
  const NORMAL_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const BOLD_CHARS = "𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗";
  const ITALIC_CHARS = "𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧0123456789";
  const BOLD_ITALIC_CHARS = "𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗";
  const SANS_BOLD_CHARS = "𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵";
  const SANS_ITALIC_CHARS = "𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵";
  const MONOSPACE_CHARS = "𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿";
  const DOUBLE_STRUCK_CHARS = "𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝕒𝕓𝕔𝕕𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡";

  // Create character mapping objects for efficient conversion
  const createCharMap = (targetChars) => {
    const map = {};
    const normalArray = Array.from(NORMAL_CHARS);
    const targetArray = Array.from(targetChars);
    for (let i = 0; i < normalArray.length && i < targetArray.length; i++) {
      map[normalArray[i]] = targetArray[i];
    }
    return map;
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

  // Create combined reverse map
  const REVERSE_MAP = (() => {
    const reverseMap = {};
    const allStyleChars = [BOLD_CHARS, ITALIC_CHARS, BOLD_ITALIC_CHARS, SANS_BOLD_CHARS, SANS_ITALIC_CHARS, MONOSPACE_CHARS, DOUBLE_STRUCK_CHARS];
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
  function convertText(text, styleMap) {
    let result = '';
    const chars = Array.from(text);
    for (const char of chars) {
      result += styleMap[char] || char;
    }
    return result;
  }

  function convertToNormal(text) {
    return convertText(text, REVERSE_MAP);
  }

  function hasUnicodeFormatting(text) {
    return Array.from(text).some(char => REVERSE_MAP[char]);
  }

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
      for (const char of chars) {
        if (styleArray.includes(char)) {
          return styleName;
        }
      }
    }
    return null;
  }

  // Advanced text insertion
  function insertTextAdvanced(newText) {
    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) return false;

    try {
      const range = selection.getRangeAt(0);
      const editor = document.querySelector('.ql-editor[contenteditable="true"]') ||
                    document.querySelector('[contenteditable="true"]');

      if (!editor) return false;

      const originalText = selection.toString();
      if (!originalText.trim()) return false;

      const textNode = document.createTextNode(newText);
      range.deleteContents();
      range.insertNode(textNode);

      range.setStartAfter(textNode);
      range.collapse(true);
      selection.removeAllRanges();
      selection.addRange(range);

      const inputEvent = new Event('input', { bubbles: true, cancelable: true });
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

  // Clipboard fallback
  async function copyToClipboardSafely(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
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
        return false;
      }
    }
  }

  // Main formatting function
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

    if (hasUnicodeFormatting(selectedText)) {
      const normalText = convertToNormal(selectedText);
      if (insertTextAdvanced(normalText)) {
        // Success
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

    const styleMap = STYLE_MAPS[style];
    if (!styleMap) {
      showNotification('Invalid style selected', 'error');
      return;
    }

    const convertedText = convertText(selectedText, styleMap);
    if (insertTextAdvanced(convertedText)) {
      // Success
    } else {
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
      position: fixed; top: 20px; right: 20px; padding: 12px 16px;
      background: ${color.bg}; border: 1px solid ${color.border}; color: ${color.text};
      border-radius: 4px; font-size: 14px; font-family: system-ui, -apple-system, sans-serif;
      z-index: 10000; max-width: 300px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    `;

    document.body.appendChild(notification);
    setTimeout(() => { if (notification.parentNode) notification.remove(); }, 4000);
  }

  // Create styled button
  function createStyledButton(text, title, onClick, isActive = false) {
    const button = document.createElement('button');
    button.type = 'button';
    button.innerHTML = text;
    button.title = title;
    button.className = `lk-format-btn ${isActive ? 'active' : ''}`;

    button.style.cssText = `
      padding: 6px 10px; margin: 0 2px; border: 1px solid ${isActive ? '#0073b1' : '#ccc'};
      border-radius: 3px; background: ${isActive ? '#0073b1' : 'white'};
      color: ${isActive ? 'white' : '#333'}; cursor: pointer; font-size: 13px;
      font-family: system-ui, -apple-system, sans-serif; transition: all 0.2s ease; min-width: 32px;
    `;

    button.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      onClick();
    });

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

  // Build formatting toolbar
  function buildFormattingToolbar() {
    const toolbar = document.createElement('div');
    toolbar.className = 'lk-formatter-toolbar';
    toolbar.setAttribute('role', 'toolbar');
    toolbar.setAttribute('aria-label', 'Text formatting toolbar');

    toolbar.style.cssText = `
      margin: 10px 0; padding: 8px; border: 1px solid #e0e0e0; border-radius: 6px;
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
      display: flex; flex-wrap: wrap; gap: 2px; align-items: center;
      font-family: system-ui, -apple-system, sans-serif; box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    `;

    const buttons = [
      { text: '𝐁', title: 'Bold - Mathematical Bold Unicode', style: 'bold' },
      { text: '𝐼', title: 'Italic - Mathematical Italic Unicode', style: 'italic' },
      { text: '𝑩𝑰', title: 'Bold Italic - Mathematical Bold Italic', style: 'boldItalic' },
      { text: '𝗦𝗕', title: 'Sans Bold - Mathematical Sans-Serif Bold', style: 'sansBold' },
      { text: '𝘚𝘐', title: 'Sans Italic - Mathematical Sans-Serif Italic', style: 'sansItalic' },
      { text: '𝙼', title: 'Monospace - Mathematical Monospace', style: 'monospace' }
    ];

    buttons.forEach(({ text, title, style }) => {
      const button = createStyledButton(text, title, () => formatSelectedText(style));
      toolbar.appendChild(button);
    });

    return toolbar;
  }

  // ULTIMATE COMBINED STRATEGY SYSTEM
  class UltimateLinkedInFormatter {
    constructor() {
      this.injectedElements = new WeakSet();
      this.currentUrl = location.href;
      this.isCreatePostOverlay = false;
      this.overlayPollingInterval = null;
      this.regularPollingInterval = null;
      this.observers = [];
    }

    // Strategy 1: Universal LinkedIn URL Detection
    checkCreatePostOverlay() {
      const currentUrl = location.href;

      // Universal LinkedIn overlay patterns
      const isOverlay =
        // Any LinkedIn profile create post overlay
        currentUrl.includes('/overlay/create-post/') ||
        // Any LinkedIn share overlay
        currentUrl.includes('/overlay/share-') ||
        // Any LinkedIn compose overlay
        currentUrl.includes('/overlay/compose-') ||
        // Feed create post overlay
        currentUrl.includes('linkedin.com/feed/') && currentUrl.includes('/overlay/create-post/') ||
        // Home feed overlay
        currentUrl.includes('linkedin.com/') && currentUrl.includes('/overlay/create-post/') ||
        // Any LinkedIn domain with create post overlay
        (currentUrl.includes('linkedin.com') && currentUrl.includes('/overlay/create-post/'));

      if (isOverlay !== this.isCreatePostOverlay) {
        this.isCreatePostOverlay = isOverlay;
        console.log(`🌐 LinkedIn Formatter: Overlay status changed to ${isOverlay}`);
        console.log(`🔗 Current URL: ${currentUrl}`);

        if (isOverlay) {
          this.startOverlayMode();
        } else {
          this.stopOverlayMode();
        }
      }

      return isOverlay;
    }

    // Strategy 2: Find the EXACT ql-editor element
    findTargetInput() {
      console.log('🎯 Looking for the exact ql-editor element...');

      // EXACT selectors based on the provided element structure
      const exactSelectors = [
        // Most specific - the exact element
        '.ql-editor[data-placeholder="What do you want to talk about?"][data-test-ql-editor-contenteditable="true"]',
        '.ql-editor[aria-placeholder="What do you want to talk about?"]',
        '.ql-editor[aria-label="Text editor for creating content"]',

        // Fallback with data attributes
        '.ql-editor[data-test-ql-editor-contenteditable="true"]',
        '.ql-editor[data-placeholder*="What do you want to talk about"]',

        // General ql-editor with role textbox
        '.ql-editor[role="textbox"][contenteditable="true"]',
        '.ql-editor[contenteditable="true"]'
      ];

      // Try each exact selector
      for (const selector of exactSelectors) {
        const elements = document.querySelectorAll(selector);
        console.log(`🔍 Exact selector "${selector}" found ${elements.length} elements`);

        for (const element of elements) {
          if (this.isExactTargetElement(element)) {
            console.log('✅ FOUND EXACT TARGET ELEMENT:', element);
            console.log('✅ Element details:', {
              className: element.className,
              dataPlaceholder: element.getAttribute('data-placeholder'),
              ariaPlaceholder: element.getAttribute('aria-placeholder'),
              ariaLabel: element.getAttribute('aria-label'),
              role: element.getAttribute('role'),
              dataTestAttr: element.getAttribute('data-test-ql-editor-contenteditable')
            });
            return element;
          }
        }
      }

      console.log('❌ Exact target element not found');
      this.debugAllInputs();
      return null;
    }

    // Strategy 3: Validate EXACT Target Element
    isExactTargetElement(element) {
      if (!element) {
        console.log('❌ Element is null/undefined');
        return false;
      }

      // Must be contenteditable
      if (!element.hasAttribute('contenteditable') || element.getAttribute('contenteditable') !== 'true') {
        console.log('❌ Element not contenteditable');
        return false;
      }

      // Must be visible
      const rect = element.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) {
        console.log('❌ Element not visible', rect);
        return false;
      }

      // Check if already injected
      if (this.injectedElements.has(element)) {
        console.log('❌ Already injected for this element');
        return false;
      }

      // Check for existing toolbar nearby
      if (this.hasNearbyToolbar(element)) {
        console.log('❌ Toolbar already exists nearby');
        return false;
      }

      // EXACT validation for the specific ql-editor
      const isExactElement =
        element.classList.contains('ql-editor') &&
        (
          element.getAttribute('data-placeholder') === 'What do you want to talk about?' ||
          element.getAttribute('aria-placeholder') === 'What do you want to talk about?' ||
          element.getAttribute('aria-label') === 'Text editor for creating content' ||
          element.getAttribute('data-test-ql-editor-contenteditable') === 'true'
        );

      if (!isExactElement) {
        console.log('❌ Not the exact target element we\'re looking for');
        return false;
      }

      console.log('✅ Perfect! This is the exact element we want');
      return true;
    }

    // Strategy 4: Multi-Point Injection
    injectToolbarNearInput(targetInput) {
      console.log('🚀 Attempting multi-point injection for:', targetInput);

      const strategies = [
        // Strategy A: Before input's container
        () => {
          const container = targetInput.closest('.ql-container') ||
                           targetInput.closest('.share-creation-state') ||
                           targetInput.closest('.share-box') ||
                           targetInput.closest('.composer');
          if (container && container.parentElement) {
            const toolbar = buildFormattingToolbar();
            container.parentElement.insertBefore(toolbar, container);
            return true;
          }
          return false;
        },

        // Strategy B: After input's container
        () => {
          const container = targetInput.closest('.ql-container') ||
                           targetInput.closest('.share-creation-state') ||
                           targetInput.closest('.share-box') ||
                           targetInput.closest('.composer');
          if (container && container.parentElement) {
            const toolbar = buildFormattingToolbar();
            container.parentElement.insertBefore(toolbar, container.nextSibling);
            return true;
          }
          return false;
        },

        // Strategy C: Before the input itself
        () => {
          if (targetInput.parentElement) {
            const toolbar = buildFormattingToolbar();
            targetInput.parentElement.insertBefore(toolbar, targetInput);
            return true;
          }
          return false;
        },

        // Strategy D: After the input itself
        () => {
          if (targetInput.parentElement) {
            const toolbar = buildFormattingToolbar();
            targetInput.parentElement.insertBefore(toolbar, targetInput.nextSibling);
            return true;
          }
          return false;
        },

        // Strategy E: Append to parent
        () => {
          if (targetInput.parentElement) {
            const toolbar = buildFormattingToolbar();
            targetInput.parentElement.appendChild(toolbar);
            return true;
          }
          return false;
        }
      ];

      for (let i = 0; i < strategies.length; i++) {
        try {
          console.log(`🎯 Trying injection strategy ${String.fromCharCode(65 + i)}...`);
          if (strategies[i]()) {
            console.log(`✅ SUCCESS! Strategy ${String.fromCharCode(65 + i)} worked`);
            this.injectedElements.add(targetInput);
            return true;
          }
        } catch (error) {
          console.log(`❌ Strategy ${String.fromCharCode(65 + i)} failed:`, error);
        }
      }

      console.log('❌ All injection strategies failed');
      return false;
    }

    // Helper: Check for nearby toolbar
    hasNearbyToolbar(element) {
      const searchContainers = [
        element.parentElement,
        element.closest('.share-creation-state'),
        element.closest('.share-box'),
        element.closest('.composer'),
        element.closest('.ql-container')?.parentElement
      ];

      for (const container of searchContainers) {
        if (container?.querySelector('.lk-formatter-toolbar')) {
          return true;
        }
      }

      return false;
    }

    // Debug function
    debugAllInputs() {
      const allInputs = document.querySelectorAll('[contenteditable], input, textarea');
      console.log(`🔍 DEBUG: Found ${allInputs.length} total input elements:`);

      allInputs.forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        console.log(`  ${i + 1}:`, {
          tagName: el.tagName,
          type: el.type,
          className: el.className,
          placeholder: el.getAttribute('placeholder') || el.getAttribute('data-placeholder'),
          contentEditable: el.getAttribute('contenteditable'),
          visible: rect.width > 0 && rect.height > 0,
          rect: { width: rect.width, height: rect.height }
        });
      });
    }

    // Strategy 5: Overlay Mode with Page Load Delay
    startOverlayMode() {
      console.log('🔥 OVERLAY MODE ACTIVATED - Waiting for page to fully load...');

      if (this.overlayPollingInterval) {
        clearInterval(this.overlayPollingInterval);
      }

      // Wait 3 seconds for page to fully load before starting aggressive polling
      console.log('⏳ Waiting 3 seconds for page to fully load...');
      setTimeout(() => {
        console.log('🚀 Page load wait complete, starting aggressive detection');

        let attempts = 0;
        this.overlayPollingInterval = setInterval(() => {
          attempts++;
          console.log(`⚡ Overlay attempt ${attempts}: Looking for exact ql-editor element...`);

          const targetInput = this.findTargetInput();
          if (targetInput) {
            if (this.injectToolbarNearInput(targetInput)) {
              console.log(`🎉 SUCCESS! Toolbar injected on overlay attempt ${attempts}`);
              this.stopOverlayMode();
            }
          }

          if (attempts > 50) { // Stop after 10 seconds of trying
            console.log('⏰ Overlay polling timeout after 50 attempts');
            this.stopOverlayMode();
          }
        }, 200);
      }, 3000); // 3 second delay
    }

    stopOverlayMode() {
      if (this.overlayPollingInterval) {
        clearInterval(this.overlayPollingInterval);
        this.overlayPollingInterval = null;
        console.log('🛑 Overlay mode stopped');
      }
    }

    // Strategy 6: Regular Mode (Conservative)
    startRegularMode() {
      console.log('🔄 Regular mode: Periodic scanning');

      // Scan every 3 seconds
      this.regularPollingInterval = setInterval(() => {
        console.log('🔄 Regular scan...');
        const targetInput = this.findTargetInput();
        if (targetInput) {
          this.injectToolbarNearInput(targetInput);
        }
      }, 3000);
    }

    // Strategy 7: Real-time DOM Monitoring
    setupDOMObserver() {
      const observer = new MutationObserver((mutations) => {
        let shouldScan = false;

        mutations.forEach(mutation => {
          mutation.addedNodes.forEach(node => {
            if (node instanceof HTMLElement &&
                !node.classList?.contains('lk-formatter-toolbar')) {

              if (node.matches('[contenteditable], .share-creation-state, .share-box, .composer') ||
                  node.querySelector('[contenteditable]')) {
                shouldScan = true;
              }
            }
          });
        });

        if (shouldScan) {
          console.log('📡 DOM change detected, scanning...');
          setTimeout(() => {
            const targetInput = this.findTargetInput();
            if (targetInput) {
              this.injectToolbarNearInput(targetInput);
            }
          }, 500);
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      this.observers.push(observer);
    }

    // Strategy 8: URL Monitoring
    setupURLMonitoring() {
      setInterval(() => {
        if (location.href !== this.currentUrl) {
          console.log(`🌐 URL changed: ${this.currentUrl} → ${location.href}`);
          this.currentUrl = location.href;
          this.checkCreatePostOverlay();

          // Clean up injection tracking on navigation
          this.injectedElements = new WeakSet();

          // Immediate scan after URL change
          setTimeout(() => {
            const targetInput = this.findTargetInput();
            if (targetInput) {
              this.injectToolbarNearInput(targetInput);
            }
          }, 1000);
        }
      }, 500);
    }

    // Initialize everything
    initialize() {
      console.log('🔥 LinkedIn Formatter v7.0: Universal LinkedIn Profile Support Initialized');
      console.log('🎯 Supported styles:', Object.keys(STYLE_MAPS));
      console.log('🌐 Current URL:', this.currentUrl);

      // Initialize all strategies
      this.checkCreatePostOverlay();
      this.setupDOMObserver();
      this.setupURLMonitoring();
      this.startRegularMode();

      // Initial scan with proper delay
      setTimeout(() => {
        console.log('🚀 Running initial scan...');
        if (this.isCreatePostOverlay) {
          console.log('🎯 In overlay - waiting for element to be ready...');
          // Don't run initial scan in overlay mode, let the overlay mode handle it
        } else {
          const targetInput = this.findTargetInput();
          if (targetInput) {
            this.injectToolbarNearInput(targetInput);
          }
        }
      }, 1000);

      console.log('✅ All strategies activated and monitoring started');
    }
  }

  // Create and initialize the ultimate formatter
  const ultimateFormatter = new UltimateLinkedInFormatter();

  // Start the system
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => ultimateFormatter.initialize());
  } else {
    ultimateFormatter.initialize();
  }

})();