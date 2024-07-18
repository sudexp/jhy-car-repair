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
	getNavlinkPx
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
		const result = getNavlinkColor(undefined);
		expect(result).toBe('text-accent');
	});

	it('should return "text-neutral" when isRootPath is true', () => {
		const result = getNavlinkColor(true);
		expect(result).toBe('text-neutral');
	});

	it('should return "text-secondary" when isRootPath is false', () => {
		const result = getNavlinkColor(false);
		expect(result).toBe('text-secondary');
	});
});

describe('getDrawerLogoColor', () => {
	it('should return "text-secondary" when isDrawer is true', () => {
		const result = getDrawerLogoColor(true);
		expect(result).toBe('text-secondary');
	});

	it('should return "text-base-100" when isDrawer is false', () => {
		const result = getDrawerLogoColor(false);
		expect(result).toBe('text-base-100');
	});

	it('should return "text-base-100" when isDrawer is undefined', () => {
		const result = getDrawerLogoColor(undefined);
		expect(result).toBe('text-base-100');
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
		const result = getNavlinkPy(true);
		expect(result).toBe('py-3');
	});

	it('returns py-2 when isDrawer is false', () => {
		const result = getNavlinkPy(false);
		expect(result).toBe('py-2');
	});

	it('returns py-2 when isDrawer is undefined', () => {
		const result = getNavlinkPy(undefined);
		expect(result).toBe('py-2');
	});
});

describe('getNavlinkPx', () => {
	it('returns px-4 when isDrawer is true', () => {
		const result = getNavlinkPx(true);
		expect(result).toBe('px-4');
	});

	it('returns py-2 when isDrawer is false', () => {
		const result = getNavlinkPx(false);
		expect(result).toBe('px-2');
	});

	it('returns py-2 when isDrawer is undefined', () => {
		const result = getNavlinkPx(undefined);
		expect(result).toBe('px-2');
	});
});
