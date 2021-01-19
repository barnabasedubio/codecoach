<template>
	<div v-if="isLoggedIn">
		<h2>Select Your Preferences</h2>
		<div class="preferences-bar">
			<ul class="inline">
				<li
					class="inline"
					v-for="langObj in languageObjectList"
					:key="langObj.language"
				>
					<base-language-tag
						class="clickable v-align"
						:class="{ selected: langObj.isSelected }"
						@click="toggleSelection(langObj.language)"
						>{{ langObj.language }}</base-language-tag
					>
				</li>
			</ul>
		</div>
	</div>
	<div v-else>
		<h2>Please login to select your preferences.</h2>
	</div>
</template>

<script>
import BaseLanguageTag from "./base/BaseLanguageTag.vue";
export default {
	components: {
		BaseLanguageTag
	},
	computed: {
		isLoggedIn() {
			return this.$store.getters["authentication/isLoggedIn"];
		},
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

<style scoped>
.preferences-bar {
	height: 2.5rem;
	margin-top: 0.5rem;
	background-color: #eee;
	border-radius: 20px;
}
.clickable {
	cursor: pointer;
}
.selected {
	color: white;
	background-color: #555;
}
.v-align {
	position: relative;
	top: 50%;
	transform: translateY(-50%);
}
</style>
