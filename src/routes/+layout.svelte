<script>
	import 'tailwindcss/tailwind.css';
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import bgImage from '$lib/jpg/bgImage.avif';
</script>

<div class="flex flex-col min-h-screen" style="background-image: url({bgImage})">
	<Navbar />
	<main class="flex-grow">
		<slot />
	</main>
	<Footer />
</div>
