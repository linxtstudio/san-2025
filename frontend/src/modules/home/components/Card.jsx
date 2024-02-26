import Image from 'next/image';
import Link from 'next/link';

export function Card({ name, title, image, link = '' }) {
  return (
    <Link href={link} className="flex w-[200px] flex-col gap-6">
      <Image
        height={200}
        width={200}
        src={image}
        alt={name}
        className="h-[200px] w-[200px] rounded-[20px] object-cover"
      />
      <div className="flex flex-col text-center">
        <p className="text-[20px]">{name}</p>
        {title ? <p className="text-neutral-400">{title}</p> : null}
      </div>
    </Link>
  );
}
