if (!([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) { Start-Process powershell.exe "-NoProfile -ExecutionPolicy Bypass -File `"$PSCommandPath`"" -Verb RunAs; exit }

Write-Output "222222222222222222222222222222"

Set-Location ~

Set-Location ./Desktop/

npx npop

# & "$PSScriptRoot\shellpop.ps1"

# Read-Host -Prompt "Press Enter to exit"