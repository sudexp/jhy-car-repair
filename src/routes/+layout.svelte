<script>
	import 'tailwindcss/tailwind.css';
	import '../app.css';
	import { page } from '$app/stores';
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import bgImage from '$lib/jpg/bgImage.avif';
	import { getIsRootPath, getLayoutBgStyle } from '$lib/utils';

	let isRootPath;

	$: isRootPath = getIsRootPath($page.url.pathname);
</script>

<div class="flex flex-col min-h-screen" style={getLayoutBgStyle(isRootPath, bgImage)}>
	<Navbar {isRootPath} />
	<main class="flex-grow">
		<slot />
	</main>
	<Footer {isRootPath} />
</div>
