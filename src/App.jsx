
import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomePage from "./components/Pages/Homepage"
import ProductsPage from './components/Pages/ProductsPage'
import AdminUsers from './components/Pages/AdminUsers'
import AdminPage from './components/Pages/AdminPage'
import CartPage from './components/Pages/CartPage'

function App() {
  

  return (
    <>
    <Header />

     <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/products' element={<ProductsPage />} />
      <Route path='/admin' element={<AdminPage />} />
      <Route path='/cart' element={<CartPage />} />
     </Routes>
    </>
  )
}

export default App
