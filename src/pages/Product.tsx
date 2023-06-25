import React from 'react';
import {usePath} from 'raviger';
import Star from '@/components/icons/Star';
import {getProduct, ProductType} from '@/utils';

export default function Product({id}: {id: string}) {
	const paths = usePath();
	const path = paths?.split('/')?.[1] as string;

	const [data, setData] = React.useState<ProductType | null>(null);

	React.useEffect(() => {
		async function getData() {
			const data = await getProduct({id, type: path});
			setData(data);
		}

		getData();
	}, []);

	return (
		<div className=" px-5">
			<div className="flex flex-col">
				<div className="flex items-center">
					<div>
						<h2 className=" text-4xl font-bold">Product Name</h2>
						<h6 className=" text-[#eee]">type</h6>

						<div>price: 456</div>
						<div className="flex items-center">
							{data?.stars
								? [...new Array(5)].map((_, index) => (
										<Star key={index} isFill={data?.stars > index} />
								  ))
								: null}
						</div>

						<div className="flex items-center space-x-5">
							<button>order</button>
							<button>add to car</button>
						</div>
					</div>
					<div></div>
				</div>

				<div>2</div>
			</div>
		</div>
	);
}
