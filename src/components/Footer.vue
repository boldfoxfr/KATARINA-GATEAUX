<template>
		<div id="footer">
<!-- 			<ul class="footer-list">
				<li class="footer-item"><a href="#" title="Accueil">Accueil</a></li>
				<li class="footer-item"><a href="#" title="Galerie">Galerie</a></li>
				<li class="footer-item"><a href="#" title="Contact">Contact</a></li>
			</ul>
 -->			<p class="copyright">BoldFox © 2022</p>
		</div>
</template>

<script>
export default {
	name: 'Footer',
}
</script>

<style scoped lang="scss">
#footer {
	width: 100%;
	position: absolute;
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	border-top: solid 2px #faf0e6;
	box-shadow: 0 0 15px #8c7f73;
}
/* #footer ul {
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	text-align: center;
	margin: 15px;
}
 */
.copyright {
	font-family: "Montserrat";
	font-size: small;
	text-align: center;
	margin: 20px 0;
}</style>
