import {useRoutes, Link} from 'raviger';
import Container from '@/components/Container';
import Home from '@/pages/Home';
import Keyboards from '@/pages/Keyboards';
import Product from '@/pages/Product';

const routes = {
	'/': () => <Home />,
	'/main/:productId': ({productId}: {productId: string}) => (
		<Product id={productId} />
	),
	'/keyboards': () => <Keyboards />,
	'/mouse': () => <div>mouse</div>,
	'/headphones': () => <div>headphones</div>,
	'/gamepad': () => <div>gamepad</div>,
};

function App() {
	const route = useRoutes(routes);

	return (
		<div className="w-full h-full">
			<header className="h-24 text-2xl">
				<Container className="flex items-center justify-between h-full">
					<div>
						<Link href="/">Logo</Link>
					</div>
					<div className="flex items-center space-x-8">
						<span>
							<a href="/">user</a>
						</span>
						<span>
							<a href="/">shop car</a>
						</span>
						<span>
							<a href="/">track list</a>
						</span>
					</div>
				</Container>
			</header>
			<main>
				<Container className="flex gap-16">
					<aside className="text-2xl pt-16 hidden lg:block">
						<nav>
							<ul className="flex flex-col space-y-4">
								<li className=" cursor-pointer">
									<Link href="/keyboards">Keyboards</Link>
								</li>
								<li className=" cursor-pointer">
									<Link href="/mouse">Mouse</Link>
								</li>
								<li className=" cursor-pointer">
									<Link href="/headphones">Headphones</Link>
								</li>
								<li className=" cursor-pointer">
									<Link href="/gamepad">Gamepad</Link>
								</li>
							</ul>
						</nav>
					</aside>
					<div className=" pt-16 w-full">{route}</div>
				</Container>
			</main>
			<footer className="text-2xl">
				<Container>All rights reserved</Container>
			</footer>
		</div>
	);
}

export default App;
