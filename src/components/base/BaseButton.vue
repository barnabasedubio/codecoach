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
	border: 1px solid white;
	background-color: transparent;
	border-radius: 5px;
	padding: 0.5rem 1rem;
	color: white;
}

.base-button:focus {
	outline: none;
}

.base-button:hover {
	background-color: rgba(255, 255, 255, 0.15);
	color: white;
}
</style>
