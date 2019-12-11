import axios from 'axios';
import router from '../router';

//const BASE_URL = 'http://localhost:5000'


const state = {
    token: localStorage.getItem('token') || '',
    user: {},
    role: '',
    status: '',
    error: null
};

const getters = {

    isLoggedIn: state => !!state.token,
    authState: state => state.status,
    user: state => state.user,
    role: state => state.role,
    error: state => state.error
};

const actions = {
    // Login Action
    async login({
        commit
    }, user) {
        commit('auth_request');
        try {
            let res = await axios.post('http://localhost:5000/users/login', user)
            if (res.data.success) {
                const token = res.data.token;
                // Store the token into the localstorage
                localStorage.setItem('token', token);
                // Set the axios defaults
                axios.defaults.headers.common['Authorization'] = token;
                commit('auth_success', token, user);
                
                
            }
            return res;
        } catch (err) {
            commit('auth_error', err);
        }
    },
    // Logout the user
    async logout({
    commit
    }) {
        await localStorage.removeItem('token');
        commit('logout');
        delete axios.defaults.headers.common['Authorization'];
        router.push('/login');
        return
    },

    async register({
        commit
    }, userData) {
        try {
            commit('register_request');
            let res = await axios.post('http://localhost:5000/users/register', userData);
            if (res.data.success !== undefined) {
                commit('register_success');
            }
            return res;
        } catch (err) {
            commit('register_error', err)
        }
    },
    // Get the user Profile
    async getProfile({
        commit
    }) {
        commit('profile_request');
        let res = await axios.get('http://localhost:5000/users/profile')

        commit('user_profile', res.data.user)
        return res;
    },
    //update the user profile 
    async updateProfile ({
        commit
    },userData) {
        try {
            commit('profile_request');
            let res = await axios.post('http://localhost:5000/users/updateprofile', userData);
            if (res.data.success) {
                commit('update_success');
            }
            return res;
        } catch (err) {
            commit('update_error', err)
        }
    },
    //send 198 form
    async submit198Form ({
        commit
    },userData) {
        try {
            commit('profile_request');
            let res = await axios.post('http://localhost:5000/student/csci198', userData);
            if (res.data.success) {
                commit('update_success');
            }
            return res;
        } 
        catch (err) {
            commit('update_error', err)
        }
    },

    //send 298 form
    async submit298Form ({
        commit
    },userData) {
        try {
            commit('profile_request');
            let res = await axios.post('http://localhost:5000/student/csci298', userData);
            if (res.data.success) {
                commit('update_success');
            }
            return res;
        } 
        catch (err) {
            commit('update_error', err)
        }
    },
    //send 190 form
    async submit190Form ({
        commit
    },userData) {
        try {
            commit('profile_request');
            let res = await axios.post('http://localhost:5000/student/csci190', userData);
            if (res.data.success) {
                commit('update_success');
            }
            return res;
        } 
        catch (err) {
            commit('update_error', err)
        }
    },
    //send 290 form
    async submit290Form ({
        commit
    },userData) {
        try {
            commit('profile_request');
            let res = await axios.post('http://localhost:5000/student/csci290', userData);
            if (res.data.success) {
                commit('update_success');
            }
            return res;
        } 
        catch (err) {
            commit('update_error', err)
        }
    },
    //send form to Instructor
    async submitToInstructor ({
        commit
    },userData) {
        try {
            commit('profile_request');
            let res = await axios.post('http://localhost:5000/instructors/sendform', userData);
            if (res.data.success) {
                commit('update_success');
            }
            return res;
        } 
        catch (err) {
            commit('update_error', err)
        }
    },


};

const mutations = {   
    auth_request(state) {
        state.error = null
        state.status = 'loading'
    },
    auth_success(state, token, user) {
        state.token = token
        state.user = user
        state.status = 'success'
        state.error = null
    },
    auth_error(state, err) {
        state.error = err.response.data.msg
    },
    register_request(state) {
        state.error = null
        state.status = 'loading'
    },
    register_success(state) {
        state.error = null
        state.status = 'success'
    },
    register_error(state, err) {
        state.error = err.response.data.msg
    },
    logout(state) {
        state.error = null
        state.status = ''
        state.token = ''
        state.user = ''
        state.role = ''
    },
    profile_request(state) {
        state.status = 'loading'
    },
    update_success(state,user){
        state.user = user
        state.error = null
        state.status = 'success'
    },
    update_error(state, err) {
        state.error = err.response.data.msg
    },
    user_profile(state, user) {
        state.user = user
        state.role = user['role']
    },
};

export default {
    state,
    actions,
    mutations,
    getters
};