import { Link } from "react-router-dom"
import styled from "styled-components"

const LogoLink = styled(Link)`
 text-decoration: none;
 color: black;
`

const NavLinks = styled(Link)`
 text-decoration: none;
 color: black;
 Margin: 0rem 1rem;
`

const ProductsLink = styled(Link)`
  text-decoration: none;
  color: white;
  background-color: #FF5400;
  padding: 0.5rem;
  border-radius: 0.2rem;
`


const Header = () => {

  return (
    <section className="header">

      <h1>
        <LogoLink to="/" >
        PlayfulPanda
        </LogoLink>
      </h1>

      <nav>
        <ProductsLink to="/products" >
        Produkter
        </ProductsLink>
  
       <NavLinks to="/admin" >
       Logga in
       </NavLinks>

       <NavLinks to="/cart" >
          <i className="fa fa-shopping-cart"></i>
       </NavLinks>
      </nav>

    </section>
  )
}

export default Header