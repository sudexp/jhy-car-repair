import { describe, it, expect } from 'vitest';
import {
	getIsRootPath,
	getFooterBgColor,
	getLayoutBgStyle,
	getNavlinkColor,
	getDrawerLogoColor,
	getMenuIconColor
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
		expect(getFooterBgColor(true)).toBe('transparent');
	});

	it('should return dark grey color if isRootPath is false', () => {
		expect(getFooterBgColor(false)).toBe('base-200');
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
