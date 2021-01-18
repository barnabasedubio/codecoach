<template>
	<h2>Available Coaches</h2>
	<ul class="list-no-decoration">
		<li v-for="coach in coachList" :key="coach.id">
			<coach-item
				:id="coach.id"
				:name="coach.name"
				:languages="coach.languages"
				:salary="coach.salary"
				:description="coach.description"
				:profileClicked="false"
			></coach-item>
		</li>
	</ul>
</template>

<script>
import CoachItem from "./CoachItem.vue";
export default {
	components: {
		CoachItem
	},
	computed: {
		coachList() {
			return this.$store.getters["coaches/getCurrentCoachList"];
		},
		selectedCoachId() {
			return this.$store.getters["coaches/selectedCoachId"];
		}
	},
	watch: {
		"$store.state.coaches.selectedCoachId"() {
			if (this.$store.state.coaches.selectedCoachId) {
				// remove all coaches except the selected coach
			}
		}
	}
};
</script>

<style scoped>
h2 {
	margin-top: 2rem;
	margin-bottom: -1rem;
}
</style>
