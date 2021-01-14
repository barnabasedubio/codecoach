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
		}
	}
};
