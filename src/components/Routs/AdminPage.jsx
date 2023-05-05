import { useRecoilState } from "recoil"
import { loginState } from "../Atoms"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { LogInForm } from "../Adminlogin"


const AdminUsersPageBtn = styled(Link)`
    text-decoration: none;
    color: white;
    background-color: #FF5400;
    padding: 0.5rem;
    border-radius: 0.2rem;
`

const AdminProductsPageBtn = styled(Link)`
    text-decoration: none;
    color: white;
    background-color: #FF5400;
    padding: 0.5rem;
    border-radius: 0.2rem;
`

const AdminPage = () => {
    const [IsloggedIn, setIsLoggedIn] = useRecoilState(loginState)

    return (
        <>
        {/* {IsloggedIn === false &&
            <LogInForm />
         : } */}
         <section className="admin-main">

                <h2>
                    Välkommen Admin
                </h2>

            <div className="heading-box">

                <AdminUsersPageBtn to="/users">
                    Lägg till fler Admins
                </AdminUsersPageBtn>
                
                <AdminProductsPageBtn>
                    Produkter
                </AdminProductsPageBtn>
                
            </div>

            <div className="form-box">
                
                <h3>
                    Lägg till en ny vara
                </h3>

                <form action="">
                    <input placeholder="Produktnamn" type="text" />
                    <input placeholder="Pris" type="text" />
                    <input placeholder="Bild URL" type="text" />
                    <input className="big-input" placeholder="Produktbeskrivning" type="text" />

                    <button className="add-product-btn">
                        Lägg till
                    </button>
                </form>

            </div>

         </section>
        </>
    )
}

export default AdminPage