<template>
	<the-header></the-header>
	<router-view></router-view>
	<the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
export default {
	components: {
		TheHeader,
		TheFooter
	}
};
</script>

<style>
* {
	border: 0;
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: "Segoe UI", sans-serif;
}

html,
body,
#app {
	min-height: 100vh;
}

#app {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.inline {
	display: inline;
}

.list-no-decoration {
	list-style-type: none;
}
</style>
