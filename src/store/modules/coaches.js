import coachList from "../../data/coachList.js";

export default {
	namespaced: true,
	state() {
		return {
			coachList
		};
	},
	getters: {
		getCoachList(state) {
			return state.coachList;
		},
		getCoachListLanguages(state) {
			// return a set of all languages supported by the coaches
			const languages = [];
			state.coachList.forEach(coach => {
				coach.languages.forEach(lang => {
					if (!languages.includes(lang)) {
						languages.push(lang);
					}
				});
			});
			return languages;
		}
	}
};
