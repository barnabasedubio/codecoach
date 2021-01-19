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
				<base-button
					@click="toggleAuth"
					class="button-auth header-button"
				>
					{{ loginText }}
				</base-button>
			</div>
		</div>
	</header>
</template>

<script>
import BaseButton from "./base/BaseButton.vue";
export default {
	components: {
		BaseButton
	},
	computed: {
		loginText() {
			if (this.$store.getters["authentication/isLoggedIn"])
				return "Logout";
			else return "Login";
		}
	},
	methods: {
		toggleAuth() {
			if (this.$store.getters["authentication/isLoggedIn"]) {
				this.$store.dispatch("authentication/logout");
			} else {
				this.$store.dispatch("authentication/login");
			}
		}
	}
};
</script>

<style scoped>
header {
	background-color: rgba(255, 255, 255, 0.15);
	height: 3rem;
}
.header-content {
	height: 100%;
	width: 60%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
}
.header-title {
	display: inline-block;
}
.header-title h2 {
	font-size: 2rem;
}
.header-buttons {
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
	color: #ddd;
}

.header-button:focus {
	outline: none;
}

.button-auth {
	height: 2.2rem;
	width: 5rem;
}

.router-link {
	color: #eee;
	text-decoration: none;
}
</style>
