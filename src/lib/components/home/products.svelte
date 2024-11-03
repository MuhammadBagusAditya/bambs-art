<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel';
	import Autoplay from 'embla-carousel-autoplay';
	import { products } from '$lib/data.json';
	import { formatPrice } from '$lib/utils';
</script>

<section id="products" class="bg-slate-100 py-8">
	<div class="container">
		<header class="mb-4">
			<h2 class="text-center text-2xl font-bold text-slate-900">Contoh Produk Kami</h2>
			<h5 class="text-center text-slate-800">*Harga tidak termasuk figura dan ongkir</h5>
		</header>

		<Carousel.Root
			opts={{
				loop: true,
				duration: 50
			}}
			plugins={[Autoplay({ delay: 4000, playOnInit: true })]}
		>
			<Carousel.Content>
				{#each products as product}
					<Carousel.Item class="md:basis-1/2 lg:basis-1/3">
						<div class="relative overflow-hidden rounded-lg">
							<img
								src={product.imageSrc}
								alt={`gambar dari ${product.title}'`}
								class="aspect-square w-full object-cover object-center md:aspect-video"
							/>

							<h4
								class="absolute bottom-0 left-0 w-full bg-primary/70 py-2 text-center text-xl font-semibold text-primary-foreground"
							>
								{product.title}
							</h4>

							<span
								class="absolute right-2 top-2 rounded-lg bg-slate-900/80 px-3 py-1 text-slate-100"
							>
								{formatPrice(Number.parseFloat(product.price))}
							</span>
						</div>
					</Carousel.Item>
				{/each}
			</Carousel.Content>
		</Carousel.Root>
	</div>
</section>
