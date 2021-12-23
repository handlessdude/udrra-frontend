import axios from "axios";
//const api_url = store.state.serverURL+"/tracks";
//const tracksAxios = store.state.serverAccess
import { useRoute } from 'vue-router'
import {useStore} from "vuex";
export const trackModule = {
    state: () => ({
        track: {},
        loading: false,
    }),
    getters: {
        track: (state) => state.track,
        loading: (state) => state.loading,
    },
    actions: {
        async fetchTrack({ commit }) {
            try {
                commit("setLoading", true)
                const route = useRoute()
                const trackId = route.params.id
                const url = process.env.VUE_APP_ROOT_API+ `/tracks/${trackId}`
                const store = useStore()
                const response = await axios.get(url, {
                    headers: {
                        //"Content-Type": "application/json",
                        "accept": "application/json",
                        "accessToken": store.state.auth.user.accessToken,
                    },
                    params: {
                        "userID": store.state.auth.user.user_info.id
                    }
                })
                commit('setTrack', response.data.data)
                console.log(response)
                return response
            } catch (e) {
                console.log(e)
                return e
            } finally {
                commit("setLoading", false)
            }
        },
        /*async fetchTracks({ commit }) {
            try {
                commit("setLoading", true)
                //const url = store.state.serverURL+"/tracks"
                const url = process.env.VUE_APP_ROOT_API+"/tracks"
                const response = await axios.get(url, {
                    headers: {
                        "accept": "application/json",
                        //"Content-Type": "application/json",
                    }
                })
                commit('setTracks', response.data)
                console.log(response.data)
                return response
            } catch (e) {
                console.log(e)
                return e
            } finally {
                commit("setLoading", false)
            }
        },
        async addTrack({ commit }, title) {
            //const url = store.state.serverURL+"/tracks"
            const url = process.env.VUE_APP_ROOT_API+"/tracks"
            const response = await axios.post(url,
                {
                    track: {
                        title,
                        completed: false
                    }
                });
            commit('newTrack', response.data);
        },
        async deleteTrack({ commit, state }, trackId) {
            //const url = store.state.serverURL+"/tracks"
            console.log('удаляем трек ', trackId)
            const url = process.env.VUE_APP_ROOT_API+"/tracks"
            try {
                await axios.delete(url + `/${trackId}`)
                commit("setTracks", state.tracks.filter(t => t.id !== trackId))
            } catch (e) {
                console.log(e)
                return e
            }
        },*/
    },
    mutations: {
        setTrack: (state, track) => (state.track = track),
        setLoading(state, bool) {
            state.loading = bool
        },
    },
    namespaced: true
}
