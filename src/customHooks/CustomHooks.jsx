import React from "react";

function useInput(defaultValue=''){
    const [inputValue, setInputValue] = React.useState(defaultValue);
    const handleValueChange = (event) => {setInputValue(event.target.value);}
    
    return [inputValue, handleValueChange];
}

export default useInput;