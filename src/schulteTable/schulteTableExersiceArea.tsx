import FindNumber from './findNum';
import Square from './square';

interface SchulteTableExersiceAreaProps {
  handleSquareClick: (squareValue: number) => void;
  numbers: number[][];
  value: number;
  validValue: boolean;
  finished: boolean;
}

function SchulteTableExersiceArea(props: SchulteTableExersiceAreaProps) {
  const createGrid = (numbers: number[][]) => {
    const result = [];
    const size = numbers.length;

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        result.push(
          <Square
            squareValue={numbers[i][j]}
            size={size}
            key={numbers[i][j]}
            handleSquareClick={props.handleSquareClick}
          />
        );
      }

      result.push(<div className="w-100" key={'linebreak' + i}></div>);
    }

    return result;
  };

  const main = (
    <div className="my-3">
      <FindNumber value={props.value} validValue={props.validValue} />
      <div className="d-flex justify-content-center">
        <div className="row square-container">
          <div className="red-point"></div>
          {createGrid(props.numbers)}
        </div>
      </div>
    </div>
  );

  return (
    <div className="test row justify-content-center mb-3">{props.finished ? 'Finish' : main}</div>
  );
}

export default SchulteTableExersiceArea;
