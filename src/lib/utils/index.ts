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

export const getStyle = (isRootPath: boolean, bgImage: string): string => {
	return isRootPath ? `background-image: url(${bgImage})` : '';
};
