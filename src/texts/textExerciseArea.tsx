import Data from '../texts/data';


interface TextExerciseAreaProps {
    valueText: number,
    hilightedWordPosition: number,
}

function TextExerciseArea (props:TextExerciseAreaProps) {

    const getText = (textNum:number) => {
        return Data.texts[textNum];
    }

    const arr = getText(props.valueText).split(' ');
        const leftPart = arr.slice(0, props.hilightedWordPosition).join(' ');
        const hilightedWord = ' ' + arr[props.hilightedWordPosition] + ' ';
        const rightPart = arr.slice(props.hilightedWordPosition + 1).join(' ');
    return (
        <div className="textarea-wrapper">
            <span className="textarea-text">{leftPart}</span>
            <span className="black">{hilightedWord}</span>
            <span className="textarea-text">{rightPart}</span>
        </div>
    );
}

export default TextExerciseArea;