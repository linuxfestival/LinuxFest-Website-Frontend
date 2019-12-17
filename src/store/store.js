import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {config} from "@fortawesome/fontawesome-svg-core";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: localStorage.getItem('token') || '',
        loggedInUser: {},
        baseUrl:"http://45.147.76.80",
        allWorkshops:[],
        config:{
            headers:{
                Authorization: ''
            }
        }
    },
    mutations: {
        setToken: function (state, newToken) {
            state.token = newToken;
            localStorage.setItem('token', newToken);
            state.config.headers.Authorization="bearer " + state.token;
        },

        setLoggedInUser: function (state, user) {
            state.loggedInUser = user;
        },
        setUsers: function (state, items) {
            state.allUsers = items;
        },
        setAllWorkshops:function (state,workshops) {
            state.allWorkshops=workshops
        }
    },
    actions: {
        logIn: function ({commit,state}, userToLogIn) {
            console.log('login called');

            //http request to login
            axios.post(state.baseUrl+'/users'+'/login', {
                email: userToLogIn.email,
                password: userToLogIn.password
            })
                .then(function (response) {
                    console.log(response);
                        //set the token
                        commit('setToken',response.data.token)
                        console.log(state.config)
                        //send new http request to get the full user info
                        axios.get(state.baseUrl+'/users'+'/me',state.config)
                            .then(function (response) {
                                // handle success
                                console.log(response);
                                commit('setLoggedInUser',response.data.user)
                                return true

                            })
                            .catch(function (error) {
                                // handle error
                                console.log(error);
                            })
                            .finally(function () {
                                // always executed
                            });

                })
                .catch(function (error) {
                    console.log(error);
                    return false

                });

        },

        logOut: function (state) {

            axios.post(state.baseUrl+'/users'+'/me/logout', state.config)
                .then(function (response) {
                    console.log(response);
                    return true
                })
                .catch(function (error) {
                    console.log(error);
                    return false
                });
            state.loggedInUser = {};
            state.token = '';
            localStorage.removeItem('token');
        },
        signUp: function ({commit,state}, user) {
            console.log("In signUp in store");
            console.log(state.baseUrl);
            console.log(user);
            //http request to signup
            axios.post(state.baseUrl+'/users', user)

                .then(function (response) {
                    console.log(response);
                    if (response.body.user==true) {
                        console.log("signUp OK")
                        return true;
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    console.log("ERROR")
                    return false

                });

        },
        editUserInfo:function ({commit,state},user) {
            axios.patch(state.baseUrl+'/users'+'/me',user, state.config )
                .then((response) => {
                    console.log(response);
                    commit('setLoggedInUser',response.body.user)
                    return true

                }, (error) => {
                    console.log(error);
                    return false
                });
        },
        getWorkshopsFromServer:function ({commit,state}) {
            axios.get(state.baseUrl+'/workshops')
                .then(function (response) {
                    // handle success
                    console.log(response);
                    state.setAllWorkshops(response.body)
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        },
        getUserFromServer:function ({commit,state}) {
            axios.get(state.baseUrl+'/users'+'/me',state.config)
                .then(function (response) {
                    // handle success
                    console.log(response);
                    commit('setLoggedInUser',response.data.user);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        }
    },
    getters: {
        isLoggedIn: (state) => {
            if(state.token == '') {
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
        }
    }
})
