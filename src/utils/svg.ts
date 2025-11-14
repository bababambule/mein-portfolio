export function setSvgSize(
  svgString: string,
  width: number,
  height?: number
): string {
  const h = height || width; // Falls nur width gegeben, quadratisch

  // Entferne existierende width/height Attribute
  let modified = svgString
    .replace(/width="[^"]*"/g, "")
    .replace(/height="[^"]*"/g, "");

  // Füge neue Größe ein
  modified = modified.replace(/<svg/, `<svg width="${width}" height="${h}"`);

  return modified;
}

// Mit Tailwind-ähnlichen Namen
export function resizeSvg(
  svgString: string,
  size: "sm" | "md" | "lg" | "xl"
): string {
  const sizes = {
    sm: 16,
    md: 24,
    lg: 32,
    xl: 48,
  };

  return setSvgSize(svgString, sizes[size]);
}
