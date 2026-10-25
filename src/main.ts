import {createApp} from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router';
import routes from "./config/router"
import "../public/icon/iconfont.js"
import "../public/icon/iconfont.css"
// Toast / Dialog（Vant 4 通过函数式 API 调用，组件由 unplugin-vue-components 按需引入）
import 'vant/es/toast/style';
import 'vant/es/dialog/style';
import './global.css'
import ChatPage from "./pages/Chat/ChatPage.vue";


const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHistory(),
    routes, // `routes: routes` 的缩写
})
const app = createApp(App);
app.use(router)
app.component("chat-layout", ChatPage)
app.mount('#app')
