<script lang="ts">
	import { onMount, onDestroy, getContext, setContext } from 'svelte';

	export let width: number;
	export let height: number;
	export let latLng: L.LatLngExpression;

	let marker: L.Marker | undefined;
	let markerElement: HTMLElement;

	const { getMap }: { getMap: () => L.Map | undefined } = getContext('map');
	const map = getMap();

	setContext('layer', {
		// L.Marker inherits from L.Layer
		getLayer: () => marker
	});

	onMount(async () => {
		const L = await import('leaflet');

		if (map) {
			let icon = L.divIcon({
				html: markerElement,
				className: 'map-marker',
				iconSize: L.point(width, height),
				popupAnchor: [0, -17.5]
			});
			marker = L.marker(latLng, { icon }).addTo(map);
		}
	});

	onDestroy(() => {
		marker?.remove();
		marker = undefined;
	});
</script>

<div bind:this={markerElement}>
	{#if marker}
		<slot />
	{/if}
</div>
