import { createRouter, createWebHistory } from "vue-router";

import TheHome from "./components/TheHome.vue";
import CoachItem from "./components/coaches/CoachItem.vue";
import RequestList from "./components/requests/RequestList.vue";
import TheNotFound from "./components/TheNotFound.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			name: "root",
			path: "/",
			redirect: "/home"
		},
		{
			name: "coaches",
			path: "/home",
			component: TheHome
		},
		{
			name: "coach",
			path: "/profile/:coachId",
			component: CoachItem
		},
		{
			name: "requests",
			path: "/sent-requests",
			component: RequestList
		},
		{
			name: "catch-all",
			path: "/:notFound(.*)",
			component: TheNotFound
		}
	]
});

export default router;
