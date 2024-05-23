/* eslint-disable @next/next/no-img-element */
'use client';

import Button from '@/common/components/Button/Button';
import Footer from '@/common/components/Footer/Footer';
import { ItemList } from '@/common/components/ItemList';
import Navbar from '@/common/components/Navbar/Navbar';
import { EventImageSlider } from '@/modules/home/components/EventImageSlider';
import { EventList } from '@/modules/home/components/EventList';
import { FeaturingSection } from '@/modules/home/components/FeaturingSection';
import '@/modules/home/css/style.css';
import Image from 'next/image';
import Link from 'next/link';
const MAIN_EVENT_SCHEDULE = [
  {
    title: 'Location',
    description: (
      <a
        href="https://maps.app.goo.gl/8NyB9jHzHR44e7wDA"
        target="_blank"
        className="text-[#0400B2] underline"
      >
        ASTON Denpasar Hotel & Convention
      </a>
    ),
  },
  {
    title: 'General Rehearsal',
    description: '11 AM - 1.30 PM',
  },
  {
    title: 'Open Registration',
    description: '2 PM',
  },
  {
    title: 'Workshop: Salsa',
    description: '2 PM - 3 PM',
  },
  {
    title: 'Workshop: Zouk',
    description: '3 PM - 4 PM',
  },
  {
    title: 'Workshop: Bachata',
    description: '4 PM - 5 PM',
  },
  {
    title: 'Workshop: Kizomba',
    description: '5 PM - 6 PM',
  },
  {
    title: 'Open Ballroom I',
    description: '5 PM',
  },
  {
    title: 'Dinner',
    description: '6 PM - 9 PM',
  },
  {
    title: 'Final Bonnie & Clyde',
    description: '6.30 PM',
  },
  {
    title: 'Performance',
    description: '7.30 PM - 9.30 PM',
  },
  {
    title: 'Colour Exchange Social Dance featuring Buena Tiera',
    description: '9.30 PM - 12 PM',
  },
  {
    title: 'Open Ballroom II for Kiz & Zouk',
    description: '12 PM - 2 AM',
  },
];

