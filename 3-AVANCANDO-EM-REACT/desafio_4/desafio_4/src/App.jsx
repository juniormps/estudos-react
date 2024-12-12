
import './App.css'
import UserDetails from './components/UserDetails'

function App() {

  const users = [
    {id: 1,name: "Marcio", age: 66, profession: "taxista"},
    {id: 2,name: "Alda", age: 67, profession: "Professora"},
    {id: 3,name: "Junior", age: 37, profession: "Programador"},
    {id: 4,name: "Sabrina", age: 41, profession: "Empresária"},
    {id: 5,name: "Samuel", age: 10, profession: "Estudante"},
    {id: 6,name: "José", age: 6, profession: "Estudante"},
    {id: 7,name: "Guto", age: 40, profession: "Contador"}
  ]

  return (
    <>
      {users.map(user => <UserDetails name={user.name} age={user.age} profession={user.profession} />)}
    </>
  )
}

export default App
