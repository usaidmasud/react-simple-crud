import Cookies from 'js-cookie'
import * as types from '../mutation-types'

// const { locale, locales } = window.config
const locale = 'en'
const locales = {
    'en' : 'EN',
    'zh-CN' : '中文',
    'es' : 'ES',
}

const lang = {
  namespaced : true,
  state: () => ({
    locale: Cookies.get('locale') || locale,
    locales: locales
  }),
  mutations: {
    [types.SET_LOCALE](state, { locale }) {
      state.locale = locale
    }
  },
  actions: {
    setLocale({ commit }, { locale }) {
      commit(types.SET_LOCALE, { locale })

      Cookies.set('locale', locale, { expires: 365 })
    }
  },
  getters: {
    locale: state => state.locale,
    locales: state => state.locales
  }
}

export default lang