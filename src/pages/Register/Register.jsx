

import { Form } from '../../components/Form'

export function Register() {
  
  return (
    <div className=" pt-[3.8rem] ">
      <div className="items-center text-center my-10">
        <h2 className="text-5xl font-bold mb-3"> Cadastre-se para postar</h2>
        <p className="text-lg text-gray-400">
          Crie seu usuario e compartilhe suas histórias
        </p>
      </div>

      <Form />
    </div>
  )
}
