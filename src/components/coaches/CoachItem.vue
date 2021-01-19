<template>
	<div class="coach-card">
		<h1 class="coach-card-item">{{ name }}</h1>

		<div class="coach-card-item">
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
		</div>

		<h4 class="coach-card-item" v-if="profileClicked">About me</h4>

		<p class="coach-card-item">{{ description }}</p>

		<div v-if="!profileClicked">
			<div class="section-view-profile">
				<router-link :to="/coach/ + id">
					<base-button class="button-view-profile"
						>View Profile</base-button
					>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import BaseLanguageTag from "../base/BaseLanguageTag.vue";
import BaseButton from "../base/BaseButton.vue";
export default {
	props: {
		id: String,
		name: String,
		languages: Array,
		salary: Number,
		description: String,
		profileClicked: Boolean
	},
	components: {
		BaseLanguageTag,
		BaseButton
	},
	methods: {
		visitCoachProfile() {
			return;
		}
	}
};
</script>

<style scoped>
.coach-card {
	background-color: rgba(255, 255, 255, 0.15);
	border-radius: 5px;
	margin-top: 2rem;
	padding: 0.5rem 1rem 1rem;
}
.salary-text {
	display: inline-block;
}
.list-item-base-language-tag {
	display: inline;
}
.section-view-profile {
	overflow: hidden;
}
.button-view-profile {
	float: right;
	color: white;
	border: 1px solid white;
	margin-top: 1rem;
}
.coach-card-item {
	margin-top: 0.5rem;
	color: white;
}
</style>
