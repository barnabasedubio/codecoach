<template>
	<div class="request-list">
		<h2>Sent requests</h2>
		<ul>
			<li
				class="request-list-item"
				v-for="request in requestList"
				:key="request.requestId"
			>
				<request-item :request="request"></request-item>
			</li>
		</ul>
	</div>
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

<style scoped>
.request-list {
	width: 60%;
	min-height: 90vh;
	margin: 0 auto;
	padding: 1rem;
}

.request-list-item {
	list-style-type: none;
}
</style>
