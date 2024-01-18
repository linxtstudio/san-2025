'use client';

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { Menu, Transition } from '@headlessui/react';

import { Fragment } from 'react';

const Table = ({
  data,
  columns,
  onPaginationChange,
  pageCount,
  pagination,
  onSee = null,
  onEdit = null,
  onDelete = null,
}) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    onPaginationChange,
    state: { pagination },
    pageCount,
  });

  const isUsingActions = onSee || onEdit || onDelete;

  return (
    <div className="overflow-x-scroll lg:overflow-x-auto">
      <table className="w-full   bg-white ">
        <thead className=" text-center text-lg font-semibold  lg:text-[22px]">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <td key={header.id} className="px-6 py-3">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </td>
              ))}
              {isUsingActions && <td></td>}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b-2 border-b-[#D9D9D9]">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className=" px-6 py-4 text-center">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* {pageCount ? <Pagination table={table} /> : null} */}
    </div>
  );
};

export default Table;
