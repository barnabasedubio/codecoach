<template>
	<header>
		<div class="header-content">
			<div class="header-title">
				<h2>
					<router-link class="router-link" to="/home"
						>codeCoach</router-link
					>
				</h2>
			</div>

			<div class="header-buttons">
				<router-link class="router-link" to="/home">
					<button class="header-button">
						view coaches
					</button>
				</router-link>

				<router-link class="router-link" to="/sent-requests">
					<button class="header-button">
						sent
					</button>
				</router-link>
				
				<button class="header-button">
					logout
				</button>
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
	height: 3rem;
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
.header-title h2 {
	font-size: 2rem;
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
.router-link {
	text-decoration: none;
}
</style>
