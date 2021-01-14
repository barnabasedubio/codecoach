export default {
	namespaced: true,

	state() {
		return {
			// gets filled with languageObjects upon app start
			languageObjectList: []
		};
	},
	mutations: {
		TOGGLE_IS_SELECTED(state, language) {
			state.languageObjectList.forEach(langObj => {
				if (langObj.language === language) {
					langObj.isSelected = !langObj.isSelected;
				}
			});
		}
	},
	getters: {
		getLanguageObjectList(state) {
			return state.languageObjectList;
		}
	},
	actions: {
		initializePreferences(context) {
			// initialization: setting the isSelected property to false for each language
			// this should only occur once - when the app is loaded
			// as soon as the app is loaded we populate languageObjectList
			if (context.state.languageObjectList.length === 0) {
				const allLanguages =
					context.rootGetters["coaches/getCoachListLanguages"];
				let langObj = null;
				allLanguages.forEach(lang => {
					langObj = {
						language: lang,
						isSelected: false
					};
					context.state.languageObjectList.push(langObj);
				});
			}
		},
		toggleLanguageIsSelected(context, language) {
			context.commit("TOGGLE_IS_SELECTED", language);

			// reload coach list

			// first: create array containing only languages where isSelected is true
			const selectedLanguages = context.state.languageObjectList
				.filter(langObj => langObj.isSelected)
				.map(langObj => langObj.language);

			// dispatch an action in coaches module with selected languages as parameter
			context.dispatch("coaches/updateCoachList", selectedLanguages, {
				root: true
			});
		}
	}
};
