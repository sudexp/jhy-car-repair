import { describe, it, expect } from 'vitest';
import {
	getIsRootPath,
	getFooterBgColor,
	getFooterMt,
	getLayoutBgStyle,
	getNavlinkColor,
	getDrawerLogoColor,
	getMenuIconColor,
	getNavlinkIsSelected,
	getNavlinkPy,
	getNavlinkPx,
	getHoverRounded,
	getPriority
} from '.';

describe('getIsRootPath', () => {
	it('should return true when pathname is exactly "/"', () => {
		expect(getIsRootPath('/')).toBe(true);
	});

	it('should return false when pathname is an empty string', () => {
		expect(getIsRootPath('')).toBe(false);
	});

	it('should return false when pathname starts or ends with a slash but is not "/"', () => {
		expect(getIsRootPath('/test')).toBe(false);
		expect(getIsRootPath('test/')).toBe(false);
	});

	it('should return false when pathname contains other characters along with slashes', () => {
		expect(getIsRootPath('/home')).toBe(false);
		expect(getIsRootPath('/test/path')).toBe(false);
	});
});

describe('getFooterBgColor', () => {
	it('should return "transparent" if isRootPath is true', () => {
		expect(getFooterBgColor(true)).toBe('bg-transparent');
	});

	it('should return dark grey color if isRootPath is false', () => {
		expect(getFooterBgColor(false)).toBe('bg-base-200');
	});
});

describe('getFooterMt function', () => {
	it('returns mt-0 when isRootPath is true', () => {
		expect(getFooterMt(true)).toBe('mt-0');
	});

	it('returns mt-6 when isRootPath is false', () => {
		expect(getFooterMt(false)).toBe('mt-6');
	});
});

describe('getLayoutBgStyle', () => {
	it('should return a valid CSS background-image style when isRootPath is true', () => {
		const result = getLayoutBgStyle(true, 'https://example.com/image.jpg');
		expect(result).toBe(
			'background-image: url(https://example.com/image.jpg); background-size: cover; background-position: center'
		);
	});

	it('should return an empty string when isRootPath is false', () => {
		const result = getLayoutBgStyle(false, 'https://example.com/image.jpg');
		expect(result).toBe('');
	});
});

describe('getNavlinkColor', () => {
	it('should return "text-accent" when isRootPath is undefined', () => {
		expect(getNavlinkColor(undefined)).toBe('text-accent');
	});

	it('should return "text-neutral" when isRootPath is true', () => {
		expect(getNavlinkColor(true)).toBe('text-neutral');
	});

	it('should return "text-secondary" when isRootPath is false', () => {
		expect(getNavlinkColor(false)).toBe('text-secondary');
	});
});

describe('getDrawerLogoColor', () => {
	it('should return "text-secondary" when isDrawer is true', () => {
		expect(getDrawerLogoColor(true)).toBe('text-secondary');
	});

	it('should return "text-base-100" when isDrawer is false or undefined', () => {
		expect(getDrawerLogoColor(false)).toBe('text-base-100');
		expect(getDrawerLogoColor(undefined)).toBe('text-base-100');
	});
});

describe('getMenuIconColor', () => {
	it('should return "text-base-100" when isRootPath is true', () => {
		const result = getMenuIconColor(true);
		expect(result).toBe('text-base-100');
	});

	it('should return "text-secondary" when isRootPath is false', () => {
		const result = getMenuIconColor(false);
		expect(result).toBe('text-secondary');
	});
});

describe('getNavlinkIsSelected', () => {
	it('returns "text-bold-3" when isSelected is true', () => {
		expect(getNavlinkIsSelected(true)).toBe('text-bold-3');
	});

	it('returns "text-regular-3" when isSelected is false', () => {
		expect(getNavlinkIsSelected(false)).toBe('text-regular-3');
	});
});

describe('getNavlinkPy', () => {
	it('returns py-3 when isDrawer is true', () => {
		expect(getNavlinkPy(true)).toBe('py-3');
	});

	it('returns py-2 when isDrawer is false or undefined', () => {
		expect(getNavlinkPy(false)).toBe('py-2');
		expect(getNavlinkPy(undefined)).toBe('py-2');
	});
});

describe('getNavlinkPx', () => {
	it('returns px-4 when isDrawer is true', () => {
		expect(getNavlinkPx(true)).toBe('px-4');
	});

	it('returns py-2 when isDrawer is false or undefined', () => {
		expect(getNavlinkPx(false)).toBe('px-2');
		expect(getNavlinkPx(undefined)).toBe('px-2');
	});
});

describe('getHoverRounded', () => {
	it('returns hover:rounded-none when isDrawer is true', () => {
		expect(getHoverRounded(true)).toBe('hover:rounded-none');
	});

	it('returns empty string when isDrawer is false or undefined', () => {
		expect(getHoverRounded(false)).toBe('');
		expect(getHoverRounded(undefined)).toBe('');
	});
});

describe('getPriority', () => {
	it('returns "1.0" for the root page ("/")', () => {
		expect(getPriority('/')).toBe('1.0');
	});

	it('returns "0.8" for any other page', () => {
		expect(getPriority('/services')).toBe('0.8');
		expect(getPriority('/wheels')).toBe('0.8');
		expect(getPriority('/contacts')).toBe('0.8');
	});
});
