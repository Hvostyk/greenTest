This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://react.dev/)
 [![Vite](https://img.shields.io/badge/Vite-4.4.0-orange)](https://vitejs.dev/)
 
 Фронтенд-часть платформы для работы с вакансиями, разработанная с использованием React и Vite. Простейшая резиновая адаптация вплоть до 960px, дальше нужно верстать мобильную версию(В случае если я неправильно понял задание с адаптивом, можно посмотреть в другом репозитории как я реализовывал комбинированную адаптацию)
 
 ## Особенности
 
 - Просмотр списка вакансий с HH.ru API
 - Фильтрация вакансий с сохранением состояния в URL
 - Форма отклика с валидацией полей
 - Кастомные компоненты: селекты, карточки вакансий
 - Оптимизированная сборка Vite
 
 ## Технологии
 
 - **React**
 - **Vite** (шаблонизатор и сборщик)
 - Greensight Design System (GDS)
 - CSS-модули для стилизации
 - REST API (HH.ru)
 - React Hooks (useState, useEffect, custom hooks)
 
 ## Структура проекта
 ```
 /src
 ├── components/       # React-компоненты
 │   ├── Filters/      # Компоненты фильтров
 │   ├── Vacancy/      # Карточки вакансий
 │   └── ...           # Другие UI-компоненты
 ├── styles/           # Стили проекта
 │   ├── variables.css # CSS-переменные
 │   └── ...           # Модульные стили
 ├── public/           # Статические ресурсы
 │   └── fonts/        # Шрифты проекта
 └── ...               # Конфигурационные файлы
 ```
 ## Установка и запуск
 ### Клонирование репозитория
 ### Установка зависимостей
 ```
 npm install
 ###Запуск сервера
 npm run dev --host
 ```
 ### Запуск сервера
 ```
 npm run dev --host
 ```