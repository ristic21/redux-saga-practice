import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {counterSelector} from '../../store/counter/selectors'
import { increment } from "../../store/counter/slice";
import { decrement } from "../../store/counter/slice";
import { increaseBy } from "../../store/counter/slice";

 const Counter = () => {
    const [inputVal, setInputVal] = useState(0)

    const value = useSelector(counterSelector);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    }
    const handleDecrement = () => {
        dispatch(decrement());
    }
    const handleIncreaseBy = () => {
        dispatch(increaseBy(Number(inputVal)));
    }

    return <div>
            <div>
                <p>{value}</p>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
                
                    <label htmlFor="increaseBy">Increase by</label>
                <input name="increaseBy" onChange={(e) => setInputVal(e.target.value)} value={inputVal}></input>
                <button onClick={handleIncreaseBy}>Increase</button>
                
            </div>
        </div>
    
}

export default Counter;