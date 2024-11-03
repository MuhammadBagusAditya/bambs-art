<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Root as SheetRoot } from '$lib/components/ui/sheet';
	import { contacts } from '$lib/data.json';
	import { fade } from 'svelte/transition';

	import Navbar from '$lib/components/home/navbar.svelte';
	import Jumbotron from '$lib/components/home/jumbotron.svelte';
	import Products from '$lib/components/home/products.svelte';
	import Superiorities from '$lib/components/home/superiorities.svelte';
	import Gallery from '$lib/components/home/gallery.svelte';
	import Reviews from '$lib/components/home/reviews.svelte';
	import Contacts from '$lib/components/home/contacts.svelte';
	import Footer from '$lib/components/home/footer.svelte';

	let scrollY = $state(0);
	let winSize = $state({
		screenY: 0,
		totalHeight: 0
	});

	$effect(() => {
		winSize = {
			screenY: window.innerHeight,
			totalHeight: document.body.clientHeight
		};
		scrollY = window.scrollY;

		window.addEventListener('scroll', () => {
			scrollY = window.scrollY;
		});
	});
</script>

<svelte:head>
	<title>Website order lukisan custom - Tunjukkan kreativitasmu</title>
</svelte:head>

<SheetRoot controlledOpen={false}>
	<Navbar {scrollY} />
	<Jumbotron />
	<Products />
	<Superiorities />
	<!-- <Gallery /> -->
	<Reviews />
	<Contacts />
	<Footer />
</SheetRoot>

{#if scrollY + winSize.screenY < winSize.totalHeight - 100}
	<a
		href={contacts.whatsapp}
		class="fixed bottom-6 right-6 z-[5] cursor-pointer rounded-full bg-emerald-600 p-2 hover:bg-emerald-700 md:p-4"
		target="_blank"
		transition:fade
	>
		<Icon icon="mdi:whatsapp" class="text-2xl text-emerald-50" />
	</a>
{/if}
