<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet';
	import { Button } from '$lib/components/ui/button';
	import Icon from '@iconify/svelte';
	import { cn } from '$lib/utils';

	let { scrollY } = $props();
</script>

<nav
	class={cn(
		'fixed top-0 z-[10] w-full transition-all',
		scrollY === 0 ? 'bg-transparent text-slate-100' : 'bg-primary text-primary-foreground'
	)}
>
	<div class="container flex items-center justify-between gap-3 py-3">
		<a href="/" class="text-xl font-bold">BAMB'S ART</a>

		<div class="hidden items-center gap-3 md:flex">
			<a href="#home">Beranda</a>
			<a href="#products">Produk</a>
			<a href="#superiorities">Keunggulan</a>
			<!-- <a href="#gallery">Galeri</a> -->
			<a href="#reviews">Testimoni</a>

			<a href="#contacts">Kontak</a>
		</div>

		<Sheet.Trigger class="flex md:hidden">
			<Icon icon="mdi:menu" class="text-xl" />
		</Sheet.Trigger>
	</div>
</nav>

<Sheet.Content>
	<Sheet.Header>
		<Sheet.Title>Menu</Sheet.Title>
	</Sheet.Header>

	<div class="container flex flex-col items-center gap-3 pb-3">
		<a href="#home">Beranda</a>
		<a href="#products">Produk</a>
		<a href="#superiorities">Keunggulan</a>
		<!-- <a href="#gallery">Galeri</a> -->
		<a href="#reviews">Testimoni</a>
		<a href="#contacts">Kontak</a>
	</div>
</Sheet.Content>
