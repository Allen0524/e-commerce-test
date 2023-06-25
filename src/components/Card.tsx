import Image from '@/components/Image';

export type CardType = {
	id: number;
	name: string;
	src: string;
	price: number;
	type: string;
	stars: number;
};

export default function Card(props: CardType) {
	const {name, price, src} = props;

	return (
		<div className=" rounded-lg flex flex-col w-full rounded-lg cursor-pointer items-center bg-[#2d2d2d] p-2 hover:outline hover:outline-yellow-400 hover:outline-1 hover:outline-offset-2">
			<div className=" w-[20rem] h-[15rem]">
				<Image src={src} alt="name" className=" rounded-lg w-full h-full" />
			</div>
			<div className=" text-3xl font-bold">{name}</div>
			<div className=" text-2xl">$ {price}</div>
		</div>
	);
}
