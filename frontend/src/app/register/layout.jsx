export default function Layout({ children }) {
  return (
    <div className="relative flex min-h-[100vh] items-center">
      <img
        src="/image/background/bg-register.png"
        className="absolute bottom-0 z-10"
        alt=""
      />
      <img
        src="/image/background/bg-register.png"
        className="absolute right-0 top-0 z-10 rotate-180"
        alt=""
      />
      {children}
    </div>
  );
}
