import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsAuthenticated(!!user);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    window.location.href = '/';
  };

  const menuLinks = (
    <>
      <a href="/" className="text-white hover:text-black text-lg font-medium">Home</a>
      <a href="/about" className="text-white hover:text-black text-lg font-medium">Sobre</a>
      <a href="/service" className="text-white hover:text-black text-lg font-medium">Serviços</a>
      <a href="/contact" className="text-white hover:text-black text-lg font-medium">Contato</a>
      {isAuthenticated ? (
        <>
          <a href="/profile" className="text-white hover:text-green-100 text-lg font-medium">Perfil</a>
          <button onClick={handleLogout} className="text-white hover:text-green-100 text-lg font-medium">Sair</button>
        </>
      ) : (
        <a href="/login" className="text-white hover:text-black text-lg font-medium">Login</a>
      )}
    </>
  );

  return (
    <nav className="w-full bg-gradient-to-b from-blue-400 to-blue-600 px-8 py-6">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <a href="/" className='hover:text-black'>Nova Serra Azul</a>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex gap-6">
          {menuLinks}
        </div>

        {/* Ícone Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <AiOutlineClose size={28} /> : <GiHamburgerMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="mt-4 flex flex-col gap-4 md:hidden">
          {menuLinks}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
