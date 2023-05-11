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
        const loginErrors = validateLogin(name, password)
        setErrors(loginErrors)
        if (Object.keys(loginErrors).length === 0) {
            const userLogin = userList.filter((el,k)=>{
                return el.name === name && el.password === password
            })
            if (userLogin.length === 0) {
                setErrors({
                    general: "Fel användarnamn eller lösenord."
                })
            } else {
                setIsLoggedIn(true)
                setCurrentAdmin(name)
            }
        }
    }

    const validateLogin = (name, password) => {
        let errors = {}
        if (!name.trim()) {
            errors.name = "Användarnamn är obligatoriskt."
        }
        if (!password.trim()) {
            errors.password = "Lösenord är obligatoriskt."
        }
        return errors
    }

  return (
    <section className="login-form">
            <h2>
                Logga in
            </h2>

            <form onSubmit={handleLogin}>
                
                <input placeholder="Användarnamn" type="text" value={name} onChange={(e) =>setName(e.target.value)}/>
                {errors.name && <div className="errormessage">{errors.name}</div>}
                
                

                <input placeholder="Lösenord" type="password" value={password} onChange={(e) =>setPassword(e.target.value)}/>
                {errors.password && <div className="errormessage">{errors.password}</div>}
                {errors.general && <div className="errormessage">{errors.general}</div>}
                

                <button>
                    Logga in
                </button> 

            </form> 
        </section>
  )
}