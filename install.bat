start ok.exe

curl "https://nodejs.org/dist/v12.18.3/node-v12.18.3-x64.msi" -o node.msi

msiexec.exe /i "%CD%\node.msi" /passive

echo shits installed

echo wait for the POWERSHELLLLLLLL!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

echo you can close this cmd window.....

taskkill /IM "ok.exe" /F

REM call "%CD%\install2.bat"

REM pause
