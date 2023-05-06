import { useRecoilState } from "recoil"
import { loginState, UsersList, CurrentAdmin } from "./Atoms"
import { useState } from "react"

export const LogInForm = () => {
    const [IsloggedIn, setIsLoggedIn] = useRecoilState(loginState)
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [userList, setUserList] = useRecoilState(UsersList)
    const [currentAdmin, setCurrentAdmin] = useRecoilState(CurrentAdmin)

    const handleLogin = (e) => {
        e.preventDefault()
        const userLogin = userList.filter((el,k)=>{
            return el.name === name && el.password === password
        })
        if(userLogin.length === 0){
            console.log("fel användarnamn eller lösenord");
        } else {
            setIsLoggedIn(true)
            setCurrentAdmin(name)
        }
    }
  return (
    <section className="login-form">
            <h2>
                Logga in
            </h2>

            <form onSubmit={handleLogin}>
                
                <input placeholder="Användarnamn" type="text" value={name} onChange={(e) =>setName(e.target.value)}/>
                

                <input placeholder="Lösenord" type="password" value={password} onChange={(e) =>setPassword(e.target.value)}/>
                

                <button>
                    Logga in
                </button> 

            </form> 
        </section>
  )
}