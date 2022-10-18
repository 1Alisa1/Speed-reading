import React from 'react';

interface CountDownProps {
    handleCountDownFinished: () => void,
    value: number,
    text?: string
}

function CountDown(props:CountDownProps) {
    const [counter, setCounter] = React.useState(props.value);

    React.useEffect(() => {
        if(counter > 0) {
            setTimeout(() => setCounter(counter - 1), 1000);
        } else {
            props.handleCountDownFinished();
        }
    }, [counter]);
    
    return (
        <div className="count-down text-center">
          <div>{props.text ?? ''}{counter}</div>
        </div>
    );
}

export default CountDown;