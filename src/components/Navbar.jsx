import { NavLink } from 'react-router-dom'

export function Navbar() {
  return (
    <div className="   bg-white fixed text-base h-14 px-10 w-screen flex justify-between items-center shadow-md shadow-zinc-300 rounded-md ">
      <NavLink to="/">
        <span className='text-base'>Mini</span> <span className="font-bold text-lg text-zinc-900  ">BLOG</span>
      </NavLink>
      <ul className="flex space-x-5  ">
        <li className="hover:bg-zinc-900 hover:text-white rounded-lg p-2 transition-colors duration-200">
          <NavLink to="/login">Login</NavLink>
        </li>
        <li className="hover:bg-zinc-900 hover:text-white rounded-lg p-2 transition-colors duration-200">
          <NavLink to="/register">Cadastre-se</NavLink>
        </li>
        <li className="hover:bg-zinc-900 hover:text-white rounded-lg p-2 transition-colors duration-200">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="hover:bg-zinc-900 hover:text-white rounded-lg p-2 transition-colors duration-200">
          <NavLink to="/about">Sobre</NavLink>
        </li>
      </ul>
    </div>
  )
}
