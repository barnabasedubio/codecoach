<template>
	<button class="base-button clickable">
		<slot></slot>
	</button>
</template>

<script>
export default {};
</script>

<style scoped>
.base-button {
	border: 1px solid #888;
	background-color: transparent;
	border-radius: 5px;
	padding: 0.5rem 1rem;
}

.base-button:hover {
	background-color: #555;
	color: white;
}
</style>
