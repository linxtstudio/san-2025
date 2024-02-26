'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Link from 'next/link';
import './BandImageSlider.css';

function Slide({ children }) {
  return (
    <div className="embla__slide relative h-[320px] min-w-0">{children}</div>
  );
}

function BandCard({ name, title, image, link = '' }) {
  return (
    <Link href={link} className="flex flex-col gap-6">
      <Image
        src={image}
        alt={name}
        fill
        className="rounded-[20px] object-cover object-top"
      />
    </Link>
  );
}

export function BandImageSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex h-[320px] gap-5">
        <Slide>
          <BandCard
            image="/image/featuring/indri.png"
            name="Indri"
            title="Lead Vocal"
            link="https://www.instagram.com/buenatierra_bali"
          />
        </Slide>
        <Slide>
          <BandCard
            image="/image/featuring/dian.png"
            name="Dian Marisqha"
            title="Rhythm Guitar & Singer"
            link="https://www.instagram.com/buenatierra_bali"
          />
        </Slide>
        <Slide>
          <BandCard
            image="/image/featuring/anang.png"
            name="Anang Orba"
            title="Bass Guitar & Singer"
            link="https://www.instagram.com/buenatierra_bali"
          />
        </Slide>
        <Slide>
          <BandCard
            image="/image/featuring/nidom.png"
            name="Nidom Mashuri"
            title="Percussion & Lead Vocal"
            link="https://www.instagram.com/buenatierra_bali"
          />
        </Slide>
        <Slide>
          <BandCard
            image="/image/featuring/otto.png"
            name="Otto Nugroho"
            title="Lead Guitar"
            link="https://www.instagram.com/buenatierra_bali"
          />
        </Slide>
        <Slide>
          <BandCard
            image="/image/featuring/simson.png"
            name="Simson Nicolas"
            title="Drummer"
            link="https://www.instagram.com/buenatierra_bali"
          />
        </Slide>
      </div>
    </div>
  );
}
