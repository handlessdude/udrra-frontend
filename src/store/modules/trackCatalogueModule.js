import axios from "axios";
//const api_url = store.state.serverURL+"/tracks";
//const tracksAxios = store.state.serverAccess

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
                const response = await axios.get(url, {
                    headers: {
                        "accept": "application/json",
                        'Access-Control-Allow-Origin': '*',
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
        async addTodo({ commit }, title) {
            //const url = store.state.serverURL+"/tracks"
            const url = process.env.VUE_APP_ROOT_API+"/tracks"
            const response = await axios.post(url,
                {
                    todo: {
                        title,
                        completed: false
                    }
                });
            commit('newTodo', response.data);
        },
        async deleteTrack({ commit, state }, trackId) {
            //const url = store.state.serverURL+"/tracks"
            const url = process.env.VUE_APP_ROOT_API+"/tracks"
            try {
                await axios.delete(url + `/${trackId}`);
                //commit("setTracks", state.tracks.filter(t => t.id !== trackId))
                commit("setTracks", state.tracks.filter(t => t.id !== trackId))
            } catch (e) {
                console.log(e)
                return e
            }
        },
    },
    mutations: {
        setTracks: (state, tracks) => (state.tracks = tracks),
        /*newTodo: (state, track) => (state.tracks.unshift(track)),
        removeTrack: (state, id) =>
            (state.tracks.filter(track => track.id !== id)),
        setUpdatedTodo: (state, updatedTrack) => {
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
