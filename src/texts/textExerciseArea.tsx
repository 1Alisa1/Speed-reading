interface TextExerciseAreaProps {
  arr: string[];
  hilightedWordPosition: number;
  finished: boolean;
}

function TextExerciseArea(props: TextExerciseAreaProps) {
  const leftPart = props.arr.slice(0, props.hilightedWordPosition).join(' ');
  const hilightedWord = ' ' + props.arr[props.hilightedWordPosition] + ' ';
  const rightPart = props.arr.slice(props.hilightedWordPosition + 1).join(' ');

  const main = (
    <div className="textarea-wrapper">
      <span className="textarea-text">{leftPart}</span>
      <span className="black">{hilightedWord}</span>
      <span className="textarea-text">{rightPart}</span>
    </div>
  );

  return <div className="text-center fs-5 mb-4">{props.finished ? 'Finish' : main}</div>;
}

export default TextExerciseArea;
