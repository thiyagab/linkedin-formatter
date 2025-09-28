# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Chrome extension that injects a formatting toolbar into LinkedIn's "Create Post" modal. It converts selected text to Unicode Mathematical Alphanumeric Symbols (bold, italic, monospace, etc.) that display as formatted text on LinkedIn and other social media platforms.

## Architecture

The extension consists of three main files:
- `manifest.json` - Chrome extension manifest (version 3)
- `content.js` - Main content script that injects the toolbar and handles text conversion
- `styles.css` - Minimal CSS for toolbar styling

### Key Components

**Unicode Character Mapping (`content.js:11-87`)**
- Uses Unicode Mathematical Alphanumeric Symbols (U+1D400–U+1D7FF range)
- Supports 7 different styles: bold, italic, boldItalic, sansBold, sansItalic, monospace, doubleStruck
- Includes bidirectional conversion (normal ↔ Unicode formatted)
- Properly handles Unicode surrogate pairs with `Array.from()`

**Text Conversion System (`content.js:89-144`)**
- `convertText()` - Converts text using character mapping
- `convertToNormal()` - Reverses Unicode formatting back to normal text
- `detectCurrentStyle()` - Identifies which Unicode style is currently applied
- `hasUnicodeFormatting()` - Checks if text contains formatted characters

**LinkedIn DOM Integration (`content.js:466-541`)**
- Targets LinkedIn's Quill editor (`.ql-editor[contenteditable="true"]`)
- Injects toolbar above editor in modal containers
- Uses multiple selectors to handle LinkedIn's dynamic DOM structure
- Advanced text insertion that works with LinkedIn's editor events

**Modal Detection (`content.js:517-608`)**
- MutationObserver watches for LinkedIn modal creation
- Handles LinkedIn's SPA navigation changes
- Debounced observer prevents duplicate toolbar injection
- Supports multiple modal selectors for different LinkedIn layouts

## Development Commands

No build process is required - this is a pure JavaScript Chrome extension.

To test:
1. Load extension in Chrome Developer mode (`chrome://extensions`)
2. Enable "Developer mode" toggle
3. Click "Load unpacked" and select this directory
4. Visit `https://www.linkedin.com` and test in post creation modal

## File Structure

```
.
├── manifest.json      # Chrome extension configuration
├── content.js         # Main content script (21KB)
├── styles.css         # Toolbar styling
└── README.md          # Installation and usage instructions
```

## Technical Notes

- Uses Manifest V3 with content scripts and host permissions
- Runs at `document_idle` to ensure LinkedIn's DOM is ready
- No external dependencies or build tools required
- Extensive logging for debugging (`console.log` statements throughout)
- Handles LinkedIn's complex DOM structure and SPA navigation
- Includes fallback to clipboard copy if direct insertion fails