import NavbarDashboard from '@/common/components/Navbar/NavbarDashboard';

export default function Layout({ children }) {
  return (
    <>
      <NavbarDashboard />

      <main className="container py-[75px]">{children}</main>
    </>
  );
}
