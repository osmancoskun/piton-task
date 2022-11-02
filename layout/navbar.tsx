const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-5 mb-5 w-screen border flex justify-between items-center">
      <a
        href="/product2"
        className="flex items-center flex-shrink-0  mr-6 cursor-pointer"
      >
        <svg
          className="bg-cyan-100 h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="font-semibold text-xl tracking-tight">
          Techno Products
        </span>
      </a>
      <a href="#" className="mr-6">
        <span className="font-semibold text-xl tracking-tight ">Contact</span>
      </a>
    </nav>
  );
};

export default Navbar;
