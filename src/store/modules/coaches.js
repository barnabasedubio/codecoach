import coachList from "../../data/coachList.js";

export default {
	state() {
		return {
			coachList
		};
	},
	getters: {
		getCoachList(state) {
			return state.coachList;
		}
	}
};
