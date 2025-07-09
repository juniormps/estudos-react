import { useState, useEffect, createContext } from 'react'
import { auth } from '../../firebase/auth'
import { onAuthStateChanged } from 'firebase/auth'

export const AuthContext = createContext()


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


