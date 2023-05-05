import { Link } from "react-router-dom"
import styled from "styled-components"
import { useRecoilState } from "recoil"
import { loginState } from "./Atoms"

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
  const [IsloggedIn, setIsLoggedIn] = useRecoilState(loginState)

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <>
    <section className="header">

      <h1>
        <LogoLink to="/" >
        PlayfulPanda
        </LogoLink>
      </h1>

      <nav>
        {IsloggedIn === false ? (
          <>
        <ProductsLink to="/products" >
        Produkter
        </ProductsLink>
  
       <NavLinks to="/admin" >
       Logga in
       </NavLinks>
          </>
        ):
        (
          <>
        <NavLinks to="/admin" >
        Admin
        </NavLinks>

        <button className="logout-btn" onClick={() => handleLogout()}>
          Logga ut
        </button>
          </>
        )
        }

       <NavLinks to="/cart" >
          <i className="fa fa-shopping-cart"></i>
       </NavLinks>
      </nav>

    </section>
    </>
  )
}

export default Header