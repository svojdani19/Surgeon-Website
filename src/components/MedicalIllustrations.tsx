/**
 * Custom inline SVG illustrations for education content.
 * Original artwork — simple, clinical, on-brand line style.
 */

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function HipIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Illustration of a hip joint with ball-and-socket replacement"
    >
      {/* pelvis wing */}
      <path
        {...strokeProps}
        d="M55 30c30-12 68-8 88 12 12 12 16 30 10 46l-22-8c2-10-2-22-12-28-16-10-42-12-60-4"
      />
      {/* acetabular cup */}
      <path {...strokeProps} d="M118 82a26 26 0 0 1 36 24l-14 6a12 12 0 0 0-16-18z" />
      {/* femoral head */}
      <circle {...strokeProps} cx="128" cy="106" r="17" />
      {/* femoral stem */}
      <path
        {...strokeProps}
        d="M120 120c-6 10-10 24-12 40-2 14-2 22-6 30l-20-6c6-12 6-26 8-40 2-18 8-32 18-42"
      />
      {/* greater trochanter hint */}
      <path {...strokeProps} d="M104 96c-6 2-12 8-14 14" />
    </svg>
  );
}

export function KneeIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Illustration of a knee joint with femur, tibia, and implant surfaces"
    >
      {/* femur shaft */}
      <path {...strokeProps} d="M85 18c-2 22-4 40-2 54M117 18c2 22 4 40 2 54" />
      {/* femoral condyles / implant curve */}
      <path
        {...strokeProps}
        d="M78 74c-8 8-10 20-4 28 5 7 14 10 26 10s21-3 26-10c6-8 4-20-4-28"
      />
      {/* joint line spacer */}
      <path {...strokeProps} d="M72 122h56" />
      {/* tibial tray */}
      <path {...strokeProps} d="M76 134h48l-4 10H80z" />
      {/* tibia shaft */}
      <path {...strokeProps} d="M90 146c0 14-2 26-4 36M110 146c0 14 2 26 4 36" />
      {/* patella */}
      <circle {...strokeProps} cx="100" cy="96" r="10" />
    </svg>
  );
}

export function RecoveryIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Illustration of a person walking, representing recovery"
    >
      {/* head */}
      <circle {...strokeProps} cx="104" cy="38" r="14" />
      {/* torso */}
      <path {...strokeProps} d="M102 54c-4 18-6 32-4 46" />
      {/* arms mid-stride */}
      <path {...strokeProps} d="M100 66c-12 8-20 18-24 30M104 64c12 6 18 14 22 26" />
      {/* legs mid-stride */}
      <path {...strokeProps} d="M98 100c-10 16-18 30-30 42M100 100c10 14 16 28 18 44" />
      {/* ground + motion lines */}
      <path {...strokeProps} d="M40 168h120M52 148h10M140 130h12" />
    </svg>
  );
}

export function DecisionIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Illustration of a checklist and stethoscope, representing a care decision"
    >
      {/* clipboard */}
      <rect {...strokeProps} x="52" y="34" width="76" height="120" rx="8" />
      <path {...strokeProps} d="M76 34v-8h28v8" />
      {/* check items */}
      <path {...strokeProps} d="M66 68l8 8 14-16M96 72h24M66 104l8 8 14-16M96 108h24" />
      {/* stethoscope */}
      <path
        {...strokeProps}
        d="M140 60c10 4 16 14 14 26-2 14-12 24-14 38-1 10 4 18 14 20"
      />
      <circle {...strokeProps} cx="158" cy="148" r="10" />
    </svg>
  );
}

export function CategoryIllustration({
  category,
  className = "",
}: {
  category: "Hip" | "Knee" | "Recovery" | "Deciding";
  className?: string;
}) {
  switch (category) {
    case "Hip":
      return <HipIllustration className={className} />;
    case "Knee":
      return <KneeIllustration className={className} />;
    case "Recovery":
      return <RecoveryIllustration className={className} />;
    case "Deciding":
      return <DecisionIllustration className={className} />;
  }
}

export function GoogleStars({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`} aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-5 w-5" fill="#fbbc04" aria-hidden="true">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </span>
  );
}
