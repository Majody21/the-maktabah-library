/**
 * Renders the tiny inline-markup subset used by lesson and quiz content:
 * **bold**, *italic*, and [label](https://…) links. No HTML is ever injected —
 * everything stays JSX text, and only http(s) hrefs are accepted.
 */
const LINK_PATTERN = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;

function renderEmphasis(text: string, keyPrefix: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const boldParts = text.split(/\*\*(.+?)\*\*/g);
  boldParts.forEach((part, i) => {
    if (i % 2 === 1) {
      nodes.push(<strong key={`${keyPrefix}b${i}`}>{part}</strong>);
      return;
    }
    const italicParts = part.split(/\*(.+?)\*/g);
    italicParts.forEach((ip, j) => {
      if (j % 2 === 1) nodes.push(<em key={`${keyPrefix}i${i}-${j}`}>{ip}</em>);
      else if (ip) nodes.push(ip);
    });
  });
  return nodes;
}

export function renderInline(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const pattern = new RegExp(LINK_PATTERN.source, "g");
  let cursor = 0;
  let link: RegExpExecArray | null;
  let n = 0;

  while ((link = pattern.exec(text)) !== null) {
    if (link.index > cursor) {
      nodes.push(...renderEmphasis(text.slice(cursor, link.index), `s${n}-`));
    }
    nodes.push(
      <a
        key={`lnk${n}`}
        href={link[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-forest underline underline-offset-2 hover:text-forest-strong"
      >
        {link[1]}
      </a>
    );
    cursor = link.index + link[0].length;
    n += 1;
  }

  if (cursor < text.length) {
    nodes.push(...renderEmphasis(text.slice(cursor), `s${n}-`));
  }
  return nodes;
}

export default function InlineText({ text }: { text: string }) {
  return <>{renderInline(text)}</>;
}
