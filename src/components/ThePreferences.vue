<template>
	<h2>Your Preferences</h2>
	<div class="preferences-bar">
		<ul class="inline">
			<li
				class="inline"
				v-for="langObj in languageObjectList"
				:key="langObj.language"
			>
				<base-language-tag
					class="clickable"
					:class="{ selected: langObj.isSelected }"
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
	computed: {
		languageObjectList() {
			return this.$store.getters["preferences/getLanguageObjectList"];
		},
		languages() {
			return this.languageObjectList.map(langObj => langObj.language);
		}
	},
	methods: {
		toggleSelection(language) {
			// dispatch action telling vuex to toggle the isSelected property of this language
			this.$store.dispatch(
				"preferences/toggleLanguageIsSelected",
				language
			);
		}
	},
	created() {
		// initialize languageObject list in vuex
		this.$store.dispatch("preferences/initializePreferences");
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
