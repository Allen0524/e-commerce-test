import React from 'react';
import MainLayout from '@/pages/MainLayout';
import Advertisement from '@/pages/Advertisement';
import Card from '@/components/Card';
import {CardType} from '@/components/Card';
import {getAllData} from '@/utils';

export default function Keyboards() {
	const [data, setData] = React.useState<CardType[] | []>([]);

	React.useEffect(() => {
		async function init() {
			const data = await getAllData({type: 'keyboard'});
			setData(data);
		}

		init();
	}, []);

	return (
		<MainLayout
			banner={
				<img
					src="/kb-bg.avif"
					alt=""
					className="h-[24rem] md:h-[30rem] lg:h-[38rem] w-full object-cover object-center "
				/>
			}
			contentSection={
				<>
					{data.map(item => {
						return <Card key={item.id} {...item} />;
					})}
				</>
			}
			advertisement={<Advertisement />}
		/>
	);
}
