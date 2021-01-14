<template>
	<h2>Your Preferences</h2>
	<div class="preferences-bar">
		<ul class="inline">
			<li class="inline" v-for="lang in languages" :key="lang">
				<base-language-tag class="clickable">{{ lang }}</base-language-tag>
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
		languageObjects() {
			return this.$store.getters.getLanguageObjects
		},
		languages() {
			return this.languageObjects.map(languageObject => languageObject.language)
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
</style>
