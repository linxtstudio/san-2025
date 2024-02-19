'use client';

import { formatRupiah } from '@/common/helper/formatRupiah';
import { useEffect, useState } from 'react';
import { getTotalEventTransaction } from '../services/getTotalEventTransaction';

const EventTotalTransaction = ({}) => {
  const [total, setTotal] = useState(0);
  const handleGetTotalTransaction = async () => {
    try {
      const response = await getTotalEventTransaction();

      if (response.status === 200) {
        setTotal(response.data.data.total_transaction);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetTotalTransaction();
  }, []);
  return (
    <div className="flex flex-col rounded-[20px] border border-orange-1 px-6 py-4">
      <span className="text-[22px] font-semibold">Total Transaksi</span>
      <span className="text-xl">{formatRupiah(total)}</span>
    </div>
  );
};

export default EventTotalTransaction;
