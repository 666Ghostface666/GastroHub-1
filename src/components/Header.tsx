import React from 'react';
import '../styles/Header.css';
import logo from '../assets/img/logo.png';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const handleGetStarted = () => {
      navigate("/LoginPage"); //redireccion al login
    };


    return (
      <nav className="navbar bg-[#dd929233] p-2">
  <div className="navbar-container flex items-center justify-between mx-auto">
    {/*logo*/}
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img
        src={logo}
        className="navbar-logo w-36 h-36"
        alt="Flowbite Logo"
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
      
      </span>
    </a>
    {/*boton*/}
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button
        type="button"
        className="get-started-btn ml-10"
        onClick={handleGetStarted}  //al hacer clic, inicia sesion//
        >
        Get started
      </button>
      <button
        data-collapse-toggle="navbar-cta"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-cta"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      {/*menu de nav*/}
    </div>
    <div
  className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 navbar-container"
  id="navbar-cta"
>
  <ul className="navbar-list flex flex-col font-medium p-4 md:p-0 mt-4 navbar-items md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-[#ff3385] md:dark:bg-[#ff6699] dark:border-[#ff3385]">
    <li>
      <a
        href=""
        className="navbar-item block py-2 px-3 md:p-0"
        aria-current="page"
      >
        Home
      </a>
    </li>
    <li>
      <a
        href="/about"
        className="navbar-item block py-2 px-3 md:p-0"
      >
        About
      </a>
    </li>
    <li>
      <a
        href="#"
        className="navbar-item block py-2 px-3 md:p-0"
      >
        Services
      </a>
    </li>
    <li>
      <a
        href="#"
        className="navbar-item block py-2 px-3 md:p-0"
      >
        Contact
      </a>
    </li>
  </ul>
</div>

  </div>
</nav>

      )
}

export default Header;


 