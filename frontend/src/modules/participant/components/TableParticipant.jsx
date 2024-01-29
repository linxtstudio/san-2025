'use client';

import { useEffect, useState } from 'react';
import Table from '@/common/components/Table/Table';
import { createColumnHelper } from '@tanstack/react-table';
import toast from 'react-hot-toast';
import { getParticipants } from '../services/getParticipants';
import IconDownload from '@/common/icons/IconDownload';
import { setVerification } from '../services/setVerification';
import { useUpdateParam } from '@/common/hooks/useParams';
import { getParticipantHotels } from '../services/getParticipantHotel';

const columnHelper = createColumnHelper();

const TableParticipant = ({
  cityId,
  verified = null,
  verifiedTrigger = () => {},
  type = '',
}) => {
  const { currentParams } = useUpdateParam();

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
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    const timeout = setTimeout(() => {
      handleGetData();
    }, 500); // Adjust the timeout duration as needed

    setSearchTimeout(timeout);

    return () => {
      clearTimeout(searchTimeout);
    };
  }, [currentParams.get('search'), currentParams.get('event_type_id')]);

  const handleGetData = async () => {
    try {
      setLoading(true);
      let payload = {
        params: {
          paginate: false,
          search: currentParams.get('search') ?? '',
          event_type_id: currentParams.get('event_type_id') ?? '',
        },
      };

      if (cityId) {
        payload.params.city_id = cityId;
      }
      if (verified !== null) {
        payload.params.is_verified = verified;
      }
      let response = {};
      if (type === 'hotel') {
        response = await getParticipantHotels(payload);
      } else {
        response = await getParticipants(payload);
      }

      setParticipants(response.data.data);
    } catch (error) {
      setParticipants([]);
      toast.error('error');
    } finally {
      setLoading(false);
    }
  };

  const handleVerification = async (type, id) => {
    try {
      const response = await setVerification(type, id);
      if (response.status === 200) {
        toast.success(
          type === 'verified'
            ? 'Peserta Berhasil terverifikasi'
            : 'Peserta Berhasil di unverfikasi'
        );
        verifiedTrigger();
        handleGetData();
      }
    } catch (error) {
      toast.error('error');
    }
  };

  let columns = [
    columnHelper.accessor('event_participant.name', {
      cell: (info) => info.getValue(),
      header: () => 'Name',
    }),
  ];

  if (type === 'hotel') {
    columns.push(
      columnHelper.accessor('hotel_facility.name', {
        header: () => 'Room Type',
        cell: (info) => info.renderValue(),
      }),
      columnHelper.accessor('stay_duration', {
        header: () => 'Duration',
        cell: (info) => info.renderValue() + ' Days',
      }),
      columnHelper.accessor('check_in_date', {
        header: () => 'Check-in',
        cell: (info) => info.renderValue(),
      }),
      columnHelper.accessor('check_out_date', {
        header: () => 'Check-out',
        cell: (info) => info.renderValue(),
      })
    );
  } else {
    columns.push(
      columnHelper.accessor('event_participant.email', {
        header: () => 'Email',
        cell: (info) => info.renderValue(),
      }),
      columnHelper.accessor('event_participant.phone_number', {
        header: () => 'Phone',
        cell: (info) => info.renderValue(),
      })
    );

    if (!cityId) {
      columns.push(
        columnHelper.accessor('event_participant.city.province.name', {
          header: () => 'Province',
          cell: (info) => (
            <span className="capitalize">
              {info.renderValue().toLowerCase()}
            </span>
          ),
        }),
        columnHelper.accessor('event_participant.city.name', {
          header: () => 'City',
          cell: (info) => (
            <span className="capitalize">
              {info.renderValue().toLowerCase()}
            </span>
          ),
        })
      );
    }

    columns.push(
      columnHelper.accessor('event_participant.is_verified', {
        header: () => 'Status',
        cell: (info) =>
          info.renderValue() ? (
            <span className="text-[#007A4D]">Verified</span>
          ) : (
            <span className="text-grey-4">Unverified</span>
          ),
      })
    );
  }

  columns.push(
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
    })
  );

  if (type !== 'hotel') {
    columns.push(
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
      })
    );
  }
  return (
    <Table
      isLoading={loading}
      data={participants}
      columns={columns}
      loading={loading}
    />
  );
};

export default TableParticipant;
