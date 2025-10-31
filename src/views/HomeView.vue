<script setup lang="ts">
import Panel from '@/components/Panel.vue';
</script>

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
						<i>icon GRADUATION</i>
						<h3 class="text-2xl">Education</h3>
					</div>
					<div>
						<h4>High School</h4>
						<p>
							Completed Java coursework and participated in CyberPatriot and
							CyberTitan competitions, configuring networks, defending systems, and
							collaborating with teammates on simulated security challenges.
						</p>
						<h4>University of Manitoba</h4>
						<p>
							Completed several years of study in the Bachelor of Science – Computer
							Science program. The experience provided a strong theoretical
							foundation, but I ultimately chose to pursue a more hands-on,
							project-driven path focused on applied software development and
							professional learning opportunities.
						</p>
						<h4>Mentorship</h4>
						<p>
							Worked under the guidance of a Senior Software Engineer from the City of
							Winnipeg in a mentorship spanning over two years and several hundred
							hours of one-on-one instruction. This experience focused on professional
							software development practices and transformed my approach from
							hobby-level programming to a scalable, maintainable, and
							standards-driven development style used in production environments.
						</p>
					</div>
				</div>
				<div class="flex flex-col">
					<div class="flex items-center gap-2">
						<i>icon PAPER</i>
						<h3 class="text-2xl">Experience</h3>
					</div>
					<div class="flex flex-col gap-4">
						<Panel>
							<template #header>Summary</template>
							<template #default>
								Working with
								<strong>1Life Workplace Safety Solutions Ltd.</strong>, a
								<strong>SaaS</strong> company dedicated to creating
								<strong>administrative</strong>
								and <strong>form tools</strong> for primarily construction oriented
								clients to identify near misses and document safety checks. I worked
								on <strong>Learning Management</strong>,
								<strong>User Management</strong>, and
								<strong>Form Management</strong> modules for administrative users.
								Additionally, I developed <strong>internal tools</strong> to allow
								client success to onboard clients easier. My primary responsibility
								was the <strong>User Management</strong> systems so it's features,
								maintence, and change-requests were deligated to me. It was a start
								up company so I was able to touch every corner of the software with
								the exception of the Android and iOS applications. It gave me a
								multitude of opportunities to build
								<strong>front-end components</strong>,
								<strong>back-end systems</strong>, and
								<strong>cloud features</strong> to improve administrative workflows
								and enable field teams to operate offline.
							</template>
						</Panel>
						<Panel>
							<template #header>Front End Development</template>
							<template #default>
								Developed <strong>responsive interfaces</strong> using
								<strong>Vue 2</strong> and <strong>Vuetify</strong> and migrated the
								software to <strong>Vue 3</strong> and <strong>PrimeVue</strong>.
								Implemented <strong>data tables</strong> with filtering,
								<strong>steppers</strong> for multi-step processes,
								<strong>skeleton loaders</strong>, and
								<strong>translated Figma wireframes</strong> to code. These changes
								made administrative interfaces easier to navigate, more intuitive,
								and reduced repetitive actions.
							</template>
						</Panel>
						<Panel>
							<template #header>Back End Development</template>
							<template #default>
								Extended <strong>ColdFusion</strong> (CFWheels, Lucee/Coldfusion
								2018) back-end systems with <strong>MS SQL</strong>.
								<strong> Designed and implemented a custom field system </strong>
								front tip-to-tail allowing administrators to define data fields with
								unique values, apply them to users, filter them, and export data.
								<strong>
									Developed a Mass User Edit Tool capable of updating up to 100
									users at once
								</strong>
								(used for onboarding users), including fields, emergency contacts,
								groups, supervisors, and passwords.
								<strong>Optimized queries</strong> and added error handling.
								<br />
								<br />
								<strong>
									Designed and implemented database schema improvements
								</strong>
								for the User system to address technical debt caused by a single
								table containing user information, settings, and custom fields.
								<strong>
									Proposed and executed a refactored design that separated data
									into multiple related tables
								</strong>
								: one for core user information, one for custom user fields that
								administrators could define, one for user-specific settings, and one
								for administrative settings applied to users.
								<strong>
									The design followed a normalized, star-like pattern
								</strong>
								, improving maintainability, query performance , and flexibility for
								future feature developmentent.
							</template>
						</Panel>
						<Panel>
							<template #header>Cloud-Based Systems</template>
							<template #default>
								Integrated <strong>AWS S3</strong> for secure document storage and
								distribution. <strong>Created a File Mass Export Tool</strong> that
								<strong>batches and compresses thousands of PDFs</strong>, generates
								time-limited download links, and sends them via email. The tool
								reduced manual steps and ensured secure, scalable file distribution
								for enterprise clients.
							</template>
						</Panel>
						<Panel>
							<template #header>Research</template>
							<template #default>
								<strong>Led research</strong> for third-party
								<strong>analytics and reporting tools</strong> to enable users to
								<strong>generate custom reports</strong> from completed forms and
								user fields. Evaluated platforms such as
								<strong>Tableau</strong> and <strong>Power BI</strong>, considering
								both technical feasibility and usability for the primary user base
								of field and construction staff. Determined that in-house
								implementation would require significant development time and
								specialized expertise, while third-party tools offered advanced
								functionality but were too complex for end users.
								<strong>
									Recommended and identified third-party consultants to provide a
									solution
								</strong>
								that balanced feature requirements, implementation complexity, and
								usability, ensuring practical and effective reporting for the
								organization.
							</template>
						</Panel>
						<Panel>
							<template #header>Interviewing</template>
							<template #default>
								<strong>Led interviews</strong> of junior developer candidates under
								the oversight of a Senior Software Engineer, who provided guidance
								as needed. <strong>Conducted technical discussions</strong>,
								<strong>assessed coding skills</strong>, and
								<strong>evaluated problem-solving approaches</strong>. Delivered
								structured feedback on candidate suitability, gaining experience in
								<strong>technical assessment</strong>,
								<strong>team fit evaluation</strong>, and
								<strong>mentoring processes</strong>.
							</template>
						</Panel>
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
							purus eu lacus.
						</p>
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
