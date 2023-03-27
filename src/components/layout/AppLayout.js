import React, { useState } from "react";
import { useSelector } from "react-redux";
import counterSelector from "../../store/counter/selectors";
import Counter from "../counter/Counter";
import TextComponent from "../counter/TextComponent";
import UserTextComponent from "../userForm/TextComponent";
import UserForm from "../userForm/UserForm";

function AppLayout() {
    

    return <div>
        <Counter/>
        <hr/>
        <TextComponent />
        <hr/>
        <UserTextComponent/>
        <br/>
        <UserForm/>
    </div>
}

export default AppLayout;