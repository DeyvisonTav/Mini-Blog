import { useFetchDocuments } from "../../hooks/useFetchDocuments"
import { useQuery } from "../../hooks/useQuery"

import { PostDetail } from "../../components/PostDetail"
import { Link } from "react-router-dom"


export function Search() {
  const query = useQuery()
  const search = query.get('q')

  const { documents: posts } = useFetchDocuments('posts', search);

  return (
    <div className="h-full w-full pt-[3.8rem] ">
      <h1 className="items-center text-center my-10 text-5xl font-bold mb-3">Resultados encontrados para: <span className="text-gray-400 "> {search}</span> </h1>
      <div className="text-lg text-gray-400">
        {posts && posts.length === 0 && (
          <div className="text-center">
            <p className="pb-10">Não foram encontrados posts a partir da sua busca...</p>
            <Link to="/" className="w-80 text-center mt-2 border-2  border-black text-white bg-zinc-900 hover:bg-white hover:text-black rounded-lg p-2 transition-colors duration-200  font-bold">
              Voltar
            </Link>
          </div>
        )}
        {posts && posts.map(post => <PostDetail key={post.id} post={post} />)}
      </div>
    </div>
  )
}
