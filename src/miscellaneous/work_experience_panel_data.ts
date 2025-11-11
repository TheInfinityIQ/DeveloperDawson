import { ref } from 'vue';

export default [
	{
		header: 'Summary',
		body: "Working with <strong>1Life Workplace Safety Solutions Ltd.</strong>, a <strong>SaaS</strong> company dedicated to creating <strong>administrative</strong> and <strong>form tools</strong> primarily for construction oriented clients to identify near misses and document safety checks. I worked on <strong>Learning Management</strong>, <strong>User Management</strong>, and <strong>Form Management</strong> modules for administrative users. Additionally, I developed <strong>internal tools</strong> to allow client success to onboard clients easier. My primary responsibility was the <strong>User Management</strong> systems so it's features, maintence, and change-requests were deligated to me. It was a start up company so I was able to touch every corner of the software with the exception of the Android and iOS applications. It gave me a multitude of opportunities to build <strong>front-end components</strong>, <strong>back-end systems</strong>, and <strong>cloud features</strong> to improve administrative workflows and enable field teams to operate offline.",
		isOpen: ref(false),
	},
	{
		header: 'Front End Development',
		body: 'Developed <strong>responsive interfaces</strong> using <strong>Vue 2</strong> and <strong>Vuetify</strong> and migrated the oftware to <strong>Vue 3</strong> and <strong>PrimeVue</strong>. Implemented <strong>data tables</strong> with filtering, <strong>steppers</strong> for multi-step processes, <strong>skeleton loaders</strong>, and <strong>translated Figma wireframes</strong> to code. These changes made administrative interfaces easier to navigate, more intuitive, and reduced repetitive actions.',
		isOpen: ref(false),
	},
	{
		header: 'Back End Development',
		body: 'Extended <strong>ColdFusion</strong> (CFWheels, Lucee/Coldfusion 2018) back-end systems with <strong>MS SQL</strong>. <strong> Designed and implemented a custom field system </strong> front tip-to-tail allowing administrators to define data fields with unique values, apply them to users, filter them, and export data. <strong> Developed a Mass User Edit Tool capable of updating up to 100 users at once </strong> (used for onboarding users), including fields, emergency contacts, groups, supervisors, and passwords. <strong>Optimized queries</strong> and added error handling. <br /> <br /> <strong> Designed and implemented database schema improvements </strong> for the User system to address technical debt caused by a single table containing user information, settings, and custom fields. <strong> Proposed and executed a refactored design that separated data into multiple related tables </strong> : one for core user information, one for custom user fields that administrators could define, one for user-specific settings, and one for administrative settings applied to users. <strong> The design followed a normalized, star-like pattern </strong> , improving maintainability, query performance , and flexibility for future feature developmentent.',
		isOpen: ref(false),
	},
	{
		header: 'Cloud-Based Systems',
		body: 'Integrated <strong>AWS S3</strong> for secure document storage and distribution. <strong>Created a File Mass Export Tool</strong> that <strong>batches and compresses thousands of PDFs</strong>, generates time-limited download links, and sends them via email. The tool reduced manual steps and ensured secure, scalable file distribution for enterprise clients.',
		isOpen: ref(false),
	},
	{
		header: 'Research',
		body: '<strong>Led research</strong> for third-party <strong>analytics and reporting tools</strong> to enable users to <strong>generate custom reports</strong> from completed forms and user fields. Evaluated platforms such as <strong>Tableau</strong> and <strong>Power BI</strong>, considering both technical feasibility and usability for the primary user base of field and construction staff. Determined that in-house implementation would require significant development time and specialized expertise, while third-party tools offered advanced functionality but were too complex for end users. <strong> Recommended and identified third-party consultants to provide a solution </strong> that balanced feature requirements, implementation complexity, and usability, ensuring practical and effective reporting for the organization.',
		isOpen: ref(false),
	},
	{
		header: 'Interviewing',
		body: '<strong>Led interviews</strong> of junior developer candidates under the oversight of a Senior Software Engineer, who provided guidance as needed. <strong>Conducted technical discussions</strong>, <strong>assessed coding skills</strong>, and <strong>evaluated problem-solving approaches</strong>. Delivered structured feedback on candidate suitability, gaining experience in <strong>technical assessment</strong>, <strong>team fit evaluation</strong>, and <strong>mentoring processes</strong>.',
		isOpen: ref(false),
	},
];
