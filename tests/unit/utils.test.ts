import { cn, getFilteredImages, GALLERY_IMAGES } from '@/lib/utils';

describe('cn utility', () => {
  it('should merge class names correctly', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('should handle conditional classes', () => {
    expect(cn('foo', false && 'bar', 'baz')).toBe('foo baz');
  });

  it('should merge tailwind classes correctly', () => {
    expect(cn('px-4', 'px-6')).toBe('px-6');
  });

  it('should handle arrays of classes', () => {
    expect(cn(['foo', 'bar'], 'baz')).toBe('foo bar baz');
  });

  it('should handle undefined and null values', () => {
    expect(cn('foo', undefined, null, 'bar')).toBe('foo bar');
  });
});

describe('getFilteredImages', () => {
  it('should return all images when filter is "all"', () => {
    const result = getFilteredImages('all');
    expect(result).toEqual(GALLERY_IMAGES);
  });

  it('should filter images by morning category', () => {
    const result = getFilteredImages('morning');
    expect(result.every((img) => img.category.includes('morning'))).toBe(true);
  });

  it('should filter images by evening category', () => {
    const result = getFilteredImages('evening');
    expect(result.every((img) => img.category.includes('evening'))).toBe(true);
  });

  it('should filter images by night category', () => {
    const result = getFilteredImages('night');
    expect(result.every((img) => img.category.includes('night'))).toBe(true);
  });

  it('should filter images by rooms category', () => {
    const result = getFilteredImages('rooms');
    expect(result.every((img) => img.category.includes('rooms'))).toBe(true);
  });
});

describe('GALLERY_IMAGES', () => {
  it('should have at least one image', () => {
    expect(GALLERY_IMAGES.length).toBeGreaterThan(0);
  });

  it('should have all required properties for each image', () => {
    GALLERY_IMAGES.forEach((image) => {
      expect(image).toHaveProperty('src');
      expect(image).toHaveProperty('alt');
      expect(image).toHaveProperty('category');
      expect(image.alt).toHaveProperty('en');
      expect(image.alt).toHaveProperty('th');
      expect(Array.isArray(image.category)).toBe(true);
    });
  });
});
