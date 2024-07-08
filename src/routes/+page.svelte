<script lang="ts">
	import PhoneSvg from '$lib/images/svg/phoneIcon.svelte';
</script>

<div class="flex flex-col justify-between space-y-4 text-neutral">
	<div class="space-y-4">
		<div class="space-y-2">
			<h1 class="text-neutral">JYVÄSKYLÄN HUOLTOYKKÖSET</h1>
			<hr class="m-0 bg-neutral" />
			<p class="text-bold-2">Luottamuksellinen autonhuollon kumppanisi!</p>
		</div>
		<p class="text-regular-2">
			Tervetuloa paremman autohuollon asiakkaaksi. Tarjoamme teille korkealaatuisia autonhuollon
			palveluita, jotka perustuvat yli kymmenen vuoden kokemukseen ja ammattitaitoon. Tarkoituksemme
			on auttaa teitä löytämään parhaat autonhuollon ratkaisut ja tarjota ne edullisesti.
		</p>
	</div>
	<div class="space-y-2">
		<p class="text-regular-2">
			Palvelemme ma–pe klo 8:00–16.30 osoitteessa <b>Kuormaajantie 6, 40320, Jyväskylä</b>.
		</p>
		<div class="flex flex-row space-x-2">
			<p class="text-regular-2">Soita meille:</p>
			<div class="text-regular-2 flex flex-row items-center space-x-2">
				<PhoneSvg />
				<p>040 123 4567</p>
			</div>
		</div>
	</div>
</div>
