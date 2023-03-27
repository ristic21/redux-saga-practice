import React from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/userForm/selectors";

const UserTextComponent = () => {
    const user = useSelector(userSelector);
    return <div>
        Username: {user.username}
        Email: {user.email}
    </div>
}

export default UserTextComponent