const PRICE_LIST = [
  {
    title: 'Early bird 1',
    description: 'IDR 350k',
    label: 'until 31 March 2024',
  },
  {
    title: 'Early bird 2',
    description: 'IDR 400k',
    label: 'until 30 April 2024',
  },
  {
    title: 'Regular Price',
    description: 'IDR 450k',
    label: 'until 23 May 2024',
  },
  {
    title: 'At the door',
    description: 'IDR 500k',
    label: ' ',
  },
];

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Link
        href="https://wa.me/62811212505?text=Hello, I want to ask about Salsa Arisan Nyok"
        target="_blank"
        className="fixed bottom-10 right-10 z-[100] flex items-center justify-center gap-[6px] rounded-full bg-white px-6 py-3 shadow-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#00AB6C"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
        <span className="text-green-7">B&C Registration</span>
      </Link>
      <section className="home-hero  flex flex-col items-start justify-center text-white">
        <div className="container">
          <div className=" flex max-w-screen-md flex-col justify-center gap-5">
            <h1 className="text-3xl font-semibold leading-[48px] md:text-display">
              The Most Anticipated Social Dance Gathering In Indonesia
            </h1>
            <p>
              The highly awaited dance extravaganza that promises to be a
              spellbinding fusion of artistry, rhythm, and sheer spectacle of
              afro latin dances in Indonesia.
            </p>
            <p>
              Embark on a meaningful journey with us as we unite in a
              heartwarming festival, celebrating the pinnacle of social dance
              within the vibrant Indonesian community. Come together to not only
              embrace the art of dance but also champion the essence of family
              togetherness.
            </p>
            <div className="mt-[52px] flex flex-wrap gap-5">
              <Link href="/about">
                <Button type="outline">About SAN</Button>
              </Link>
              <Link href="/hotel">
                <Button type="outline">Hotel Detail</Button>
              </Link>
              {/* <Link href="/register">
                <Button>Register</Button>
              </Link> */}
            </div>
          </div>
        </div>
      </section>
      <section className="relative pt-28 ">
        <img
          src="/image/background/bg-register.png"
          className="absolute -left-10 top-5 -z-10 rotate-90 opacity-20"
          alt=""
        />

        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <h2 className="text-display font-semibold">Event Rundown</h2>
            <p className="max-w-[470px] text-justify">
              Below this are the events will be held at SAN 2024, it’s gonna be
              fun, exciting and of course memorable, kindly check and register
              after that
            </p>
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-[58px] py-14">
        <div className="relative">
          <div className="container flex flex-col">
            <div className="flex items-center gap-10">
              <h3 className="text-4xl font-semibold">23 May</h3>
              <div className="h-[1px] flex-grow-[1] bg-line" />
            </div>
            <div className="mt-12 flex flex-col gap-[90px] lg:flex-row">
              <div className="flex w-full flex-col gap-10 lg:w-7/12 ">
                <h4 className="text-title-1 font-semibold">Pre Party</h4>
                <p>
                  Teaming up with the local club, we extend a warm invitation to
                  dancers nationwide, inviting them to savor the hospitality of
                  Bali.
                </p>
                <p>
                  Immerse yourself in the exhilaration of dancing alongside
                  locals, forging new friendships, and rekindling family bonds
                  in the midst of this electrifying experience.
                </p>
                <div className="relative h-[320px] w-full">
                  <Image
                    src="/image/home/preparty.png"
                    fill={true}
                    alt="Pre Party"
                    className="rounded-[20px] object-cover"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col justify-center text-[22px] lg:w-5/12">
                <ItemList
                  items={[
                    {
                      title: 'Location',
                      description: (
                        <a
                          href="https://maps.app.goo.gl/avC1crmH1C84oWWS9"
                          className="text-[#0400B2] underline"
                          target="_blank"
                        >
                          RED RUBY
                        </a>
                      ),
                    },
                    {
                      title: 'Time',
                      description: '7 PM - 12 AM',
                    },
                    {
                      title: 'DJs',
                      description: (
                        <ul>
                          <li>DJ Rezack</li>
                          <li>DJ Billy</li>
                        </ul>
                      ),
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="container flex flex-col">
            <div className="flex items-center gap-10">
              <h3 className="text-4xl font-semibold">24 May</h3>
              <div className="h-[1px] flex-grow-[1] bg-line" />
            </div>
            <div className="mt-12 flex flex-col gap-[90px] lg:flex-row">
              <div className="flex w-full flex-col gap-10 lg:w-7/12">
                <div className="flex flex-col">
                  <h4 className="text-title-1 font-semibold" id="pool-party">
                    Pool Party
                  </h4>
                </div>
                <p>
                  Indulge in the joy of dancing by the exquisite poolside,
                  surrounded by the mesmerizing hues of the sunset.
                </p>
                <p>
                  Let the DJ weave the beats of your favorite dance tunes,
                  creating an unforgettable ambiance. Elevate the excitement
                  with a Bonnie & Clyde competition, promising not only added
                  fun but also crafting cherished memories that will linger in
                  our hearts.
                </p>
                <div className="relative h-[320px] w-full">
                  <Image
                    src="/image/home/poolparty.png"
                    fill={true}
                    alt="Pool Party"
                    className="rounded-[20px] object-cover"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col justify-center text-[22px] lg:w-5/12">
                <ItemList
                  items={[
                    {
                      title: 'Location',
                      description: (
                        <a
                          href="https://maps.app.goo.gl/rQQEcExePMCSU3XEA"
                          className="text-[#0400B2] underline"
                          target="_blank"
                        >
                          LV8
                        </a>
                      ),
                    },
                    {
                      title: 'Time',
                      description: '3 PM - 10 PM',
                    },
                    {
                      title: 'DJs',
                      description: (
                        <ul>
                          <li>DJ Indra</li>
                          <li>DJ Adhyn</li>
                          <li>DJ Timoty (Competition)</li>
                          <li>DJ Adish</li>
                        </ul>
                      ),
                    },
                  ]}
                />
              </div>
            </div>
            <div className="mt-12 flex flex-col gap-[90px] lg:flex-row">
              <div className="flex w-full flex-col gap-8" id="prices">
                <div className="flex flex-col">
                  <h4 className="text-title-1 font-semibold">
                    Bonnie & Clyde Competion
                  </h4>
                </div>
                <ItemList
                  items={[
                    {
                      title: 'Registration Fee',
                      description: 'Person 75K - Couple 100K',
                    },
                    {
                      title: 'Music',
                      description: 'Salsa-Bachata-Kizomba',
                    },
                    {
                      title: 'The Prizes',
                      description: 'Trophy, Voucher',
                    },
                  ]}
                />
              </div>
            </div>
            <div className="mt-12 flex flex-col gap-[90px] lg:flex-row">
              <div className="flex w-full flex-col gap-10">
                <div className="flex flex-col">
                  <h4 className="text-title-2 font-semibold">Rules:</h4>
                </div>
                <div className="flex w-full flex-col gap-10 lg:w-7/12">
                  <ol className="list-decimal pl-4 text-lg">
                    <li>Open Level</li>
                    <li>Non-Dance Instructor & Non-Taxi Dancer</li>
                    <li>Never compete as Professional</li>
                    <li>Never win Jack & Jill in Salsa Arisan</li>
                    <li>
                      Already registered as Salsa Arisan 2024 Main Event
                      Participant
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="mt-12 flex flex-col gap-[90px] lg:flex-row">
              <div className="flex w-full flex-col gap-10 lg:w-7/12">
                <div className="flex flex-col">
                  <h4 className="text-title-1 font-semibold" id="pool-party">
                    After Pool Party
                  </h4>
                </div>
              </div>
              <div className="flex w-full flex-col justify-center text-[22px] lg:w-5/12">
                <ItemList
                  items={[
                    {
                      title: 'Location',
                      description: (
                        <a
                          href="https://maps.app.goo.gl/6mPk9xhez9qrzhPq9"
                          className="text-[#0400B2] underline"
                          target="_blank"
                        >
                          PADDLE Café & Bar Bali
                        </a>
                      ),
                    },
                    {
                      title: 'Time',
                      description: '9 PM - 1 AM',
                    },
                    {
                      title: 'DJs',
                      description: (
                        <ul>
                          <li>DJ Tysh</li>
                          <li>DJ Alfa</li>
                        </ul>
                      ),
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="container flex flex-col">
            <div className="flex items-center gap-10">
              <div className="flex gap-10">
                <h3 className="text-4xl font-semibold">25 May</h3>
              </div>
              <div className="h-[1px] flex-grow-[1] bg-line" />
            </div>
            <div className="mt-12 flex flex-col gap-[90px]">
              <div className="flex w-full flex-col gap-10">
                <div className="flex flex-col">
                  <h4 className="text-title-1 font-semibold">
                    Salsa Arisan Nyok The Party
                  </h4>
                </div>
                <div className="flex w-full flex-col gap-10 lg:w-7/12">
                  <p>
                    Get ready to be mesmerized by an extraordinary array of
                    performances hailing from every corner of Indonesia. Keeping
                    with tradition, immerse yourself in the vibrant energy of
                    the color exchange social dance.
                  </p>
                  <p>
                    Ensure you wear the appropriate hue, symbolizing your place
                    of origin and adding a dynamic splash to this unforgettable
                    experience.
                  </p>
                </div>
              </div>
              <ItemList items={MAIN_EVENT_SCHEDULE} />
              <div className="flex w-full flex-col gap-8" id="prices">
                <div className="flex flex-col">
                  <h4 className="text-title-1 font-semibold">
                    Minimum Contribution
                  </h4>
                </div>
                <ItemList items={PRICE_LIST} />
              </div>

              <div className="flex w-full flex-col gap-8">
                <div className="flex flex-col">
                  <h4 className="text-title-1 font-semibold">
                    Salsa Arisan Nyok&apos;s dance floor awaits you!
                  </h4>
                </div>
                <EventImageSlider />
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="container flex flex-col">
            <div className="flex items-center gap-10">
              <h3 className="text-4xl font-semibold">26 May</h3>
              <div className="h-[1px] flex-grow-[1] bg-line" />
            </div>
            <div className="mt-12 flex flex-col gap-[90px] lg:flex-row">
              <div className="flex w-full flex-col gap-10 lg:w-7/12 ">
                <div className="flex flex-col">
                  <h4 className="text-title-1 font-semibold">After Party</h4>
                </div>
                <p>
                  For those who still enjoying the weekend in Bali, we offer you
                  another dance party to remember. Enjoying sunset and the warm
                  sand of Bali beach will be the ultimate dancing experience as
                  we say see you again next year to all our beloved friends and
                  family.
                </p>
                <div className="relative h-[320px] w-full">
                  <Image
                    src="/image/home/afterparty.png"
                    fill={true}
                    alt="people dance"
                    className="rounded-[20px] object-cover"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col justify-center gap-8 lg:w-5/12">
                <div className="flex w-full flex-col justify-center text-[22px]">
                  <ItemList
                    items={[
                      {
                        title: 'Location',
                        description: (
                          <a
                            href="https://maps.app.goo.gl/6MAgi6LEME2So2R38"
                            className="text-[#0400B2] underline"
                            target="_blank"
                          >
                            Azul Beach Club Bali
                          </a>
                        ),
                      },
                      {
                        title: 'Time',
                        description: '2 PM - 5 PM',
                      },
                    ]}
                  />
                </div>
                <div className="flex w-full flex-col justify-center text-[22px]">
                  <ItemList
                    items={[
                      {
                        title: 'Location',
                        description: (
                          <a
                            href="https://maps.app.goo.gl/8132x8aP5sDwXyfj8"
                            className="text-[#0400B2] underline"
                            target="_blank"
                          >
                            1959 Cocktail Bar & Dance Club
                          </a>
                        ),
                      },
                      {
                        title: 'Time',
                        description: '9 PM - 3 AM',
                      },
                      {
                        title: 'DJs',
                        description: (
                          <ul>
                            <li>DJ Billy</li>
                            <li>DJ Timoty</li>
                          </ul>
                        ),
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FeaturingSection />
      <EventList />
      <Footer />
    </main>
  );
}
