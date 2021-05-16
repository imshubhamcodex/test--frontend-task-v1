<template>
	<v-stepper v-model="e1" class="mb-n10 pb-16">
		<v-stepper-header>
			<v-stepper-step color="green" :complete="e1 > 1" step="1"> Add Provider </v-stepper-step>

			<v-divider></v-divider>

			<v-stepper-step color="green" :complete="e1 > 2" step="2"> Add Services </v-stepper-step>

			<v-divider></v-divider>

			<v-stepper-step color="green" :complete="e1 > 3" step="3"> Confirmation </v-stepper-step>

			<v-divider></v-divider>

			<v-stepper-step color="green" step="4"> Are you sure </v-stepper-step>
		</v-stepper-header>

		<v-stepper-items>
			<v-stepper-content step="1">
				<v-card elevation="0">
					<v-container>
						<span class="black--text text-h5">Register your <strong>service provider</strong> here</span>

						<DetailsForm class="mt-5" />

						<div class="div-list-box">
							<strong>Added providers</strong>
							<ListBox style="min-width: 400px" />
						</div>
					</v-container>
				</v-card>

				<v-btn @click="goToEle2()" class="mx-2 fr" fab dark color="indigo">
					<v-icon dark> mdi-arrow-right </v-icon>
				</v-btn>
				<span class="mt-5 mr-2 fr">Add services</span>
			</v-stepper-content>

			<v-stepper-content step="2">
				<v-card elevation="0">
					<v-container>
						<span class="black--text text-h5"
							>Select services offered by <strong>Provider’s Name</strong></span
						>

						<ServiceBox class="mt-5" />

						<div class="div-list-box">
							<strong>Added Services</strong>
							<ListBox style="min-width: 400px" />
						</div>
					</v-container>
				</v-card>

				<v-btn class="mx-2 fl mt-10" @click="goToEle1()" fab dark small color="indigo">
					<v-icon dark> mdi-arrow-left </v-icon>
				</v-btn>
				<span class="mt-12 ml-2 mr-2 fl">Back</span>

				<v-btn @click="goToEle3()" class="mx-2 fr mt-8" fab dark color="indigo">
					<v-icon dark> mdi-arrow-right </v-icon>
				</v-btn>
				<span id="btn-next-service" class="mt-13 mr-2 fr">Add price and discounts</span>
			</v-stepper-content>

			<v-stepper-content step="3">
				<v-card elevation="0">
					<v-container>
						<span class="black--text text-h5">Review <strong>Details</strong></span>
						<HzDetailsBox class="mt-5" />
						<ul
							id="ul-box"
							style="display: grid; grid-template-columns: repeat(3, 1fr); padding: 0; margin: 0"
						>
							<li style="display: inline" class="mt-5" v-for="num in number" :key="num">
								<ServiceRate />
							</li>
						</ul>
					</v-container>
				</v-card>

				<v-btn class="mx-2 fl mt-10" @click="goToEle1()" fab dark small color="indigo">
					<v-icon dark> mdi-arrow-left </v-icon>
				</v-btn>
				<span class="mt-12 ml-2 mr-2 fl">Back</span>

				<v-btn @click="goToEle4()" class="mx-2 fr mt-8" fab dark color="indigo">
					<v-icon dark> mdi-arrow-right </v-icon>
				</v-btn>
				<span class="mt-13 mr-2 fr">Go ahead</span>
			</v-stepper-content>

			<v-stepper-content step="4">
				<v-card elevation="0">
					<v-container>
						<span class="black--text text-h5">Are you <strong>sure ?</strong></span>
						<div
							id="div-step4"
							class="mt-5"
							style="max-width: 400px; text-align: center; margin: auto auto; display: block"
						>
							<v-btn @click="addNewProv()" class="mx-2 mt-0" fab dark color="cyan">
								<v-icon dark> mdi-plus </v-icon>
							</v-btn>
							<span class="black--text text-h5">Add <strong> another </strong>provider</span>
							<br />
							<br />
							<br />
							<br />
							<p>OR</p>
							<br />
							<br />
							<span class="black--text text-h5">Go ahead and <strong> submit </strong></span>
							<v-btn @click="submit()" class="mx-2" fab dark color="green">
								<v-icon dark> mdi-chevron-right </v-icon>
							</v-btn>
						</div>
						<div id="all-providers-div">
							<strong>All providers</strong>
							<ListBox />
						</div>
					</v-container>
				</v-card>
			</v-stepper-content>
		</v-stepper-items>
	</v-stepper>
</template>
<script>
import DetailsForm from './detailsForm';
import ServiceBox from './addServiceBox';
import ListBox from './listBox';
import HzDetailsBox from './hzDetailsBox';
import ServiceRate from './serviceRate';
export default {
	components: {
		DetailsForm,
		ListBox,
		ServiceBox,
		HzDetailsBox,
		ServiceRate,
	},
	data() {
		return {
			e1: 1,
			number: [1, 2, 3, 4, 5, 6],
		};
	},
	metaInfo() {
		return {
			title: 'Registration Process',
		};
	},
	methods: {
		scrollTop() {
			window.scroll({
				top: 0,
				behavior: 'smooth',
			});
		},
		goToEle1() {
			this.e1 = 1;
			this.scrollTop();
		},
		goToEle2() {
			this.e1 = 2;
			this.scrollTop();
		},
		goToEle3() {
			this.e1 = 3;
			this.scrollTop();
		},
		goToEle4() {
			this.e1 = 4;
			this.scrollTop();
		},
		addNewProv() {
			this.e1 = 1;
			this.scrollTop();
		},
		submit(){
			// database query;
		}
	},
};
</script>
<style scoped>
.div-list-box {
	position: absolute;
	top: 50%;
	right: 2%;
	transform: translate(-2%, -50%);
}
.fr {
	float: right;
}
.fl {
	float: left;
}
#all-providers-div {
	margin-top: 100px;
	width: 80%;
	display: block;
	margin-left: auto;
	margin-right: auto;
}

@media only screen and (max-width: 420px) {
	.div-list-box {
		display: none;
	}
	#ul-box {
		grid-template-columns: repeat(1, 1fr) !important;
	}
	#div-step4 {
		margin-top: 50px !important;
	}
}
</style>
