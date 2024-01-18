'use client';

import { useEffect, useState } from 'react';
import Table from '@/common/components/Table/Table';
import { createColumnHelper } from '@tanstack/react-table';
import toast from 'react-hot-toast';
import { getParticipants } from '../services/getParticipants';
import IconDownload from '@/common/icons/IconDownload';
import { setVerification } from '../services/setVerification';

const columnHelper = createColumnHelper();

const TableParticipant = ({ data, isLoading, onEditData, onDeleteData }) => {
  //   const { limit, onPaginationChange, skip, pagination } = usePagination(
  //     data.limit
  //   );

  const columns = [
    columnHelper.accessor('event_participant.name', {
      cell: (info) => info.getValue(),
      header: () => 'Name',
    }),
    columnHelper.accessor('event_participant.email', {
      header: () => 'Email',
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor('event_participant.phone_number', {
      header: () => 'Phone',
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor('event_participant.city.province.name', {
      header: () => 'Province',
      cell: (info) => (
        <span className="capitalize">{info.renderValue().toLowerCase()}</span>
      ),
    }),
    columnHelper.accessor('event_participant.city.name', {
      header: () => 'City',
      cell: (info) => (
        <span className="capitalize">{info.renderValue().toLowerCase()}</span>
      ),
    }),
    columnHelper.accessor('event_participant.is_verified', {
      header: () => 'Status',
      cell: (info) =>
        info.renderValue() ? (
          <span className="text-[#007A4D]">Verified</span>
        ) : (
          <span className="text-grey-4">Unverified</span>
        ),
    }),
    columnHelper.accessor('event_participant.transfer_receipt_url', {
      header: () => 'Payment Proof',
      cell: (info) => (
        <button
          className="mx-auto flex items-center gap-2 text-[#0400B2] underline"
          onClick={() => {
            downloadImage(info.renderValue(), info.row.original.name);
          }}
        >
          Download <IconDownload />
        </button>
      ),
    }),

    columnHelper.accessor('verification_action', {
      header: () => '',
      cell: (info) =>
        !info.row.original.event_participant.is_verified ? (
          <button
            className="rounded-full border border-[#007A4D] bg-[#05F29A] px-[10px]"
            onClick={() => {
              handleVerification(
                'verified',
                info.row.original.event_participant.id
              );
            }}
          >
            Verifikasi
          </button>
        ) : (
          <button
            className="rounded-full border border-grey-3 bg-grey-1 px-[10px] text-grey-2 opacity-25"
            onClick={() => {
              handleVerification(
                'unverified',
                info.row.original.event_participant.id
              );
            }}
          >
            Verifikasi
          </button>
        ),
    }),
  ];
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

  const [participants, setParticipants] = useState([]);

  const handleGetData = async () => {
    try {
      const response = await getParticipants();
      setParticipants(response.data.data.data);
    } catch (error) {
      toast.error(error);
    }
  };

  const handleVerification = async (type, id) => {
    try {
      console.log(id);
      const response = await setVerification(type, id);
      if (response.status === 200) {
        toast.success(
          type === 'verified'
            ? 'Peserta Berhasil terverifikasi'
            : 'Peserta Berhasil di unverfikasi'
        );
        handleGetData();
      }
    } catch (error) {
      toast.error(error);
    }
  };
  useEffect(() => {
    handleGetData();
  }, []);

  //   const pageCount = Math.ceil(data.total / limit);

  return <Table isLoading={isLoading} data={participants} columns={columns} />;
};

export default TableParticipant;
