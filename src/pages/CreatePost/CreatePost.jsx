import { useState } from 'react'
import { useInsertDocument } from '../../hooks/useInsertDocuments'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'

export function CreatePost() {
 
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();

  const navigate = useNavigate();

  const { insertDocument, response } = useInsertDocument("posts");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    // validate image
    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.");
    }

    // create tags array
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    // check values
    if (!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!");
    }

    console.log(tagsArray);

    console.log({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    if(formError) return

    insertDocument({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    // redirect to home page
    navigate("/");
  };

  return (
    <div className="h-full w-full pt-[3.8rem]">
      <div className="items-center text-center my-10">
        <h2 className="text-5xl font-bold mb-3">Criar Post</h2>
        <p className="text-lg text-gray-400">
          Escreva sobre o que quiser e compartilhe o seu conhecimento!
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center"
      >
        <label className="mb-1">
          <span className="font-bold mb-[3rem]">Titulo:</span>
          <br />
          <input
            className="text-lg mt-2 border-2 border-gray-300 p-3 w-80 bg-transparent rounded-md"
            type="text"
            required
            name="title"
            placeholder="Pense em um bom título..."
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </label>
        <label className="mb-1">
          <span className="font-bold mb-[3rem]">URL da Imagem:</span>
          <br />
          <input
            className="text-lg mt-2 border-2 border-gray-300 p-3 w-80 bg-transparent rounded-md"
            type="text"
            required
            name="image"
            placeholder="insira a imagem do seu post!"
            value={image}
            onChange={e => setImage(e.target.value)}
          />
        </label>
        <label className="mb-1">
          <span className="font-bold mb-[3rem]">Conteudo:</span>
          <br />
          <textarea
            className="text-lg mt-2 border-2 border-gray-300 p-3 w-80 bg-transparent rounded-m"
            type="text"
            required
            name="body"
            placeholder="insira o conteudo do post"
            value={body}
            onChange={e => setBody(e.target.value)}
          />
        </label>
        <label className="mb-1">
          <span className="font-bold mb-[3rem]">Tags:</span>
          <br />
          <input
            className="text-lg mt-2 border-2 border-gray-300 p-3 w-80 bg-transparent rounded-md"
            type="text"
            required
            name="Tags"
            placeholder="insira as tags separadas por , "
            value={tags}
            onChange={e => setTags(e.target.value)}
          />
        </label>
        {!response.loading && (
          <button
            className="w-80 text-center mt-2 border-2  border-black text-white bg-zinc-900 hover:bg-white hover:text-black rounded-lg p-2 transition-colors duration-200  font-bold"
            type="submit"
            value="cadastrar"
          >
            Cadastrar
          </button>
        )}
        {response.loading && (
          <button
            className="w-80 text-center mt-2 border-2 flex justify-center items-center border-black text-white bg-zinc-900 hover:bg-white hover:text-black rounded-lg p-2 transition-colors duration-200  font-bold disabled:opacity-75"
            disabled
            type="submit"
            value="cadastrar"
          >
            <SpinnerGap
              className="flex justify-center items-center text-center animate-spin font-bol text-black "
              size={28}
            />
          </button>
        )}

        {(response.error || formError) && (
          <p
            className=" rounded-lg w-80 bg-red-400 text-red-700 font-bold text-lg p-2 text-center flex justify-center mt-1
        animate-pulse cursor-default"
          >
            {response.error || formError}
          </p>
        )}
      </form>
    </div>
  )
}
