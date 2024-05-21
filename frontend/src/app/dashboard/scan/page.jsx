'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

import IconBack from '@/common/icons/IconBack';
import { getParticipant } from '@/modules/participant/services/getParticipant';
import { setVerification } from '@/modules/participant/services/setVerification';
import { QrScanner } from '@yudiel/react-qr-scanner';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
export default function ScanPage() {
  const [isOpen, setIsOpen] = useState(true);
  const [participant, setParticipant] = useState({});
  const router = useRouter();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleGetParticipant = async (id) => {
    try {
      const response = await getParticipant(id);
      if (response.status === 200) {
        setParticipant(response.data.data);
        console.log(response.data);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = async (result) => {
    if (isScanning) return;
    setIsScanning(true);

    try {
      const response = await setVerification('verified', result);

      if (response.status === 200) {
        toast.success('Participant successfully verified');
        handleGetParticipant(result);
        setIsOpen(true);
      }
    } catch (error) {
      if (error.response.data.message === 'Participant already verified') {
        return toast.error('Participant already verified');
      }
      setIsOpen(true);

      toast.error(error.message);
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <>
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Ticket Detail
                    </Dialog.Title>
                    <div className="mt-5 flex flex-col gap-2">
                      {Object.keys(participant).length > 0 && (
                        <>
                          <div className="flex">
                            <div className="w-[200px]">
                              <span className="font-semibold">Name:</span>
                            </div>
                            <div>
                              <span>{participant.name}</span>
                            </div>
                          </div>
                          <div className="flex">
                            <div className="w-[200px]">
                              <span className="font-semibold">Email:</span>
                            </div>
                            <div>
                              <span>{participant.email}</span>
                            </div>
                          </div>
                          <div className="flex">
                            <div className="w-[200px]">
                              <span className="font-semibold">
                                Phone Number:
                              </span>
                            </div>
                            <div>
                              <span>{participant.phone_number}</span>
                            </div>
                          </div>
                          <div className="flex">
                            <div className="w-[200px]">
                              <span className="font-semibold">Event:</span>
                            </div>
                            <div>
                              <ul>
                                {participant.event_participant_details.map(
                                  (event) => (
                                    <li key={event.id}>
                                      {event.event_type.name}
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <div className="flex flex-col">
        <Link
          href="/dashboard/hotel"
          className="mb-12 flex items-center text-title-1 font-semibold"
        >
          <IconBack /> Back
        </Link>
        <div className="relative rounded-xl">
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
            onDecode={(result) => handleScan(result)}
            onError={(error) => console.log(error?.message)}
            viewFinder={() => {
              <div className="z-50">aa</div>;
            }}
          />
        </div>
      </div>
    </>
  );
}
