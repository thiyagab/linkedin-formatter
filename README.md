
LinkedIn Formatter - Chrome Extension
====================================

What it does
------------
Injects a small toolbar into the LinkedIn "Create Post" modal. Select text inside the editor and click the bold (𝐁) button to replace the selected text with Unicode bold characters suitable for pasting into LinkedIn posts.

Files
-----
- manifest.json
- content.js
- styles.css
- README.md

Install (developer mode)
------------------------
1. Download the ZIP and extract.
2. Open Chrome -> chrome://extensions
3. Enable "Developer mode" (top-right).
4. Click "Load unpacked" and select the extracted folder.
5. Open linkedin.com, click "Start a post", select some text in the editor, and click the 𝐁 button that appears above the editor.

Notes & caveats
---------------
- The extension uses Unicode glyphs (not real formatting). This is the same technique used by online "bold text" generators.
- Screen readers and search may not handle these characters as expected.
- LinkedIn's DOM may change. If the toolbar stops appearing, open DevTools and inspect the sharebox modal markup to update selectors in content.js.
