import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {config} from "@fortawesome/fontawesome-svg-core";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: localStorage.getItem('token') || '',
        loggedInUser: {},
        baseUrl: "http://45.147.76.80",
        workshopMore:{},
        allWorkshops: [],
        config: {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        }
    },
    mutations: {
        setToken: function (state, newToken) {
            state.token = newToken;
            localStorage.setItem('token', newToken);
            state.config.headers.Authorization = "Bearer " + state.token;
        },

        setLoggedInUser: function (state, user) {
            state.loggedInUser = user;
        },
        setUsers: function (state, items) {
            state.allUsers = items;
        },
        setAllWorkshops: function (state, workshops) {
            state.allWorkshops = workshops
        },
        setWorkshopMore:function (state, workshop) {
            for (let i = 0; i <workshop.size ; i++) {
                state.allWorkshops.add(workshop.get(i))
            }
        }
    },
    actions: {
        logIn: async function ({commit, state}, userToLogIn) {
            console.log('login called');

            try{
                //http request to login
                const response=await axios.post(state.baseUrl + '/users' + '/login', {
                    email: userToLogIn.email,
                    password: userToLogIn.password
                })
                console.log(response);
                //set the token
                commit('setToken', response.data.token)
                console.log(state.config)
                //send new http request to get the full user info
                try {
                    const res=await axios.get(state.baseUrl + '/users' + '/me', state.config);
                    // handle success
                    console.log(res);
                    commit('setLoggedInUser', res.data);
                    return true
                }catch (e) {
                    console.log(e);
                    return false
                }

            }catch (e) {
                console.log(e);
                return false
            }

        },

        logOut: async function ({state}) {

            try{
                console.log(state.baseUrl)
                console.log(state.config)
                const response= await axios.post(state.baseUrl + '/users' + '/me/logout',{}, state.config);
                console.log(response);
                state.loggedInUser = {};
                localStorage.removeItem('token');
                state.token = '';
                state.config.Authorization = '';
                return true;
            }catch (e) {
                console.log(e);
                console.log("LOG OUT REQUEST FAILED");
                return false
            }

        },
        signUp: async function ({commit, state}, user) {
            console.log("In signUp in store");
            console.log(state.baseUrl);
            console.log(user);
            try {
                const response = await axios.post(state.baseUrl + '/users', user)
                console.log(response);
                console.log(response.status);
                if (response.status == '201') {
                    console.log("signUp OK");
                    return true;
                }
            } catch (err) {
                console.log("ops:    " + err);
                return false;
            }
            return false;

        },
        editUserInfo: async function ({commit, state}, user) {
            try{
                const response = await axios.patch(state.baseUrl + '/users' + '/me', user, state.config)
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
                const response = await axios.get(state.baseUrl + '/workshops');
                console.log(response);
                commit('setAllWorkshops', response.data)
                console.log(state.allWorkshops)
                return true
            } catch (e) {
                console.log(e);

            }

            // axios.get(state.baseUrl + '/workshops')
            //     .then(function (response) {
            //         // handle success
            //         console.log(response);
            //         commit('setAllWorkshops',response.data)
            //     })
            //     .catch(function (error) {
            //         // handle error
            //         console.log(error);
            //     })
            //     .finally(function () {
            //         // always executed
            //     });

        },
        getUserFromServer: function ({commit, state}) {
            console.log(state.config);
            axios.get(state.baseUrl + '/users' + '/me', state.config)
                .then(function (response) {
                    // handle success
                    console.log(response);
                    commit('setLoggedInUser', response.data);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        },
        getWorkshopMoreInfo: async function ({commit, state}, id) {
            console.log("STORE")
            try {
                const response = await axios.get(state.baseUrl + '/workshops/' + id);
                console.log(response);
                commit('setWorkshopMore', response.data);
            } catch (e) {
                console.log(e);
            }
        }
    },
    getters: {
        isLoggedIn: (state) => {
            if (state.token == '') {
                return false;
            } else return true;
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
            return state.workshopMore
        }
    }
})
