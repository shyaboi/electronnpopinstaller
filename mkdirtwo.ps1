if (!([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) { Start-Process powershell.exe "-NoProfile -ExecutionPolicy Bypass -File `"$PSCommandPath`"" -Verb RunAs; exit }

Write-Output "balls222"

Set-Location ~

Set-Location ./Desktop/

start-process "$PSScriptRoot\mkdir.bat"

Start-Sleep -s 20

Set-Location ./nPoP/

notepad server.js

Read-Host -Prompt "Press Enter to exit"