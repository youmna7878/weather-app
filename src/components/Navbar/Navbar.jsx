import logo from '../../assets/logo.png'
import { Link, NavLink } from "react-router-dom";
import { useRef } from 'react';

export default function Nav() {
  
  let bar = useRef(null)

  function showMenuBar() {
    bar.current.classList.remove('hidden')
    bar.current.classList.add('mt-4')
  }
  function removeMenuBar() {
    bar.current.classList.add('hidden')
  }

  return (
    <nav className="fixed top-0  w-full  py-3  z-50  bg px-3">
      <div className="container mx-auto p-5 ">
        <div className="w-full flex  flex-col lg:flex-row">
          <div className=" flex justify-between  lg:flex-row">
            <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={logo} alt="weather logo" />
              <span className="self-center whitespace-nowrap text-xl font-semibold text-white">Weather</span>
            </Link>
            <button onClick={() => { showMenuBar() }} onDoubleClick={removeMenuBar} data-collapse-toggle="navbar-default-example" type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg cursor-pointer lg:hidden hover:bg focus:outline-none focus:ring-2 focus:ring-offset-gray-900950"
              aria-controls="navbar-default-example" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
          <div className="hidden w-full lg:flex lg:pl-11  "ref={bar} id="navbar-default-example">
            <ul className="flex items-center flex-col mt-4 lg:mt-0 lg:ml-auto lg:flex-row gap-4">
              <li>
                <NavLink to="/"
                  className={({ isActive }) =>
                    isActive ? "active" : "normal"}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/news "
                  className={({ isActive }) =>
                    isActive ? "active" : "normal"}>News
                </NavLink>
              </li>
              <li>
                <NavLink to="/cameras "
                  className={({ isActive }) =>
                    isActive ? "active" : "normal"}>Live Cameras</NavLink>
              </li>
              <li>
                <NavLink to="/photos "
                  className={({ isActive }) =>
                    isActive ? "active" : "normal"}>Photos</NavLink>
              </li>
              <li>
                <NavLink to="/contact "
                  className={({ isActive }) =>
                    isActive ? "active" : "normal"}>Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>


  );
}
