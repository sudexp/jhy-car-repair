<script lang="ts">
	import Leaflet from '$lib/map/leaflet.svelte';
	import Marker from '$lib/map/marker.svelte';
	import type { LatLngExpression } from 'leaflet';
	import LeafletMarker from '$lib/images/svg/leafletMarker.svelte';

	const initialView: LatLngExpression = [62.275079586373295, 25.78202303900985];
	const markerPosition: LatLngExpression = [62.27532697658108, 25.783267621046065];
</script>

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
		<p class="text-bold-3">Meidän tiimimme:</p>

		<p class="text-regular-3">
			Löydä meidät helposti Seppälänkankaalta! Sijaintimme tekee meistä täydellisen valinnan sekä
			koti- että työmatkailijoille, jotka etsivät korkealaatuisia autonhuollon palveluita läheltä.
		</p>
		<Leaflet view={initialView} zoom={13}>
			<Marker latLng={markerPosition} width={40} height={40}>
				<LeafletMarker />
			</Marker>
		</Leaflet>
		<p class="text-regular-3">
			Odottamme sinua <b>Jyväskylän Huoltoykköset</b> korjaamossa Seppäänkankaalla.
		</p>
	</div>
</div>
