import Vue from 'vue'
import Vuex from 'vuex'

import authService from '@/services/auth'

import { signUpRequest, signInRequest } from './requests'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: authService.getToken(),
    signUp: {
      isLoading: false,
      error: '',
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      authService.setToken(token)
    },

    setSignUpLoading(state, isLoading) {
      state.signUp.isLoading = isLoading
    },

    setSignUpError(state, message) {
      state.signUp.error = message
    },
  },
  actions: {
    login({ commit }, userToLogIn) {
      return new Promise((resolve, reject) => {
        signInRequest(userToLogIn).then((token) => {
          commit('setToken', token)
          resolve()
        })
          .catch((err) => {
            reject(err)
          })
      })
    },

    logout({ commit }) {
      commit('setToken', null)
    },

    signUp({ commit }, userToRegister) {
      return new Promise((resolve, reject) => {
        commit('setSignUpLoading', true)
        signUpRequest(userToRegister)
          .then((token) => {
            commit('setToken', token)
            resolve()
          })
          .catch((err) => {
            const {
              response,
            } = err

            if (!response) {
              commit('setSignUpError', 'خطایی هنگام ثبت نام رخ داد')
              return
            }

            const {
              data: {
                message,
              },
            } = response

            commit('setSignUpError', message)
            reject()
          })
          .finally(() => {
            commit('setSignUpLoading', false)
          })
      })
    },
  },
  getters: {
    isLoggedIn: (state) => state.token && authService.isLoggedIn(),

    signUpErrors: (state) => state.signUpError,
  },
})
