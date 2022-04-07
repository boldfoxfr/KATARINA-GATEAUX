<template>
	<div id="app">
		<img class="logo" src="@/assets/logo_katarina.svg" alt="logo de Katarina Gâteau, représente un saladier avec un fouet."
			width="50%"
			height="100%"
		>
		<Navbar />
		<router-view/>
	</div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
	name: 'Home',
	components: {
		Navbar,
	}
}
</script>


<style lang="scss">
*{
	text-align: center;
	box-sizing: border-box;
	background-color: #FCF5F2;
	color: #675749;
	margin:0%;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
.logo {
	width: 30%;
}

li {
	list-style-type: none;
}
@media screen and (max-width: 450px) {
	.logo{
		width: 100%;
		height: 100%;
	}
}
</style>
