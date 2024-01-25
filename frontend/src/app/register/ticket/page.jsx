'use client';
import Button from '@/common/components/Button/Button';
import { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';

const TicketPage = ({}) => {
  const [registerData, setRegisterData] = useState();

  useEffect(() => {
    setRegisterData(
      localStorage.getItem('register-data')
        ? JSON.parse(localStorage.getItem('register-data'))
        : {
            name: 'Shaddam',
            email: 'shaddam.ah@gmail.com',
            phone_number: '081234567890',
          }
    );
  }, []);

  if (!registerData) return null;

  return (
    <>
      <div className="container flex rounded-[20px] border border-orange-1 px-[70px] py-[32px]">
        <div className="flex w-full flex-col">
          <div className="flex w-full justify-between">
            <div className="flex w-full flex-col lg:w-8/12 ">
              <h1 className="text-[48px] font-semibold">
                SAN Main Event E-Ticket
              </h1>
              <span className="text-title-1 font-semibold">
                Pool Party, Workshop
              </span>
              <div className="mt-6  flex flex-col">
                <div className="flex items-center gap-[20px] text-[22px] font-semibold">
                  <span className="min-w-[190px]">Name</span>
                  <span>{registerData.name}</span>
                </div>
                <div className="flex items-center gap-[20px] text-[22px] font-semibold">
                  <span className="min-w-[190px]">Email</span>
                  <span>{registerData.email}</span>
                </div>
                <div className="flex items-center gap-[20px] text-[22px] font-semibold">
                  <span className="min-w-[190px]">Phone Number</span>
                  <span>{registerData.phone_number} </span>
                </div>
              </div>
            </div>
            <div className="flex w-[320px] flex-col items-center rounded-[20px] border border-green-1 p-8">
              <QRCode value={registerData.id} />
              <span className="mt-5 text-2xl">
                *Please show this ticket to staff in registry
              </span>
            </div>
          </div>
          <div className="mt-8 self-end">
            <Button>Download</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketPage;
