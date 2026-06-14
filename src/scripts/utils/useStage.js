export function useState(initialValues, onChange = () => { }) { 
    let value = initialValues;
    function getState() { 
        return value;
    }
    function setState(newValue) { 
        value = newValue;
        onChange(value);
    }
    return [getState, setState];
}