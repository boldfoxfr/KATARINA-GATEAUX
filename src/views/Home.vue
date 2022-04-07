<template>
	<div class="home">
		<div class="banner">
			<img src="../assets/banniere.svg" alt="Bannière d'accueil représentant un gâteaux d'anniversaire avec des bougies"
				width="100%"
				height="100%"
			>
		</div>
		<div class="whoiam">
			<h1 class="slogan title">PASSIONNÉE, RIGOUREUSE ET TOUJOURS DE BONNE HUMEUR</h1>
			<div class="whoiam-text">
				<p class="presentation">
					Bonjour, je m'appelle Katarina. Passionnée par la pâtisserie, je réalise pour vous des <strong>gâteaux personnalisés</strong>, des <strong>gâteaux d'anniversaires</strong>, <strong>wedding cake</strong>, les fameux <strong>lettercake</strong> ou <strong>numbercake</strong>, <strong>gâteaux de babyshower</strong>...
					Que ce soit pour une occasion ou bien juste par gourmandise, Katarina Gâteaux est là!
					Des gâteaux personnalisés de toutes les tailles, pour les grands et les petits. Katarina Gâteaux vous accompagne pour sublimer vos événements.
				</p>
			</div>
		</div>
	<Banner />
	<Services />
	<Slide />
	</div>
</template>

<script>
import Services from '@/components/Services.vue'
import Banner from '@/components/Banner.vue'
import Slide from '@/components/Slide.vue'


export default {
	name: 'Home',
	components: {
		Services,
		Banner,
		Slide,
	}
}
</script>

<style scoped>
.whoiam {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 10px 0;
	color: #675749;
}
.whoiam-text {
	width: 90%;
	margin-top: 20px;
	padding: 15px;
	background-color: white;
}
.title {
	text-align: center;
	width: 100%;
}
.presentation {
	font-family: "Montserrat";
	background-color: white;
	padding: 20px;
	line-height: 30px;
}
@media screen and (max-width: 450px) {
	.whoiam-text {
		width: 100%;
		padding: 5px;
	}
}
</style>
