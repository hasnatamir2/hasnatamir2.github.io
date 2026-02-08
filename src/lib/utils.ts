import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { urlFor } from '../sanity/lib/image'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sanityToNextImg = (image: SanityImageSource) => {
  return urlFor(image).quality(100).fit('max').url()
}