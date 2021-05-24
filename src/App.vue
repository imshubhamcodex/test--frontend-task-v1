<template>
	<v-app v-if="renderComponent " id="app">
		<router-view />
		<Footer class="mt-10" />
		<div style="position: absolute; left: -30px; top: -10px">
			<v-btn id="btn" class="mx-2" fab style="padding-left: 10px; padding-top: 0px">
				<v-icon id="btn-icon" @click="changeTheme()" dark> {{ icon }} </v-icon>
			</v-btn>
		</div>
	</v-app>
</template>

<script>
import Footer from './components/footer';
export default {
	components: {
		Footer,
	},
	data() {
		return {
			icon: 'mdi-weather-night',
			renderComponent :true
		};
	},
	methods: {
		changeTheme() {
			if (this.$vuetify.theme.dark) {
				this.icon = 'mdi-weather-night';
				this.$vuetify.theme.dark = false;
				document.getElementById('btn').style.backgroundColor = 'black';
				document.getElementById('btn-icon').style.color = 'white';
				this.forceUpdate();
			} else {
				this.icon = 'mdi-white-balance-sunny';
				this.$vuetify.theme.dark = true;
				document.getElementById('btn').style.backgroundColor = 'white';
				document.getElementById('btn-icon').style.color = 'black';
				this.forceUpdate();
			}
		},
		forceUpdate() {
			this.renderComponent = false;
			this.$nextTick(() => {
				this.renderComponent = true;
			});
		},
	},
};
</script>
<style>
/*set global font style*/
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
#app {
	font-family: 'Montserrat';
}
</style>
