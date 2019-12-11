import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: localStorage.getItem('token') || '',
        loggedInUser: {},
        baseUrl:'',
        baseUserUrl : '' + '/users',
    },
    mutations: {
        SetToken: function (state, newToken) {
            state.token = newToken;
            localStorage.setItem('token', newToken);
        },

        SetLoggedInUser: function (state, user) {
            state.loggedInUser = user;
        },

        LogOut: function (state) {
            state.loggedInUser = {};
            state.token = '';
            localStorage.removeItem('token');
        },
        SetUsers: function (state, items) {
            state.allUsers = items;
        }
    },
    actions: {
        LogIn: function ({commit}, userToLogIn) {
            console.log('login called');

            //http request to login
            axios.post(this.baseUserUrl+'/login', {
                email: userToLogIn.email,
                password: userToLogIn.password
            })
                .then(function (response) {
                    console.log(response);
                    if(response.body.user===true){
                        //set the token
                        commit('SetToken',response.body.token)

                        //send new http request to get the full user info
                        axios.get(this.baseUserUrl+'/me')
                            .then(function (response) {
                                // handle success
                                console.log(response);
                                commit('SetLoggedInUser',response.body.user)
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
                });

        },
        SignUp: function ({commit}, user) {
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
                        console.log("signUp OK")
                        return true;
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });

        }
    },
    getters: {
        IsLoggedIn: (state) => {
            return state.token !== '';
        },
        GetLoggedInUser: function (state) {
            return state.loggedInUser;
        },
        GetAllUsers: function (state) {
            return state.allUsers;
        }
    }
})
