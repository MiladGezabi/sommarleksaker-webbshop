
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomePage from "./components/Pages/Homepage"

function App() {
  

  return (
    <>
    <Header />

     <Routes>
      <Route path='/' element={<HomePage />} />
     </Routes>
    </>
  )
}

export default App
