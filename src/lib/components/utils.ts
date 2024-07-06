export const navItems = [
	{ name: 'PALVELUT', href: '/services' },
	{ name: 'RENGASMYYNTI JA -HOTELLI', href: '/wheels' },
	{ name: 'YHTEYSTIEDOT', href: '/contacts' }
];

export const getIsRootPath = (pathname: string) => {
	return pathname === '/';
};
