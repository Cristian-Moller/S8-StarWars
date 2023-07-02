import { useState } from "react"
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'

function Register(){

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const { signup }: any = useAuth()
  const navigate = useNavigate()
  const [errorFB, setErrorFB] = useState()
  
  const handleChange = ({target: {name, value}}: any) => {
    setUser({...user, [name]: value})
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      await signup(user.email, user.password)
      navigate('/apiStarWars')
    } catch (error : any) {
      setErrorFB(error.message)
    }
  }

  return (
    <div>
      {errorFB && <p className="authError">{errorFB} </p>}
      <form onSubmit={handleSubmit} className="authForm">
        <label htmlFor="email">Email</label>
        <input
          className="authInput"
          type="email"
          id="email"
          name="email"
          placeholder="youremail@gmail.com"
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          className="authInput"
          type="password"
          id="password"
          name="password"
          placeholder="*******"
          onChange={handleChange}
        />
        <button className="authButton">Register</button>
      </form>
    </div>
  )
}

export default Register