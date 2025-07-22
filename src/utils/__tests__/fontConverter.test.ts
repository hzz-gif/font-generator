import { fontStyles, getFontsByCategory, convertText } from '../fontConverter';

describe('Font Converter', () => {
  test('should have font styles defined', () => {
    expect(fontStyles).toBeDefined();
    expect(fontStyles.length).toBeGreaterThan(0);
  });

  test('should convert text to bold', () => {
    const result = convertText('Hello', 'Bold');
    expect(result).toBe('𝐇𝐞𝐥𝐥𝐨');
  });

  test('should convert text to italic', () => {
    const result = convertText('Hello', 'Italic');
    expect(result).toBe('𝐻𝑒𝑙𝑙𝑜');
  });

  test('should filter fonts by category', () => {
    const boldFonts = getFontsByCategory('Bold');
    expect(boldFonts.length).toBeGreaterThan(0);
    expect(boldFonts.every(font => font.category === 'Bold')).toBe(true);
  });

  test('should return all fonts when category is "All"', () => {
    const allFonts = getFontsByCategory('All');
    expect(allFonts.length).toBe(fontStyles.length);
  });

  test('should handle empty text', () => {
    const result = convertText('', 'Bold');
    expect(result).toBe('');
  });

  test('should handle special characters', () => {
    const result = convertText('Hello World!', 'Bold');
    expect(result).toContain('𝐇𝐞𝐥𝐥𝐨');
    expect(result).toContain('𝐖𝐨𝐫𝐥𝐝');
    expect(result).toContain('!'); // Special characters should remain unchanged
  });

  test('should handle numbers', () => {
    const result = convertText('123', 'Bold');
    expect(result).toBe('𝟏𝟐𝟑');
  });

  test('should return original text for unknown style', () => {
    const result = convertText('Hello', 'UnknownStyle');
    expect(result).toBe('Hello');
  });
});
