import { useAuth } from "../context/authContext";
import { Navigate } from 'react-router-dom'


export function ProtectedRoute({ children }: any) {
  const { user, loadind } = useAuth()

  if(loadind) return <h2>Loading...</h2>

  if(!user) return <Navigate to='/' />

  return (
    <div>
      {children}
    </div>
  )
}