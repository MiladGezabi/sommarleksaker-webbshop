import { useRecoilState } from "recoil"
import { loginState, UsersList, CurrentAdmin } from "./Atoms"
import { useState } from "react"
import { validation } from "../utils/validation"

export const LogInForm = () => {
    const [IsloggedIn, setIsLoggedIn] = useRecoilState(loginState)
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [userList, setUserList] = useRecoilState(UsersList)
    const [currentAdmin, setCurrentAdmin] = useRecoilState(CurrentAdmin)
    const [errors, setErrors] = useState({})

    const handleLogin = (e) => {
        e.preventDefault()
        setErrors(validation(name, password))
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
                {errors.name && <p className="errormessage">{errors.name}</p>}
                

                <input placeholder="Lösenord" type="password" value={password} onChange={(e) =>setPassword(e.target.value)}/>
                {errors.password && <p className="errormessage">{errors.password}</p>}
                

                <button>
                    Logga in
                </button> 

            </form> 
        </section>
  )
}