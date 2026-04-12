import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  ratio?: string;
  priority?: boolean;
  sizes?: string;
  tag?: string;
  rotate?: string;
  className?: string;
  paspartu?: boolean;
};

export function SpreadFrame({
  src,
  alt,
  ratio = "1756/1242",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  tag,
  rotate,
  className = "",
  paspartu = false,
}: Props) {
  const wrapperStyle = rotate ? { transform: `rotate(${rotate})` } : undefined;
  return (
    <div
      className={`relative ${paspartu ? "bg-papel p-5 md:p-7" : ""} ${className}`}
      style={wrapperStyle}
    >
      <div
        className="spread-frame relative overflow-hidden"
        style={{ aspectRatio: ratio }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover"
          priority={priority}
        />
      </div>
      {tag && (
        <div className="absolute -top-3 -left-3 z-10 bg-lacre text-papel font-mono text-[10px] uppercase tracking-[0.25em] px-3 py-2 rotate-[-4deg] shadow-xl">
          {tag}
        </div>
      )}
    </div>
  );
}
