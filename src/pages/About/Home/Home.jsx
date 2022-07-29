import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"

export function Home() {
  const { documents: posts, loading } = useFetchDocuments("posts");

  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };

  console.log(loading);
  return (
    <div className="h-full w-full pt-20">
     <h2 className="text-5xl font-bold mb-3">Veja os nossos posts mais recentes</h2>
     <form>
      <input 
      placeholder="Ou busque por Tags"
      type="text"
      onChange={(e) => setQuery(e.target.value) }
      />
      <button>Pesquisar</button>
     </form>

     <dir>
      <h1>Posts...</h1>
     </dir>
    </div>
  )
}
