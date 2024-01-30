import Navbar from '@/common/components/Navbar/Navbar';
import IconBack from '@/common/icons/IconBack';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <section className="flex flex-col items-start justify-center">
        <div className="container">
          <div className=" flex flex-col justify-center gap-5 py-8">
            <Link href="/" className="mb-8 flex items-center">
              <IconBack />
              <span className="text-title-1 font-semibold">Back</span>
            </Link>
            <h1 className="text-3xl font-semibold leading-[48px] md:text-display">
              About Us
            </h1>
            <div className="flex flex-col items-center gap-12 md:flex-row">
              <div className="relative flex aspect-square w-full max-w-[400px]">
                <Image
                  src="/image/logo/san-2024.png"
                  fill
                  alt=""
                  className="flex aspect-square flex-shrink-0 object-contain"
                />
              </div>
              <div className="flex max-w-screen-sm flex-col gap-8">
                <p>
                  Held in a different cities around Indonesia every year so the
                  local community can experience being the host of the event and
                  gain the exposure also recognition.
                </p>
                <p>
                  The committee are all dancers from the hosting city who are
                  willing to volunteer to create this unforgettable event
                </p>
                <p>
                  2024 will be our 7th time doing the Salsa Arisan Nyok, and
                  this time will be held in Bali. New ideas and more parties
                  will be added this year in hope that everyone can enjoy this
                  warm heartfelt event even more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
