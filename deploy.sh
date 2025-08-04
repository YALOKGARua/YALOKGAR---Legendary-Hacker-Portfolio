#!/bin/bash

echo "💀 YALOKGAR LEGENDARY DEPLOYMENT PROTOCOL 💀"
echo "═══════════════════════════════════════════"
echo

# Проверка статуса git
echo "🔥 Checking git status..."
git status
echo

# Добавление всех изменений
echo "⚡ Adding all changes to git..."
git add .
echo

# Запрос комментария к коммиту
echo -n "💀 Enter commit message (or press Enter for default): "
read commit_message

if [ -z "$commit_message" ]; then
    commit_message="🚀 Updated legendary hacker portfolio"
fi

# Создание коммита
echo "🎯 Creating commit..."
git commit -m "$commit_message"
echo

# Отправка на GitHub
echo "💥 Pushing to GitHub..."
git push origin main
echo

echo "✅ DEPLOYMENT COMPLETE!"
echo "🌍 Your legendary site will be updated in 1-2 minutes"
echo "🔗 URL: https://yalokgarua.github.io/yalokgar-portfolio/"
echo
echo "💀 UNIVERSAL DOMINATION ACHIEVED 💀" 