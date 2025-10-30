<script setup lang="ts"></script>

<template>
	<main class="flex flex-col px-4">
		<!-- ------------------------------ -->
		<!-- ---------- My Story ---------- -->
		<!-- ------------------------------ -->
		<div class="my-12 flex flex-col gap-4">
			<div>
				<h2 class="text-3xl">My Story</h2>
			</div>
			<div class="flex flex-col gap-8">
				<div class="flex flex-col">
					<div class="flex items-center gap-2">
						<i>icon PERSON</i>
						<h3 class="text-2xl">About</h3>
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
				<div class="flex flex-col">
					<div class="flex items-center gap-2">
						<i>icon PAPER</i>
						<h3 class="text-2xl">Experience</h3>
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
				<div class="flex flex-col">
					<div class="flex items-center gap-2">
						<i>icon GRADUATION</i>
						<h3 class="text-2xl">Education</h3>
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
					<h3 class="text-2xl ml-8 mb-2">Project: Rim Maker</h3>
					<div
						class="w-full flex border rounded-3xl bg-[var(--secondary)] hover:bg-transparent project-card"
					>
						<a href="" class="flex place-content-center w-1/2">
							<img src="src\assets\portfolio-image-temp.png " class="rounded-r-3xl" />
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
							purus eu lacus.</p
						>
						<a href="" class="flex place-content-center w-1/2"
							><img src="src\assets\portfolio-image-temp.png" class="rounded-l-3xl"
						/></a>
					</div>
				</div>
				<div class="border-b">
					<h2 class="text-2xl ml-8 mb-2">Project 3</h2>
					<div
						class="flex items-center w-full rounded-3xl border bg-[var(--secondary)] hover:bg-transparent project-card"
					>
						<a href="" class="flex place-content-center w-1/2"
							><img src="src\assets\portfolio-image-temp.png" class="rounded-r-3xl"
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
