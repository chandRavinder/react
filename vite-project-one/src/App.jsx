import { useState } from "react";
// import TestOne from './testOne';

function App() {
    
    let [counter, setCounter] = useState(15);

    //let counter = 15;

    const addValue = () => {
        // console.log("Value", Math.random())
        console.log(counter);
        // counter = counter + 1;
        // console.log(counter);
        setCounter(counter + 1);
    }

    const removeValue = () => {
        if ( counter > 0 ) {
            setCounter(counter - 1);
        } 
    }

    return (
        <>
            <h1>Hello Ravinder Chand | Using Vite and React</h1>
            <h2>Counter value: {counter}</h2>

            <button onClick={addValue}>Add value {counter}</button>

            <button onClick={removeValue}>Remove value {counter}</button>

            <br />
            {/* <TestOne /> */}
        </>
    )
}

export default App
