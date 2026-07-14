import Image from "next/image";
import type { SitePhoto } from "@/lib/images";

/**
 * A photo in a fixed-size container: pass sizing via className
 * (e.g. "h-44 w-full" or "aspect-[3/2]"). Uses next/image fill + cover.
 */
export default function Photo({
  photo,
  className = "",
  sizes = "(max-width: 768px) 100vw, 900px",
  priority = false,
}: {
  photo: SitePhoto;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden rounded-sm ${className}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        priority={priority}
        // Eager: pages carry few photos and embedded webviews with throttled
        // renderers never fire lazy-load intersections.
        loading="eager"
        className="object-cover"
      />
    </div>
  );
}
