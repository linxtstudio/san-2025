'use client';

import IconSearch from '@/common/icons/IconSearch';
import IconX from '@/common/icons/IconX';
import Input from '@/common/components/Input/Input';

import { useState } from 'react';

const EventFilter = ({}) => {
  const [search, setSearch] = useState('');

  return (
    <div className="flex ">
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
          className={' focus-within:border-grey-3'}
          suffixAction={() => {
            search && setSearch('');
          }}
        />
      </div>
    </div>
  );
};

export default EventFilter;
