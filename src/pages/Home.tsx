import React from 'react';
import {Link} from 'raviger';
import MainLayout from '@/pages/MainLayout';
import Advertisement from '@/pages/Advertisement';
import Card from '@/components/Card';
import {CardType} from '@/components/Card';
import {getAllData} from '@/utils';

export default function Home() {
	const [data, setData] = React.useState<CardType[] | []>([]);

	React.useEffect(() => {
		async function init() {
			const data = await getAllData({type: 'main'});
			setData(data);
		}

		init();
	}, []);

	return (
		<MainLayout
			banner={
				<img
					src="/main-bg.avif"
					alt=""
					className="h-[24rem] md:h-[30rem] lg:h-[38rem] w-full object-cover object-center "
				/>
			}
			contentSection={
				<>
					{data.map(item => {
						return (
							<Link key={item.id} href={`${item.type}/${item.id}`}>
								<Card {...item} />
							</Link>
						);
					})}
				</>
			}
			advertisement={<Advertisement />}
		/>
	);
}
