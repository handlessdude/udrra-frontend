import axios from "axios";
//const api_url = store.state.serverURL+"/tracks";
//const tracksAxios = store.state.serverAccess
import { useStore } from 'vuex'

export const trackCatalogueModule = {
    state: () => ({
        tracks: [],
        loading: false,
    }),
    getters: {
        allTracks: (state) => state.tracks,
        loading: (state) => state.loading,
    },
    actions: {
        async fetchTracks({ commit }) {
            try {
                commit("setLoading", true)
                //const url = store.state.serverURL+"/tracks"
                const url = process.env.VUE_APP_ROOT_API+"/tracks"
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
                commit('setTracks', response.data.data)
                //console.log(response)
                console.log(response)
                return response.data.data
            } catch (e) {
                console.log(e)
                return e
            } finally {
                commit("setLoading", false)
            }
        },
        async addTrack({ commit }, track) {
            //const url = store.state.serverURL+"/tracks"
            const url = process.env.VUE_APP_ROOT_API+"/tracks"
            const response = await axios.post(url, track)
            commit('newTrack', response.data)
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
        },
    },
    mutations: {
        setTracks: (state, tracks) => (state.tracks = tracks),
        /*newTrack: (state, track) => (state.tracks.unshift(track)),
        removeTrack: (state, id) =>
            (state.tracks.filter(track => track.id !== id)),
        setUpdatedTrack: (state, updatedTrack) => {
            const index = state.tracks.findIndex(track => track.id === updatedTrack.id);
            if (index !== -1) {
                state.tracks.splice(index, 1, updatedTrack);
            }
        },*/
        setLoading(state, bool) {
            state.loading = bool
        },
    },
    namespaced: true
}
