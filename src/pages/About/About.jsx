import { Link } from 'react-router-dom'

export function About() {
  return (
    <div className="pt-[7rem] flex flex-col items-center space-y-8">
      <h2 className="text-5xl font-bold mb-3">
        Sobre o Mini <span>Blog</span>
      </h2>
      <p className="text-lg text-gray-400">
        Este projeto consiste em um blog feito com React no front-end e Firebase
        no back-end.
      </p>
      <Link
        to="/posts/create"
        className="font-bold border-2  border-black text-white bg-zinc-900 hover:bg-white hover:text-black  rounded-lg p-2 transition-colors duration-200"
      >
        Criar post
      </Link>
    </div>
  )
}
