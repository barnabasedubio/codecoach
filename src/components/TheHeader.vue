<template>
	<header>
		<div class="header-content">
			<div class="header-title">
				<h2>
					<router-link class="router-link" to="/home"
						>CodeCoach</router-link
					>
				</h2>
			</div>

			<div class="header-buttons">
				<router-link class="router-link" to="/home">
					<base-button class="header-button">
						View coaches
					</base-button>
				</router-link>

				<router-link class="router-link" to="/sent-requests">
					<base-button class="header-button">
						Sent
					</base-button>
				</router-link>
				<router-link to="/home">
					<base-button class="header-button">
						Logout
					</base-button>
				</router-link>
			</div>
		</div>
	</header>
</template>

<script>
import BaseButton from "./base/BaseButton.vue";
export default {
	components: {
		BaseButton
	}
};
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
	min-width: 20rem;
	float: right;
	display: flex;
	justify-content: space-between;
}

.header-button {
	border: 0 !important;
	position: relative;
	top: 50%;
	transform: translateY(-50%);
}

.header-button:focus {
	outline: none;
}

.router-link {
	text-decoration: none;
	color: black;
}
</style>
