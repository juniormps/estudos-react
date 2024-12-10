import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(["Marcio", "Junior", "Silva"])

    const [users] = useState([
        {id: 1452100, name: "Marcio", age: 37},
        {id: 2536145, name: "Alda", age: 67},
        {id: 3214554, name: "José", age: 6}
    ])

  return (
    <>
        <div>
            <ul>
                {/*Atentar para o return do map: aqui deve ser com parenteses (diferente do JS normal, que é com "{}") ou sem nada*/}
                {list.map((nome, i) => (
                    <li key={i}>{nome}</li>
                ))}
            </ul>
        </div>
        <div>
            <ul>
                {users.map(user => 
                    <li key={user.id}>{user.name} - {user.age}</li>
                )}
            </ul>
        </div>
    </>
  )
}

export default ListRender