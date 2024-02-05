'use client';

import Button from '@/common/components/Button/Button';
import { formatRupiah } from '@/common/helper/formatRupiah';
import IconWhatsapp from '@/common/icons/IconWhatsapp';
import { getEvents } from '@/modules/event/services/getEvent';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export function EventList() {
  const [eventList, setEventList] = useState([]);
  const handleGetEvents = async () => {
    try {
      const response = await getEvents({ paginate: false });

      if (response.status === 200) {
        setEventList(response.data.data.data);
      }
    } catch (error) {
      toast.error('error');
    }
  };

  function renderLabel(item) {
    if (item.fee_type === 'minimum_contribution') {
      return (
        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold">
            Min Contribution of {formatRupiah(item.fee_nominal)}*
          </span>
          <Link href="#prices" className="text-xs text-green-3">
            Click for more info
          </Link>
        </div>
      );
    }

    if (item.fee_type === 'ticket_fee') {
      return (
        <span className="text-xs font-semibold">
          Ticket Fee {formatRupiah(item.fee_nominal)}
        </span>
      );
    }

    if (item.fee_type === 'registration_fee') {
      return (
        <span className="text-xs font-semibold">
          Registration Fee {formatRupiah(item.fee_nominal)}
        </span>
      );
    }

    if (item.fee_type === 'by_contact') {
      return (
        <div className="flex w-full items-center justify-between">
          <span className="text-xs font-semibold">Contact Us</span>
          <Link href="https://wa.me/628179792764?text=Hello, I would like to register for performance at Salsa Arisan Nyok 2024">
            <IconWhatsapp />
          </Link>
        </div>
      );
    }
  }

  useEffect(() => {
    handleGetEvents();
  }, []);

  return (
    <div className="container relative mt-[108px]">
      <div className=" flex flex-col rounded-[20px] border-[2px] border-green-1 bg-white px-6 py-6  md:px-[85px] md:py-[35px]">
        <h2 className="text-display font-semibold">Join Us!</h2>
        <p>Kindly choose the event(s) you&apos;d like to participate in.</p>
        <div className="my-6 flex flex-wrap justify-center gap-5">
          {eventList.map((item, index) => (
            <div
              key={index}
              className="flex min-h-[220px] w-full flex-col rounded-[20px] border-[2px] border-line p-6 md:max-w-[280px]"
            >
              <h4 className="text-[22px] font-semibold">{item.name}</h4>
              <p className="mb-auto text-xs">{item.description}</p>
              <div className="mt-4 flex items-center justify-between">
                {renderLabel(item)}
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-full items-center justify-center">
          <Link href={'/register'}>
            <Button>Register</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
