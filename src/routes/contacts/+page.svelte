<script lang="ts">
	import Leaflet from '$lib/map/leaflet.svelte';
	import Marker from '$lib/map/marker.svelte';
	import Popup from '$lib/map/popup.svelte';
	import MarkerSvg from '$lib/images/svg/leafletMarker.svelte';

	import photo1 from '$lib/images/avif/photo1.avif';
	import photo2 from '$lib/images/avif/photo2.avif';

	import type { LatLngExpression } from 'leaflet';

	const initialView: LatLngExpression = [62.275079586373295, 25.78202303900985];
	const markerPosition: LatLngExpression = [62.27532697658108, 25.783267621046065];
</script>

<svelte:head>
	<title>Jyväskylän Huoltoykköset - Edullinen korjaamo Jyväskylässä, Yhteystiedot</title>
	<meta
		name="description"
		content="Jyväskylän Huoltoykköset autokorjaamo yhteystiedot, Kuormaajantie 6, 40320, Jyväskylä, 0452393591"
	/>
</svelte:head>
<div class="space-y-6">
	<h2>YHTEYSTIEDOT</h2>
	<div class="space-y-4">
		<p class="text-bold-3">Kokemus ja ammattitaito jokaisessa yksityiskohdassa!</p>
		<p class="text-regular-3">
			Ylpeydellä esittelemme teille meidän kokeneen ja ammattitaitoisen henkilöstömme. Tavoitteemme
			on tarjota teille korkealaatuisen autonhuollon palveluita, jotka perustuvat yli kymmenen
			vuoden kokemukseen ja ammattitaitoon.
		</p>
		<p class="text-regular-3">
			Huoltomme erottautuu korkealla koulutuksella ja Ammattitaidolla, minkä avulla voimme tarjota
			teille aivan erityislaatuista palvelua. Työskentelymme on aina erityisen tarkkaa ja
			huolellista, mikä takaa teille parhaan mahdollisen lopputuloksen.
		</p>
		<p class="text-regular-3">
			Olemme avoinna arkisin klo 8:00–16.30 osoitteessa Kuormaajantie 6, 40320, Jyväskylä. Ota
			yhteyttä meille puhelimitse <a href="tel:0452393591" class="link no-underline hover:underline"
				>0452393591</a
			> ja varaa aikaa.
		</p>
		<div class="space-y-2">
			<p class="text-bold-3">Meidän tiimimme:</p>
			<div class="flex space-x-8">
				<div class="flex flex-col items-center space-y-2">
					<div class="avatar">
						<div class="w-36 rounded-full">
							<img src={photo1} alt="Asentaja1" class="m-0" />
						</div>
					</div>
					<p class="text-regular-2">Andrey</p>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<div class="avatar">
						<div class="w-36 rounded-full">
							<img src={photo2} alt="Asentaja2" class="m-0" />
						</div>
					</div>
					<p class="text-regular-2">Aaro</p>
				</div>
			</div>
		</div>
		<p class="text-regular-3">
			Löydä meidät helposti Seppälänkankaalta! Sijaintimme tekee meistä täydellisen valinnan sekä
			koti- että työmatkailijoille, jotka etsivät korkealaatuisia autonhuollon palveluita läheltä.
		</p>
		<Leaflet view={initialView} zoom={13}>
			<Marker latLng={markerPosition} width={40} height={40}>
				<MarkerSvg />
				<Popup>Jyväskylän Huoltoykköset</Popup>
			</Marker>
		</Leaflet>
		<p class="text-regular-3">
			Odottamme sinua <b>Jyväskylän Huoltoykköset</b> korjaamossa Seppäänkankaalla.
		</p>
	</div>
</div>
