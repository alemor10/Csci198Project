import axios from 'axios';
import router from '../router';

//const BASE_URL = 'http://localhost:5000'


const state = {
    token: localStorage.getItem('token') || '',
    user: {},
    instructors: [],
    role: '',
    status: '',
    error: null
};

const getters = {

    isLoggedIn: state => !!state.token,
    authState: state => state.status,
    user: state => state.user,
    role: state => state.role,
    error: state => state.error,
    instructors: state => state.instructors
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
    // Get the list of instructors
    async getInstructors({
        commit
    }) {
        commit('profile_request');
        let res = await axios.get('http://localhost:5000/users/instructors')
        commit('instructors', res.data)
        return res;
    },


    //send 198 form
    async submit198Form ({
        commit
    },userData) {
        try {
            commit('profile_request');
            let res = await axios.post('http://localhost:5000/students/csci198', userData);
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
            let res = await axios.post('http://localhost:5000/students/csci298', userData);
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
            let res = await axios.post('http://localhost:5000/students/csci190', userData);
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
            let res = await axios.post('http://localhost:5000/students/csci290', userData);
            if (res.data.success) {
                commit('update_success');
            }
            return res;
        } 
        catch (err) {
            commit('update_error', err)
        }
    },
    //send 198 form to Instructor
    async submit198ToInstructor ({
        commit
    },userData) {
        try {
            commit('profile_request');
            let res = await axios.post('http://localhost:5000/instructors/send198form', userData);
            if (res.data.success) {
                commit('update_success');
            }
            return res;
        } 
        catch (err) {
            commit('update_error', err)
        }
    },
    //send 298 form to Instructor
    async submit298ToInstructor ({
        commit
    },userData) {
        try {
            commit('profile_request');
            let res = await axios.post('http://localhost:5000/instructors/send298form', userData);
            if (res.data.success) {
                commit('update_success');
            }
            return res;
        } 
        catch (err) {
            commit('update_error', err)
        }
    },
    async submit190ToInstructor ({
        commit
    },userData) {
        try {
            commit('profile_request');
            let res = await axios.post('http://localhost:5000/instructors/send190form', userData);
            if (res.data.success) {
                commit('update_success');
            }
            return res;
        } 
        catch (err) {
            commit('update_error', err)
        }
    },
    async submit290ToInstructor ({
        commit
    },userData) {
        try {
            commit('profile_request');
            let res = await axios.post('http://localhost:5000/instructors/send290form', userData);
            if (res.data.success) {
                commit('update_success');
            }
            return res;
        } 
        catch (err) {
            commit('update_error', err)
        }
    },

        //send 198 form to Instructor
        async approve198 ({
            commit
        },userData) {
            try {
                commit('profile_request');
                let res = await axios.post('http://localhost:5000/instructors/approve198form', userData);
                if (res.data.success) {
                    commit('update_success');
                }
                return res;
            } 
            catch (err) {
                commit('update_error', err)
            }
        },
        //send 298 form to Instructor
        async approve298 ({
            commit
        },userData) {
            try {
                commit('profile_request');
                let res = await axios.post('http://localhost:5000/instructors/approve298form', userData);
                if (res.data.success) {
                    commit('update_success');
                }
                return res;
            } 
            catch (err) {
                commit('update_error', err)
            }
        },
        async approve190 ({
            commit
        },userData) {
            try {
                commit('profile_request');
                let res = await axios.post('http://localhost:5000/instructors/approve190form', userData);
                if (res.data.success) {
                    commit('update_success');
                }
                return res;
            } 
            catch (err) {
                commit('update_error', err)
            }
        },
        async approve290 ({
            commit
        },userData) {
            try {
                commit('profile_request');
                let res = await axios.post('http://localhost:5000/instructors/approve290form', userData);
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
    instructors(state,user) {
        state.instructors = user
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};