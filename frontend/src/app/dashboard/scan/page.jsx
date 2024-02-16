'use client';

import IconBack from '@/common/icons/IconBack';
import { getHotels } from '@/modules/hotel/services/getHotels';
import { updateAllHotel } from '@/modules/hotel/services/updateAllHotels';

import { QrScanner } from '@yudiel/react-qr-scanner';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function ScanPage() {
  const [form, setForm] = useState([]);
  const router = useRouter();

  const handleGetHotel = async () => {
    try {
      const response = await getHotels();
      console.log(response);
      if (response.status === 200) {
        setForm(
          response.data.data.data.map((hotel) => {
            return {
              name: hotel.name,
              code: hotel.code,
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
      const payloadData = {};
      form.forEach((room) => {
        const key = room.code;
        payloadData[key] = {
          room_availability: Number(room.room_availability),
          price: Number(room.price),
        };
      });

      const payload = {
        data: payloadData,
      };
      const response = await updateAllHotel(payload);
      toast.success('Hotel setting successfully updated');
      // router.push('/dashboard/hotel');
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
      <div className="relative rounded-xl">
        <div
          className="absolute inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50 bg-clip-content"
          style={{
            clipPath:
              'polygon(37.72% 21.67%, 65.84% 21.67%, 65.84% 71.67%, 37.72% 71.67%)',
            WebkitClipPath:
              'polygon(37.72% 21.67%, 65.84% 21.67%, 65.84% 71.67%, 37.72% 71.67%)',
          }}
        >
          <div className="rounded-lg border border-white bg-transparent p-4">
            a
          </div>
        </div>
        <QrScanner
          containerStyle={{
            width: '100%',
            aspectRatio: '16/9',
            paddingTop: 'unset',
            borderRadius: '20px',
          }}
          videoStyle={{
            width: '100%',
            height: 'auto',
            borderRadius: '20px',
          }}
          onDecode={(result) => console.log(result)}
          onError={(error) => console.log(error?.message)}
          viewFinder={() => {
            <div className="z-50">aa</div>;
          }}
        />
      </div>
      {/* <div className="gap flex flex-col gap-12 rounded-[20px] border-2 border-orange-1 px-8 py-4">
        {form.map((hotel, index) => {
          return (
            <div className="flex flex-col gap-3" key={index}>
              <h3 className="text-[28px] font-bold">{hotel.name}</h3>
              <div className="grid gap-8 md:grid-cols-2">
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
      </div> */}
    </div>
  );
}
