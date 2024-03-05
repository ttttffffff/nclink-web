import Vue from 'vue'
import Router from 'vue-router'
import Server from '@/components/Server'
import Sub from '@/components/Sub'
import Pub from '@/components/Pub'


Vue.use(Router)

export default new Router({
	routes: [
		
		{
			path: '/server',
			component: Server
		},
		{
			path: '/sub',
			component: Sub
		},
		{
			path: '/pub',
			component: Pub
		},
		
	
	]
})
