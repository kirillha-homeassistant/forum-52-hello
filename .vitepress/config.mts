import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Матрешка 52",
  description: "Форум мини-проекта",
  themeConfig: {
    // Настройка бокового меню
    sidebar: [
      {
        text: '📜 Правила',
        items: [
          { text: 'Правила сервера', link: '/rules/server-rules' },
        ]
      },
      {
        text: '🏢 Фракции',
        items: [
          { text: 'Правительство', link: '/fraction/pravo' },
        ]
      },
      {
        text: '📁 Отчеты',
        items: [
          { text: 'Проверка отчетов', link: '/reports/test' },
        ]
      }
    ],

    // Кнопки в верхнем меню
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Правила', link: '/rules/server-rules' }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/your-link' } // Замени на свой Дискорд
    ]
  },
  // Включаем темную тему по умолчанию
  appearance: 'dark'
})
