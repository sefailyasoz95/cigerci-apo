/** Kor alevi logo işareti. */
export default function BrandMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <span
      className={`relative grid place-items-center rounded-2xl bg-gradient-to-br from-ember-400 to-ember-700 text-white shadow-lg shadow-ember-500/30 ${className}`}
    >
      <svg viewBox="0 0 32 32" className="h-[55%] w-[55%] animate-flicker" fill="currentColor" aria-hidden="true">
        <path d="M16 2c3 5-2 7-2 11a4 4 0 0 0 8 0c0-1-.3-2-.7-2.8C24 13 26 17 26 20a10 10 0 1 1-20 0c0-6 6-9 7-14 .8 1.6 2 2.8 3 3.6C18 7 16 4 16 2z" />
      </svg>
    </span>
  );
}
