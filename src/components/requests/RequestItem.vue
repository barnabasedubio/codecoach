<template>
	<div class="request-item">
		<router-link class="coach-link" :to="/coach/ + coachInfo.id">
			<h3 class="inline">{{ coachInfo.name }}</h3>
		</router-link>
		<ul class="list-no-decoration inline">
			<li
				class="list-item-base-language-tag"
				v-for="lang in coachInfo.languages"
				:key="lang"
			>
				<base-language-tag>{{ lang }}</base-language-tag>
			</li>
		</ul>
		<p class="request-text">{{ request.requestText }}</p>
	</div>
</template>

<script>
import BaseLanguageTag from "../base/BaseLanguageTag.vue";
export default {
	props: {
		request: Object
	},
	components: {
		BaseLanguageTag
	},
	data() {
		return {
			coachInfo: {}
		};
	},
	methods: {
		getCoachInfo(coachId) {
			this.$store
				.dispatch("coaches/getCoachInfoById", coachId)
				.then(result => {
					this.coachInfo = result;
				});
		}
	},
	created() {
		this.getCoachInfo(this.request.coachId);
	}
};
</script>

<style scoped>
* {
	color: white
}
.request-item {
	background-color: rgba(255, 255, 255, 0.15);
	border-radius: 5px;
	margin-top: 2rem;
	padding: 1rem;
}

.coach-link {
	text-decoration: none;
	color: black;
}

.list-item-base-language-tag {
	display: inline;
}

.request-text {
	margin-top: 0.5rem;
}
</style>
