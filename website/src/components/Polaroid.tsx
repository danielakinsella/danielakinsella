import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  /** CSS aspect ratio of the photo, e.g. "4 / 3" */
  aspect?: string;
  /** Rotation in degrees, like the tilted prints in the deck */
  tilt?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * A photo mounted on a white print with a thicker bottom edge,
 * slightly tilted, the way photos appear in the slide deck.
 */
export default function Polaroid({
  src,
  alt,
  aspect = "4 / 3",
  tilt = -2,
  className = "",
  sizes = "(max-width: 768px) 90vw, 40vw",
  priority = false,
}: Props) {
  return (
    <figure
      className={`bg-white p-2.5 pb-7 shadow-[0_18px_40px_rgba(0,0,0,0.55)] ${className}`}
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: aspect }}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
    </figure>
  );
}
