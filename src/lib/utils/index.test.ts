import { describe, it, expect } from 'vitest';
import { getIsRootPath, getFooterBgColor, getStyle } from '.';

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

describe('getStyle', () => {
	it('should return a valid CSS background-image style when isRootPath is true', () => {
		const result = getStyle(true, 'https://example.com/image.jpg');
		expect(result).toBe(
			'background-image: url(https://example.com/image.jpg); background-size: cover; background-position: center'
		);
	});

	it('should return an empty string when isRootPath is false', () => {
		const result = getStyle(false, 'https://example.com/image.jpg');
		expect(result).toBe('');
	});
});
