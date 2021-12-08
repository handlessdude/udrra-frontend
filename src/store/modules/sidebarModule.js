export const sidebarModule = {
    state: () => ({
        isCollapsed: true,
        SIDEBAR_WIDTH : 196,
        SIDEBAR_WIDTH_COLLAPSED: 54,
        SIDEBAR_PADDING : 8,
    }),
    getters: {
        getSidebarWidth(state){
            return `${state.isCollapsed ? state.SIDEBAR_WIDTH_COLLAPSED : state.SIDEBAR_WIDTH}px`
        },
        getSidebarPadding(state){
            return `${ state.SIDEBAR_PADDING }px`
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
