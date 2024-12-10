import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(["Marcio", "Junior", "Silva"])

  return (
    <>
        <div>
            <ul>
                {/*Atentar para o return do map: aqui deve ser com parenteses (diferente do JS normal, que é com "{}") ou sem nada*/}
                {list.map((nome) => (
                    <li>{nome}</li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default ListRender