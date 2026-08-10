# Preview RadhaSujana.com before uploading

## Easiest method on Windows
1. Extract the ZIP fully into a normal folder.
2. Double-click `PREVIEW-WEBSITE.bat`.
3. Your browser should open `http://127.0.0.1:8000/`.
4. Keep the black Command Prompt window open while testing.
5. Close that window (or press `Ctrl+C`) when finished.

The preview server binds only to `127.0.0.1`, so it is available only on your own computer.

## Check the mobile layout in Chrome or Edge
1. Open the local preview.
2. Press `F12`.
3. Press `Ctrl+Shift+M` to turn on device emulation.
4. Pick an iPhone preset or choose `Responsive` and resize the viewport.
5. Refresh after each code/file change.

## Manual command
If the batch file does not work, open Command Prompt inside the extracted website folder and run:

`py -m http.server 8000 --bind 127.0.0.1`

Then open:

`http://127.0.0.1:8000/`

Do not preview by double-clicking `index.html`, because this site uses root-relative paths such as `/styles.css` and `/assets/...`; a small local web server reproduces the GitHub Pages structure correctly.
