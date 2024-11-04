<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet';
	import Separator from '../ui/separator/separator.svelte';
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

<Sheet.Content onOpenAutoFocus={(e) => e.preventDefault()} class="max-w-[20rem]">
	<Sheet.Header>
		<Sheet.Title>Menu</Sheet.Title>
	</Sheet.Header>

	<Separator class="my-1" />

	<div class="flex flex-col gap-3 pb-3">
		<a
			href="#home"
			class="flex w-full items-center gap-2 rounded-lg bg-transparent px-4 py-2 text-slate-800 transition-all hover:bg-slate-100 active:bg-slate-200"
		>
			<Icon icon="mdi:home" class="text-2xl text-slate-700" />
			Beranda
		</a>
		<a
			href="#products"
			class="flex w-full items-center gap-2 rounded-lg bg-transparent px-4 py-2 text-slate-800 transition-all hover:bg-slate-100 active:bg-slate-200"
		>
			<Icon icon="mdi:package" class="text-2xl text-slate-700" />
			Produk
		</a>
		<a
			href="#superiorities"
			class="flex w-full items-center gap-2 rounded-lg bg-transparent px-4 py-2 text-slate-800 transition-all hover:bg-slate-100 active:bg-slate-200"
		>
			<Icon icon="mdi:star" class="text-2xl text-slate-700" />
			Keunggulan
		</a>
		<!-- <a href="#gallery">Galeri</a> -->
		<a
			href="#reviews"
			class="flex w-full items-center gap-2 rounded-lg bg-transparent px-4 py-2 text-slate-800 transition-all hover:bg-slate-100 active:bg-slate-200"
		>
			<Icon icon="mdi:comment-quote" class="text-2xl text-slate-700" />
			Testimoni
		</a>
		<a
			href="#contacts"
			class="flex w-full items-center gap-2 rounded-lg bg-transparent px-4 py-2 text-slate-800 transition-all hover:bg-slate-100 active:bg-slate-200"
		>
			<Icon icon="mdi:phone" class="text-2xl text-slate-700" />
			Kontak
		</a>
	</div>
</Sheet.Content>
