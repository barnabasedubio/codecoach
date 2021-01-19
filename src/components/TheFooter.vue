<template>
	<footer>
		<div class="footer-content">
			<h4>
				Developed by
				<a href="https://github.com/barnabasedubio" target="_blank"
					>Barnabas Edubio</a
				>
			</h4>
		</div>
	</footer>
</template>

<script>
export default {};
</script>

<style>
h4 {
	color: #eee;
	font-weight: 400;
}
a {
	text-decoration: none;
	color: #eee;
}
footer {
	background-color: rgba(255, 255, 255, 0.15);
	height: 5vh;
}
.footer-content {
	text-align: center;
	position: relative;
	top: 50%;
	transform: translateY(-50%);
}
</style>
