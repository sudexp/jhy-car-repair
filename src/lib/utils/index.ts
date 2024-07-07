export const navItems = [
	{ name: 'PALVELUT', href: '/services' },
	{ name: 'RENGASMYYNTI JA -HOTELLI', href: '/wheels' },
	{ name: 'YHTEYSTIEDOT', href: '/contacts' }
];

export const getIsRootPath = (pathname: string): boolean => {
	return pathname === '/';
};

export const getFooterBgColor = (isRootPath: boolean): 'transparent' | 'base-200' => {
	return isRootPath ? 'transparent' : 'base-200';
};

export const getLayoutBgStyle = (isRootPath: boolean, bgImage: string): string => {
	return isRootPath
		? `background-image: url(${bgImage}); background-size: cover; background-position: center`
		: '';
};

export const getNavlinkColor = (
	isRootPath: boolean | undefined
): 'text-accent' | 'text-neutral' | 'text-secondary' => {
	if (isRootPath === undefined) {
		return 'text-accent';
	}

	return isRootPath ? 'text-neutral' : 'text-secondary';
};

export const getDrawerLogoColor = (isDrawer: boolean | undefined) => {
	return isDrawer ? 'text-secondary' : 'text-base-100';
};
