@echo off
setlocal
cd /d "%~dp0"
echo.
echo RadhaSujana.com local preview
echo -------------------------------
echo Opening http://127.0.0.1:8000/
echo Keep this window open while previewing.
echo Close this window or press Ctrl+C to stop the preview server.
echo.
start "" "http://127.0.0.1:8000/"
where py >nul 2>nul
if %errorlevel%==0 (
  py -m http.server 8000 --bind 127.0.0.1
  goto :eof
)
where python >nul 2>nul
if %errorlevel%==0 (
  python -m http.server 8000 --bind 127.0.0.1
  goto :eof
)
echo Python was not found on this PC.
echo Install Python, or open the folder in VS Code and use the Live Server extension.
pause
