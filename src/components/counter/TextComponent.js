import React from "react";
import { useSelector } from "react-redux";
import { counterSelector } from "../../store/counter/selectors";

const TextComponent = () => {
    const value = useSelector(counterSelector);
    return <div>
        Result: {value}
    </div>
}

export default TextComponent