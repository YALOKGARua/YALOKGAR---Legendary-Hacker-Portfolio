@echo off
echo 💀 YALOKGAR LEGENDARY DEPLOYMENT PROTOCOL 💀
echo ═══════════════════════════════════════════
echo.

REM Проверка статуса git
echo 🔥 Checking git status...
git status
echo.

REM Добавление всех изменений
echo ⚡ Adding all changes to git...
git add .
echo.

REM Запрос комментария к коммиту
set /p commit_message="💀 Enter commit message (or press Enter for default): "
if "%commit_message%"=="" set commit_message=🚀 Updated legendary hacker portfolio

REM Создание коммита
echo 🎯 Creating commit...
git commit -m "%commit_message%"
echo.

REM Отправка на GitHub
echo 💥 Pushing to GitHub...
git push origin main
echo.

echo ✅ DEPLOYMENT COMPLETE!
echo 🌍 Your legendary site will be updated in 1-2 minutes
echo 🔗 URL: https://yalokgarua.github.io/yalokgar-portfolio/
echo.
echo 💀 UNIVERSAL DOMINATION ACHIEVED 💀

pause 