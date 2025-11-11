<script setup lang="ts">
import Panel from '@/components/Panel.vue';
import panelData from '../miscellaneous/work_experience_panel_data';
import { ref } from 'vue';

let panels = ref<Record<string, Function>>({});

function registerPanel(panelHeader: string, closePanel: Function) {
	panels.value[panelHeader] = closePanel;
	console.log(closePanel);
}

function closeUnfocusedPanels(panelHeader: string) {
	for (let panel in panels.value) {
		if (panel !== panelHeader) {
			panels.value[panel]();
		}
	}
}
</script>

<template>
	<main class="flex flex-col px-4">
		<!-- ------------------------------ -->
		<!-- ----------- About ------------ -->
		<!-- ------------------------------ -->
		<div class="my-12 flex flex-col gap-4">
			<div class="flex flex-col gap-8">
				<div class="flex flex-col">
					<div class="flex items-center gap-2">
						<i class="fa-solid fa-user"></i>
						<h2>About</h2>
					</div>
					<div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec leo orci,
							scelerisque quis eros in, accumsan pulvinar ipsum. Quisque eleifend
							pellentesque leo, quis rhoncus odio condimentum vel. Phasellus et
							suscipit augue. Integer laoreet, orci sit amet dapibus varius, nunc diam
							congue enim
						</p>
					</div>
				</div>
				<div class="flex flex-col gap-4">
					<div class="flex items-center gap-2">
						<i class="fa-solid fa-graduation-cap"></i>
						<h2>Education</h2>
					</div>
					<div class="flex flex-col gap-4">
						<div>
							<h3>High School</h3>
							<p>
								Completed Java coursework and participated in CyberPatriot and
								CyberTitan competitions, configuring networks, defending systems,
								and collaborating with teammates on simulated security challenges.
							</p>
						</div>
						<div>
							<h3>University of Manitoba</h3>
							<p>
								Completed several years of study in the Bachelor of Science Computer
								Science program. The experience provided a strong theoretical
								foundation, but I ultimately chose to pursue a more hands-on,
								project-driven path focused on applied software development and
								professional learning opportunities.
							</p>
						</div>
						<div>
							<h3>Mentorship</h3>
							<p>
								Worked under the guidance of a Senior Software Engineer from the
								City of Winnipeg in a mentorship spanning over two years and several
								hundred hours of one-on-one instruction. This experience focused on
								professional software development practices and transformed my
								approach from hobby-level programming to a scalable, maintainable,
								and standards-driven development style used in production
								environments.
							</p>
						</div>
					</div>
				</div>
				<div class="flex flex-col gap-4">
					<div class="flex items-center gap-2">
						<i class="fa-solid fa-scroll"></i>
						<h2>Experience</h2>
					</div>
					<div class="flex flex-col gap-4 max-h-[780px] min-h-[780px]">
						<Panel
							:panel="panel"
							v-for="panel in panelData"
							@register="registerPanel($event.header, $event.closePanel)"
							@toggle="closeUnfocusedPanels($event.header)"
						></Panel>
					</div>
				</div>
			</div>
		</div>
		<!-- ------------------------------ -->
		<!-- ---------- Projects ---------- -->
		<!-- ------------------------------ -->
		<div class="my-12 flex flex-col gap-4">
			<div>
				<h2 class="text-3xl">Projects</h2>
			</div>
			<div class="flex flex-col gap-16">
				<div class="border-b project-card">
					<h2 class="text-2xl ml-8 mb-2">Project: Rim Maker</h2>
					<div
						class="w-full flex border rounded-3xl bg-[var(--secondary)] hover:bg-transparent project-card"
					>
						<a href="" class="flex place-content-center w-1/2">
							<img src="..\assets\portfolio-image-temp.png" class="rounded-r-3xl" />
						</a>
						<div class="w-1/2 h-auto p-4 flex flex-col justify-between">
							<div>
								<p class="text-center hover:text-[var(--neutral-light)]">
									Since 2018 I have been making or maintaining mods for the colony
									simulation game RimWorld. I've made two very popular mods that
									have over 100,000 total Steam workshop page views and at it's
									peak they had close to 50,000 subscribers collectively.
								</p>
								<br />
								<p class="text-center hover:text-[var(--neutral-light)]">
									From there, you extract the zip and drop the file into the
									RimWorld mods folder and you're as good as gold seeing that all
									the XML files were generated for the user and all the data was
									structured in the way RimWorld needs it to be.
								</p>
								<br />
								<p class="text-center hover:text-[var(--neutral-light)]">
									The project on GitHub includes .linq scripts that will query the
									game files for whenever RimWorld releases new content or updates
									so that I can update the .json files with the new content.
								</p>
								<br />
								<p class="text-center hover:text-[var(--neutral-light)]">
									I wanted to enable others to do the same so I abstracted the
									process of making the mod into website. The process of making
									the mod is as simple as selecting how many weapons you want to
									create, completing a form for each weapon, uploading the audio
									and picture files for each weapon, then exporting the mod as a
									zip file.
								</p>
							</div>
							<div class="flex flex-col place-content-between">
								<div class="flex gap-2">
									<p>Technology:</p>
									<div class="flex gap-2">
										<i>VueJS</i>
										<i>C#</i>
										<i>HTML</i>
										<i>CSS</i>
										<i>PrimeVue</i>
										<i>Javascript</i>
									</div>
								</div>
								<div class="flex gap-2">
									<p>Links:</p>
									<div class="flex gap-2">
										<i>GitHub</i>
										<i>Website</i>
										<i>Steam1</i>
										<i>Steam2</i>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="border-b project-card">
					<h2 class="text-2xl mr-8 mb-2 text-right">Project 2</h2>
					<div
						class="flex items-center w-full rounded-3xl border bg-[var(--secondary)] hover:bg-transparent transition project-card"
					>
						<p class="text-center w-1/2 px-2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec leo orci,
							scelerisque quis eros in, accumsan pulvinar ipsum. Quisque eleifend
							pellentesque leo, quis rhoncus odio condimentum vel. Phasellus et
							suscipit augue. Integer laoreet, orci sit amet dapibus varius, nunc diam
							congue enim, at vehicula lorem urna a sem. Maecenas ornare, metus eu
							faucibus iaculis, justo lacus ornare lacus, dignissim ultrices eros
							purus eu lacus.
						</p>
						<a href="" class="flex place-content-center w-1/2"
							><img src="..\assets\portfolio-image-temp.png" class="rounded-l-3xl"
						/></a>
					</div>
				</div>
				<div class="border-b">
					<h2 class="text-2xl ml-8 mb-2">Project 3</h2>
					<div
						class="flex items-center w-full rounded-3xl border bg-[var(--secondary)] hover:bg-transparent project-card"
					>
						<a href="" class="flex place-content-center w-1/2"
							><img src="..\assets\portfolio-image-temp.png" class="rounded-r-3xl"
						/></a>
						<p class="text-center w-1/2 px-2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec leo orci,
							scelerisque quis eros in, accumsan pulvinar ipsum. Quisque eleifend
							pellentesque leo, quis rhoncus odio condimentum vel. Phasellus et
							suscipit augue. Integer laoreet, orci sit amet dapibus varius, nunc diam
							congue enim, at vehicula lorem urna a sem. Maecenas ornare, metus eu
							faucibus iaculis, justo lacus ornare lacus, dignissim ultrices eros
							purus eu lacus.</p
						>
					</div>
				</div>
			</div>
		</div>
		<!-- ------------------------------ -->
		<!-- ---------- Stim Bin ---------- -->
		<!-- ------------------------------ -->
		<div class="my-12">
			<div>
				<h2 class="text-3xl">Stim Bin</h2>
			</div>
			<div>
				<!-- Objects in toy bin -->
			</div>
		</div>
	</main>
</template>

<style scoped>
div {
	border: none;
}

.project-card:hover p {
	transition: ease-in-out 300ms;
}

.project-card:hover {
	transition: ease-out 500ms;
}

.project-card {
	transition: ease-out 300ms;
}
</style>
