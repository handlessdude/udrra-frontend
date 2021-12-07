export const sidebarModule = {
    state: () => ({
        isCollapsed: true,
        SIDEBAR_WIDTH : 180,
        SIDEBAR_WIDTH_COLLAPSED: 38,
    }),
    getters: {
        getSidebarWidth(state){
            return `${state.isCollapsed ? state.SIDEBAR_WIDTH_COLLAPSED : state.SIDEBAR_WIDTH}px`
        },
        getMinSidebarWidth(state){
            return `${state.SIDEBAR_WIDTH_COLLAPSED}px`
        }
    },
    mutations: {
        toggleSidebar(state) {
            state.isCollapsed = !state.isCollapsed
        },
    },
    actions: {

    },
    namespaced: true
}
