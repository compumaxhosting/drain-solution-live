import type { ReactNode } from "react";
import Image from "next/image";

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function isSafeLink(href: string) {
  return /^(https?:\/\/|mailto:|tel:|\/|#)/i.test(href);
}

function renderInline(text: string): ReactNode[] {
  const tokens = text.split(
    /(!\[[^\]]*\]\([^)]+\)|\*\*.+?\*\*|__.+?__|\*[^*\n]+\*|_[^_\n]+_|`[^`]+`|\[[^\]]+\]\([^)]+\))/g,
  );

  return tokens.map((token, index) => {
    const imageMatch = token.match(
      /^!\[([^\]]*)\]\(\s*(<?[^)\s>]+>?)(?:\s+["'][^"']*["'])?\s*\)$/i,
    );
    if (imageMatch) {
      const imageSource = imageMatch[2].replace(/^<|>$/g, "");
      return (
        <Image
          key={index}
          src={
            /^(?:https?:)?\/\//i.test(imageSource) || imageSource.startsWith("/")
              ? imageSource
              : `/${imageSource.replace(/^\.\/+/, "")}`
          }
          alt={imageMatch[1]}
          width={1200}
          height={800}
          unoptimized
          className="my-3 inline-block h-auto max-w-full rounded-lg align-middle"
        />
      );
    }

    if (token.startsWith("**") && token.endsWith("**")) {
      return <strong key={index}>{renderInline(token.slice(2, -2))}</strong>;
    }
    if (token.startsWith("__") && token.endsWith("__")) {
      return <strong key={index}>{renderInline(token.slice(2, -2))}</strong>;
    }
    if (token.startsWith("*") && token.endsWith("*")) {
      return <em key={index}>{renderInline(token.slice(1, -1))}</em>;
    }
    if (token.startsWith("_") && token.endsWith("_")) {
      return <em key={index}>{renderInline(token.slice(1, -1))}</em>;
    }
    if (token.startsWith("`") && token.endsWith("`")) {
      return (
        <code
          key={index}
          className="rounded bg-stone-100 px-1.5 py-0.5 font-mono text-[0.9em] text-[#014485]"
        >
          {token.slice(1, -1)}
        </code>
      );
    }

    const linkMatch = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch && isSafeLink(linkMatch[2])) {
      const isExternal = /^https?:/i.test(linkMatch[2]);
      return (
        <a
          key={index}
          href={linkMatch[2]}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="font-semibold text-[#014485] underline decoration-[#c02f2d]/50 underline-offset-4 transition-colors hover:text-[#c02f2d]"
        >
          {renderInline(linkMatch[1])}
        </a>
      );
    }

    return token;
  });
}

function isBlockStart(line: string) {
  return (
    /^#{1,6}\s/.test(line) ||
    /^([-*+]|\d+\.)\s+/.test(line) ||
    /^\|/.test(line) ||
    /^(---|\*\*\*|___)\s*$/.test(line)
  );
}

function parseTableRow(line: string) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

export function MarkdownContent({ content }: { content: string }) {
  const articleContent = content.replace(/^\s*#\s+.+\n+/, "");
  const lines = articleContent.split(/\r?\n/);
  const blocks: ReactNode[] = [];
  let index = 0;
  let isFaqSection = false;

  while (index < lines.length) {
    const line = lines[index].trim();
    if (!line) {
      index += 1;
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      const text = heading[2].replace(/\s+#+$/, "").trim();
      if (level === 1) {
        index += 1;
        continue;
      }
      if (level === 2) {
        isFaqSection = /frequently asked questions|\bfaq\b/i.test(text);
      }

      if (level === 3 && isFaqSection) {
        const answerLines: string[] = [];
        index += 1;
        while (index < lines.length) {
          const answerLine = lines[index].trim();
          if (/^#{1,6}\s/.test(answerLine)) break;
          if (answerLine) answerLines.push(answerLine);
          index += 1;
        }

        blocks.push(
          <details
            key={`faq-${index}`}
            className="group my-3 overflow-hidden rounded-lg border border-stone-200 bg-white transition-colors open:border-[#014485]/30 open:shadow-sm"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3.5 text-left text-sm font-bold leading-snug text-[#014485] transition-colors hover:bg-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#c02f2d] sm:gap-4 sm:px-5 sm:py-4 sm:text-base [&::-webkit-details-marker]:hidden">
              <span>{renderInline(text)}</span>
              <svg
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-[#c02f2d] transition-transform group-open:rotate-180 sm:h-5 sm:w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </summary>
            <div className="border-t border-stone-100 px-4 py-3.5 text-sm leading-relaxed text-stone-700 sm:px-5 sm:py-4 sm:text-base sm:leading-[1.85]">
              {renderInline(answerLines.join(" "))}
            </div>
          </details>,
        );
        continue;
      }

      const id = slugify(text);
      const headingClass =
        level === 2
          ? "mb-4 mt-10 scroll-mt-28 border-b border-stone-200 pb-3 text-xl font-black leading-tight text-[#014485] sm:mb-5 sm:mt-12 sm:text-3xl"
          : "mb-3 mt-7 scroll-mt-28 text-lg font-bold leading-snug text-[#014485] sm:mb-4 sm:mt-8 sm:text-2xl";

      blocks.push(
        level <= 2 ? (
          <h2 key={index} id={id} className={headingClass}>
            {renderInline(text)}
          </h2>
        ) : (
          <h3 key={index} id={id} className={headingClass}>
            {renderInline(text)}
          </h3>
        ),
      );
      index += 1;
      continue;
    }

    if (/^(---|\*\*\*|___)\s*$/.test(line)) {
      blocks.push(<hr key={index} className="my-10 border-stone-200" />);
      index += 1;
      continue;
    }

    if (line.startsWith("|")) {
      const rows: string[][] = [];
      while (index < lines.length && lines[index].trim().startsWith("|")) {
        const row = parseTableRow(lines[index]);
        if (!row.every((cell) => /^:?-{3,}:?$/.test(cell))) {
          rows.push(row);
        }
        index += 1;
      }

      const [header, ...body] = rows;
      if (header) {
        blocks.push(
          <div
            key={`table-${index}`}
            className="my-8 overflow-x-auto rounded-lg border border-stone-200"
          >
            <table className="w-full min-w-[440px] border-collapse text-left text-xs sm:min-w-[480px] sm:text-sm">
              <thead className="bg-[#014485] text-white">
                <tr>
                  {header.map((cell, cellIndex) => (
                    <th
                      key={cellIndex}
                      className="px-3 py-2.5 font-bold sm:px-4 sm:py-3"
                      scope="col"
                    >
                      {renderInline(cell)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {body.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={rowIndex % 2 === 0 ? "bg-white" : "bg-stone-50"}
                  >
                    {header.map((_, cellIndex) => (
                      <td key={cellIndex} className="px-3 py-2.5 text-stone-700 sm:px-4 sm:py-3">
                        {renderInline(row[cellIndex] || "")}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>,
        );
      }
      continue;
    }

    const listItem = line.match(/^([-*+]|\d+\.)\s+(.+)$/);
    if (listItem) {
      const ordered = /^\d+\.$/.test(listItem[1]);
      const items: string[] = [];
      while (index < lines.length) {
        const current = lines[index].trim();
        const match = current.match(/^([-*+]|\d+\.)\s+(.+)$/);
        if (!match || /^\d+\.$/.test(match[1]) !== ordered) break;
        items.push(match[2]);
        index += 1;
      }

      const List = ordered ? "ol" : "ul";
      blocks.push(
        <List
          key={`list-${index}`}
          className={`my-4 space-y-2 pl-5 text-sm leading-relaxed text-stone-700 marker:text-[#c02f2d] sm:my-5 sm:space-y-2.5 sm:pl-6 sm:text-base ${
            ordered ? "list-decimal" : "list-disc"
          }`}
        >
          {items.map((item, itemIndex) => (
            <li key={itemIndex} className="pl-1">
              {renderInline(item)}
            </li>
          ))}
        </List>,
      );
      continue;
    }

    const paragraphLines = [line];
    index += 1;
    while (index < lines.length) {
      const current = lines[index].trim();
      if (!current || isBlockStart(current)) break;
      paragraphLines.push(current);
      index += 1;
    }

    const paragraph = paragraphLines.join(" ").replace(/\s{2,}/g, " ");
    const isQuickAnswer = paragraph.startsWith("**Quick answer:**");
    blocks.push(
      <p
        key={`paragraph-${index}`}
        className={`my-4 text-sm leading-[1.8] text-stone-700 sm:my-5 sm:text-base sm:leading-[1.85] ${
          isQuickAnswer
            ? "rounded-r-lg border-l-4 border-[#c02f2d] bg-stone-50 px-4 py-3 sm:px-5 sm:py-4"
            : ""
        }`}
      >
        {renderInline(paragraph)}
      </p>,
    );
  }

  return <div>{blocks}</div>;
}
