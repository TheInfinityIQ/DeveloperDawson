<script lang="ts" setup>
import { ref, type Ref } from 'vue';

declare type Position = {
	top: Number;
	left: Number;
};

const percentageCoffeeRemaining: Ref<number> = ref(100);

const coffeeMugPosition: Ref<Position> = {
	value: {
		top: 0,
		left: 0,
	},
};
const coffeeLiquidPosition: Ref<Position> = {
	value: {
		top: 329,
		left: 29,
	},
};
const coffeeLiquidMaskPosition: Ref<Position> = {
	value: {
		top: 329,
		left: 29,
	},
};
const coffeeMugExteriorPosition: Ref<Position> = {
	value: {
		top: 329,
		left: 29,
	},
};
const coffeeMugInteriorPosition: Ref<Position> = {
	value: {
		top: 329,
		left: 29,
	},
};
const coffeeMugHandlePosition: Ref<Position> = {
	value: {
		top: 329,
		left: 29,
	},
};

function updateCoffeeMugPosition(mouseDragPosition) {
	const topOffset: Number = 0;
	const leftOffset: Number = 0;
}

function updateCoffeeMugPartPositions() {
	coffeeLiquidPosition.value.top;
	coffeeLiquidPosition.value.left;
	coffeeLiquidMaskPosition.value.top;
	coffeeLiquidMaskPosition.value.left;
	coffeeMugExteriorPosition.value.top;
	coffeeMugExteriorPosition.value.left;
	coffeeMugInteriorPosition.value.top;
	coffeeMugInteriorPosition.value.left;
	coffeeMugHandlePosition.value.top;
	coffeeMugHandlePosition.value.left;
}
</script>

<template>
	<div class="about">
		<h1>This is an about page</h1>
		<input type="range" min="0" max="100" v-model="percentageCoffeeRemaining" />
	</div>
	<div id="coffee-cup" :style="{ '--coffee-fill': percentageCoffeeRemaining }">
		<div id="coffee-liquid"></div>
		<div id="coffee-liquid-mask"></div>
		<div id="coffee-bottom"></div>
		<div id="coffee-mug-exterior"></div>
		<div id="coffee-mug-interior"></div>
		<div id="coffee-mug-handle"></div>
	</div>
</template>

<style scoped>
#coffee-cup {
	position: relative;
	width: 300px;
	height: 300px;
}

#coffee-liquid-mask {
	position: absolute;
	left: 29px;
	top: calc(329px - 195px + (195px * (100 - var(--coffee-fill)) / 100));
	z-index: 999;
	width: 240px;
	height: 195px;
	background-color: white;
	border-radius: 5% 5% 0 0;
	transition: top 0.5s ease;
}

#coffee-liquid {
	position: absolute;
	left: 29px;
	top: 329px; /* 329px OG */
	z-index: 998;
	width: 240px;
	height: 195px; /* 195px OG */
	background-color: burlywood;
	border-radius: 5% 5% 45% 45%;
}

#coffee-mug-exterior {
	position: absolute;
	top: 300px;
	z-index: 999;
	width: 300px;
	height: 250px;
	border: 15px solid black;
	border-radius: 10% 10% 45% 45%;
}

#coffee-mug-interior {
	position: absolute;
	top: 300px;
	z-index: 900;
	width: 315px;
	height: 265px;
	border: 15px solid white;
	border-radius: 10% 10% 45% 45%;
	background-color: white;
}

#coffee-mug-handle {
	position: absolute;
	left: 285px;
	top: 325px;
	z-index: 999;
	width: 80px;
	height: 140px;
	border: 15px solid black;
	border-radius: 25% 25% 50% 35%;
}
</style>
