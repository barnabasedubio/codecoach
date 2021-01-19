<template>
	<div class="return-to-coaches">
		<router-link to="/home">
			<img class="left-arrow" src="../../assets/left-arrow.svg" />
			<h4 class="inline">Return to coaches</h4>
		</router-link>
	</div>
	<div class="coach-detail">
		<div class="coach-detail-content">
			<coach-item
				class="no-border no-margin-top"
				:id="coachId"
				:name="name"
				:languages="languages"
				:salary="salary"
				:description="description"
				:profileClicked="true"
			></coach-item>
			<div class="coaching-request">
				<div v-if="isLoggedIn">
					<textarea
						class="textarea-coaching-request"
						name=""
						id=""
						:placeholder="placeholderText"
						ref="requestText"
					></textarea>
					<base-button
						class="button-send-coaching-request"
						@click="addRequest"
						>Send coaching request</base-button
					>
				</div>

				<div v-else>
					<h3>Please login to send {{ name }} a coaching request.</h3>
				</div>
			</div>
		</div>
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
	computed: {
		placeholderText() {
			return "Send " + this.name + " a coaching request.";
		},
		isLoggedIn() {
			return this.$store.getters["authentication/isLoggedIn"];
		}
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

<style scoped>
h3 {
	color: #eee;
}
.coach-detail {
	width: 50%;
	height: 70vh;
	margin: 0 auto;
}
.left-arrow {
	height: 20px;
	width: 20px;
	position: relative;
	top: 0.25rem;
	margin-right: 0.4rem;
	filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg)
		brightness(102%) contrast(102%);
}
.return-to-coaches {
	width: 50%;
	margin: 0 auto;
}
.return-to-coaches a {
	text-decoration: none;
	color: white;
}
.coach-detail-content {
	border: 1px solid rgba(255, 255, 255, 0.15);
	border-radius: 5px !important;
}
.coaching-request {
	background-color: rgba(255, 255, 255, 0.15);
	padding: 1rem;
}
.textarea-coaching-request {
	border: 1px solid #eee;
	border-radius: 5px;
	background-color: transparent;
	width: 100%;
	height: 8rem;
	margin: 1rem auto;
	padding: 1rem;
	color: white;
}

::placeholder {
	color: white;
	font-style: italic;
}

.textarea-coaching-request:focus {
	outline: none;
}

.button-send-coaching-request {
	display: block;
}

.no-border {
	border: 0;
	border-radius: 0;
}

.no-margin-top {
	margin-top: 0;
}
</style>
