type MainLayoutProps = {
	banner: React.ReactNode;
	contentSection: React.ReactNode;
	advertisement: React.ReactNode;
};

export default function MainLayout(props: MainLayoutProps) {
	const {banner, contentSection, advertisement} = props;

	return (
		<div className="flex gap-16">
			<div className="w-full flex-1">
				{banner}

				<section className="pt-10">
					<div className=" grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center">
						{contentSection}
					</div>
				</section>
			</div>

			{advertisement}
		</div>
	);
}
