<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { superiorities } from '$lib/data.json';
	import Icon from '@iconify/svelte';
</script>

<section id="superiorities" class="py-8">
	<div class="container">
		<h2 class="mb-4 text-center text-2xl font-bold text-slate-900">Kenapa memilih kami?</h2>

		<div class="grid gap-3 lg:grid-cols-3">
			{#each superiorities as superior}
				<div class="flex flex-col items-center px-6 py-4">
					<Icon icon={superior.icon} class="text-[6rem] text-primary" />

					<h3 class="text-center text-xl font-semibold text-primary-foreground">
						{superior.title}
					</h3>

					<p class="text-center text-slate-800">{superior.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
