<template>
	<ul>
		<li v-for="request in requestList" :key="request.requestId">
			<request-item :request="request"></request-item>
		</li>
	</ul>
</template>

<script>
import RequestItem from "./RequestItem.vue";
export default {
	components: {
		RequestItem
	},
	computed: {
		requestList() {
			return this.$store.getters["requests/getRequestList"];
		}
	},
	created() {
		this.$store.dispatch("requests/populateRequestList");
	}
};
</script>

<style></style>
