<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import Icon from '@iconify/svelte';
	import { contacts } from '$lib/data.json';
</script>

<section id="contacts" class="py-8">
	<div class="container">
		<h2 class="mb-4 text-center text-2xl font-bold text-slate-900">Tertarik memesan?</h2>

		<div class="grid gap-3 lg:grid-cols-[400px,_1fr]">
			<div class="flex flex-col gap-3">
				<Button
					href={contacts.whatsapp}
					class="w-full bg-emerald-600 text-slate-50 hover:bg-emerald-700"
					target="_blank"
				>
					<Icon icon="mdi:whatsapp" class="text-xl" />
					Pesan via Whatsapp
				</Button>

				<Separator class="my-3" />

				<h4 class="inline-flex items-center gap-2 font-semibold text-slate-800">
					<Icon icon="mdi:map-marker" class="text-2xl" />
					Alamat
				</h4>

				<p>{contacts.location}</p>
			</div>

			<div>
				<iframe
					width="100%"
					height="300"
					src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=-6.5917217984720144, 110.65430613776233&amp;q=Jl. A.E. Suryani No.63&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
					frameborder="0"
					scrolling="no"
					marginheight="0"
					marginwidth="0"
					title="alamat usaha"
				></iframe>
			</div>
		</div>
	</div>
</section>
