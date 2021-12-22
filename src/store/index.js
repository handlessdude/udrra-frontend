import { createStore } from 'vuex'
//import axios from "axios"
import { sidebarModule } from '@/store/modules/sidebarModule'
import { trackCatalogueModule } from '@/store/modules/trackCatalogueModule'
import {trackModule} from "@/store/modules/trackModule"
import { authModule } from "@/store/modules/authModule"

export default createStore({
  state: () => ({

  }),
  mutations: {
  },
  actions: {
  },
  getters: {
    /*serverAccess: state => axios.create({
      baseURL: process.env.VUE_APP_ROOT_API,
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json",
      }
    }),*/
  },
  modules: {
    sidebar: sidebarModule,
    trackCatalogue: trackCatalogueModule,
    track: trackModule,
    auth: authModule,
  }
})
