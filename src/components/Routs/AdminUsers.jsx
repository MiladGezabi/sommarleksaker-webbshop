import { useRecoilState } from "recoil"
import { NameState, PasswordState, UsersList } from "../Atoms"
import { createGlobalStyle } from "styled-components"

const AdminUsers = () => {
    const [name, setName] = useRecoilState(NameState)
    const [password, setPassword] = useRecoilState(PasswordState)
    const [userList, setUserList] = useRecoilState(UsersList)

    // console.log(userList)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, password)
        const loginInfo = {name, password}
        if(name&&password){
            setUserList((list)=>[...list,loginInfo])
            setName("")
            setPassword("")
        }
    }

    const handleDelete = (name) => {
        setUserList(userList.filter((info) => info.name !== name));
    };

    return (
        <section className="admin-users-container">
            <h2>
                Lägg till fler Admins
            </h2>

            <form onSubmit={handleSubmit}>
                <input placeholder="Användarnamn" type="text"  value={name} onChange={(e) =>setName(e.target.value)}/>
                <input placeholder="Lösenord" type="text" value={password} onChange={(e) =>setPassword(e.target.value)}/>
                <button>
                    Lägg till
                </button>
            </form>

            <div className="admin-list-box">
                <h3>
                    Befintliga Admins
                </h3>
                <ul>
                {
                    userList.map((info)=>
                    <li key={info.name}>
                        <p>
                            {info.name}  {info.password}
                        </p>
                        <button className="delete-user" onClick={()=>handleDelete(info.name)}>Ta bort</button>
                    </li>)
                }
                </ul>
            </div>
        </section>
    )
}

export default AdminUsers