import { createStore } from 'vuex'
import axios from "axios";
import { sidebarModule } from '@/store/modules/sidebarModule'

export default createStore({
  state: () => ({
    serverURL: "http://127.0.0.1:3000/api/v1",
  }),
  mutations: {
  },
  actions: {
  },
  getters: {
    serverAccess: state => axios.create({
      baseURL: state.serverURL,
      headers: {
        //here would go token
      }
    }),
  },
  modules: {
    sidebar: sidebarModule,
  }
})
