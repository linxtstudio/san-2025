import Link from "next/link";

const Navbar = ({}) => {
  return (
    <section className=" bg-green-1 px-6 py-2 ">
      <div className="container flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-semibold">Salsa Arisan Nyok</h1>
          <p className="text-lg">Bali, 24 - 26 May 2024</p>
        </div>
        <nav className="flex">
      <ul className="flex gap-7 items-center">
        <Link href="/">Home</Link>
        <Link href="/hotel">Hotel</Link>
      </ul>
    </nav>
      </div>
    </section>
  );
};

export default Navbar;
