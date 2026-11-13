import Image from "next/image";

type ContentImageProps = {
  image: { src: string; alt: string };
  className?: string;
};

export default function ContentImage({ image, className }: ContentImageProps) {
  if (!image.src) return null;

  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={320}
      height={320}
      className={className}
    />
  );
}
