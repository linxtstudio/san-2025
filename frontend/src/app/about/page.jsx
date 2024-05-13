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
            <div className="flex flex-col gap-12">
              <div className="relative flex aspect-video w-full max-w-[800px]">
                <Image
                  src="/image/about/san-about.png"
                  fill
                  alt=""
                  className="flex flex-shrink-0 object-contain"
                />
              </div>
              <div className="flex max-w-screen-sm flex-col gap-8">
                <p>
                  Salsa Arisan Nyok (SAN) is Indonesia biggest and longest
                  gathering event. It is started on 2015 based on 5 community
                  movers initiative, Reyno, Alfa, Tono, Chandra & Beta.
                </p>
                <p>
                  Salsa Arisan Nyok (SAN) being held in a different cities
                  around Indonesia every year so the local community can
                  experience being the host of the event and gain the exposure
                  also recognition.
                </p>
                <p>
                  The committee are all dancers from the hosting city who are
                  willing to volunteer to create this unforgettable event
                </p>
                <p>
                  This year, 2024 will be our 7th time doing the Salsa Arisan
                  Nyok, and this time will be held in Bali. New ideas and more
                  parties will be added this year in hope that everyone can
                  enjoy this warm heartfelt event even more.
                </p>
                <p>
                  Salsa Arisan Nyok is more than just non-profit gathering
                  event, it is fully good faith from the heart of community to
                  bring all social dancer together to celebrate and at the same
                  time build a better sustainable social dance community.
                </p>
                <p>We&apos;ll see you in Bali!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
