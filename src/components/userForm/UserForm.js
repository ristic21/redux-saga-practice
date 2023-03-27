import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../store/userForm/selectors";
import { email } from "../../store/userForm/slice";
import { username } from "../../store/userForm/slice";


 const UserForm = () => {  

     const user = useSelector(userSelector);

     console.log('user iz reduxa: ', user
     )
    const dispatch = useDispatch();
   
    const [inputMail, setInputMail] = useState('user@email.com')
    const [inputName, setInputName] = useState('username')

    const handleGetUser = () => {
        dispatch(email(inputMail));
        dispatch(username(inputName));
    }

    return <div>
            <div>
                <p>Username:{user.username} Email:{user.email}</p>
                
                <label htmlFor="email">Email</label>
                <input name="email" onChange={(e) => setInputMail(e.target.value)} value={inputMail}></input>
                <label htmlFor="name">Name</label>
                <input name="name" onChange={(e) => setInputName(e.target.value)} value={inputName}></input>
                <button onClick={handleGetUser}>Set another user</button>
                
            </div>
        </div>
    
}

export default UserForm;