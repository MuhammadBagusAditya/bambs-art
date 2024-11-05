<script lang="ts">
	import { Separator } from '$lib/components/ui/separator';
	import Icon from '@iconify/svelte';
</script>

<footer class="bg-slate-800 text-slate-100">
	<div class="container grid grid-cols-1 justify-between gap-4 py-3 sm:grid-cols-[auto,_1fr]">
		<a href="/" class="font-semibold">BAMB'S ART</a>

		<Separator class="block bg-slate-500 sm:hidden" />

		<div class="grid grid-cols-2 grid-rows-2 flex-wrap gap-3 sm:flex sm:justify-end">
			<a href="#products" class="inline-flex items-center gap-2">
				<Icon icon="mdi:package" class="text-2xl" />
				Produk
			</a>

			<a href="#superiorities" class="inline-flex items-center gap-2">
				<Icon icon="mdi:star" class="text-2xl" />
				Keunggulan
			</a>

			<!-- <a href="#gallery">Galeri</a> -->
			<a href="#reviews" class="inline-flex items-center gap-2">
				<Icon icon="mdi:comment-quote" class="text-2xl" />
				Testimoni
			</a>

			<a href="#contacts" class="inline-flex items-center gap-2">
				<Icon icon="mdi:phone" class="text-2xl" />
				Kontak
			</a>
		</div>
	</div>
</footer>
