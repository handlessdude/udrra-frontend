import axios from "axios";
//const api_url = store.state.serverURL+"/tracks";
//const tracksAxios = store.state.serverAccess
import {useRoute, useRouter} from 'vue-router'
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
            const router = useRouter()
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
                await router.push('/404')
                return e
            } finally {
                commit("setLoading", false)
            }
        },
    },
    mutations: {
        setTrack: (state, track) => (state.track = track),
        setLoading(state, bool) {
            state.loading = bool
        },
    },
    namespaced: true
}
