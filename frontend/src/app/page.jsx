import Button from "@/common/components/Button/Button";
import Image from "next/image";
import "@/modules/home/css/style.css";

import imageHero23 from "/public/image/home/image23.png";
import imageHero24 from "/public/image/home/image24.png";
import imageHero25 from "/public/image/home/image25.png";
import imageHero26 from "/public/image/home/image26.png";

import FeaturedCard from "@/modules/home/components/FeaturedCard";

import featuredImage1 from "/public/image/home/featured-1.png";
import featuredImage2 from "/public/image/home/featured-2.png";
import featuredImage3 from "/public/image/home/featured-3.png";
import Navbar from "@/common/components/Navbar/Navbar";
import Footer from "@/common/components/Footer/Footer";
import Link from "next/link";

const featuredData = [
  {
    title: "Band",
    image: featuredImage1,
  },
  {
    title: "Teachers & Panitia",
    image: featuredImage2,
  },
  {
    title: "DJs",
    image: featuredImage3,
  }
]

const highlightData = [
  {
    title: 'Pre Party',
    description: 'The big event that we all have been waiting for. See the great line-ups of performances, from different genres, different levels of dancers from all over Indonesia.',
    footer: 'Minimum Contribution of 15k'
  },
  {
    title: 'Pool Party',
    description: 'Neautiful poolside while the DJ play our favorite dance tunes. Bonnie & Clyde competition will be added to bring more fun',
    footer: 'Ticket Fee 500k'
  },
  {
    title: 'Workshop',
    description: 'Neautiful poolside while the DJ play our favorite dance tunes. Bonnie & Clyde competition will be added to bring more fun',
    footer: 'Ticket Fee 500k'
  },
  {
    title: 'Performance',
    description: 'Participate to play a performance in the main event.',
    footer: 'Contact Us!'
  }
]
export default function Home() {


  return (
    <main className="flex flex-col">
      <Navbar />
      <section className="home-hero  flex flex-col justify-center items-start text-white">
        <div className="container">
          <div className=" flex flex-col justify-center max-w-screen-md">
            <h1 className="text-3xl md:text-5xl font-semibold leading-relaxed">
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
            <div className="flex gap-5 mt-[52px]">
              <Button type="outline">About Us</Button>
              <Link href={'/register'} >
                    <Button>Register</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-28 relative ">
      <img src="/image/background/bg-register.png" className="absolute top-5 -left-9 -z-10 rotate-90" alt="" />

        <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <h2 className="font-semibold text-5xl">Event Rundown</h2>
              <p className="text-justify max-w-[470px]">Below this are the events will be held at SAN 2024, it’s gonna be fun, exciting and of course memorable, kindly check and register after that</p>
            </div>
        </div>
      </section>
      <div className="flex flex-col gap-[58px] py-14">
        <div className="relative">
        {/* <img src="/image/background/bg-light.png" className="absolute -bottom-36 -left-9 -z-10 rotate-45" alt="" /> */}

          <div className="container flex flex-col">
            <div className="flex gap-10 items-center">
              <h3 className="font-semibold text-4xl">23 May</h3>
              <div className="h-[1px] flex-grow-[1] bg-line" />
            </div>
            <div className="flex flex-col lg:flex-row gap-[90px] mt-12">
              <div className="w-full lg:w-7/12 flex flex-col gap-10 ">
                  <h4 className="text-[28px] font-semibold">Pre Party</h4>
                  <p>Collaborating with the local Club in welcoming all dancers from all around Indonesia to taste the hospitality of Bali and experience the hype of dancing with the locals. Making new friends and reconnected with the families.</p>
                  <div className="w-full h-[256px] relative">
                    <Image src={imageHero23} fill={true} alt="people dance" className="object-cover" /> 
                  </div>
              </div>
              <div className="w-full lg:w-full lg:w-5/12 flex flex-col justify-center text-[22px]">
                  <div className="flex justify-between items-center">
                    <span className=" font-semibold">Location</span>
                    <span>To Be Announced</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className=" font-semibold">Time</span>
                    <span>To Be Announced</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="container flex flex-col">
            <div className="flex gap-10 items-center">
              <h3 className="font-semibold text-4xl">24 May</h3>
              <div className="h-[1px] flex-grow-[1] bg-line" />
            </div>
            <div className="flex flex-col lg:flex-row gap-[90px] mt-12">
              <div className="w-full lg:w-7/12 flex flex-col gap-10 ">
                  <div className="flex flex-col">
                    <h4 className="text-[28px] font-semibold">Pool Party</h4>
                    <span className="text-red-4">*registration fee IDR 500k</span>
                  </div>
                  <p>There will be so much fun to dance at a beautiful poolside while the DJ play our favorite dance tunes. Bonnie & Clyde competition will be added to bring more fun and bring the best memories the best memories for us to remember</p>
                  <div className="w-full h-[256px] relative">
                    <Image src={imageHero24} fill={true} alt="people dance" className="object-cover" /> 
                  </div>
              </div>
              <div className="w-full lg:w-5/12 flex flex-col justify-center text-[22px]">

                  <div className="flex justify-between items-center">
                    <span className=" font-semibold">Location</span>
                    <span>To Be Announced</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className=" font-semibold">Time</span>
                    <span>3 - 9 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className=" font-semibold">DJs</span>
                    <span>To Be Announced</span>
                  </div>

                  <span className="text-line mt-12">Bonnie & Clyde Competition:</span>
                  <div className="flex justify-between items-center">
                    <span className=" font-semibold">Time</span>
                    <span>3 - 9 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className=" font-semibold">Location</span>
                    <span>To Be Announced</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="container flex flex-col">
            <div className="flex gap-10 items-center">
              <div className="flex gap-10">
              <h3 className="font-semibold text-4xl">25 May</h3>
              <h3 className="font-semibold text-4xl">Main Event</h3>

              </div>
              <div className="h-[1px] flex-grow-[1] bg-line" />
            </div>
            <div className="flex flex-col lg:flex-row gap-[90px] mt-12">
              <div className="w-full lg:w-7/12 flex flex-col gap-10 ">
                  <div className="flex flex-col">
                    <h4 className="text-[28px] font-semibold">Salsa Arisan <br /> Nyok The Party</h4>
                  </div>
                  <p>The big event that we all have been waiting for. See the great line-ups of performances, from different genres, different levels of dancers from all over Indonesia. Then as the tradition continues is the color palette exchange on the social dance party where we are going to to tell you which color you have to dance with on the next song. </p>
                  <p className="mt-1">Make sure you know what color to wear to represent where do you come from so you can join the fun of color exchange and make some new friends from other cities. After that, the dance will still continue and we will have another room with DIs so you can enjoy more of your favorite dance.</p>
                  <div className="w-full h-[256px] relative">
                    <Image src={imageHero25} fill={true} alt="people dance" className="object-cover" /> 
                  </div>
              </div>
              <div className="w-full lg:w-5/12 flex flex-col justify-center text-[22px] gap-2">

                  <div className="flex justify-between items-center">
                    <span className=" font-semibold">Location</span>
                    <span>To Be Announced</span>
                  </div>
                  <div className="flex justify-between items-center mt-6">
                    <span className=" font-semibold">General Rehearsal</span>
                    <span>11 AM - 1 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className=" font-semibold">Open Registration</span>
                    <span>2 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className=" font-semibold">Workshop</span>
                    <span>3 - 5 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className=" font-semibold">Open Ballroom</span>
                    <span>5.30 PM (DJ TBA)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className=" font-semibold">Dinner Served</span>
                    <span>6 - 7.30 PM (DJ TBA)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className=" font-semibold">Performance</span>
                    <span>7.30 - 9.30 (DJ TBA)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className=" font-semibold">TBA Band + <br /> Color Palette Exchange</span>
                    <span>9.30 - 12 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className=" font-semibold">Open Ballroom</span>
                    <span>12 - 2 AM (DJ TBA)</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="container flex flex-col">
            <div className="flex gap-10 items-center">
              <h3 className="font-semibold text-4xl">26 May</h3>
              <div className="h-[1px] flex-grow-[1] bg-line" />
            </div>
            <div className="flex flex-col lg:flex-row gap-[90px] mt-12">
              <div className="w-full lg:w-7/12 flex flex-col gap-10 ">
                  <div className="flex flex-col">
                    <h4 className="text-[28px] font-semibold">After Party</h4>
                  </div>
                  <p>For those who still enjoying the weekend in Bali, we offer you another dance party to remember. Enjoying sunset and the warm sand of Bali beach will be the ultimate dancing experience as we say see you again next year to all our beloved friends and family. Barbeque menus from the bar and best music from the DJ will accompany our last night together.</p>
                  <div className="w-full h-[256px] relative">
                    <Image src={imageHero26} fill={true} alt="people dance" className="object-cover" /> 
                  </div>
              </div>
              <div className="w-full lg:w-5/12 flex flex-col justify-center text-[22px]">

                  <div className="flex justify-between items-center">
                    <span className=" font-semibold">Location</span>
                    <span>To Be Announced</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className=" font-semibold">Time</span>
                    <span>3 - 9 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className=" font-semibold">DJs</span>
                    <span>To Be Announced</span>
                  </div>

                  <span className="text-line mt-12">Bonnie & Clyde Competition:</span>
                  <div className="flex justify-between items-center">
                    <span className=" font-semibold">Time</span>
                    <span>3 - 9 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className=" font-semibold">Location</span>
                    <span>To Be Announced</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-20">
        <div className="flex flex-col container">
          <h2 className="text-5xl font-semibold mb-6">Featuring</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
            
            {featuredData.map((item, index) => (
              <FeaturedCard key={index} title={item.title} image={item.image} />
            ))}
          </div>
        </div>
       
      </div>
      <div className="relative mt-[108px]">
            <div className="bg-white border-[2px] border-green-1 py-[35px] px-[85px] container flex flex-col rounded-[20px] items-center">
              <h2 className="text-[52px]">Join Us!</h2>
              <p>Ayo segera mendaftar sebelum ketinggalan jadwal pendaftaran, karena acara tahunan ini tentunya memiliki banyak keseruan dan hal lainnya, ayo!</p>
              <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-6 gap-5">
                {highlightData.map((item, index) => {
                  return (
                    <div key={index} className="p-6 min-h-[213px] flex flex-col border-[2px] border-line rounded-[20px]">
                      <h4 className="text-[22px] font-semibold">
                        {item.title}
                      </h4>
                      <p className="text-xs">{item.description}</p>
                      <span className="mt-auto text-xs font-semibold">
                          {item.footer}
                      </span>
                  </div>
                  )
                })}
           
              </div>
              <Link href={'/register'} >
                    <Button>Register</Button>
              </Link>
            </div>
      </div>
      <Footer />
    </main>
  );
}
