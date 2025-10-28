<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
	<header class="flex items-center place-content-between m-4">
		<div class="flex items-center">
			<img src="src\assets\profile-photo.jpg" class="aspect-square h-24 rounded-full">
			<h1 class="font-bold ml-4">Developer Dawson</h1>
		</div>
		<div>
			<nav class="flex gap-4">
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/about" class="border-l pl-4">About</RouterLink>
			</nav>
		</div>
	</header>
	<div class="border-b mb-4"></div>
	<RouterView />
	<footer class="h-24 p-4">
			<nav class="flex items-center h-full gap-4">
				<a href=""><i>icon LINKEDIN</i></a>
				<a href=""><i>icon RESUME</i></a>
				<a href=""><i>icon GITHUB</i></a>
			</nav>
	</footer>
</template>

<style scoped>
</style>
