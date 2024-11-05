<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import Icon from '@iconify/svelte';
	import { brand, tagline, contacts } from '$lib/data.json';
</script>

<section
	class="relative min-h-[100dvh] w-full overflow-hidden after:absolute after:left-0 after:top-0 after:z-[0] after:h-full after:w-full after:bg-black/70"
>
	<img
		src="/banner.jpg"
		alt="banner"
		class="absolute left-0 top-0 z-[-1] h-[100dvh] w-full object-cover object-center"
		role="banner"
	/>

	<div class="relative z-[1] flex h-[100dvh] flex-col items-center justify-center px-4">
		<h1 class="mb-4 text-4xl font-bold uppercase text-primary md:text-6xl">
			{brand}
		</h1>
		<p class="mb-6 text-center text-xl text-slate-100 md:text-2xl">
			{@html tagline}
		</p>
		<div class="flex flex-col gap-3 md:flex-row">
			<Button class="" size="lg" href="#products">Lebih lanjut</Button>
			<Button
				href={contacts.whatsapp}
				class="hidden gap-2 bg-emerald-600 text-emerald-50 hover:bg-emerald-700 md:inline-flex"
				size="lg"
				target="_blank"
			>
				<Icon icon="mdi:whatsapp" class="text-xl" />
				Pesan sekarang
			</Button>
		</div>
	</div>
</section>
