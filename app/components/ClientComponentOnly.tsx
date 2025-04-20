import { useEffect, useState } from 'react';

export default function ClientComponentOnly({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isBrowser, setIsBrowser] = useState(false);
	useEffect(() => {
		setIsBrowser(true);
	}, []);

	if (!isBrowser) return null;

	return <>{children}</>;
}
