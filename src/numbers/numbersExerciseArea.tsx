import { useState, useEffect } from 'react';

interface NumbersAreaProps {
  value: number;
  finished: boolean;
  handleClick: () => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function NumbersExerciseArea(props: NumbersAreaProps) {
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    setShowInput(false);

    const timerID = setTimeout(() => setShowInput(true), 1000);

    return () => clearTimeout(timerID);
  }, [props.value]);

  const input = (
    <input className="form-control input-block" type="text" onChange={props.handleInputChange} />
  );

  const main = (
    <div className="numbers-block  col-6">
      <div className="input-block my-3">{showInput ? input : props.value}</div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-prim my-3" onClick={props.handleClick}>
          Oк
        </button>
      </div>
    </div>
  );

  return (
    <div className="test row justify-content-center fs-5 mb-3">
      {props.finished ? 'Finish' : main}
    </div>
  );
}

export default NumbersExerciseArea;
