import { useLiquidFilter, LiquidFilterDefs } from "./LiquidFilter.jsx";

export default function LiquidImage({
  src,
  alt = "",
  maxScale = 8,
  className = "",
  label,
}) {
  const { filterId, hostRef, dispRef, turbRef } = useLiquidFilter(maxScale);

  return (
    <figure
      ref={hostRef}
      className={`liquid ${className}`}
      role="img"
      aria-label={alt || label}
    >
      <LiquidFilterDefs
        filterId={filterId}
        turbRef={turbRef}
        dispRef={dispRef}
      />

      {src ? (
        <img
          className="liquid__img"
          src={src}
          alt=""
          loading="lazy"
          style={{ filter: `url(#${filterId})` }}
        />
      ) : (
        <span className="liquid__placeholder">{label}</span>
      )}

      <span className="liquid__veil" aria-hidden="true" />
      <span className="liquid__glow" aria-hidden="true" />
      <span className="liquid__vignette" aria-hidden="true" />
    </figure>
  );
}
