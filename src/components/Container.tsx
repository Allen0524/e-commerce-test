import React from 'react';

export default function Container({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div className={`mx-auto max-w-[125rem] px-8 ${className}`}>{children}</div>
	);
}
