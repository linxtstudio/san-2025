import Image from 'next/image';

export default function Layout({ children }) {
  return (
    <div className="relative flex min-h-[100vh] items-center">
      <Image
        src="/image/background/bg-register.png"
        width={280}
        height={280}
        className="absolute bottom-0 opacity-20 print:hidden"
        alt=""
      />
      <Image
        src="/image/background/bg-register.png"
        width={280}
        height={280}
        className="absolute right-0 top-0 rotate-180 opacity-20 print:hidden"
        alt=""
      />
      {children}
    </div>
  );
}
