'use client';

import Link from 'next/link';

const NavbarDashboard = ({}) => {
  const handleLogout = () => {
    localStorage.removeItem('access-token');
    window.location.href = '/login';
  };
  return (
    <div className="bg-orange-1">
      <div className=" container flex justify-between px-6 py-2">
        <Link className="text-4xl font-semibold text-white" href="/dashboard">
          Dashboard
        </Link>
        <div className="flex items-center gap-12">
          <Link className=" text-white" href="/dashboard/hotel">
            Hotel
          </Link>
          <button
            className=" text-white"
            onClick={() => {
              handleLogout();
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarDashboard;
