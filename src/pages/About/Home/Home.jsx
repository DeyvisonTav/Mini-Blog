import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'

export function Home() {
  return (
    <div className="h-full w-full pt-[3.8rem]">
      <div className="items-center text-center my-10">
        <h2 className="text-5xl font-bold mb-3">
          Veja os nossos posts mais recentes
        </h2>
      </div>

      <form className="flex flex-col justify-center items-center">
        <input
          className="text-lg mt-2 border-2 border-gray-300 p-3 w-80 bg-transparent rounded-md"
          placeholder="Ou busque por Tags"
          type="text"
          onChange={e => setQuery(e.target.value)}
        />
        <button
        className="w-80 text-center mt-2 border-2  border-black text-white bg-zinc-900 hover:bg-white hover:text-black rounded-lg p-2 transition-colors duration-200  font-bold"
        >Pesquisar</button>
      </form>
    </div>
  )
}
