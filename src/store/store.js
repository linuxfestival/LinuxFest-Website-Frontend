import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import authService from '@/services/auth';

import { signUpRequest, signInRequest } from './requests'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: authService.getToken(),
    loggedInUser: {},
    signUp: {
      isLoading: false,
      error: '',
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      authService.setToken(token);
    },

    setLoggedInUser (state, user) {
      state.loggedInUser = user;
    },

    setUsers(state, items) {
      state.allUsers = items;
    },

    resetStats (state) {
      state.token = '';
      state.loggedInUser = {};
      state.selectedWorkshopsForRegister = [];
      state.config.headers.Authorization = '';
      localStorage.clear();
    },

    setSignUpLoading(state, isLoading) {
      state.signUp.isLoading = isLoading;
    },

    setSignUpError(state, message) {
      state.signUp.error = message;
    }
  },
  actions: {
    login ({ commit }, userToLogIn) {
      return new Promise((resolve, reject) => {
        signInRequest(userToLogIn).then((token) => {
          commit('setToken', token)
          resolve()
        })
        .catch(err => {
          reject(err);
        })
      })
    },

    logout ({ commit }) {
      commit('setToken', null);
    },

    signUp({ commit }, userToRegister) {
      return new Promise((resolve, reject) => {
        commit('setSignUpLoading', true);
        signUpRequest(userToRegister)
          .then((token) => {
            commit('setToken', token);
            resolve();
          })
          .catch((err) => {
            const {
              response
            } = err;

            if (!response) {
              commit('setSignUpError', 'خطایی هنگام ثبت نام رخ داد')
              return;
            }

            const {
              data: {
                message
              }
            } = response

            commit('setSignUpError', message);
            reject();
          })
          .finally(() => {
            commit('setSignUpLoading', false);
          })
      })
    },

    editUserInfo: async function ({ commit, state }, user) {
      try {
        const response = await axios.patch(state.baseUrl + 'users/me', user, state.config)
        console.log(response);
        console.log(response.data)
        return true
      } catch (e) {
        console.log(e);
        return false
      }
    },

    getUserFromServer: function ({ commit, state }) {
      console.log(state.config);
      axios.get(state.baseUrl + 'users/me', state.config)
        .then(function (response) {
          // handle success
          console.log(response);
          commit('setLoggedInUser', response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          console.log(error.response)
        })
        .finally(function () {
          // always executed
        });
    },

    getWorkshopMoreInfo: async function ({ commit, state }, id) {
      console.log("STORE");
      try {
        const response = await axios.get(state.baseUrl + 'workshops/' + id);
        console.log(response);
        commit('setWorkshopMore', response.data);
      } catch (e) {
        console.log(e);
      }
    }
  },
  getters: {
    isLoggedIn: (state) => {
      return state.token && authService.isLoggedIn();
    },

    getLoggedInUser: (state) => {
      return state.loggedInUser;
    },
    getAllUsers: (state) => {
      return state.allUsers;
    },
    getAllWorkshops: (state) => {
      return state.allWorkshops;
    },
    getWorkshopMore: state => {
      return state.workshopMore;
    },
    baseUrl: (state) => {
      return state.baseUrl;
    },
    httpHeaders: (state) => {
      return state.config.headers;
    },
    selectedWorkshopsForRegister: (state) => {
      return state.selectedWorkshopsForRegister;
    },
    signUpErrors: (state) => {
      return state.signUpError
    }
  }
})
