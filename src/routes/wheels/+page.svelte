<script lang="ts">
	import wheelsImg from '$lib/images/avif/wheels.avif';
	import hotelImg from '$lib/images/avif/hotel.avif';
</script>

<div class="space-y-6">
	<h2>RENGASMYYNTI JA RENGASHOTELLI</h2>
	<div class="space-y-4">
		<p class="text-bold-3">Kunnon renkaat on halpa henkivakuutus!</p>
		<p class="text-regular-3">
			Meiltä saat järkevän tarjouksen kunnon talvi- ja kesärenkaille. Tule käymään niin tarkistamme
			veloituksetta renkaasi! Me säilytämme rengashotellissamme autosi renkaita sesongin ylitse kuin
			omiamme. Rengashotellitarjouksemme pitää sisällään renkaiden pesun ja allevaihdon.
		</p>
	</div>
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
		<div class="space-y-2">
			<img src={wheelsImg} alt="Rengasmyynti" class="m-0" />
			<div class="space-y-2">
				<p class="text-regular-2">RENGASMYYNTI</p>
				<p class="text-regular-3">
					Kunnon renkaat on halpa henkivakuutus! Meiltä saat järkevän tarjouksen kunnon talvi- ja
					kesärenkaille. Tule käymään niin tarkistamme veloituksetta renkaasi!
				</p>
			</div>
		</div>
		<div class="space-y-2">
			<div class="relative -z-10">
				<img src={hotelImg} alt="Rengasmyynti" class="m-0" />
				<a
					href="https://www.freepik.com"
					target="_blank"
					rel="noopener noreferrer"
					class="absolute bottom-0 right-0 no-underline"
				>
					designed by fxquadro - Freepik.com
				</a>
			</div>
			<div class="space-y-2">
				<p class="text-regular-2">RENGASHOTELLI</p>
				<p class="text-regular-3">
					Me säilytämme renkaitasi sesongin ylitse kuin omiamme. Rengashotellitarjouksemme pitää
					sisällään renkaiden pesun ja allevaihdon.
				</p>
			</div>
		</div>
	</div>
</div>
