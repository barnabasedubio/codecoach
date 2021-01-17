import { createRouter, createWebHistory } from "vue-router";

import TheHome from "./components/TheHome.vue";
import CoachDetail from "./components/coaches/CoachDetail.vue";
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
			path: "/coach/:coachId",
			component: CoachDetail,
			props: true
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
