# ⚡ БЫСТРЫЙ СТАРТ - Публикация сайта

## 🚀 3 простых шага для публикации в интернете:

### 1️⃣ Создать репозиторий на GitHub
- Зайти на [github.com](https://github.com)
- Нажать **"New repository"**
- Назвать: `yalokgar-portfolio`
- Сделать **Public**
- **НЕ** добавлять README/gitignore (у нас уже есть)

### 2️⃣ Подключить локальный код
```bash
# Выполнить эти команды в папке с сайтом:
git remote add origin https://github.com/YALOKGARua/yalokgar-portfolio.git
git branch -M main
git push -u origin main
```

### 3️⃣ Включить GitHub Pages
- В репозитории зайти в **Settings**
- Найти раздел **"Pages"**
- Source: **"Deploy from branch"**
- Branch: **"main"**
- Сохранить

## 🌍 Результат:
**Ваш сайт будет доступен по адресу:**
`https://yalokgarua.github.io/yalokgar-portfolio/`

---

## 🔧 Для обновления сайта:

### Вариант 1: Автоматический скрипт
**Windows:** Запустить `deploy.bat`
**Linux/macOS:** Запустить `./deploy.sh`

### Вариант 2: Ручные команды
```bash
git add .
git commit -m "💀 Updated site"
git push origin main
```

---

## 📱 Альтернативы (еще проще):

### Netlify:
1. [netlify.com](https://netlify.com) → "New site from Git"
2. Выбрать GitHub репозиторий
3. Готово!

### Vercel:
1. [vercel.com](https://vercel.com) → "Import Project" 
2. Выбрать GitHub репозиторий
3. Готово!

---

**💀 После публикации ваш хакерский сайт будет доступен любому человеку в любой стране! 💀** 