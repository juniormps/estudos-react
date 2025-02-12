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
        console.log(name, email, bio, role)

        // Validações
        // Envio

        // 7 - Limpar Form
        setName("")
        setEmail("")
        setBio("")
    }


    // 8
    const [bio, setBio] = useState(user ? user.bio : "")

    //9
    const [role, setRole] = useState(user ? user.role : "")

  return (
    <div>
        {/* 1 - Criação de Formulários */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name='name' placeholder='Digite o seu nome' onChange={handleName} value={name} />
            </div>

            {/* 2 - Label envolvendo o input */}
            <label>
                <span>E-mail:</span>
                <input type="email" name="email" placeholder='Digite seu e-mail' onChange={(e) => setEmail(e.target.value)} value={email} />
            </label>  {/* 4 - Alterando o state de forma inline (acima) */}

            {/* 8 - Textarea */}
            <label>
                <span>Bio:</span>
                <textarea name="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>
            
            {/* 9 - Select */}
            <label>
                <span>Função na empresa:</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>

            </label>
            
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
