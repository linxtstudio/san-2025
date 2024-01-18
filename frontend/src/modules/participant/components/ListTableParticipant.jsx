'use client';

import { useUpdateParam } from '@/common/hooks/useParams';
import TableParticipant from './TableParticipant';
import { useEffect, useState } from 'react';
import { getParticipantByCity } from '../services/getParticipantByCity';
import toast from 'react-hot-toast';

const ListTableParticipant = ({}) => {
  const { currentParams } = useUpdateParam();
  const [group, setGroup] = useState(currentParams.get('group') ?? 'all'); //
  const [participantByCity, setParticipantByCity] = useState([]);
  const [showTable, setShowTable] = useState(true);
  const handleGetByCity = async () => {
    try {
      const response = await getParticipantByCity();
      if (response.status === 200) {
        setParticipantByCity(response.data.data);
      }
    } catch (e) {
      toast.error('Failed to get participants');
    }
  };
  useEffect(() => {
    setGroup(currentParams.get('group'));

    if (currentParams.get('group') === 'city') {
      handleGetByCity();
    }
  }, [currentParams.get('group')]);

  const reloadTable = async () => {
    setShowTable(false);
    setTimeout(() => {
      setShowTable(true);
    }, 200);
  };
  const renderTable = () => {
    if (group === 'all' || !group) {
      return <TableParticipant />;
    } else if (group === 'city') {
      return participantByCity.map((city) => {
        return (
          <div className="mt-6 flex flex-col" key={city.city.id}>
            <h1 className="text-3xl font-semibold">
              {city.city.name} ({city.count})
            </h1>
            <TableParticipant cityId={city.city.id} />
          </div>
        );
      });
    } else if (group === 'status') {
      return (
        <>
          <div className="mt-6 flex flex-col">
            <h1 className="text-3xl font-semibold">Verified</h1>
            <TableParticipant
              verifiedTrigger={() => {
                // Call the verifiedTrigger function here
                reloadTable();
              }}
              verified={true}
            />
          </div>
          <div className="mt-6 flex flex-col">
            <h1 className="text-3xl font-semibold">Not Verified</h1>
            <TableParticipant
              verifiedTrigger={() => {
                reloadTable();
              }}
              verified={false}
            />
          </div>
        </>
      );
    }
  };
  return (
    <div className="flex flex-col">{showTable ? renderTable() : null}</div>
  );
};

export default ListTableParticipant;
