import { useState, useEffect } from 'react';
import Buttons from '../common/buttons';
import CountDown from '../common/countDown';
import InitialTextArea from '../common/initialTextArea';
import NumbersExerciseArea from './numbersExerciseArea';

enum ShowStatus {
    InitialText = 1,
    CountDown = 2,
    ExerciseArea = 3
}

function Numbers() {
    const numberGenerator = (min: number, max: number) => {
        return Math.floor(min + (Math.random() * (max - min)));
    };

    const generateRandomNumber = (difficultyLevel: number) => {
        return numberGenerator(
            10 * 10 ** difficultyLevel,
            100 * 10 ** difficultyLevel
        )
    };

    const [isPlaying, setIsPlaying] = useState(false);
    const [counter, setCounter] = useState(60);
    const [showStatus, setShowStatus] = useState(ShowStatus.InitialText);
    const [value, setValue] = useState(generateRandomNumber(1));
    const [inputValue, setInputValue] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [uncorrectAnswer, setUncorrectAnswer] = useState(0);
    const [difficultyLevel, setDifficultyLevel] = useState(1);
    const [finished, setFinished] = useState(false);
    const InitialText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qu';

    useEffect(() => {
        if (correctAnswer === 3) {
            setDifficultyLevel(prev => prev < 4 ? prev + 1 : prev);
            setCorrectAnswer(0);
            setUncorrectAnswer(0);
        } else if (uncorrectAnswer === 3) {
            setDifficultyLevel(prev => prev > 1 ? prev - 1 : prev);
            setCorrectAnswer(0);
            setUncorrectAnswer(0);
        }
    }, [correctAnswer, uncorrectAnswer]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = +e.target.value;
        setInputValue(value);
    };

    function handleClick () {
        if (!isPlaying) {
            return;
        }

        if (value === inputValue) {
            setCorrectAnswer(prev => prev + 1);
        } else {
            setUncorrectAnswer(prev => prev + 1);
        }
        
        setInputValue(0);
        setValue(generateRandomNumber(difficultyLevel));
    };

    useEffect(() => {
        let timerID: any;
        if (isPlaying) {
            timerID = setTimeout(() => {
                if (counter === 0) {
                    clearTimeout(timerID);
                    setIsPlaying(false);
                    setFinished(true);
                }

                setCounter(counter - 1);
            }, 1000);
        }

        return () => clearTimeout(timerID);

    }, [isPlaying, counter])

    const onStartClick = () => {
        setShowStatus(ShowStatus.CountDown);
        
    };

    const onPauseClick = () => {
        setIsPlaying(false);
        setShowStatus(ShowStatus.InitialText);
    };

    const onResetClick = () => {
        setIsPlaying(false);
        setShowStatus(ShowStatus.InitialText);
        setCounter(60);
    };

    const handleCountDownFinished = () => {
        setIsPlaying(true);
        setShowStatus(ShowStatus.ExerciseArea);

        if (finished) {
            setFinished(false);
            setCounter(60);
        }
    };

    return (
        <div className="container-xl">
            <div className='timer'>
                {isPlaying ? counter : ''}
            </div>

            {(() => {
                switch (showStatus) {
                    case ShowStatus.InitialText: {
                        return <InitialTextArea
                            initialText={InitialText} />;
                    }
                    case ShowStatus.CountDown: {
                        return <CountDown
                            handleCountDownFinished={handleCountDownFinished}
                            value={3} />;
                    }
                    case ShowStatus.ExerciseArea: {
                        return <NumbersExerciseArea
                            value={value}
                            finished={finished}
                            handleClick={handleClick}
                            handleInputChange={handleInputChange} />;
                    }
                }
            })()}

            <Buttons
                onStartClick={onStartClick}
                onPauseClick={onPauseClick}
                onResetClick={onResetClick}
            />
        </div>
    );
}

export default Numbers;