import React, {useState} from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value = 10 }) => {

    const [ counter, setCounter ] = useState(value);
    
    const handleAdd = (e) => {
        setCounter(counter +1);
    };

    const resetCounter = () => {
        setCounter(value);
    }

    const handleSubs = () => {
        setCounter(counter - 1);
    }

    return (
        <>
        <h1>Counter App</h1>
        <h2>{ counter }</h2>

        <button onClick={ handleAdd }>+1</button>
        <button onClick={ resetCounter }>Reset</button>
        <button onClick={ handleSubs }>-1</button>
        
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;