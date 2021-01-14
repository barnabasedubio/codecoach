export default {
	state() {
		return {
			languageObjects: [
				{
					language: "Java",
					selected: false
				},
				{
					language: "Python",
					selected: false
				},
				{
					language: "JavaScript",
					selected: false
				},
				{
					language: "C#",
					selected: false
				},
				{
					language: "PHP",
					selected: false
				}
			]
		};
	},
	getters: {
		getLanguageObjects(state) {
			return state.languageObjects;
		}
	}
};
