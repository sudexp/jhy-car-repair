<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex-center flex-auto">
	<div class="flex-center flex-col">
		<h2>
			{$page.status}
			{$page.error?.message}
		</h2>
		<p class="text-regular-2">Valitettavasti emme löydä tätä sivua.</p>
		<a href="/" class="text-regular-1 text-secondary">Etusivulle</a>
	</div>
</div>
