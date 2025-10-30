<script lang="ts" setup>
import { ref, type Ref } from 'vue';

declare type Position = {
	top: number;
	left: number;
};

const percentageCoffeeRemaining: Ref<number> = ref(1.0);

// const coffeeMugPosition: Ref<Position> = {
// 	value: {
// 		top: 0,
// 		left: 0,
// 	},
// };
// const coffeeLiquidPosition: Ref<Position> = {
// 	value: {
// 		top: 329,
// 		left: 29,
// 	},
// };
// const coffeeLiquidMaskPosition: Ref<Position> = {
// 	value: {
// 		top: 329,
// 		left: 29,
// 	},
// };
// const coffeeMugExteriorPosition: Ref<Position> = {
// 	value: {
// 		top: 300,
// 		left: 0,
// 	},
// };
// const coffeeMugInteriorPosition: Ref<Position> = {
// 	value: {
// 		top: 315,
// 		left: 0,
// 	},
// };
// const coffeeMugHandlePosition: Ref<Position> = {
// 	value: {
// 		top: 325,
// 		left: 285,
// 	},
// };
</script>

<template>
	<main class="h-screen">
		<div class="about">
			<h1>This is an about page</h1>
			<input type="range" step="0.01" min="0" max="1" v-model="percentageCoffeeRemaining" />
			Percentage of Coffee Remaining: {{ Math.floor(percentageCoffeeRemaining * 100) }}%
		</div>
		<div id="coffee-cup" :style="{ '--coffee-fill': percentageCoffeeRemaining }">
			<div id="coffee-liquid"></div>
			<div id="coffee-liquid-mask"></div>
			<div id="coffee-bottom"></div>
			<div id="coffee-mug-exterior"></div>
			<div id="coffee-mug-interior"></div>
			<div id="coffee-mug-handle"></div>
		</div>
	</main>
</template>

<style scoped>
#coffee-cup {
	position: absolute;
	top: 0px;
	left: 0px;
	z-index: -999;
	width: 300px;
	height: 250px;
}

#coffee-liquid-mask {
	position: absolute;
	top: 329px;
	left: 29px;
	z-index: 999;
	width: 240px;
	height: calc(195px * (1 - var(--coffee-fill)));
	background-color: var(--primary);
}

#coffee-liquid {
	position: absolute;
	top: 329px;
	left: 29px;
	z-index: 998;
	width: 240px;
	height: 195px;
	background-color: burlywood;
	border-radius: 0 0 45% 45%;
}

#coffee-mug-exterior {
	position: absolute;
	top: 300px;
	left: 0px;
	z-index: 999;
	width: 300px;
	height: 250px;
	border: 15px solid black;
	border-radius: 10% 10% 45% 45%;
}

#coffee-mug-interior {
	position: absolute;
	top: 315px;
	left: 15px;
	z-index: 900;
	width: 285px;
	height: 220px;
	border: 15px solid var(--primary);
	border-radius: 10% 10% 45% 45%;
	background-color: var(--primary);
}

#coffee-mug-handle {
	position: absolute;
	top: 325px;
	left: 285px;
	z-index: 999;
	width: 80px;
	height: 140px;
	border: 15px solid black;
	border-radius: 25% 25% 50% 35%;
}
</style>
