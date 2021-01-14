<template>
	<h2>Your Preferences</h2>
	<div class="preferences-bar">
		<ul class="inline">
			<li class="inline" v-for="langObj in languageObjectList" :key="langObj.language">
				<base-language-tag
					class="clickable"
					:class="{selected: langObj.isSelected}"
					@click="toggleSelection(langObj.language)"
					>{{ langObj.language }}</base-language-tag
				>
			</li>
		</ul>
	</div>
</template>

<script>
import BaseLanguageTag from "./base/BaseLanguageTag.vue";
export default {
	components: {
		BaseLanguageTag
	},
	data() {
		return {
			languageObjectList: [
				{
					language: "Java",
					isSelected: false
				},
				{
					language: "Python",
					isSelected: false
				},
				{
					language: "JavaScript",
					isSelected: false
				},
				{
					language: "C#",
					isSelected: false
				},
				{
					language: "PHP",
					isSelected: false
				}
			]
		};
	},
	computed: {
		languages() {
			return this.languageObjectList.map(
				langObj => langObj.language
			);
		},
		selectedLanguages() {
			const selectedLanguages = this.languageObjectList
				.filter(langObj => langObj.isSelected)
				.map(langObj => langObj.language);
			return selectedLanguages;
		}
	},
	methods: {
		toggleSelection(language) {
			this.languageObjectList.forEach(langObj => {
				if (langObj.language === language) {
					langObj.isSelected = !langObj.isSelected;
				}
			});
		}
	},
	watch: {
		selectedLanguages(newValues) {
			// dispatch
			console.log(newValues);
		}
	}
};
</script>

<style>
.preferences-bar {
	border: 1px solid red;
	height: 2.5rem;
}
.clickable {
	cursor: pointer;
}
.selected {
	color: white;
	background-color: purple;
}
</style>
