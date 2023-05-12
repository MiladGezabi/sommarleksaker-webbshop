import { Link, NavLink } from "react-router-dom"
import { useRef } from "react"
import styled from "styled-components"
import { useRecoilState } from "recoil"
import { loginState } from "./Atoms"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

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

  const navRef = useRef()

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive-nav")
  }

  const handleFinalLogout = () => {
    handleLogout()
    showNavBar()
  }

  return (
    <>
    <section className="header">

      <h1>
        <LogoLink to="/" >
        PlayfulPanda
        </LogoLink>
      </h1>

      <nav className="default-nav">
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
        
        <NavLink to="/admin" className="logout-btn" onClick={() => handleLogout()}>
          Logga ut
        </NavLink>

          </>
        )
        }

       <NavLinks to="/cart" >
        <span>
          <i className="fa fa-shopping-cart"></i>
        </span>
       </NavLinks>
      </nav>

      <nav className="hamburger-nav" ref={navRef}>
      {IsloggedIn === false ? (
          <>
          <div>
        <ProductsLink onClick={showNavBar} to="/products" >
        Produkter
        </ProductsLink>

          </div>
        <div>

       <NavLinks onClick={showNavBar} to="/admin" >
       Logga in
       </NavLinks>
        </div>
          </>
        ):
        (
          <>
          <div>
        <NavLinks onClick={showNavBar} to="/admin" >
        Admin
        </NavLinks>
          </div>
        <div>
        <NavLink to="/admin" className="logout-btn" onClick={() => handleFinalLogout()}>
          Logga ut
        </NavLink>
        </div>

          </>
        )
        }
      <div>
       <NavLinks to="/cart"
       onClick={showNavBar} >
        Varukorg
       </NavLinks>
      </div>
       <button
       className="nav-btn nav-close-btn"
       onClick={showNavBar}
       >
        <CloseIcon />
       </button>
      </nav>
      <button 
      className="nav-btn"
      onClick={showNavBar}
      >
        <MenuIcon />
      </button>

    </section>
    </>
  )
}

export default Header