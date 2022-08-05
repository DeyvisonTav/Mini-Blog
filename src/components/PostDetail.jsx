import { Link } from 'react-router-dom'

export function PostDetail({ post }) {
  return (
    <div className="flex flex-col justify-center items-center ">
      <img 
      className='shadow-lg shadow-black rounded-lg  flex  justify-center items-center w-[600px] h-[400px] '
      src={post.image} alt={post.title} />
      <h2 className="pt-8 text-4xl font-bold mb-3 ">{post.title}</h2>
      <p className="text-lg font-bold ">por: {post.createdBy}</p>
      <div className="text-lg text-gray-400 font-bold ">
        {post.tags.map(tag => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
      <Link to={`/posts/${post.id}`} className="text-center mt-2 border-2  border-black text-white bg-zinc-900 hover:bg-white hover:text-black rounded-lg p-2 transition-colors duration-200  font-bold px-4">
        Ler
      </Link>
    </div>
  )
}
