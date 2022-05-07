import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home/index.vue'
import Detail from '@/pages/Detail/index.vue'

const routes = [
	{
		path: '/', name: 'Home', component: Home,
	},
	{
		path: '/detail',name: 'Detail', component: Detail
	}
]
const router = createRouter({
	history: createWebHistory(),
	routes,

})

export default router