import { createStore } from "vuex";
import authentication from "./modules/authentication.js";
import preferences from "./modules/preferences.js";
import requests from "./modules/requests.js";

const store = createStore({
	modules: {
		authentication,
		preferences,
		requests
	}
});

export default store;
