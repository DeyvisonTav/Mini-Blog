import {  SpinnerGap } from 'phosphor-react'
import { useState, useEffect } from 'react'
import { useAuthentication } from '../hooks/useAuthentication'

export function Form() {
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const { createUser, error: authError, loading } = useAuthentication()

  async function handleSubmit(e) {
    e.preventDefault()

    setError('')
    const user = {
      displayName,
      email,
      password
    }

    if (password !== confirmPassword) {
      setError('As senhas precisam ser iguais')
      return
    }

    const res = await createUser(user)

    console.log(res)
  }
   useEffect(() => {
     
    if(authError){
      setError(authError)
    }

   },[authError])

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center"
    >
      <label className="mb-1">
        <span className=" font-bold mb-[3rem]">Nome:</span>
        <br />
        <input
          className=" text-lg mt-2 p-3 border-2 border-gray-300  w-80 bg-transparent rounded-md"
          type="text"
          required
          name="displayNome"
          placeholder="Nome do usuario"
          value={displayName}
          onChange={e => setDisplayName(e.target.value)}
        />
      </label>
      <label className="mb-1">
        <span className="font-bold mb-[3rem]">E-mail:</span>
        <br />
        <input
          className="text-lg mt-2 border-2 border-gray-300 p-3 w-80 bg-transparent rounded-md"
          type="Email"
          required
          name="displayEmail"
          placeholder="Email do usuario"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label className="mb-1">
        <span className="font-bold mb-[3rem]">Senha:</span>
        <br />
        <input
          className="text-lg mt-2 border-2 border-gray-300 p-3 w-80 bg-transparent rounded-md "
          type="Password"
          required
          name="displayPassword"
          placeholder="Senha do usuario"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <label className="mb-1">
        <span className=" font-bold mb-[3rem]">Confirmação de senha:</span>
        <br />
        <input
          className="text-lg mt-2 border-2 border-gray-300 p-3 w-80 bg-transparent rounded-md "
          type="Password"
          required
          name="displayConfirmçãoPassword"
          placeholder="Confirme sua senha"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
      </label>
      {!loading && (<button
        className="w-80 text-center mt-2 border-2  border-black text-white bg-zinc-900 hover:bg-white hover:text-black rounded-lg p-2 transition-colors duration-200  font-bold"
        type="submit"
        value="cadastrar"
      >
        Cadastrar
      </button>)}
      {loading && (<button
        className="w-80 text-center mt-2 border-2 flex justify-center items-center border-black text-white bg-zinc-900 hover:bg-white hover:text-black rounded-lg p-2 transition-colors duration-200  font-bold disabled:opacity-75"
        disabled
        type="submit"
        value="cadastrar"
      >
       <SpinnerGap 
       className='flex justify-center items-center text-center animate-spin font-bol text-black '
       size={28} />
      </button>)}
      
      {error && (
        <p
          className=" rounded-lg w-80 bg-red-400 text-red-700 font-bold text-lg p-2 text-center flex justify-center mt-1
        animate-pulse cursor-default"
        >
          {error}
        </p>
      )}
    </form>
  )
}
