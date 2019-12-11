import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: localStorage.getItem('token') || '',
        loggedInUser: {},
        allUsers: [],
        baseUrl:'',
        baseUserUrl : this.baseUrl + '/users',
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
            commit('setLoggedInUser', userToLogIn);
            //http request to login
            axios.post(this.baseUserUrl+'/login', {
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

                            })
                            .catch(function (error) {
                                // handle error
                                console.log(error);
                            })
                            .finally(function () {
                                // always executed
                            });
                        return true;
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
            // if response ok - > commit('setToken', response)
            //else
        },
        signUp: function ({commit}, user) {
            //http request to signup
            axios.post(this.baseUrl+'/user', {
                firstname: user.firstName,
                lastname: user.lastName,
                email: user.email,
                password: user.password
            })
                .then(function (response) {
                    console.log(response);
                    if (response.body.user===true) {
                        return true;
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });

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
