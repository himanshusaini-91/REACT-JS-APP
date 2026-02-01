import "../App.css";
import { useState } from "react";
export default function Counter() {
    const [count, setCount] = useState(0)
    const [counToSet, setCountToSet] = useState(0)
    // const decrementHandler = () => {
    //     setCount(count - 1)
    // }
    // const resetHandler = () => {
    //     setCount(0)
    // }
    return (
        <>
            <div>
                <h1>Counter is {count}</h1>
                <button className="button" onClick={() => setCount(count + 1)} style={{ margin: "0 5px" }}>Increment</button>
                <button className="button" onClick={() => setCount(count - 1)} style={{ margin: "0 5px" }}>Decrement</button>
                <button className="button" onClick={() => setCount(0)} style={{ margin: "0 5px" }}>Reset</button>

            </div>
            <div style={{ margin: "10px 0" }}>
                <input type="text"
                    style={{
                        width: "100px",
                        border: "1px solid white",
                        padding: "0.6 rem 1.2rem",
                        margin: "0 5px"
                    }}
                    onChange={(event) => { setCountToSet(Number(event.target.value)); }}
                    value={counToSet} />
                <button className="button" style={{ margin: "0 5px" }} onClick={() => setCount(counToSet)}>Set Value to {counToSet}</button>
            </div>
        </>

    );
}