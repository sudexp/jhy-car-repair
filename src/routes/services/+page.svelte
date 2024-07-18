<script lang="ts">
	import WheelSvg from '$lib/images/svg/service-icons/wheel.svelte';
	import ChangeVehicleSvg from '$lib/images/svg/service-icons/change_vehicle.svelte';
	import ServiceSvg from '$lib/images/svg/service-icons/service.svelte';
	import ConditioningSvg from '$lib/images/svg/service-icons/conditioning.svelte';
	import TireBalancingSvg from '$lib/images/svg/service-icons/tire_balancing.svelte';
	import DiagnosisSvg from '$lib/images/svg/service-icons/diagnosis.svelte';
	import MaintenanceWarrantySvg from '$lib/images/svg/service-icons/maintenance_warranty.svelte';
	import RustSvg from '$lib/images/svg/service-icons/rust.svelte';
	import HeaterSvg from '$lib/images/svg/service-icons/heater.svelte';
	import EmissionSvg from '$lib/images/svg/service-icons/emission.svelte';
	import BatterySvg from '$lib/images/svg/service-icons/battery.svelte';
	import OilChangeSvg from '$lib/images/svg/service-icons/oil_change.svelte';
	import EngineSvg from '$lib/images/svg/service-icons/engine.svelte';
	import CoolingSvg from '$lib/images/svg/service-icons/cooling.svelte';
	import SuspensionSvg from '$lib/images/svg/service-icons/suspension.svelte';
	import BrakesSvg from '$lib/images/svg/service-icons/brakes.svelte';
	import FuelSvg from '$lib/images/svg/service-icons/fuel.svelte';
	import ExhaustPipeSvg from '$lib/images/svg/service-icons/exhaust_pipe.svelte';
	import TransmissionSvg from '$lib/images/svg/service-icons/transmission.svelte';

	import type { Service } from '$lib/interfaces';

	const services: Service[] = [
		{
			id: 0,
			title: 'Rengasmyynti ja Rengashotelli, kausisäilytys',
			component: WheelSvg
		},
		{
			id: 1,
			title: 'Sijaisautot huollon tai korjauksen ajaksi',
			component: ChangeVehicleSvg
		},
		{
			id: 2,
			title: 'Henkilö- ja pakettiautojen kaikki huollot ja korjaukset',
			component: ServiceSvg
		},
		{
			id: 3,
			title: 'Ilmastointi huolto ja korjaus',
			component: ConditioningSvg
		},
		{
			id: 4,
			title: 'Renkaiden tasapainotus ja 3D-suuntaus',
			component: TireBalancingSvg
		},
		{
			id: 5,
			title: 'Vikadiagnostiikka ja raportointi',
			component: DiagnosisSvg
		},
		{
			id: 6,
			title: 'Määräaikaishuollot – Autosi takuu säilyy',
			component: MaintenanceWarrantySvg
		},
		{
			id: 7,
			title: 'Ruostevauriokorjaukset',
			component: RustSvg
		},
		{
			id: 8,
			title: 'Sisätilalämmittimet',
			component: HeaterSvg
		},
		{
			id: 9,
			title: 'Päästömittaukset ja diagnostiikat',
			component: EmissionSvg
		},
		{
			id: 10,
			title: 'Henkilöauton ja pakettiauton käynnistimet, akut, laturit',
			component: BatterySvg
		},
		{
			id: 11,
			title: 'Öljynvaihdot',
			component: OilChangeSvg
		},
		{
			id: 12,
			title: 'Jakopää huollot- ja korjaukset',
			component: EngineSvg
		},
		{
			id: 13,
			title: 'Jäähdytysjärjestelmän huollot- ja korjaukset',
			component: CoolingSvg
		},
		{
			id: 14,
			title: 'Ohjaus- ja jousitus työt',
			component: SuspensionSvg
		},
		{
			id: 15,
			title: 'Jarrujen huollot- ja korjaukset',
			component: BrakesSvg
		},
		{
			id: 16,
			title: 'Polttoainejarjestelmien huollot sekä korjaukset',
			component: FuelSvg
		},
		{
			id: 17,
			title: 'Pakokaasujärjestelmien korjaustyöt',
			component: ExhaustPipeSvg
		},
		{
			id: 18,
			title: 'Voimansiirron huollot ja korjaukset',
			component: TransmissionSvg
		}
	];
</script>

<div class="space-y-6">
	<div class="space-y-6">
		<h2>TÄYDEN PALVELUN AUTOHUOLTO KUSTANNUSTEHOKKAASTI</h2>
		<div class="space-y-4">
			<p class="text-regular-3">
				Autohuoltomme kattaa laajan valikoiman palveluita autosi kunnon ylläpitämiseksi.
				Tavoitteenamme on tarjota luotettavaa ja tehokasta palvelua, kattamaan kaikki tarvittavat
				huollot ja korjaukset, yksinkertaisista teknisistä huolloista raskaisiin
				korjaustoimenpiteisiin. Pyrimme tekemään asiakaskokemuksestanne mukavan ja vaivattoman
				tarjoamalla laadukasta palvelua ja yksilöllistä lähestymistapaa jokaiseen asiakkaaseen.
			</p>
			<p class="text-bold-3">Palvelumme sisältää:</p>
		</div>
	</div>
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
		{#each services as service (service.id)}
			<div class="flex flex-row items-center space-x-5">
				<div class="avatar static">
					<div class="w-10 rounded-full">
						<svelte:component this={service.component} />
					</div>
				</div>
				<p class="text-regular-3">{service.title}</p>
			</div>
		{/each}
	</div>
	<p class="text-regular-3">… ja kaikki muu mahdollinen autosi hyvinvoinnin tueksi!</p>
</div>
