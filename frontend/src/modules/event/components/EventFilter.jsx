'use client';

import IconSearch from '@/common/icons/IconSearch';
import IconX from '@/common/icons/IconX';
import Input from '@/common/components/Input/Input';

import { useEffect, useState } from 'react';
import { getEvents } from '../services/getEvent';
import toast from 'react-hot-toast';
import Select from '@/common/components/Select/Select';
import Tabs from '@/common/components/Tabs/Tabs';
const tabFilter = [
  {
    label: 'Ungrouped',
    value: 'all',
  },
  {
    label: 'Group By City',
    value: 'city',
  },
  {
    label: 'Group By Status',
    value: 'status',
  },
];

const EventFilter = ({}) => {
  const [search, setSearch] = useState('');
  const [eventList, setEventList] = useState([]);
  const [selectedTab, setSelectedTab] = useState('all');

  const handleGetEvents = async () => {
    try {
      const payload = {
        params: {
          paginate: false,
        },
      };
      const response = await getEvents(payload);

      if (response.status === 200) {
        setEventList(
          response.data.data.map((event) => {
            return {
              ...event,
              label: event.name,
              value: event.id,
            };
          })
        );
      }
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    handleGetEvents();
  }, []);
  return (
    <div className="flex flex-col gap-3 md:flex-row">
      <div className="flex flex-col gap-1">
        <label htmlFor="search" className="text-xl">
          Search
        </label>
        <Input
          onInput={(value) => setSearch(value)}
          suffix
          inputProps={{
            placeholder: 'Search',
            value: search,
            name: 'search',
          }}
          suffixComponent={search ? IconX : IconSearch}
          suffixAction={() => {
            search && setSearch('');
          }}
        />
      </div>
      <div className="flex flex-grow-[1] flex-col gap-1">
        <label htmlFor="eventType" className="text-xl">
          Pilih Event
        </label>
        <Select options={eventList} placeholder="Pilih Event" />
      </div>
      <div className="flex flex-col items-end justify-end gap-1">
        <Tabs
          options={tabFilter}
          selectedValue={selectedTab}
          onChange={(value) => {
            setSelectedTab(value);
          }}
        />
      </div>
    </div>
  );
};

export default EventFilter;
