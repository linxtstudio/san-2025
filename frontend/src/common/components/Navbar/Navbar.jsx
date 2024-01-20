import Link from 'next/link';

const Navbar = ({}) => {
  return (
    <section className=" bg-green-1 px-6 py-2 ">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <h1 className="text-4xl font-semibold">SAN 2024</h1>
        <nav className="i flex">
          <ul className="flex items-center gap-7">
            <li>Home</li>
            <Link href={'/hotel'}>Hotel</Link>

            <li>About</li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
