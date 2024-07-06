<script>
	import Logo from './logo.svelte';
	import FooterTitle from './footertitle.svelte';
	import Footerlink from './footerlink.svelte';

	export let isRootPath;
</script>

<footer class="flex-shrink-0 sm:grid columns-template bg-base-200 p-8">
	<aside class="mb-4 sm:mb-0"><Logo {isRootPath} /></aside>
	<div class="sm:justify-self-end">
		<div class="grid columns-template gap-x-8 gap-y-2">
			<FooterTitle>Osoite:</FooterTitle>
			<Footerlink href="/contacts">Kuormaajantie 6, 40320, Jyväskylä</Footerlink>
			<FooterTitle>Puhelinnumero:</FooterTitle>
			<Footerlink href="tel:0452393591">0452393591</Footerlink>
			<FooterTitle>Sähköposti:</FooterTitle>
			<Footerlink href="mailto:huoltoykkoset@gmail.com">huoltoykkoset@gmail.com</Footerlink>
			<FooterTitle>Laskut:</FooterTitle>
			<Footerlink href="mailto:huoltoykkoset.laskutus@gmail.com"
				>huoltoykkoset.laskutus@gmail.com</Footerlink
			>
			<FooterTitle>Y-tunnus:</FooterTitle>
			<p class="p3 text-base-100">3422467-8</p>
		</div>
	</div>
</footer>

<style>
	.columns-template {
		grid-template-columns: max-content auto;
	}
</style>
