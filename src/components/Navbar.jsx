
import { NavLink } from 'react-router-dom'



import { useAuthValue } from '../context/AuthContext'
import { useAuthentication } from '../hooks/useAuthentication';

export function Navbar() {
  const { logout} = useAuthentication()
  const { user } = useAuthValue();
  return (
    <div className="   bg-white fixed text-base h-16 px-10 w-screen flex justify-between items-center shadow-md shadow-zinc-300 rounded-md ">
      <NavLink to="/">
        <span className="text-lg">Mini</span>{' '}
        <span className="font-bold text-lg text-zinc-900  ">BLOG</span>
      </NavLink>
      <ul className="flex space-x-5 ">
        {!user &&(
          <>
             <li className="font-bold border-2  border-black text-white bg-zinc-900 hover:bg-white hover:text-black  rounded-lg p-2 transition-colors duration-200">
          <NavLink to="/login">Login</NavLink>
        </li>
        <li className="font-bold border-2  border-black text-white bg-zinc-900 hover:bg-white hover:text-black  rounded-lg p-2 transition-colors duration-200">
          <NavLink to="/register">Cadastre-se</NavLink>
        </li>
        </>
        )}
        {user && (
          <>
            <li className="font-bold border-2  border-black text-white bg-zinc-900 hover:bg-white hover:text-black  rounded-lg p-2 transition-colors duration-200">
          <NavLink to="/posts/create">Novo Post</NavLink>
        </li>
        <li className="font-bold border-2  border-black text-white bg-zinc-900 hover:bg-white hover:text-black  rounded-lg p-2 transition-colors duration-200">
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
          
          
          </>
        )}
        <li className="font-bold border-2  border-black text-white bg-zinc-900 hover:bg-white hover:text-black  rounded-lg p-2 transition-colors duration-200">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="font-bold border-2  border-black text-white bg-zinc-900 hover:bg-white hover:text-black  rounded-lg p-2 transition-colors duration-200">
          <NavLink to="/about">Sobre</NavLink>
        </li>
        {user && (
          <button 
          onClick={logout}
          className="font-bold border-2  border-black text-white bg-zinc-900 hover:bg-white hover:text-black  rounded-lg p-2 transition-colors duration-200">Sair</button>
        )}
      </ul>
    </div>
  )
}
