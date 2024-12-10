import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(["Marcio", "Junior", "Silva"])

    const [users, setUsers] = useState([
        {id: 1, name: "Marcio", age: 37},
        {id: 2, name: "Alda", age: 67},
        {id: 3, name: "José", age: 6}
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => {
            console.log(prevUsers)
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

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
        <button onClick={deleteRandom}>Delete Random User</button>
    </>
  )
}

export default ListRender