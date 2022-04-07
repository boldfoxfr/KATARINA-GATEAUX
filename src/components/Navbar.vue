<template>
	<div id="nav">
		<router-link to="/">
			<img src="../assets/img_nav.svg" alt="gâteaux à étage de couleur rose au survol">
			<p>Accueil</p>
		</router-link>
		<router-link to="/galerie">
			<img src="../assets/img_nav.svg" alt="gâteaux à étage de couleur rose au survol">
			<p>Galerie</p>
		</router-link>
		<router-link to="/contact">
			<img src="../assets/img_nav.svg" alt="gâteaux à étage de couleur rose au survol">
			<p>Contact</p>
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'Navbar',
}
</script>

<style scoped lang="scss">
#nav {
	padding: 20px 0;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
		a img {
			filter: grayscale(50%);
			width: 150px;
			height: 150px;
			border-radius: 50%;
			border: 3px solid #F4ACCD;
			box-shadow: 2px 2px 10px 2px rgba(164, 138, 123, 0.5);
			transition: filter 0.4s ease-in-out;
			text-decoration: none;
		}
		a:hover img {
			filter: none;
		}
}
a {
	text-decoration: none;
	color: black
}
#nav p {
	margin: 0;
	font-weight: bold;
}

@media screen and (max-width: 750px) {
	#nav a img {
		width: 70px;
		height: 70px;
	}
}
</style>
