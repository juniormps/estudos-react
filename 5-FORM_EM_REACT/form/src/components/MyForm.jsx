import { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {

    // 3 - Gerenciamento de dados
    const [name, setName] = useState(user ? user.name : "")
    const [email, setEmail] = useState(user ? user.email : "")

    const handleName = (e) => {
        setName(e.target.value)
    }

    console.log(name)
    console.log(email)


    // 5 - Envio do form
    const handleSubmit = (e) => {
        e.preventDefault()

        console.log("Enviando o formulário...")
        console.log(name, email)

        // Validações
        // Envio

        // 7 - Limpar Form
        setName("")
        setEmail("")
    }

  return (
    <div>
        {/* 1 - Criação de Formulários */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome</label>
                <input type="text" name='name' placeholder='Digite o seu nome' onChange={handleName} value={name} />
            </div>

            {/* 2 - Label envolvendo o input */}
            <label>
                <span>E-mail</span>
                <input type="email" name="email" placeholder='Digite seu e-mail' onChange={(e) => setEmail(e.target.value)} value={email} />
            </label>  {/* 4 - Alterando o state de forma inline (acima) */}

            
            <input type="submit" value="Enviar" />


        </form>
    </div>
  )
}

export default MyForm

// 6 - Controlled Inputs 
// useState(user ? user.name : "")
// useState(user ? user.email : "")
// "value={name}"
// "value={email}"
