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
			return this.$store.getters["coaches/getCoachList"];
		}
	}
};
</script>

<style></style>
