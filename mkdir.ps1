if (!([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) { Start-Process powershell.exe "-NoProfile -ExecutionPolicy Bypass -File `"$PSCommandPath`"" -Verb RunAs; exit }

Write-Output "111111111111111111111111111111111111111111111111111"

$url = "https://nodejs.org/dist/v14.9.0/node-v14.9.0-x64.msi"
$output = "$PSScriptRoot\node.msi"
$start_time = Get-Date

Import-Module BitsTransfer
Start-BitsTransfer -Source $url -Destination $output
#OR
Start-BitsTransfer -Source $url -Destination $output -Asynchronous

Write-Output "Time taken: $((Get-Date).Subtract($start_time).Seconds) second(s)"

msiexec /i "$PSScriptRoot\node.msi" /qn /norestart | Out-Null

Write-Output "installed nodjs"

Read-Host -Prompt "Press Enter to exit"