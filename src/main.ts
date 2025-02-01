import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import routes from './routes'
import 'aos/dist/aos.css'
import 'animate.css'


const app = createApp(App)
app.use(routes)
app.mount('#app')

// createApp(App).use(routes).mount('#app')
