'use client';
import Button from '@/common/components/Button/Button';
import { ItemList } from '@/common/components/ItemList';
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
      <div className="container z-[10] flex flex-col rounded-[20px] border border-orange-1 p-12 print:border-0">
        <div className="flex w-full flex-col">
          <div className="flex w-full flex-col justify-between gap-8 md:flex-row">
            <div className="flex w-full flex-col gap-3">
              <h1 className="text-3xl font-semibold md:text-display">
                SAN Main Event E&#8208;Ticket
              </h1>
              <span className="text-title-2 font-semibold md:text-title-1">
                Pool Party, Workshop
              </span>
              <div className="flex w-full max-w-[560px]">
                <ItemList
                  items={[
                    {
                      title: 'Name',
                      description: registerData.name,
                    },
                    {
                      title: 'Email',
                      description: registerData.email,
                    },
                    {
                      title: 'Phone Number',
                      description: registerData.phone_number,
                    },
                  ]}
                />
              </div>
            </div>
            <div className="flex max-w-[320px] flex-col items-center rounded-[20px] border border-green-1 p-8">
              <QRCode value={registerData.id} className="h-full w-full" />
              <span className="mt-5 text-title-2">
                *Please show this ticket to staff in registry
              </span>
            </div>
          </div>
          <div className="mt-8 md:self-end">
            <Button onClick={() => window.print()}>Download</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketPage;
