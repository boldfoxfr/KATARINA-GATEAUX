<template>
	<div id="slider">
		<Banner />
		<h1 class="slider-title"> LES PETITS DERNIERS... </h1>
		<div class="slider">
			<button @click="prev" type="button" class="btn btn-left">
				<font-awesome-icon class="btn-icon" icon="fa-solid fa-circle-chevron-left" />
			</button>
			<div class="container-slider" :style="{transform: `translateX(${index}px)`, transition: `${transition}`}">
				<img src="../assets/Services/dragon-cake.webp" alt="" class="img-slider">
				<img src="../assets/Services/heineken_cake.webp" alt="" class="img-slider">
				<img src="../assets/Services/number_cake.webp" alt="" class="img-slider">
			</div>
			<button @click="next" type="button" class="btn btn-right">
				<font-awesome-icon class="btn-icon" icon="fa-solid fa-circle-chevron-right" />
			</button>
		</div>
	</div>
</template>

<script>
import Banner from '@/components/Banner.vue'

export default {
	name: 'Slider',
	components:{
		Banner,
	},

	data: function(){
		return {
			index: 0,
			transition: "transform 0.2s ease",
		};
	},
	methods: {
		next(){
			if(this.index === -800){
				this.transition = "none";
				this.index = 0;
			} else {
				this.transition = "transform 0.2s ease";
				this.index -= 400;
			}
		},
		prev(){
			if(this.index === 0){
				this.transition = "none";
				this.index = -800;
			} else {
				this.transition = "transform 0.2s ease";
				this.index += 400;
			}
		}
	}
}
</script>

<style scoped>
.slider-title {
	width: 100%;
	margin: 30px 0;
}
#slider {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: 40px;
}
.slider {
	width: 400px;
	height: 550px;
	overflow: hidden;
	position: relative;
}
.container-slider{
	display: flex;
}
.img-slider {
	width: 100%;
	height: auto;
}
.btn {
	outline: none;
	border: none;
	width: 50px;
	height: 50px;
	border-radius: 100%;
	display: block;
	position: absolute;
	z-index: 1000;
	cursor: pointer;
	background-color: #675749;
}
.btn-icon{
	border: 2px solid #FCF5F2;
	border-radius: 100%;
	font-size: 30px;
}
.btn-left{
	top: 50%;
	transform: translateY(-50%);
	color: #675749;

}
.btn-right{
	top: 50%;
	right: 0%;
	transform: translateY(-50%);
}

</style>
