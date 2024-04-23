'use client';
import Link from 'next/link';

const Header = ({searchTerm,setSearchTerm}) => {
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl hidden sm:block">My eCommerce App</div>
        <div className="flex-1"></div>
        <div className="md:hidden">
          <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border border-gray-300 px-2 py-1 rounded-l-md focus:outline-none"
        />
        </div>
        <div className="hidden md:flex mr-3">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="border border-gray-300 px-2 py-1 rounded-md focus:outline-none"
          />
        </div>
        <div className="flex items-center hidden md:block">
          <button className="bg-white text-blue-500 px-4 py-1 rounded-md mr-3">
            <Link href={'/cart'}>Cart</Link>
          </button>
          <button className="bg-white text-blue-500 px-4 py-1 rounded-md">
            <Link href={'/login'}>Checkout</Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
