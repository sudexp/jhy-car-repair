<script>
	import 'tailwindcss/tailwind.css';
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<Navbar />
<slot />
<Footer />
