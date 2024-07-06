<script>
	import Logo from './logo.svelte';
</script>

<footer class="sm:grid columns-template bg-base-200 p-8">
	<aside><Logo /></aside>
	<div class="sm:justify-self-end">
		<div class="grid columns-template gap-4 text-base-100">
			<p>Osoite:</p>
			<a href="/contacts">Kuormaajantie 6, 40320, Jyväskylä</a>
			<p>Puhelinnumero:</p>
			<a href="/contacts">0452393591</a>
			<p>Sähköposti:</p>
			<a href="/contacts">huoltoykkoset@gmail.com</a>
			<p>Laskut:</p>
			<a href="/contacts">huoltoykkoset.laskutus@gmail.com</a>
			<p>Y-tunnus:</p>
			<a href="/contacts">3422467-8</a>
		</div>
	</div>
</footer>

<style>
	.columns-template {
		grid-template-columns: max-content auto;
	}
</style>
