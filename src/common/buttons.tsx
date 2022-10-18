interface ButtonsProps {
    onStartClick: () => void,
    onPauseClick: () => void,
    onResetClick: () => void
}

function Buttons (props:ButtonsProps) {
    return (
        <div className="btn-group" role="group" aria-label="butt">
            <button className="button-start btn btn-prim" onClick={props.onStartClick}>
                Start
            </button>
            <button className="button-pause btn btn-prim" onClick={props.onPauseClick}>
                Pause
            </button>
            <button className="button-reset btn btn-prim" onClick={props.onResetClick}>
                Reset
            </button>
        </div>
    );
}

export default Buttons;