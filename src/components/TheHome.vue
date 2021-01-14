<template>
	<main>
		<the-preferences></the-preferences>
		<coach-list></coach-list>
	</main>
</template>

<script>
import ThePreferences from "./ThePreferences.vue";
import CoachList from "./coaches/CoachList.vue";
export default {
	components: {
		ThePreferences,
		CoachList
	}
};
</script>

<style>
main {
	border: 1px solid red;
	min-height: 90vh;
	width: 60%;
	margin: 0 auto;
	padding: 1rem;
}
</style>
