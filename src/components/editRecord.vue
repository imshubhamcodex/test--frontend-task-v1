<template>
	<v-card elevation="0" class="mt-10">
		<v-container>
			<span class="black--text text-h5 mb-5">Edit <strong>Details</strong></span>
			<HzDetailsBox v-if="showHzBox" :viewRecord="false" class="mt-5" />
			<DetailsBox class="mt-5" v-if="showVzBox" />
			<ul id="ul-box" style="display: grid; grid-template-columns: repeat(3, 1fr); padding: 0; margin: 0">
				<li style="display: inline" class="mt-5" v-for="num in number" :key="num">
					<ServiceRate :elementId="num" @remove-service="updateService" />
				</li>
			</ul>
		</v-container>

		<HzServiceBox id="hz-box" class="ml-16 mt-2" />

		<v-btn class="mx-2 fl mt-10 ml-10" fab dark small color="green">
			<v-icon dark> mdi-check-outline </v-icon>
		</v-btn>
		<span class="mt-12 ml-2 mr-2 fl">Save and close</span>

		<v-btn class="mx-2 fr mt-11 mr-10" fab dark small color="red">
			<v-icon dark> mdi-close </v-icon>
		</v-btn>
		<span class="mt-13 mr-2 fr">Remove Record</span>
	</v-card>
</template>

<script>
import HzDetailsBox from './hzDetailsBox';
import DetailsBox from './detailsForm';
import ServiceRate from './serviceRate';
import HzServiceBox from './hzAddServiceBox';
export default {
	components: {
		HzDetailsBox,
		ServiceRate,
		HzServiceBox,
		DetailsBox,
	},
	data() {
		return {
			number: [1, 2, 3, 4],
			showHzBox: true,
			showVzBox: false,
		};
	},
	methods: {
		updateService(e) {
			let index = this.number.indexOf(e);
			this.number.splice(index, 1);
			console.log(this.number);
		},
	},
	mounted() {
		if (screen.width <= 420) {
			this.showHzBox = false;
			this.showVzBox = true;
		}
	},
};
</script>
<style scoped>
.fr {
	float: right;
}
.fl {
	float: left;
}
@media only screen and (max-width: 420px) {
	#ul-box {
		grid-template-columns: repeat(1, 1fr) !important;
	}
	#hz-box {
		margin-left: 0px !important;
	}
}
</style>
