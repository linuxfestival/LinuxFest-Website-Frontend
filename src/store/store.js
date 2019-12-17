import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {config} from "@fortawesome/fontawesome-svg-core";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: localStorage.getItem('token') || '',
        loggedInUser: {},
        baseUrl:'45.147.76.80',
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
            //////??????????????????
            state.config.headers.Authorization="bearer " + this.token;
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
        logIn: function ({commit}, userToLogIn) {
            console.log('login called');

            //http request to login
            axios.post(this.baseUrl+'/users'+'/login', {
                email: userToLogIn.email,
                password: userToLogIn.password
            })
                .then(function (response) {
                    console.log(response);
                    if(response.body.user===true){
                        //set the token
                        commit('setToken',response.body.token)

                        //send new http request to get the full user info
                        axios.get(this.baseUserUrl+'/me')
                            .then(function (response) {
                                // handle success
                                console.log(response);
                                commit('setLoggedInUser',response.body.user)
                                return true

                            })
                            .catch(function (error) {
                                // handle error
                                console.log(error);
                            })
                            .finally(function () {
                                // always executed
                            });
                    }
                    else{
                        return false
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    return false

                });

        },

        logOut: function (state) {
            state.loggedInUser = {};
            state.token = '';
            localStorage.removeItem('token');
            axios.post(this.baseUrl+'/users'+'/me/logout', {})
                .then(function (response) {
                    console.log(response);
                    return true
                })
                .catch(function (error) {
                    console.log(error);
                    return false
                });
        },
        signUp: function ({commit}, user) {
            console.log("In signUp in store")
            //http request to signup
            axios.post(this.baseUrl+'/users', user)
                .then(function (response) {
                    console.log(response);
                    if (response.body.user===true) {
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
        editUserInfo:function ({commit},user) {
            axios.patch(this.baseUrl+'/users'+'/me',{user}, this.config )
                .then((response) => {
                    console.log(response);
                    commit('setLoggedInUser',response.body.user)
                    return true

                }, (error) => {
                    console.log(error);
                    return false
                });
        },
        getWorkshopsFromServer:function ({commit}) {
            axios.get(this.baseUrl+'/workshops')
                .then(function (response) {
                    // handle success
                    console.log(response);
                    this.setAllWorkshops(response.body)
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        },
        getUserFromServer:function ({commit}) {
            axios.get(this.baseUrl+'/users'+'/me',this.config)
                .then(function (response) {
                    // handle success
                    console.log(response);
                    this.setLoggedInUser(response.body.user)
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
