import { createRouter, createWebHistory } from "vue-router";

import CoachList from "./components/coaches/CoachList.vue";
import CoachItem from "./components/coaches/CoachItem.vue";
import RequestList from "./components/requests/RequestList.vue";
import TheNotFound from "./components/TheNotFound.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			name: "root",
			path: "/",
			redirect: "/coaches"
		},
		{
			name: "coaches",
			path: "/coaches",
			component: CoachList
		},
		{
			name: "coach",
			path: "/coaches/:coachId",
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
