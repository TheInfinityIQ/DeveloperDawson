<script setup lang="ts">
import { ref, type Ref, useTemplateRef } from 'vue';
const panelContent = useTemplateRef('panel-content');

const isPanelOpen: Ref<boolean> = ref(false);

const panelOpenOverflowClass: string = 'overflow-scroll ';
const panelClosedOverflowClass: string = 'overflow-hidden ';
let panelOverflowClass: Ref<string> = ref(panelClosedOverflowClass);
let panelStateTimeout: number;
function togglePanel() {
	panelContent.value.focus;

	clearTimeout(panelStateTimeout);
	isPanelOpen.value = !isPanelOpen.value;

	if (isPanelOpen.value) {
		panelStateTimeout = setTimeout(() => {
			panelOverflowClass.value = panelOpenOverflowClass;
		}, 350);
	} else {
		panelStateTimeout = setTimeout(() => {
			ref.panelContent.scrollTop = 0;
		}, 550);
		panelOverflowClass.value = panelClosedOverflowClass;
	}
}
</script>

<template>
	<div class="w-1/3 bg-[var(--secondary)] rounded-3xl px-8">
		<div class="py-4">
			<h4 class="flex justify-between">
				<slot name="header"></slot>
				<button @click="togglePanel">
					<i
						class="fa-solid fa-caret-up"
						:class="isPanelOpen ? 'rotate-180' : 'rotate-0'"
					>
					</i>
				</button>
			</h4>

			<div
				ref="panel-content"
				class="bg-[var(--secondary)] overflow-hidden transform-transform duration-500 ease-in-out pr-2"
				:class="`${isPanelOpen ? 'max-h-[250px] mt-4' : 'max-h-0'} ${panelOverflowClass}`"
			>
				<p>
					<slot name="default"></slot>
					<br />
				</p>
			</div>
		</div>
	</div>
</template>
