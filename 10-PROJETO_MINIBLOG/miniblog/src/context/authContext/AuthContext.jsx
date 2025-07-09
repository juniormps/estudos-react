import { useState, useEffect, useContext, createContext } from 'react'
import { auth } from '../firebase/auth'
import { onAuthStateChanged } from 'firebase/auth'

const AuthContext = createContext()


export function AuthProvider({ children }) {

    const [user, setUser] = useState(undefined)

    //const loadingUser = user === undefined

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
        })

        return () => unsubscribe()
    }, [])

  return (
    <AuthContext.Provider value={{ user }}>
        {children}
    </AuthContext.Provider>
  )

}


export function useAuthValue() {

  return useContext(AuthContext)

}