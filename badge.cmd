@echo off

:prep
title Get the Active Developer Badge
echo Get the Active Developer Badge
cd /d "%~dp0"

:nodecheck
if not exist node\node.exe echo Please install Node.JS and try again
if exist node\node.exe goto tokencheck
pause 
goto end

:tokencheck
if exist code\token.json goto runcode
if not exist code\token.json goto tokenregister
goto end

:tokenregister
set /p token=ENTER YOUR DISCORD BOT TOKEN: 
echo {"token": "%token%"} > "code\token.json"
goto runcode

:runcode
start node\node.exe code\index.js