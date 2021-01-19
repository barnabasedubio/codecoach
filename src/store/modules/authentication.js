export default {
	namespaced: true,
	state() {
		return {
			loggedIn: false
		};
	},
	getters: {
		isLoggedIn(state) {
			return state.loggedIn;
		}
	},
	mutations: {
		LOG_IN(state) {
			state.loggedIn = true;
		},
		LOG_OUT(state) {
			state.loggedIn = false;
		}
	},
	actions: {
		login(context) {
			context.commit("LOG_IN");
		},
		logout(context) {
			context.commit("LOG_OUT");
		}
	}
};
