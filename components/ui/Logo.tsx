/**
 * The Maktabah Library logo — an open manuscript resting beneath a pointed
 * library arch, crowned with a gold star. Colors track the theme via CSS
 * variables so the mark adapts to light and dark mode.
 */
export function LogoIcon({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* library arch */}
      <path
        d="M9 44V22c0-9.5 5.5-15.5 15-18 9.5 2.5 15 8.5 15 18v22"
        stroke="var(--forest)"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      {/* arch base line */}
      <path
        d="M5.5 44h37"
        stroke="var(--forest)"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      {/* open manuscript */}
      <path
        d="M24 21.5c-3.6-2.7-8.2-3.3-11.5-2.8v14.6c3.3-.5 7.9.1 11.5 2.8 3.6-2.7 8.2-3.3 11.5-2.8V18.7c-3.3-.5-7.9.1-11.5 2.8Z"
        fill="var(--forest-tint)"
        stroke="var(--forest)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* spine */}
      <path
        d="M24 21.5v14.6"
        stroke="var(--gold-bright)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* gold star at the arch crown */}
      <path
        d="M24 6.2l2.6 2.6L24 11.4l-2.6-2.6L24 6.2Z"
        fill="var(--gold-bright)"
      />
    </svg>
  );
}

export function LogoWordmark({ iconSize = 28 }: { iconSize?: number }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoIcon size={iconSize} />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.02rem] font-semibold tracking-tight text-forest">
          The Maktabah
        </span>
        <span className="mt-0.5 font-display text-[0.58rem] font-medium uppercase tracking-[0.3em] text-ink-faint">
          Library
        </span>
      </span>
    </span>
  );
}
