import { defineConfig } from 'vitepress'

export default defineConfig({
  // Твой путь к сайту
  base: '/forum-52-hello/', 
  
  title: "Матрёшка 52",
  description: "Официальный форум сервера",
  lang: 'ru-RU',

  themeConfig: {
    // Верхнее меню
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Правила', link: '/rules/server-rules' },
    ],

    // Боковое меню со всеми твоими папками
    sidebar: [
      {
        text: '📜 Основная информация',
        items: [
          { text: 'Правила сервера', link: '/rules/server-rules' },
          { text: 'Общие правила', link: '/rules/server' },
          { text: 'Правила лидеров', link: '/rules/leaders' }
        ]
      },
      {
        text: '🏢 Государственные организации',
        items: [
          { text: 'Правительство', link: '/fraction/pravo' },
          { text: 'ФСБ', link: '/fraction/fsb' },
          { text: 'МВД', link: '/fraction/mvd' },
          { text: 'Армия России', link: '/fraction/army' },
          { text: 'МЧС', link: '/fraction/mchs' },
          { text: 'Городская Больница', link: '/fraction/gb' },
          { text: 'ГТРК Temp', link: '/fraction/gtrk' }
        ]
      },
      {
        text: '📁 Система отчётов',
        items: [
          { text: 'Жалобы / Отчеты', link: '/reports/test' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/your-link' }
    ],

    // Текст на кнопках внизу страниц
    docFooter: {
      prev: 'Назад',
      next: 'Вперед'
    }
  },

  // Темная тема
  appearance: 'dark'
})
