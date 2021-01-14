import { createStore } from "vuex";
import authentication from "./modules/authentication.js";
import requests from "./modules/requests.js";
import coaches from "./modules/coaches.js";
import preferences from "./modules/preferences.js";

const store = createStore({
	modules: {
		authentication,
		requests,
		coaches,
		preferences
	}
});

export default store;
