<script setup lang="ts">
import { getCurrentInstance, onMounted, ref, type Ref, useTemplateRef, watch } from 'vue';

const props = defineProps({
	panel: {
		type: Object,
		required: true,
	}
});

const emits = defineEmits(["register", "toggle"])

const panelContent = useTemplateRef('panel-content');
const isPanelOpen: Ref<boolean> = ref(false);

const panelOpenOverflowClass: string = 'overflow-scroll ';
const panelClosedOverflowClass: string = 'overflow-hidden ';

let panelOverflowClass: Ref<string> = ref(panelClosedOverflowClass);

let panelStateTimeout: number;

function togglePanel() {
	if (!panelContent.value) {
		return;
	}

	emits("toggle", {
		header: props.panel.header
	})
	
	clearTimeout(panelStateTimeout);
	isPanelOpen.value = !isPanelOpen.value;

	if (isPanelOpen.value) {
		panelStateTimeout = setTimeout(() => {
			panelOverflowClass.value = panelOpenOverflowClass;
		}, 350);
	} else {
		panelStateTimeout = setTimeout(() => {
			if (!panelContent.value) {
				return;
			}
			panelContent.value.scrollTop = 0;
		}, 550);
		panelOverflowClass.value = panelClosedOverflowClass;
	}
}

function closePanel() {
	isPanelOpen.value = false;
}

onMounted(() => {
	emits("register", {
		header: props.panel.header,
		closePanel
	})
});
</script>

<template>
	<div class="w-1/2 bg-[var(--secondary)] rounded-3xl px-8 duration-500 ease-out">
		<div class="py-4">
			<h4 class="flex justify-between items-center">
				<div v-html="props.panel.header"></div>

				<button
					@click="togglePanel"
					class="border-2 border-[var(--accent)] bg-[var(--secondary)] rounded-full w-10 h-10 flex items-center justify-center hover:border-4 hover:bg-[var(--accent-muted)] duration-100 ease-out"
				>
					<i
						class="fa-solid fa-caret-up fa-md"
						:class="isPanelOpen ? 'rotate-180' : 'rotate-0'"
					>
					</i>
				</button>
			</h4>

			<div
				ref="panel-content"
				class="bg-[var(--secondary)] overflow-hidden duration-500 ease-out pr-2"
				:class="`${isPanelOpen ? 'max-h-[250px] mt-4' : 'max-h-0'} ${panelOverflowClass}`"
			>
				<p>
					<div v-html="props.panel.body"></div>
					<br />
				</p>
			</div>
		</div>
	</div>
</template>
