/** Inline SVG decorations for the homepage (static, server-safe). */

export function BeeDecoration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <ellipse cx="32" cy="36" rx="18" ry="14" fill="#f3c2d4" opacity={0.35} />
      <ellipse cx="32" cy="34" rx="14" ry="11" fill="#3d1a2e" opacity={0.08} />
      <path
        d="M22 30c2-6 8-9 14-8 5 1 9 5 10 11M26 38c-3 4-4 9-2 14M38 38c3 4 4 9 2 14"
        stroke="#a07850"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M28 32h16M28 38h16"
        stroke="#3d1a2e"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="26" cy="28" r="3" fill="#e34d7c" opacity={0.85} />
      <circle cx="38" cy="28" r="3" fill="#e34d7c" opacity={0.85} />
    </svg>
  );
}

export function HeartFloat({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.65-7 10-7 10Z"
        fill="#e34d7c"
        opacity={0.35}
      />
    </svg>
  );
}

export function PencilDecoration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M8 40l28-28 6 6L14 46l-6 2 2-8Z" fill="#c6a23a" opacity={0.45} />
      <path d="M34 10l6 6" stroke="#3d1a2e" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function SparkleDecoration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M16 4v6M16 22v6M4 16h6M22 16h6M7 7l4 4M21 21l4 4M7 25l4-4M21 11l4-4"
        stroke="#c6a23a"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity={0.5}
      />
    </svg>
  );
}

export function DottedTrail({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {[0, 14, 28, 42, 56, 70, 84, 98].map((x, i) => (
        <circle
          key={x}
          cx={8 + x * 0.2}
          cy={12 + Math.sin(i * 0.8) * 8}
          r={1.5 + (i % 3) * 0.4}
          fill="#e34d7c"
          opacity={0.25 + (i % 4) * 0.1}
        />
      ))}
    </svg>
  );
}

export function DotPatternSide({ className }: { className?: string }) {
  const dots = [];
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 4; col++) {
      dots.push(
        <circle
          key={`${row}-${col}`}
          cx={12 + col * 18}
          cy={12 + row * 22}
          r={3}
          fill="#e34d7c"
          opacity={0.12}
        />,
      );
    }
  }
  return (
    <svg
      className={className}
      viewBox="0 0 80 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {dots}
    </svg>
  );
}

export function CrossPattern({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {[0, 25, 50, 75].flatMap((y) =>
        [0, 25, 50, 75].map((x) => (
          <path
            key={`${x}-${y}`}
            d={`M${x + 6} ${y + 6}l8 8m0-8l-8 8`}
            stroke="#a07850"
            strokeWidth="1"
            opacity={0.25}
          />
        )),
      )}
    </svg>
  );
}

export function BookChildrenBeeIllustration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 96 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 58h72V26H48L36 14 24 26H12v32Z"
        fill="#ffffff"
        stroke="#e8b4c8"
        strokeWidth="2"
      />
      <path d="M48 26v32M24 42h48" stroke="#3d1a2e" strokeOpacity={0.15} strokeWidth="2" />
      <ellipse cx="60" cy="22" rx="10" ry="7" fill="#f3c2d4" opacity={0.55} />
      <path
        d="M54 18c4-3 10-2 12 2M56 28l4 8M68 22l6 2"
        stroke="#a07850"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="52" cy="20" r="2.5" fill="#e34d7c" opacity={0.75} />
      <circle cx="58" cy="18" r="2.5" fill="#e34d7c" opacity={0.75} />
    </svg>
  );
}

export function BookTeenHouseIllustration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 96 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M48 12 14 38v42h68V38L48 12Z" fill="#ffffff" stroke="#e8b4c8" strokeWidth="2" />
      <path d="M48 12 82 38" stroke="#e8b4c8" strokeWidth="2" />
      <rect x="38" y="48" width="20" height="24" rx="2" fill="#f9edf3" stroke="#c6a23a" strokeWidth="1.5" />
      <path d="M32 58h10M54 58h10" stroke="#3d1a2e" strokeOpacity={0.2} strokeWidth="2" strokeLinecap="round" />
      <rect x="26" y="62" width="44" height="4" rx="1" fill="#f3c2d4" opacity={0.5} />
    </svg>
  );
}

export function BookHealthHeartIllustration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 96 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="48" cy="40" r="28" fill="#ffffff" stroke="#e8b4c8" strokeWidth="2" />
      <path
        d="M48 54s-14-8.7-14-20a10 10 0 0 1 19-4 10 10 0 0 1 19 4c0 11.3-14 20-14 20Z"
        fill="#e34d7c"
        opacity={0.35}
      />
      <path
        d="M48 48s-10-6.2-10-14a7 7 0 0 1 13.5-3A7 7 0 0 1 58 34c0 7.8-10 14-10 14Z"
        fill="#c6a23a"
        opacity={0.45}
      />
    </svg>
  );
}

export function BookParentBeeIllustration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 96 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="14" y="28" width="68" height="40" rx="6" fill="#ffffff" stroke="#e8b4c8" strokeWidth="2" />
      <path d="M24 38h48M24 48h36" stroke="#3d1a2e" strokeOpacity={0.12} strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="68" cy="26" rx="12" ry="9" fill="#f3c2d4" opacity={0.55} />
      <path
        d="M62 22c4-4 11-3 13 2M64 32l5 9M76 26l7 2"
        stroke="#a07850"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="58" cy="22" r="3" fill="#e34d7c" opacity={0.75} />
      <circle cx="66" cy="20" r="3" fill="#e34d7c" opacity={0.75} />
    </svg>
  );
}
