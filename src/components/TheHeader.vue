<template>
	<header>
		<div class="header-content">
			<div class="header-title">
				<h1>codeCoach</h1>
			</div>
			<div class="header-buttons">
				<button class="header-button">all coaches</button>
				<button class="header-button">sent</button>
				<button class="header-button">logout</button>
			</div>
		</div>
	</header>
</template>

<script>
export default {};
</script>

<style>
header {
	background-color: #ccc;
	height: 5%;
}
.header-content {
	/* border: 1px solid red; */
	height: 100%;
	width: 60%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
}
.header-title {
	/* border: 1px solid red; */
	display: inline-block;
}
.header-buttons {
	/* border: 1px solid red; */
	min-width: 25rem;
	float: right;
	display: flex;
	justify-content: space-between;
}
.header-button {
	padding: 0 2rem;
}
</style>
