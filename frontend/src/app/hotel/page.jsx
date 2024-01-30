'use client';

import IconBack from '@/common/icons/IconBack';
import Image from 'next/image';
import Link from 'next/link';

import { formatRupiah } from '@/common/helper/formatRupiah';
import { getHotels } from '@/modules/hotel/services/getHotels';
import { clsx } from 'clsx';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Page = ({}) => {
  const [hotels, setHotels] = useState([]);
  const handleGetData = async () => {
    try {
      const response = await getHotels();

      if (response.status === 200) {
        setHotels(response.data.data.data);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);
  return (
    <div className="flex flex-col py-12">
      <Link
        href="https://wa.me/62811212505?text=Hello, Hello, I want to check room availability"
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
        <span className="text-green-7">Check Availability</span>
      </Link>
      <section>
        <div className="container">
          <Link
            href="/"
            className="flex items-center text-title-1 font-semibold"
          >
            <IconBack /> Back
          </Link>
          <h1 className="mt-[60px] text-3xl font-semibold md:mt-[90px] md:text-display">
            ASTON Denpasar Hotel & Convention
          </h1>
          <div className=" mt-[30px] text-title-1 font-semibold">Location</div>

          <div className=" mt-[30px] grid grid-cols-1 gap-[35px] md:grid-cols-2">
            <div className="flex ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d434.6846553116065!2d115.20605594775073!3d-8.639538551905142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2409b05b69a35%3A0xaa9f26310a950b49!2sASTON%20Denpasar%20Hotel%20%26%20Convention%20Center!5e0!3m2!1sen!2sid!4v1705733793554!5m2!1sen!2sid"
                height="359"
                allowfullscreen=""
                loading="lazy"
                className="w-full rounded-[20px] shadow-xl"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="flex flex-col gap-[20px] text-[20px] md:flex-row">
              <span>Address:</span>
              <p>
                Jl. Gatot Subroto Barat No.283, Pemecutan Kaja, Kec. Denpasar
                Utara, Kota Denpasar, Bali 80111
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className=" mt-[30px] flex flex-col gap-2">
            <p className='text-title-1 font-semibold'>Hotel Room</p>
          <p className='text-[#FF6A6A]'>
              *Please kindly check room availability before you booked
              </p>
          </div>
          <div className="mt-[30px] grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {hotels.map((item, index) => (
              <div className="flex flex-col" key={index}>
                <span className="text-[22px] font-semibold">{item.name}</span>
                <div className="relative min-h-[223px] w-full">
                  <Image
                    src={item.image_url}
                    alt={item.name}
                    height={223}
                    width={360}
                    className="mt-5 rounded-[20px] object-cover"
                  />
                </div>
                <div className="mt-9 text-[22px] font-semibold">
                  {formatRupiah(item.price)} per night
                </div>
                <ul
                  className={clsx(
                    'list-disc pl-5 ',
                    item.room_availability === 0
                      ? 'text-[#FF6A6A]'
                      : 'text-[#636363]'
                  )}
                >
                  {item.room_availability === 0 ? (
                    <li>Room Not Available</li>
                  ) : (
                    <li>Room Available : {item.room_availability} Room</li>
                  )}
                  <li>Max. {item.max_pax} pax</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
