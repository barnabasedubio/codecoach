import coachList from "../../data/coachList.js";

export default {
	namespaced: true,
	state() {
		return {
			coachList: coachList,
			// deep copy of initial coach list
			initialCoachList: JSON.parse(JSON.stringify(coachList))
		};
	},
	mutations: {
		UPDATE_COACH_LIST(state, selectedLanguages) {
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
		},
		UPDATE_SELECTED_COACH_ID(state, coachId) {
			state.selectedCoachId = coachId;
		}
	},
	getters: {
		getCurrentCoachList(state) {
			return state.coachList;
		},
		getAllCoachesList(state) {
			return state.initialCoachList;
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
			context.commit("UPDATE_COACH_LIST", selectedLanguages);
		},
		getCoachInfoById(context, coachId) {
			return context.state.initialCoachList.find(
				coachObj => coachObj.id === coachId
			);
		}
	}
};
