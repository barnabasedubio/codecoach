import axios from "axios";

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
			// todo: dispatch action to push new change to backend
			axios
				.post(
					"https://vue-http-demo-53d48-default-rtdb.europe-west1.firebasedatabase.app/requests.json",
					requestObject
				)
				.catch(error => {
					if (error.response) {
						// The request was made and the server responded with a status code
						// that falls out of the range of 2xx
						console.log(error.response.data);
						console.log(error.response.status);
						console.log(error.response.headers);
					} else if (error.request) {
						// The request was made but no response was received
						console.log(error.request);
					} else {
						// Something happened in setting up the request that triggered an Error
						console.log("Error", error.message);
					}
				});
		},
		populateRequestList(context) {
			if (context.state.requestList.length === 0) {
				// initial loading of app. Get request list from backend.
				axios
					.get(
						"https://vue-http-demo-53d48-default-rtdb.europe-west1.firebasedatabase.app/requests.json"
					)
					.then(response => {
						const data = response.data;
						let resultsList = [];
						for (const id in data) {
							resultsList.push({
								requestId: data[id].requestId,
								coachId: data[id].coachId,
								requestText: data[id].requestText
							});
						}
						// newest requests should be at the top
						resultsList = resultsList.reverse();
						context.commit("INITIALIZE_REQUEST_LIST", resultsList);
					})
					.catch(error => {
						// handle
						return error;
					});
			}
		}
	}
};
