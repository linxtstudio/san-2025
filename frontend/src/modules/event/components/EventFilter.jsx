'use client';

import Input from '@/common/components/Input/Input';
import IconSearch from '@/common/icons/IconSearch';
import IconX from '@/common/icons/IconX';

import Select from '@/common/components/Select/Select';
import Tabs from '@/common/components/Tabs/Tabs';
import { useUpdateParam } from '@/common/hooks/useParams';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { getEvents } from '../services/getEvent';

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

const EventFilter = ({
  useSearch = true,
  useEvent = true,
  useGroup = true,
}) => {
  const { currentParams, updateParams } = useUpdateParam();

  const [search, setSearch] = useState(currentParams.get('search') ?? '');

  const [eventList, setEventList] = useState([]);

  const [selectedEvent, setSelectedEvent] = useState(
    currentParams.get('event_type_id') ?? ''
  );

  const [selectedTab, setSelectedTab] = useState(
    currentParams.get('group') ?? ''
  );
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
      toast.error(error.message);
    }
  };

  useEffect(() => {
    currentParams.set('search', search);
    updateParams();
  }, [search]);

  useEffect(() => {
    currentParams.set('event_type_id', selectedEvent);
    updateParams();
  }, [selectedEvent]);

  useEffect(() => {
    currentParams.set('group', selectedTab);
    updateParams();
  }, [selectedTab]);

  useEffect(() => {
    handleGetEvents();
  }, []);
  return (
    <div className="flex flex-col gap-3 md:flex-row">
      {useSearch && (
        <div className="flex flex-grow-[1] flex-col gap-1">
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
      )}
      {useEvent && (
        <div className="flex flex-grow-[1] flex-col gap-1">
          <label htmlFor="eventType" className="text-xl">
            Pilih Event
          </label>
          <Select
            options={eventList}
            placeholder="Pilih Event"
            value={selectedEvent}
            onChange={(value) => {
              setSelectedEvent(value);
            }}
          />
        </div>
      )}
      {useGroup && (
        <div className="flex flex-col items-end justify-end gap-1">
          <Tabs
            options={tabFilter}
            selectedValue={selectedTab}
            onChange={(value) => {
              setSelectedTab(value);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default EventFilter;
