export default {
	namespaced: true,

	state() {
		return {
			requestList: []
		};
	},
	getters: {
		getRequestList(state) {
			return state.requestList;
		}
	},
	mutations: {
		ADD_REQUEST(state, requestObject) {
			state.requestList.unshift(requestObject);
		},
		INITIALIZE_REQUEST_LIST(state, requestList) {
			state.requestList = requestList;
		}
	},
	actions: {
		addRequest(context, requestObject) {
			context.commit("ADD_REQUEST", requestObject);
		}
	}
};
