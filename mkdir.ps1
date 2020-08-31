if (!([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) { Start-Process powershell.exe "-NoProfile -ExecutionPolicy Bypass -File `"$PSCommandPath`"" -Verb RunAs; exit }

echo "balls"

msiexec /i "C:\Users\Beast\Desktop\code\JS\muhprojects\npopelectroninstaller\node.msi" /qn /norestart

echo "installed nodjs"

cd ~

cd ./Desktop/

echo "installing nPoP"

npx npop

Read-Host -Prompt "Press Enter to exit"