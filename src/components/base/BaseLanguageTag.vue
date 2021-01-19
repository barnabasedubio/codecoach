<template>
	<button class="base-language-button buttton-no-focus">
		<slot></slot>
	</button>
</template>

<script>
export default {};
</script>

<style scoped>
.base-language-button {
	padding: 0.25rem 1.5rem;
	border-radius: 30px;
	margin-left: 1rem;
	background-color: rgba(255, 255, 255, 0.15);
	color: white;
}
</style>
