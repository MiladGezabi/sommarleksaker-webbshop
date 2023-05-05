import { useRecoilState } from "recoil"
import { loginState, UsersList } from "./Atoms"
import { useState } from "react"

export const LogInForm = () => {
    const [IsloggedIn, setIsLoggedIn] = useRecoilState(loginState)
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [userList, setUserList] = useRecoilState(UsersList)

    const handleLogin = (e) => {
        e.preventDefault()
        if(name === userList.name && password === userList.password){
            setIsLoggedIn(true)
        } else {
            console.log("fel har inträffat")
        }
    }
  return (
    <section className="login-form">
            <h2>
                Logga in
            </h2>

            <form onSubmit={handleLogin}>
                
                <input placeholder="Användarnamn" type="text" value={name} onChange={(e) =>setName(e.target.value)}/>

                <input placeholder="Lösenord" type="text" value={password} onChange={(e) =>setPassword(e.target.value)}/>

                <button>
                    Logga in
                </button> 

            </form> 
        </section>
  )
}