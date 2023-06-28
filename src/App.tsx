import './App.css'
import ApiStarWars from './components/apiStarWars'
import Header from './components/header'
import Welcome from './pages/welcome'
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route index path='/' element={<Welcome />} />
        <Route path='/apiStarWars' element={<ApiStarWars />} />
      </Routes>
    </>
  )
}

export default App
