import coachList from "../../data/coachList.js";

export default {
	namespaced: true,
	state() {
		return {
			coachList: coachList,
			initialCoachList: JSON.parse(JSON.stringify(coachList))
		};
	},
	mutations: {
		COACH_LIST_UPDATE(state, selectedLanguages) {
			// if there are no selected languages return initial coach list
			state.coachList = state.initialCoachList;
			if (selectedLanguages.length === 0) return;
			state.coachList = state.coachList.filter(coach => {
				let coachKnowsLanguage = false;
				coach.languages.forEach(lang => {
					if (selectedLanguages.includes(lang)) {
						coachKnowsLanguage = true;
					}
				});
				return coachKnowsLanguage;
			});
		}
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
	},
	actions: {
		updateCoachList(context, selectedLanguages) {
			context.commit("COACH_LIST_UPDATE", selectedLanguages);
		}
	}
};
