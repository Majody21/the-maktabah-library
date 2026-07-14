/**
 * Renders the tiny inline-markup subset used by lesson and quiz content:
 * **bold** and *italic*. No HTML is ever injected — everything stays JSX text.
 */
export function renderInline(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const boldParts = text.split(/\*\*(.+?)\*\*/g);
  boldParts.forEach((part, i) => {
    if (i % 2 === 1) {
      nodes.push(<strong key={`b${i}`}>{part}</strong>);
      return;
    }
    const italicParts = part.split(/\*(.+?)\*/g);
    italicParts.forEach((ip, j) => {
      if (j % 2 === 1) nodes.push(<em key={`i${i}-${j}`}>{ip}</em>);
      else if (ip) nodes.push(ip);
    });
  });
  return nodes;
}

export default function InlineText({ text }: { text: string }) {
  return <>{renderInline(text)}</>;
}
