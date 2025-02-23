# Используем официальный Node.js образ
FROM node:21

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы приложения
COPY . .

# Открываем порт
EXPOSE 5173

# Запускаем приложение
CMD ["npm", "run", "dev"]
