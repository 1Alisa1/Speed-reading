import SchulteTableExersiceArea from './schulteTableExersiceArea';
import { useState, useEffect } from 'react';
import Buttons from '../common/buttons';
import CountDown from '../common/countDown';
import InitialTextArea from '../common/initialTextArea';
import Settings from './settings';

enum ShowStatus {
  InitialText = 1,
  CountDown = 2,
  ExerciseArea = 3,
}

function SchulteTable() {
  const shuffle = (arr: number[]) => {
    let j, temp;

    const result = arr.slice();

    for (let i = result.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = result[j];
      result[j] = result[i];
      result[i] = temp;
    }

    return result;
  };

  const initialText =
    'At the very beginning of the exercise, you need to fix your eyes in the center of the table. Without looking away from the center, using only peripheral vision, you need to find all the numbers in ascending order as quickly as possible';

  const createMatrix = (size: number) => {
    let numbers: number[] = [];

    for (let i = 0; i < size ** 2; i++) {
      numbers.push(i + 1);
    }

    numbers = shuffle(numbers);

    const result: number[][] = [];

    for (let i = 0; i < size; i++) {
      result[i] = [];
      for (let j = 0; j < size; j++) {
        result[i][j] = numbers[i * size + j];
      }
    }

    return result;
  };

  const [value, setValue] = useState(1);
  const [matrix, setMatrix] = useState<number[][]>([]);
  const [validValue, setValidVallue] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [counter, setCounter] = useState(60);
  const [showStatus, setShowStatus] = useState(ShowStatus.InitialText);
  const [finished, setFinished] = useState(false);
  const [isDifficultyLevelValid, setIsDifficultyLevelValid] = useState(true);
  const [difficultyLevelValue, setDifficultyLevelValue] = useState(0);

  const size = difficultyLevelValue + 2;

  useEffect(() => {
    setIsDifficultyLevelValid(difficultyLevelValue !== 0);
  }, [difficultyLevelValue]);

  useEffect(() => {
    let timerID: NodeJS.Timeout;
    if (isPlaying) {
      timerID = setTimeout(() => {
        if (counter === 0) {
          clearTimeout(timerID);
          setIsPlaying(false);
          setFinished(true);
          setMatrix([]);
        }

        setCounter(counter - 1);
      }, 1000);
    }

    return () => clearTimeout(timerID);
  }, [isPlaying, counter]);

  const onStartClick = () => {
    if (difficultyLevelValue === 0) {
      setShowStatus(ShowStatus.InitialText);
    } else {
      setShowStatus(ShowStatus.CountDown);
    }
  };

  const onPauseClick = () => {
    setIsPlaying(false);
    setShowStatus(ShowStatus.InitialText);
  };

  const onResetClick = () => {
    setIsPlaying(false);
    setShowStatus(ShowStatus.InitialText);
    setCounter(60);
    setMatrix([]);
    setValue(1);
  };

  const handleCountDownFinished = () => {
    if (!matrix.length) {
      setMatrix(createMatrix(size));
    }

    setIsPlaying(true);
    setShowStatus(ShowStatus.ExerciseArea);

    if (finished) {
      setFinished(false);
      setCounter(60);
      setValue(1);
    }
  };

  function handleSquareClick(squareValue: number) {
    if (value === squareValue) {
      setValidVallue(true);
      setValue(value + 1);
    } else {
      setValidVallue(false);
    }

    if (value === size ** 2) {
      setValue(1);
      setMatrix(createMatrix(size));
    }
  }

  return (
    <div className="container-xl">
      <Settings
        onChangeDifficultyLevel={setDifficultyLevelValue}
        isDifficultyLevelValid={isDifficultyLevelValid}
      />

      <div className="timer">{isPlaying ? counter : ''}</div>

      {(() => {
        switch (showStatus) {
          case ShowStatus.InitialText: {
            return <InitialTextArea initialText={initialText} />;
          }
          case ShowStatus.CountDown: {
            return <CountDown handleCountDownFinished={handleCountDownFinished} value={3} />;
          }
          case ShowStatus.ExerciseArea: {
            return (
              <SchulteTableExersiceArea
                handleSquareClick={handleSquareClick}
                numbers={matrix}
                value={value}
                validValue={validValue}
                finished={finished}
              />
            );
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

export default SchulteTable;
