import Image from "next/image";

// The logo file is a circular badge on a black square; rounding the image
// crops the corners so only the badge shows.
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/logo.jpg"
      alt=""
      width={96}
      height={96}
      className={`rounded-full shrink-0 ${className}`}
    />
  );
}
