'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

import Button from '@/common/components/Button/Button';
import IconBack from '@/common/icons/IconBack';
import IconDownload from '@/common/icons/IconDownload';
import IconError from '@/common/icons/IconError';
import { getParticipant } from '@/modules/participant/services/getParticipant';
import { setVerification } from '@/modules/participant/services/setVerification';
import { QrScanner } from '@yudiel/react-qr-scanner';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
export default function ScanPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [participant, setParticipant] = useState({});
  const [modalType, setModalType] = useState('');
  const [error, setError] = useState({
    title: '',
    message: '',
  });
  const router = useRouter();

  function closeModal() {
    setIsOpen(false);
    setIsScanning(false);
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

  const handleScan = async (result) => {
    if (isScanning) return;
    setIsScanning(true);

    try {
      const response = await setVerification('verified', result);

      if (response.status === 200) {
        toast.success('Participant successfully verified');
        setModalType('success');
        handleGetParticipant(result);
        setIsOpen(true);
      }
    } catch (error) {
      console.log(error);
      setModalType('error');
      if (error.response.data.message === 'Participant already verified') {
        setError({
          title: 'Ticked Used',
          message: 'Ticket has been used before!',
        });

        toast.error('Ticket has been used');
      } else if (error.response.data.message === 'Participant does not exist') {
        setError({
          title: 'Invalid Ticket',
          message: 'Ticket is invalid or not scanned properly!',
        });
        toast.error('Participant not found');
      }
      setIsOpen(true);
    }
  };

  const downloadImage = async (imageSrc, nameOfDownload = 'payment-proof') => {
    const response = await fetch(imageSrc);

    const blobImage = await response.blob();

    const href = URL.createObjectURL(blobImage);

    const anchorElement = document.createElement('a');
    anchorElement.href = href;
    anchorElement.download = nameOfDownload;

    document.body.appendChild(anchorElement);
    anchorElement.click();

    document.body.removeChild(anchorElement);
    window.URL.revokeObjectURL(href);
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
                <Dialog.Panel className="flex w-full max-w-md transform flex-col items-center overflow-hidden rounded-2xl bg-white p-6 align-middle shadow-xl transition-all">
                  <>
                    <Dialog.Title
                      as="h3"
                      className="text-center text-3xl font-medium leading-6 text-gray-900"
                    >
                      {modalType === 'success' ? 'Ticket Detail' : error.title}
                    </Dialog.Title>
                    <div className="mt-5 flex flex-col gap-2 !text-left">
                      {Object.keys(participant).length > 0 &&
                        modalType === 'success' && (
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
                                <ul className="list-disc">
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
                            <div className="flex">
                              <div className="w-[200px]">
                                <span className="font-semibold">
                                  Payment Proof:{' '}
                                </span>
                              </div>
                              <div>
                                <button
                                  className="mx-auto flex items-center gap-2 text-[#0400B2] underline"
                                  onClick={() => {
                                    downloadImage(
                                      participant.transfer_receipt_url,
                                      'payment-proof-' + participant.name
                                    );
                                  }}
                                >
                                  Download <IconDownload />
                                </button>
                              </div>
                            </div>
                          </>
                        )}
                      {modalType === 'error' && (
                        <div className="flex flex-col items-center justify-center">
                          <IconError />
                          <span>{error.message}</span>
                        </div>
                      )}
                    </div>
                  </>
                  <div className="mx-auto mt-4">
                    <Button
                      onclick={() => {
                        closeModal();
                      }}
                    >
                      Close{' '}
                    </Button>
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
          <div className="absolute inset-0 z-20 box-border  border-b-[160px] border-l-[310px] border-r-[310px] border-t-[160px] border-black/50">
            <div className="absolute left-0 top-[-5px] h-1 w-10 bg-white"></div>
            <div className="absolute right-0 top-[-5px] h-1 w-10 bg-white"></div>
            <div className="absolute bottom-[-5px] left-0 h-1 w-10 bg-white"></div>
            <div className="absolute bottom-[-5px] right-0 h-1 w-10 bg-white"></div>
            <div className="absolute left-[-5px] top-[-5px] h-11 w-1 bg-white"></div>
            <div className="absolute bottom-[-5px] left-[-5px] h-11 w-1 bg-white"></div>
            <div className="absolute right-[-5px] top-[-5px] h-11 w-1 bg-white"></div>
            <div className="absolute bottom-[-5px] right-[-5px] h-11 w-1 bg-white"></div>
          </div>
          <QrScanner
            containerStyle={{
              width: '100%',
              aspectRatio: '4/3',
              paddingTop: 'unset',
              borderRadius: '20px',
            }}
            videoStyle={{
              width: '100%',
              height: 'auto',
              borderRadius: '20px',
            }}
            onDecode={handleScan}
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
