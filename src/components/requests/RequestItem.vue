<template>
	<div>
		<h3>{{ request.coachId }}</h3>
		<p>{{ request.requestText }}</p>
	</div>
</template>

<script>
export default {
	props: {
		request: Object
	}
};
</script>

<style></style>
