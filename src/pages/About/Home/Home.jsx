import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { useFetchDocuments } from '../../../hooks/useFetchDocuments'
import { PostDetail } from '../../../components/PostDetail'
export function Home() {
  const { documents: posts, loading } = useFetchDocuments('posts')

  const navigate = useNavigate()

  const [query, setQuery] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    if (query) {
      return navigate(`/search?q=${query}`)
    }
  }

  console.log(loading)

  return (
    <div className="h-full w-full pt-[3.8rem]">
      <div className="items-center text-center my-10">
        <h2 className="text-5xl font-bold mb-3 ">
          Veja os nossos posts mais recentes
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center"
      >
        <input
          className="text-lg mt-2 border-2 border-gray-300 p-3 w-80 bg-transparent rounded-md"
          placeholder="Ou busque por Tags"
          type="text"
          onChange={e => setQuery(e.target.value)}
        />
        <div className="pb-10">
          <button className="w-80 text-center mt-2 border-2  border-black text-white bg-zinc-900 hover:bg-white hover:text-black rounded-lg p-2 transition-colors duration-200  font-bold">
            Pesquisar
          </button>
        </div>
      </form>
      <div>
        {loading && <p>Carregando...</p>}
        {posts && posts.length === 0 && (
          <div className="flex flex-col items-center justify-center pt-52 ">
            <p>Não foram encontrados posts</p>
            <Link
              to="/posts/create"
              className="w-80 text-center mt-2 border-2  border-black text-white bg-zinc-900 hover:bg-white hover:text-black rounded-lg p-2 transition-colors duration-200  font-bold"
            >
              Criar primeiro post
            </Link>
          </div>
        )}
        {posts && posts.map(post => <PostDetail key={post.id} post={post} />)}
      </div>
    </div>
  )
}
