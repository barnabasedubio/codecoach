<template>
	<coach-item
		:id="coachId"
		:name="name"
		:languages="languages"
		:salary="salary"
		:description="description"
		:profileClicked="true"
	></coach-item>
	<div>
		<textarea
			name=""
			id=""
			cols="30"
			rows="10"
			placeholder="keep it short dumbass"
			ref="requestText"
		></textarea>
		<base-button @click="addRequest">Send coaching request</base-button>
	</div>
</template>

<script>
import CoachItem from "./CoachItem.vue";
import BaseButton from "../base/BaseButton.vue";
import generateID from "../../data/generateID";
export default {
	props: {
		coachId: String
	},
	components: {
		CoachItem,
		BaseButton
	},
	data() {
		return {
			name: "",
			languages: [],
			salary: 0,
			description: ""
		};
	},
	methods: {
		addRequest() {
			const requestText = this.$refs.requestText.value;
			if (!requestText) {
				alert("The request body can not be empty");
				return;
			}
			const requestObject = {
				requestId: generateID(),
				coachId: this.coachId,
				requestText
			};
			this.$store.dispatch("requests/addRequest", requestObject);
			this.$refs.requestText.value = "";
		}
	},
	created() {
		const coachObject = this.$store.getters[
			"coaches/getAllCoachesList"
		].find(coach => coach.id === this.coachId);
		this.name = coachObject.name;
		this.languages = coachObject.languages;
		this.salary = coachObject.salary;
		this.description = coachObject.description;
	}
};
</script>

<style></style>
