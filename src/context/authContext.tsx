import { createContext, useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { auth } from '../firebase'

export const authContext = createContext()

export const useAuth = () => {
  const context = useContext(authContext)
  return context
}

export function AuthProvider({children}: any){

  const [user, setUser] = useState<any | null>(null)
  const [loadind, setLoadind] = useState<any>(true)


  const signup = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password)
  }

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password)
  }

  const logout = () => signOut(auth)

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoadind(false)
    })
  }, [])
  
  return (
    <authContext.Provider value={{ signup, login, user, logout, loadind }}>
      {children}
    </authContext.Provider>
  )
}