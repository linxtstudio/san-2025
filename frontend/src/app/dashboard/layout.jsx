export default function Layout({ children }) {
  return (
    <>
      <div className="bg-orange-1">
        <div className=" container flex justify-normal  px-6 py-2">
          <h1 className="text-4xl font-semibold text-white">Dashboard</h1>
        </div>
      </div>

      <main className="container py-[75px]">{children}</main>
    </>
  );
}
