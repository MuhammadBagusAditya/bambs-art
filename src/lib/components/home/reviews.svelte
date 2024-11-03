<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { reviews } from '$lib/data.json';
</script>

<section id="reviews" class="bg-slate-100 py-8">
	<div class="container">
		<h2 class="mb-4 text-center text-2xl font-bold text-slate-900">Testimoni customer</h2>

		<div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
			{#each reviews as review}
				<Card.Root class="transition-all hover:scale-105">
					<Card.Header>
						<img
							src={review.img}
							alt={`lukisan yang dibeli ${review.name}`}
							class="mb-4 rounded-lg"
						/>

						<h3 class="text-center text-xl font-semibold text-primary-foreground">{review.name}</h3>
					</Card.Header>

					<Card.Content>
						<p class="text-center text-slate-800">{review.desc}</p>
					</Card.Content>
				</Card.Root>
			{/each}
		</div>
	</div>
</section>
