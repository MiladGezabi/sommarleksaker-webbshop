import { Link } from "react-router-dom"
import HomePage from "./Pages/Homepage"
import ProductsPage from './Pages/ProductsPage'
import AdminUsers from './Pages/AdminUsers'
import AdminPage from './Pages/AdminPage'
import CartPage from './Pages/CartPage'

const Header = () => {

  return (
    <section>

      <h1>
        <Link to={<HomePage />}>
        PlayfullPanda
        </Link>
      </h1>

      <ul>
        <Link to={<ProductsPage />}>
        Produkter
        </Link>
  
       <Link to={<AdminPage />}>
       Logga in
       </Link>

       <Link to={<CartPage />}>
          <i className="fa fa-shopping-cart"></i>
       </Link>
      </ul>

    </section>
  )
}

export default Header