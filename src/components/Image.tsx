import React from 'react';

interface ImageProps extends React.HTMLProps<HTMLImageElement> {
	className?: string;
}

export default function Image({className, ...restProps}: ImageProps) {
	const [isError, setIsError] = React.useState(false);

	function handleOnError() {
		setIsError(true);
	}

	return (
		<>
			{isError ? (
				<img
					{...restProps}
					src="/fallback.webp"
					className={className}
					style={{
						objectFit: 'contain',
						objectPosition: 'center',
					}}
					onError={handleOnError}
				/>
			) : (
				<img {...restProps} className={className} onError={handleOnError} />
			)}
		</>
	);
}
