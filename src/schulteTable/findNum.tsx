interface FindNumberProps {
  value: number;
  validValue: boolean;
}

function FindNumber(props: FindNumberProps) {
  return (
    <div className="mb-3 text-center fs-5">
      Find:{' '}
      <span className={props.validValue ? '' : 'red'}>
        <span className="fs-4">{props.value}</span>
      </span>
    </div>
  );
}

export default FindNumber;
