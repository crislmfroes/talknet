import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import pt from 'vuetify/src/locale/pt'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#4CAF50',
        secondary: '#F44336',
        accent: '#9C27B0',
        error: '#FF5722',
        warning: '#FFC107',
        info: '#03A9F4',
        success: '#8BC34A'
      }
    }
  },
  lang: {
    locales: { pt },
    current: 'pt'
  },
  icons: {
    iconfont: 'mdi'
  }
})
