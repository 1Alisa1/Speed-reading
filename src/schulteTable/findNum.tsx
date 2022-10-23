interface FindNumberProps {
  value: number;
  validValue: boolean;
}

function FindNumber(props: FindNumberProps) {
  return (
    <div className="mb-3 text-center">
      Find: <span className={props.validValue ? '' : 'red'}>{props.value}</span>
    </div>
  );
}

export default FindNumber;
