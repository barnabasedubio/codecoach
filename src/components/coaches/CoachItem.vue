<template>
	<div class="coach-item">
		<h1>{{ name }}</h1>
		<h3 class="salary-text">{{ salary }} / hour</h3>
		<ul class="list-no-decoration inline">
			<li
				class="list-item-base-language-tag"
				v-for="lang in languages"
				:key="lang"
			>
				<base-language-tag>{{ lang }}</base-language-tag>
			</li>
		</ul>
		<p>{{ description }}</p>
	</div>
</template>

<script>
import BaseLanguageTag from "../base/BaseLanguageTag.vue";
export default {
	props: {
		id: String,
		name: String,
		languages: Array,
		salary: Number,
		description: String
	},
	components: {
		BaseLanguageTag
	}
};
</script>

<style>
.coach-item {
	border: 1px solid red;
	border-radius: 5px;
	margin-top: 3rem;
	padding: 0.5rem 1rem 1rem;
}
.salary-text {
	display: inline-block;
}
.list-item-base-language-tag {
	display: inline;
}
</style>
