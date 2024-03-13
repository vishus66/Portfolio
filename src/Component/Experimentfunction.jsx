import React, { useState } from 'react';

export default function ExperimentFunction() {
    // Define state for button visibility
    const [btnVisible, setBtnVisible] = useState(true);

    // Function to handle button click and change state
    function changeData() {
        setBtnVisible(false); // Set button visibility to false
    }

    return (
        <>
            {btnVisible && <button onClick={changeData}>Click me!</button>}
            
        </>
    );
}
