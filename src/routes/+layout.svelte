<script>
	import 'tailwindcss/tailwind.css';
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<div class="flex flex-col min-h-screen">
	<Navbar />
	<main class="flex-grow">
		<slot />
	</main>
	<Footer />
</div>
