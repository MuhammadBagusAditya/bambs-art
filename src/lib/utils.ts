import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatPrice(price: number) {
	const formatter = new Intl.NumberFormat('id-ID', {
		currency: 'IDR',
		style: 'currency'
	});

	return formatter.format(price);
}
