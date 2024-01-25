'use client';

import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import './EventImageSlider.css';

function Slide({ children }) {
  return (
    <div className="embla__slide relative h-[320px] min-w-0">{children}</div>
  );
}

export function EventImageSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex h-[320px] gap-5">
        <Slide>
          <Image
            src="/image/home/nyok1.png"
            alt="SAN 2024 Event"
            fill
            className="rounded-[20px] object-cover"
          />
        </Slide>
        <Slide>
          <Image
            src="/image/home/nyok2.png"
            alt="SAN 2024 Event"
            fill
            className="rounded-[20px] object-cover"
          />
        </Slide>
        <Slide>
          <Image
            src="/image/home/nyok3.png"
            alt="SAN 2024 Event"
            fill
            className="rounded-[20px] object-cover"
          />
        </Slide>
        <Slide>
          <Image
            src="/image/home/nyok4.png"
            alt="SAN 2024 Event"
            fill
            className="rounded-[20px] object-cover"
          />
        </Slide>
        <Slide>
          <Image
            src="/image/home/nyok5.png"
            alt="SAN 2024 Event"
            fill
            className="rounded-[20px] object-cover"
          />
        </Slide>
      </div>
    </div>
  );
}
