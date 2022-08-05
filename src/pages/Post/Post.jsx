import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'

export function Post() {
  const { id } = useParams()
  const { document: post } = useFetchDocument('posts', id)

  return (
  <div className="h-full w-full pt-[3.8rem]">
    {post && (
      <div className="flex flex-col justify-center items-center">
        <h1 className="pt-10 pb-5 text-4xl font-bold mb-3 ">{post.title}</h1>
        <img 
        className=' shadow-lg shadow-black rounded-lg  flex  justify-center items-center w-[700px] h-[500px]'
        src={post.image} alt={post.title} />
        <p className='text-lg max-w-md text-center pt-5 text-gray-400'>{post.body}</p>
        <h3 className='text-lg font-bold'>Este post trata sobre:</h3>
        <div className="text-lg text-gray-400 font-bold">
          {post.tags.map(tag => (
            <p key={tag}>
              <span>#</span>
              {tag}
            </p>
          ))}
        </div>
      </div>
    )}
  </div>
  )
}
