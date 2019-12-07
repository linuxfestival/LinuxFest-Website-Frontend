import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: localStorage.getItem('token') || '',
        loggedInUser: {},
        allUsers: []
    },
    mutations: {
        setToken: function (state, newToken) {
            state.token = newToken;
            localStorage.setItem('token', newToken);
        },

        setLoggedInUser: function (state, user) {
            state.loggedInUser = user;
        },

        logOut: function (state) {
            state.loggedInUser = {};
            state.token = '';
            localStorage.removeItem('token');
        },
        setUsers: function (state, items) {
            state.allUsers = items;
        }
    },
    actions: {
        logIn: function ({commit}, userToLogIn) {
            console.log('login called');
            console.log('payload : ', userToLogIn);
            commit('setToken', userToLogIn.email);
            commit('setLoggedInUser', userToLogIn);
            //http request to login
            // if response ok - > commit('setToken', response)
            //else
        },
        signUp:function ({commit},user) {
            //http request to signup
            //if ok ->
            this.logIn(user)
            //write ok
        }
    },
    getters: {
        isLoggedIn: (state) => {
            return state.token !== '';
        },
        getLoggedInUser: function (state) {
            return state.loggedInUser;
        },
        getAllUsers: function (state) {
            return state.allUsers;
        }
    }
})
