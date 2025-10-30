<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
	<header class="flex items-center place-content-between m-4 h-24">
		<div class="flex items-center">
			<img src="src\assets\profile-photo.jpg" class="aspect-square h-24 rounded-full" />
			<h1 class="font-bold ml-4 text-5xl">Developer Dawson</h1>
		</div>
		<div>
			<nav class="flex gap-4">
				<RouterLink to="/" c>Home</RouterLink>
				<RouterLink to="/about" class="border-l pl-4">About</RouterLink>
			</nav>
		</div>
	</header>
	<div class="border-b mb-4"></div>
	<RouterView class="mb-24 h-full" />
	<footer class="h-20 p-4 mt-4 sticky bottom-0 flex items-center">
		<div class="w-full h-full rounded-3xl glass">
			<nav class="flex items-center h-full gap-4 justify-center">
				<a href=""><i>icon LINKEDIN</i></a>
				<a href=""><i>icon RESUME</i></a>
				<a href=""><i>icon GITHUB</i></a>
			</nav>
		</div>
	</footer>
</template>

<style scoped></style>
