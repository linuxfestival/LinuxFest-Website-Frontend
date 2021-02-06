import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {config} from "@fortawesome/fontawesome-svg-core";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: localStorage.getItem('token') || '',
        loggedInUser: {},
        baseUrl: "http://linux.ce.aut.ac.ir/",
        // baseUrl : "https://HeartyHonoredDisk.ahmadforoughi.repl.co/",
        workshopMore:{},
        allWorkshops: [],
        selectedWorkshopsForRegister : {workshopIds:[]},
        config: {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        },
    },
    mutations: {

        setToken: function (state, newToken) {
            state.token = newToken;
            localStorage.setItem('token', newToken);
            state.config.headers.Authorization = "Bearer " + state.token;
            console.log('token mutation completed');
        },

        setLoggedInUser: function (state, user) {
            state.loggedInUser = user;
        },
        
        setUsers: function (state, items) {
            state.allUsers = items;
        },
        
        resetStats: function(state) {
            state.token = '';
            state.loggedInUser = {};
            state.workshopMore = {};
            state.allWorkshops = {};
            state.selectedWorkshopsForRegister = [];
            state.config.headers.Authorization = '';
            localStorage.clear();
        },

        setAllWorkshops: function (state, workshops) {
            state.allWorkshops = workshops
        },
        setWorkshopMore:function (state, workshop) {
            state.workshopMore=workshop
        }
    },
    actions: {

        login: function ({commit, state}, userToLogIn) {
            console.log('login called');
            return new Promise((resolve,reject) => {
                axios({
                    url : state.baseUrl + "users/login",
                    method : 'post',
                    data : userToLogIn
                }).then(response => {
                    commit('setToken', response.data.token);
                    resolve();
                }).catch(error => {
                    console.log(error.response);        
                    reject();
                })
            })
        },

        logout: function ({state}) {
            this.commit('resetStats');         
        },

        signup : function({commit,state} , userToRegister) {
            console.log('sending signup request');
            return new Promise((resolve,reject) => {
                axios({
                    url : state.baseUrl + 'users',
                    method : 'post',
                    data : userToRegister,
                    headers : state.config.headers
                }).then(response => {
                    console.log('request done')
                    this.commit('setToken',response.data.token);
                    console.log(response);
                    resolve();
                }).catch(error => {
                    console.log(error);
                    console.log(error.response);
                    console.log('request catch')
                    reject();
                })
            })
        },

        editUserInfo: async function ({commit, state}, user) {
            try{
                const response = await axios.patch(state.baseUrl + 'users/me', user, state.config)
                console.log(response);
                console.log(response.data)
                return true
            }catch (e) {
                console.log(e);
                return false
            }
        },

        getWorkshopsFromServer: async function ({commit, state}) {
            console.log('workshop from server');
            try {
                const response = await axios.get(state.baseUrl + 'workshops');
                console.log(response);
                commit('setAllWorkshops', response.data);
                console.log(state.allWorkshops);
                return true
            } catch (e) {
                console.log(e);
            }
        },

        getUserFromServer: function ({commit, state}) {
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

        getWorkshopMoreInfo: async function ({commit, state}, id) {
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
            return state.token !== '';
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
        httpHeaders : (state) => {
            return state.config.headers;
        },
        selectedWorkshopsForRegister :(state) => {
            return state.selectedWorkshopsForRegister;
        }
    }
})
