'use client';

const NavbarDashboard = ({}) => {
  const handleLogout = () => {
    localStorage.removeItem('access-token');
    window.location.href = '/login';
  };
  return (
    <div className="bg-orange-1">
      <div className=" container flex justify-normal  px-6 py-2">
        <h1 className="text-4xl font-semibold text-white">Dashboard</h1>
        <button
          className="ml-auto text-white"
          onClick={() => {
            handleLogout();
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default NavbarDashboard;
