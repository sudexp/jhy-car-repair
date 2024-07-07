<script>
	import { page } from '$app/stores';
</script>

<div class="h-full min-h-full flex-center">
	<div class="flex-center flex-col">
		<h2>
			{$page.status}
			{$page.error?.message}
		</h2>
		<p class="p2">Valitettavasti emme löydä tätä sivua.</p>
		<a href="/" class="p1 text-secondary">Etusivulle</a>
	</div>
</div>
