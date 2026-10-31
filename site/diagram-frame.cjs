// Frame both authored SVGs and Mermaid exports without changing their geometry.
// Frames are part of the SVG, so full-size downloads look like the article.
module.exports = function frameDiagram(svg) {
  const opening = svg.match(/<svg\b([^>]*)>/);
  if (!opening) throw new Error('Diagram is not an SVG.');
  const attribute = (attrs, name) => attrs.match(new RegExp(`(?:^|\\s)${name}=["']([^"']+)["']`))?.[1];
  const box = attribute(opening[1], 'viewBox')?.trim().split(/[\s,]+/).map(Number);
  if (!box || box.length !== 4 || !box.every(Number.isFinite) || box[2] <= 0 || box[3] <= 0) {
    throw new Error('Diagram needs a finite, positive viewBox.');
  }
  const [x, y, width, height] = box;
  const padding = Math.round(width * 0.044);
  const frame = Math.round(width * 0.019);
  const outerRadius = Math.round(width * 0.011);
  const innerRadius = Math.round(width * 0.025);
  const w = width + padding * 2;
  const h = height + padding * 2;
  const number = n => Number(n.toFixed(3));
  let attrs = opening[1].replace(/\s(?:width|height|viewBox)=["'][^"']*["']/g, '');
  attrs = attrs.replace(/\sstyle=(["'])(.*?)\1/g, (_all, quote, style) => {
    const cleaned = style.replace(/(?:^|;)\s*max-width\s*:[^;]*/g, '').replace(/^;|;$/g, '').trim();
    return cleaned ? ` style=${quote}${cleaned}${quote}` : '';
  });
  let body = svg.slice(opening.index + opening[0].length, svg.lastIndexOf('</svg>'));
  // Authored diagrams have a full-canvas background; the new inner panel replaces it.
  let removed = false;
  body = body.replace(/<rect\b([^>]*?)\/>/g, (element, rect) => {
    if (!removed && !attribute(rect, 'class') && !attribute(rect, 'id') &&
        Number(attribute(rect, 'width')) === width && Number(attribute(rect, 'height')) === height &&
        Number(attribute(rect, 'x') || 0) === x && Number(attribute(rect, 'y') || 0) === y) {
      removed = true;
      return '';
    }
    return element;
  });
  const panel = `<rect data-diagram-frame="outer" x="${number(x - padding)}" y="${number(y - padding)}" width="${number(w)}" height="${number(h)}" rx="${outerRadius}" style="fill:#e8e8dd;stroke:none"/>
<rect data-diagram-frame="inner" x="${number(x - padding + frame)}" y="${number(y - padding + frame)}" width="${number(w - frame * 2)}" height="${number(h - frame * 2)}" rx="${innerRadius}" style="fill:#fcfcfa;stroke:none"/>`;
  return `<svg${attrs} width="${number(w)}" height="${number(h)}" viewBox="${number(x - padding)} ${number(y - padding)} ${number(w)} ${number(h)}">\n${panel}\n${body}</svg>\n`;
};
