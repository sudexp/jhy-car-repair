<script lang="ts">
	import 'tailwindcss/tailwind.css';
	import '../app.css';
	import { page } from '$app/stores';
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import bgImage from '$lib/images/avif/bgImage.avif';
	import { getIsRootPath, getLayoutBgStyle } from '$lib/utils';
	import GoogleAnalytics from '$lib/components/googleAnalytics.svelte';

	let isRootPath: boolean;

	$: isRootPath = getIsRootPath($page.url.pathname);
</script>

<!-- TODO: check! md: px-40 is 160px, reqired is 156px; lg: px-52 is 208px, reqired is 204px, -->
<div class="flex flex-col min-h-screen" style={getLayoutBgStyle(isRootPath, bgImage)}>
	<Navbar {isRootPath} />
	<main class="flex flex-grow main-spacing">
		<slot />
	</main>
	<Footer {isRootPath} />
</div>

<GoogleAnalytics id={import.meta.env.VITE_GOOGLE_ANALYTICS_ID} />
