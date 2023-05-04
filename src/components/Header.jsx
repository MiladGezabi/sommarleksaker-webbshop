import { Link } from "react-router-dom"


const Header = () => {

  return (
    <section className="header">

      <h1>
        <Link to="/" >
        PlayfulPanda
        </Link>
      </h1>

      <nav>
        <Link to="/products" >
        Produkter
        </Link>
  
       <Link to="/admin" >
       Logga in
       </Link>

       <Link to="/cart" >
          <i className="fa fa-shopping-cart"></i>
       </Link>
      </nav>

    </section>
  )
}

export default Header