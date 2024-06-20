export function convertHexToRgbRange(hex: string): [number, number, number] {
    const hexValue = hex.replace("#", "");
    const r = parseInt(hexValue.substring(0, 2), 16) / 255;
    const g = parseInt(hexValue.substring(2, 4), 16) / 255;
    const b = parseInt(hexValue.substring(4, 6), 16) / 255;
    // r: 0-1, g: 0-1, b: 0-1 
    return [r, g, b];
}