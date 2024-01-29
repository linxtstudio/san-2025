'use client';

import Button from '@/common/components/Button/Button';
import Input from '@/common/components/Input/Input';
import IconBack from '@/common/icons/IconBack';
import { getHotels } from '@/modules/hotel/services/getHotels';
import { updateAllHotel } from '@/modules/hotel/services/updateAllHotels';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function Dashboard() {
  const [form, setForm] = useState([]);

  const handleGetHotel = async () => {
    try {
      const response = await getHotels();
      console.log(response);
      if (response.status === 200) {
        setForm(
          response.data.data.data.map((hotel) => {
            return {
              name: hotel.name,
              room_availability: hotel.room_availability,
              price: hotel.price,
            };
          })
        );
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        data: form,
      };
      const response = await updateAllHotel(payload);

      console.log(response);
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    handleGetHotel();
  }, []);
  return (
    <div className="flex flex-col">
      <Link
        href="/dashboard/hotel"
        className="mb-12 flex items-center text-title-1 font-semibold"
      >
        <IconBack /> Back
      </Link>
      <div className="gap flex flex-col gap-12 rounded-[20px] border-2 border-orange-1 px-8 py-4">
        {form.map((hotel, index) => {
          return (
            <div className="flex flex-col gap-3" key={index}>
              <h3 className="text-[28px] font-bold">{hotel.name}</h3>
              <div className="grid grid-cols-2 gap-8">
                <Input
                  label="Room Availability"
                  inputProps={{
                    placeholder: 'Room Availability',
                    type: 'text',
                    value: hotel.room_availability,
                  }}
                  onInput={(value) =>
                    setForm((prev) => {
                      const updatedForm = [...prev];
                      updatedForm[index].room_availability = value;
                      return updatedForm;
                    })
                  }
                />
                <Input
                  label="Room Price"
                  inputProps={{
                    placeholder: 'Room Price',
                    type: 'text',
                    value: hotel.price,
                  }}
                  onInput={(value) =>
                    setForm((prev) => {
                      const updatedForm = [...prev];
                      updatedForm[index].price = value;
                      return updatedForm;
                    })
                  }
                />
              </div>
            </div>
          );
        })}
        <div className="mt-10 flex w-full justify-end">
          <Button
            onclick={() => {
              handleSubmit();
            }}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
