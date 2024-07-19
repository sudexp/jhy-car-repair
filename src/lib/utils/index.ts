import type { NavItem } from '$lib/interfaces';

export const navItems: NavItem[] = [
	{ name: 'PALVELUT', href: '/services' },
	{ name: 'RENGASMYYNTI JA -HOTELLI', href: '/wheels' },
	{ name: 'YHTEYSTIEDOT', href: '/contacts' }
];

export const getIsRootPath = (pathname: string): boolean => {
	return pathname === '/';
};

export const getFooterBgColor = (isRootPath: boolean): 'bg-transparent' | 'bg-base-200' => {
	return isRootPath ? 'bg-transparent' : 'bg-base-200';
};

export const getFooterMt = (isRootPath: boolean): 'mt-0' | 'mt-6' => {
	return isRootPath ? 'mt-0' : 'mt-6';
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

export const getDrawerLogoColor = (
	isDrawer: boolean | undefined
): 'text-secondary' | 'text-base-100' => {
	return isDrawer ? 'text-secondary' : 'text-base-100';
};

export const getMenuIconColor = (isRootPath: boolean): 'text-base-100' | 'text-secondary' => {
	return isRootPath ? 'text-base-100' : 'text-secondary';
};

export const getNavlinkIsSelected = (isSelected: boolean): 'text-bold-3' | 'text-regular-3' => {
	return isSelected ? 'text-bold-3' : 'text-regular-3';
};

export const getNavlinkPy = (isDrawer: boolean | undefined): 'py-3' | 'py-2' => {
	return isDrawer ? 'py-3' : 'py-2';
};

export const getNavlinkPx = (isDrawer: boolean | undefined): 'px-4' | 'px-2' => {
	return isDrawer ? 'px-4' : 'px-2';
};

export const handleClick = (isDrawer: boolean | undefined) => () => {
	const drawerLabel = document.getElementById('my-drawer-3');

	if (drawerLabel && isDrawer) {
		drawerLabel.click();
	}
};
