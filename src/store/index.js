import { createStore } from 'vuex'
import axios from "axios";
import { sidebarModule } from '@/store/modules/sidebarModule'
import { trackCatalogueModule } from '@/store/modules/trackCatalogueModule';

export default createStore({
  state: () => ({
    serverURL: "http://127.0.0.1:3000/api/v1",
    serverAccess: state => axios.create({
      baseURL: state.serverURL,
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json",
      }
    }),
  }),
  mutations: {
  },
  actions: {
  },
  getters: {
    serverAccess: state => axios.create({
      baseURL: state.serverURL,
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json",
      }
    }),
  },
  modules: {
    sidebar: sidebarModule,
    trackCatalogue: trackCatalogueModule,
  }
})
