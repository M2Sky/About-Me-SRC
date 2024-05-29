@echo off
setlocal

:: Enable command echoing for troubleshooting
echo on

echo Running build.bat...
call "%~dp0build.bat"
if %ERRORLEVEL% NEQ 0 (
    echo Error: build.bat failed with exit code %ERRORLEVEL%.
    goto end
)

echo Running startup.bat...
call "%~dp0startup.bat"
if %ERRORLEVEL% NEQ 0 (
    echo Error: startup.bat failed with exit code %ERRORLEVEL%.
    goto end
)

:end
:: Keep the command prompt open
cmd /k
