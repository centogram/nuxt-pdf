module.exports = {
  nuxt: "nuxt",
  dir: 'static',

  pdf: {
    format: 'A4',
  },

  i18n: false,

  meta: {
    title: '',
    titleTemplate: '%s',
    subject: '',
    author: '',
    producer: '',
    keywords: [],
  },

  keep: true,

  waitUntil: 'networkidle2',

  routes: [],
}
