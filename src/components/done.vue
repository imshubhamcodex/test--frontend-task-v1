<template>
	<div>
		<v-container>
			<span class="black--text text-h5">Done <strong>:)</strong></span>
			<div id="div-cont" class="mt-16 mb-16">
				<v-btn class="mx-2 mt-16" fab dark color="green">
					<v-icon dark> mdi-check-outline </v-icon>
				</v-btn>

				<br />
				<br />
				<span class="black--text text-h5"
					><strong> Congratulation </strong> on being a member of this Insurance family as a service
					provider.</span
				>
				<br />
			</div>
		</v-container>

		<v-btn class="mx-2 fl mt-10" @click="home()" fab dark small color="indigo">
			<v-icon dark> mdi-arrow-left </v-icon>
		</v-btn>
		<span class="mt-12 ml-2 mr-2 fl">Home</span>

		<v-btn @click="goToEle4()" class="mx-2 fr mt-8" fab dark color="indigo">
			<v-icon dark> mdi-arrow-right </v-icon>
		</v-btn>
		<span class="mt-13 mr-2 fr">View Records</span>
	</div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        home(){
            this.$router.push('/');
        }
    },
    metaInfo() {
		return {
			title: 'Congratulation',
		};
	},
};
</script>
<style scoped>
#div-cont {
	max-width: 900px;
	text-align: center;
	margin: auto auto;
	display: block;
}
.fr {
	float: right;
}
.fl {
	float: left;
}
</style>
