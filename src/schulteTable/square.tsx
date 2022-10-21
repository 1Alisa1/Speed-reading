interface SquareProps {
    size: number,
    squareValue: number,
    handleSquareClick: (squareValue: number) => void,

}

function Square (props:SquareProps) {
    return (
        <div className="col square" style={{paddingBottom: `calc(100% / ${props.size})`}}>
            <div className="square-inner" onClick={() => props.handleSquareClick(props.squareValue)}>
                {props.squareValue}
            </div>
        </div>
    );
}

export default Square;