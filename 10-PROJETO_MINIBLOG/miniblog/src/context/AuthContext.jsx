import { useContext, createContext } from 'react'
import { auth } from './firebase/auth'
import { onAuthStateChanged } from 'firebase/auth'

const AuthContext = createContext()


export function AuthProvider({ children }) {

    const [user, setUser] = useState(undefined)

    //const loadingUser = user === undefined

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
        })
    }, [auth])

  return (
    <AuthContext.Provider value={user}>
        {children}
    </AuthContext.Provider>
  )

}


export function useAuthValue() {

  return useContext(AuthContext)

}