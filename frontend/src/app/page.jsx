"use client";

import Button from '@/common/components/Button/Button';
import Image from 'next/image';
import '@/modules/home/css/style.css';

import imageHero23 from '/public/image/home/image23.png';
import imageHero24 from '/public/image/home/image24.png';
import imageHero25 from '/public/image/home/image25.png';
import imageHero26 from '/public/image/home/image26.png';

import FeaturedCard from '@/modules/home/components/FeaturedCard';

import featuredImage1 from '/public/image/home/featured-1.png';
import featuredImage2 from '/public/image/home/featured-2.png';
import featuredImage3 from '/public/image/home/featured-3.png';
import Navbar from '@/common/components/Navbar/Navbar';
import Footer from '@/common/components/Footer/Footer';
import Link from 'next/link';
import { getEvents } from '@/modules/event/services/getEvent';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { formatRupiah } from '@/common/helper/formatRupiah';

const featuredData = [
  {
    title: 'Band',
    image: featuredImage1,
  },
  {
    title: 'Teachers & Panitia',
    image: featuredImage2,
  },
  {
    title: 'DJs',
    image: featuredImage3,
  },
];

const highlightData = [
  {
    title: 'Pre Party',
    description:
      'The big event that we all have been waiting for. See the great line-ups of performances, from different genres, different levels of dancers from all over Indonesia.',
    footer: 'Minimum Contribution of 15k',
  },
  {
    title: 'Pool Party',
    description:
      'Neautiful poolside while the DJ play our favorite dance tunes. Bonnie & Clyde competition will be added to bring more fun',
    footer: 'Ticket Fee 500k',
  },
  {
    title: 'Workshop',
    description:
      'Neautiful poolside while the DJ play our favorite dance tunes. Bonnie & Clyde competition will be added to bring more fun',
    footer: 'Ticket Fee 500k',
  },
  {
    title: 'Performance',
    description: 'Participate to play a performance in the main event.',
    footer: 'Contact Us!',
  },
];
export default function Home() {
  const [eventList, setEventList] = useState([]);
  const handleGetEvents = async () => {
    try {
      const response = await getEvents();

      if (response.status === 200) {
        setEventList(response.data.data);
      }
      console.log(response);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    handleGetEvents();
  }, []);

  return (
    <main className="flex flex-col">
      <Navbar />
      <Link href="https://wa.me/628179792764" className='fixed bottom-10 right-10 w-[60px] h-[60px] flex items-center justify-center rounded-full shadow-lg bg-white'>
      <svg xmlns="http://www.w3.org/2000/svg" fill='#05F29A' width="24" height="24" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
      </Link>
      <section className="home-hero  flex flex-col items-start justify-center text-white">
        <div className="container">
          <div className=" flex max-w-screen-md flex-col justify-center">
            <h1 className="text-3xl font-semibold leading-relaxed md:text-5xl">
              The Most Anticipated Social Dance Gathering In Indonesia
            </h1>
            <p className="mt-5">
              The annual social dance festival which is driven by the spirit to
              electrify people about Afro Latin Dance and presented by the
              community for the community. A heartfelt festival that brings the
              best social dance experience amongst Indonesian at the same time
              supporting dancers to bring out the best ofthem
            </p>
            <p className="mt-5">
              This event is based on the spirit of family togetherness, that’s
              why its always been made as a non-profit event so it can be
              affordable for every dancers to join.
            </p>
            <div className="mt-[52px] flex gap-5">
              <Button type="outline">About Us</Button>
              <Link href={'/register'}>
                <Button>Register</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="relative pt-28 ">
        <img
          src="/image/background/bg-register.png"
          className="absolute -left-9 top-5 -z-10 rotate-90"
          alt=""
        />

        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <h2 className="text-5xl font-semibold">Event Rundown</h2>
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
          {/* <img src="/image/background/bg-light.png" className="absolute -bottom-36 -left-9 -z-10 rotate-45" alt="" /> */}

          <div className="container flex flex-col">
            <div className="flex items-center gap-10">
              <h3 className="text-4xl font-semibold">23 May</h3>
              <div className="h-[1px] flex-grow-[1] bg-line" />
            </div>
            <div className="mt-12 flex flex-col gap-[90px] lg:flex-row">
              <div className="flex w-full flex-col gap-10 lg:w-7/12 ">
                <h4 className="text-[28px] font-semibold">Pre Party</h4>
                <p>
                  Collaborating with the local Club in welcoming all dancers
                  from all around Indonesia to taste the hospitality of Bali and
                  experience the hype of dancing with the locals. Making new
                  friends and reconnected with the families.
                </p>
                <div className="relative h-[256px] w-full">
                  <Image
                    src={imageHero23}
                    fill={true}
                    alt="people dance"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col justify-center text-[22px] lg:w-5/12 lg:w-full">
                <div className="flex items-center justify-between">
                  <span className=" font-semibold">Location</span>
                  <span>To Be Announced</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className=" font-semibold">Time</span>
                  <span>To Be Announced</span>
                </div>
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
              <div className="flex w-full flex-col gap-10 lg:w-7/12 ">
                <div className="flex flex-col">
                  <h4 className="text-[28px] font-semibold">Pool Party</h4>
                  <span className="text-red-4">*registration fee IDR 500k</span>
                </div>
                <p>
                  There will be so much fun to dance at a beautiful poolside
                  while the DJ play our favorite dance tunes. Bonnie & Clyde
                  competition will be added to bring more fun and bring the best
                  memories for us to remember
                </p>
                <div className="relative h-[256px] w-full">
                  <Image
                    src={imageHero24}
                    fill={true}
                    alt="people dance"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col justify-center text-[22px] lg:w-5/12">
                <div className="flex items-center justify-between">
                  <span className=" font-semibold">Location</span>
                  <span>To Be Announced</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className=" font-semibold">Time</span>
                  <span>3 - 9 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className=" font-semibold">DJs</span>
                  <span>To Be Announced</span>
                </div>

                <span className="mt-12 text-line">
                  Bonnie & Clyde Competition:
                </span>
                <div className="flex items-center justify-between">
                  <span className=" font-semibold">Time</span>
                  <span>3 - 9 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="container flex flex-col">
            <div className="flex items-center gap-10">
              <div className="flex gap-10">
                <h3 className="text-4xl font-semibold">25 May</h3>
                {/* <h3 className="text-4xl font-semibold">Main Event</h3> */}
              </div>
              <div className="h-[1px] flex-grow-[1] bg-line" />
            </div>
            <div className="mt-12 flex flex-col gap-[90px] lg:flex-row">
              <div className="flex w-full flex-col gap-10 lg:w-7/12 ">
                <div className="flex flex-col">
                  <h4 className="text-[28px] font-semibold">
                    Salsa Arisan <br /> Nyok The Party
                  </h4>
                </div>
                <p>
                  The big event that we all have been waiting for. See the great
                  line-ups of performances, from different genres, different
                  levels of dancers from all over Indonesia. Then as the
                  tradition continues is the color palette exchange on the
                  social dance party where we are going to to tell you which
                  color you have to dance with on the next song.{' '}
                </p>
                <p className="mt-1">
                  Make sure you know what color to wear to represent where do
                  you come from so you can join the fun of color exchange and
                  make some new friends from other cities. After that, the dance
                  will still continue and we will have another room with Disco
                  you can enjoy more of your favorite dance.
                </p>
                <div className="relative h-[256px] w-full">
                  <Image
                    src={imageHero25}
                    fill={true}
                    alt="people dance"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col justify-center gap-2 text-[22px] lg:w-5/12">
                <div className="flex items-center justify-between">
                  <span className=" font-semibold">Location</span>
                  <span>To Be Announced</span>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className=" font-semibold">General Rehearsal</span>
                  <span>11 AM - 1 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className=" font-semibold">Open Registration</span>
                  <span>2 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className=" font-semibold">Workshop</span>
                  <span>3 - 5 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className=" font-semibold">Open Ballroom</span>
                  <span>5.30 PM (DJ TBA)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className=" font-semibold">Dinner Served</span>
                  <span>6 - 7.30 PM (DJ TBA)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className=" font-semibold">Performance</span>
                  <span>7.30 - 9.30 (DJ TBA)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className=" font-semibold">
                    TBA Band + <br /> Color Palette Exchange
                  </span>
                  <span>9.30 - 12 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className=" font-semibold">Open Ballroom</span>
                  <span>12 - 2 AM (DJ TBA)</span>
                </div>
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
                  <h4 className="text-[28px] font-semibold">After Party</h4>
                </div>
                <p>
                  For those who still enjoying the weekend in Bali, we offer you
                  another dance party to remember. Enjoying sunset and the warm
                  sand of Bali beach will be the ultimate dancing experience as
                  we say see you again next year to all our beloved friends and
                  family. Barbeque menus from the bar and best music from the DJ
                  will accompany our last night together.
                </p>
                <div className="relative h-[256px] w-full">
                  <Image
                    src={imageHero26}
                    fill={true}
                    alt="people dance"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col justify-center text-[22px] lg:w-5/12">
                <div className="flex items-center justify-between">
                  <span className=" font-semibold">Location</span>
                  <span>To Be Announced</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className=" font-semibold">Time</span>
                  <span>3 - 9 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className=" font-semibold">DJs</span>
                  <span>To Be Announced</span>
                </div>

                <span className="mt-12 text-line">
                  Bonnie & Clyde Competition:
                </span>
                <div className="flex items-center justify-between">
                  <span className=" font-semibold">Time</span>
                  <span>3 - 9 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className=" font-semibold">Location</span>
                  <span>To Be Announced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-20">
        <div className="container flex flex-col">
          <h2 className="mb-6 text-5xl font-semibold">Featuring</h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 ">
            {featuredData.map((item, index) => (
              <FeaturedCard key={index} title={item.title} image={item.image} />
            ))}
          </div>
        </div>
      </div>
      <div className="relative mt-[108px]">
        <div className="container flex flex-col items-center rounded-[20px] border-[2px] border-green-1 bg-white px-[85px] py-[35px]">
          <h2 className="text-[52px]">Join Us!</h2>
          <p>
            Ayo segera mendaftar sebelum ketinggalan jadwal pendaftaran, karena
            acara tahunan ini tentunya memiliki banyak keseruan dan hal lainnya,
            ayo!
          </p>
          <div className="my-6  grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {eventList.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex min-h-[213px] flex-col rounded-[20px] border-[2px] border-line p-6"
                >
                  <h4 className="text-[22px] font-semibold">{item.name}</h4>
                  <p className="text-xs">{item.description}</p>
                  <span className="mt-auto text-xs font-semibold">
                  {item.fee_nominal ? (item.type === 'donation' ? '*minimum donate ' + formatRupiah(item.fee_nominal) : '*join fee ' + formatRupiah(item.fee_nominal)) : 'Free'}
                  </span>
                  {item.name === 'Performance' ? (
                    <Link className='pt-4' href="https://wa.me/628179792764">
                      <Button className="pt-4">Whatsapp</Button>
                    </Link>
                  ) : null}
                </div>
              );
            })}
          </div>
          <Link href={'/register'}>
            <Button>Register</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
