import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from '@/components/MicroComponents'
import '@fortawesome/fontawesome-free/js/all'
import './styles.scss'

const app = createApp(App)

//global registration for simple reusable objects
components.forEach(component => {
    app.component(component.name, component)
})

app.use(router)
    .use(store)
    .mount('#app')
