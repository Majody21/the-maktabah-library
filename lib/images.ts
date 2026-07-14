/**
 * Site photography. All images are hotlinked from Unsplash's CDN under the
 * Unsplash License (free to use, no attribution required). Every ID below
 * was verified to load before being added — replace an entry here to swap
 * a photo site-wide.
 */
const unsplash = (id: string, w: number) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

export type SitePhoto = { src: string; alt: string };

export const heroPhoto: SitePhoto = {
  src: unsplash("1576764402988-7143f9cca90a", 1600),
  alt: "An opened mushaf of the Quran",
};

export const aboutPhoto: SitePhoto = {
  src: unsplash("1744957280300-cb6ac27266cf", 1200),
  alt: "A library shelf of antique Arabic-script books",
};

export const glossaryPhoto: SitePhoto = {
  src: unsplash("1628962691167-27b7db9997e0", 1400),
  alt: "A hand writing Arabic calligraphy on white paper",
};

export const resourcesPhoto: SitePhoto = {
  src: unsplash("1534289855405-ab820a118fc1", 1400),
  alt: "A hardbound classical book resting on a wooden table",
};

export const fatawaPhoto: SitePhoto = {
  src: unsplash("1491841651911-c44c30c34548", 1400),
  alt: "A stack of hardbound scholarly books",
};

/** Department imagery, keyed by department id. */
export const departmentPhotos: Record<string, SitePhoto> = {
  aqeedah: {
    src: unsplash("1553755088-ef1973c7b4a1", 1200),
    alt: "The Kaaba in Makkah",
  },
  fiqh: {
    src: unsplash("1574246604907-db69e30ddb97", 1200),
    alt: "Worshippers bowing in congregational prayer",
  },
  "quran-tafsir": {
    src: unsplash("1542816417-0983c9c9ad53", 1200),
    alt: "The Quran open on a reading stand",
  },
  "hadith-sciences": {
    src: unsplash("1654124803041-79f3cc14a9db", 1200),
    alt: "An old book opened to a page of classical text",
  },
  seerah: {
    src: unsplash("1724191078796-8a997b989f43", 1200),
    alt: "The green dome of the Prophet's Mosque in Madinah",
  },
  tazkiyah: {
    src: unsplash("1771758266506-c7002e6487af", 1200),
    alt: "Hands holding prayer beads over an open book",
  },
  "arabic-language": {
    src: unsplash("1720701574998-d68020bce2bd", 1200),
    alt: "Ancient Arabic calligraphy on parchment with gold embellishment",
  },
  dawah: {
    src: unsplash("1519817650390-64a93db51149", 1200),
    alt: "A mosque with tall minarets at golden hour",
  },
  refutations: {
    src: unsplash("1512970648279-ff3398568f77", 1200),
    alt: "A white mosque under a clear sky",
  },
  "fatawa-library": {
    src: unsplash("1491841651911-c44c30c34548", 1200),
    alt: "A stack of hardbound scholarly books",
  },
};

export function departmentPhoto(departmentId: string): SitePhoto {
  return (
    departmentPhotos[departmentId] ?? {
      src: unsplash("1590075865003-e48277faa558", 1200),
      alt: "A mosque dome",
    }
  );
}
