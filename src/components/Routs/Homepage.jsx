import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledLinkBtn = styled(Link)`
 text-decoration: none;
 background-color: #FF5400;
 padding: 0.5rem 1.5rem;
 font-family: 'Glory', sans-serif;
 font-size: 1.5rem;
 font-weight: 600;
 border-radius: 0.2rem;
 color: white;
`

const HomePage = () => {
  
  

  return (
    <section className="homepage">
      <h2>
        Gör <br />
        sommaren <br />
        roligare
      </h2>
      <StyledLinkBtn to="/products">
        Shoppa
      </StyledLinkBtn>


    </section>
  )
}

export default HomePage