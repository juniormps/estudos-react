import './MyForm.css'

const MyForm = () => {

  return (
    <div>
        {/* Criação de Formulários*/}
        <form>
            <div>
                <label htmlFor="name">Nome</label>
                <input type="text" name='name' placeholder='Digite o seu nome' />
            </div>

            {/* Label envolvendo o input*/}
            <label>
                <span>E-mail</span>
                <input type="email" name="email" placeholder='Digite seu e-mail'/>
            </label>

            
            <input type="submit" value="Enviar" />


        </form>
    </div>
  )
}

export default MyForm