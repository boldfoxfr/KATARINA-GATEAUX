<template>
		<div class="services">
			<h1 class="title">MES SERVICES</h1>
			<div class="main-global">
				<router-link to="/galerie">
					<img src="../assets/Services/dragon-cake.webp" alt="gâteaux à étage de couleur rose au survol">
					<h2>Gâteaux personnalisés</h2>
				</router-link>
				<router-link to="/galerie">
					<img src="../assets/Services/heineken_cake.webp" alt="gâteaux à étage de couleur rose au survol">
					<h2>Gâteaux chantilly</h2>
				</router-link>
				<router-link to="/galerie">
					<img src="../assets/Services/number_cake.webp" alt="gâteaux à étage de couleur rose au survol">
					<h2>Number / Letter Cake</h2>
				</router-link>
			</div>
		</div>
</template>

<script>
export default {
	name: 'Services',
}
</script>

<style scoped lang="scss">
/* SERVICES */
.main-global {
	padding: 20px 0;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
}
a img {
			width: 350px;
			height: 350px;
			border-radius: 50%;
			border: 3px solid #675749;
			box-shadow: 2px 2px 10px 2px rgba(244, 172, 205, 0.5);
			transition: filter 0.4s ease-in-out;
			text-decoration: none;
		}
a {
	text-decoration: none;
	color: black
}
@media screen and (max-width: 770px) {
	.main-global {
		flex-direction: column;
	}
	.main-global a img {
		width: 300px;
		height: 300px;
	}
}
</style>
