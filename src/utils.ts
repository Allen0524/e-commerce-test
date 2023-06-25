import {CardType} from '@/components/Card';

export function getAllData({type}: {type: string}): Promise<CardType[]> {
	return new Promise(resolve => {
		const data: CardType[] = [];

		for (let i = 0; i < 20; i++) {
			data.push({
				id: i,
				name: `product ${i}`,
				src: `https://picsum.photos/id/${Math.ceil(
					Math.random() * 200 + 1,
				)}/200/150`,
				price: Math.floor(Math.random() * 10000) + 50,
				type,
				stars: Math.round(Math.random() * 5),
			});
		}

		window.setTimeout(() => {
			resolve(data);
		}, 300);
	});
}

export type ProductType = {
	id: string;
	name: string;
	coverSrc: string;
	images: string[];
	price: number;
	type: string;
	stars: number;
	description: string;
};

export function getProduct({
	type,
	id,
}: {
	type: string;
	id: string;
}): Promise<ProductType> {
	return new Promise(resolve => {
		window.setTimeout(() => {
			resolve({
				id,
				type,
				name: '',
				coverSrc: '',
				images: [''],
				price: 10,
				stars: 3,
				description: '',
			});
		}, 300);
	});
}
