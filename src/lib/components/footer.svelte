<script>
	import Logo from './logo.svelte';
	import FooterTitle from './footertitle.svelte';
</script>

<footer class="sm:grid columns-template bg-base-200 p-8">
	<aside><Logo /></aside>
	<div class="sm:justify-self-end">
		<div class="grid columns-template gap-4">
			<FooterTitle>Osoite:</FooterTitle>
			<a href="/contacts">Kuormaajantie 6, 40320, Jyväskylä</a>
			<FooterTitle>Puhelinnumero:</FooterTitle>
			<a href="/contacts">0452393591</a>
			<FooterTitle>Sähköposti:</FooterTitle>
			<a href="/contacts">huoltoykkoset@gmail.com</a>
			<FooterTitle>Laskut:</FooterTitle>
			<a href="/contacts">huoltoykkoset.laskutus@gmail.com</a>
			<FooterTitle>Y-tunnus:</FooterTitle>
			<a href="/contacts">3422467-8</a>
		</div>
	</div>
</footer>

<style>
	.columns-template {
		grid-template-columns: max-content auto;
	}
</style>
