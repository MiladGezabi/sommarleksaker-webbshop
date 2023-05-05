import { useRecoilState } from "recoil"
import { loginState } from "../Atoms"
import styled from "styled-components"
import { Link, Outlet } from "react-router-dom"
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
        {IsloggedIn === false && (
        <LogInForm />
        )} 

        {IsloggedIn === true && (
        <section className="admin-page">
            <h2>Välkommen Admin</h2>
        <   div className="heading-box">
                <AdminUsersPageBtn to="/admin/users">
                Lägg till fler Admins
                </AdminUsersPageBtn>
                <AdminProductsPageBtn to="/admin/products">
                Produkter
                </AdminProductsPageBtn>
            </div>
        </section>
        )}


         
         <Outlet />
         
        </>
    )
}

export default AdminPage