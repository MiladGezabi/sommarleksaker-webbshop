import { useRecoilState } from "recoil"
import { NameState, PasswordState, UsersList } from "../Atoms"
import { useState } from "react"


const AdminUsers = () => {
    const [name, setName] = useRecoilState(NameState)
    const [password, setPassword] = useRecoilState(PasswordState)
    const [userList, setUserList] = useRecoilState(UsersList)
    const [validationErrors, setValidationErrors] = useState({
        name: '',
        password: '',
      });

    

    

    

    const handleSubmit = (e) => {
        e.preventDefault()
        if(valid()) {
            setUserList((list)=>[...list,loginInfo])
            setName("")
            setPassword("")
        }
    }

    const valid = () => {
        let isValid = true;
        const errors = {
          name: '',
          password: '',
        };
        if (name.trim() === '') {
          errors.name = 'Användarnamn är obligatoriskt';
          isValid = false;
        }
        if (password.length < 8) {
          errors.password = 'Lösenord måste vara minst 8 tecken';
          isValid = false;
        }
        setValidationErrors(errors);
    return isValid;
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
                <input
                placeholder="Användarnamn" type="text"  value={name} onChange={(e) =>setName(e.target.value)}/>
                {validationErrors.name && (
                <div className="errormessage">{validationErrors.name}</div>
                )}
                <input placeholder="Lösenord" type="password" value={password} onChange={(e) =>setPassword(e.target.value)}/>
                {validationErrors.password && (
                <div className="errormessage">{validationErrors.password}</div>
                )}
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
                    <li className="userlist" key={info.name}>
                        <p>
                            {info.name}  
                        </p>
                        <p>
                            {info.password}
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