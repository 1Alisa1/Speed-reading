import { useState, useEffect } from 'react';
import Buttons from '../common/buttons';
import Settings from '../texts/settings';
import CountDown from '../common/countDown';
import TextExerciseArea from '../texts/textExerciseArea';
import InitialTextArea from '../common/initialTextArea';

enum ShowStatus {
  InitialText = 1,
  CountDown = 2,
  ExerciseArea = 3,
}

function Texts() {
  const initialText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

  const [textValue, setTextValue] = useState(0);
  const [speedValue, setSpeedValue] = useState(0);
  const [isTextValid, setIsTextValid] = useState(true);
  const [isSpeedValid, setIsSpeedValid] = useState(true);
  const [showStatus, setShowStatus] = useState(ShowStatus.InitialText);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hilightedWordPosition, setHilightedWordPosition] = useState(0);

  useEffect(() => {
    setIsTextValid(textValue !== 0);
    setIsSpeedValid(speedValue !== 0);
  }, [textValue, speedValue]);

  useEffect(() => {
    let timerId: NodeJS.Timeout;
    if (isPlaying) {
      timerId = setTimeout(() => {
        setHilightedWordPosition((prev) => prev + 1);
      }, 60000 / speedValue);
    }

    return () => clearTimeout(timerId);
  }, [isPlaying, hilightedWordPosition]);

  const onStartClick = () => {
    if (textValue === 0 || speedValue === 0) {
      setShowStatus(ShowStatus.InitialText);
    } else {
      setShowStatus(ShowStatus.CountDown);
    }
  };

  const onPauseClick = () => {
    setIsPlaying(false);
  };

  const onResetClick = () => {
    setIsPlaying(false);
    setShowStatus(ShowStatus.InitialText);
    setHilightedWordPosition(0);
  };

  const handleCoutnDownFinished = () => {
    setShowStatus(ShowStatus.ExerciseArea);
    setIsPlaying(true);
  };

  return (
    <div className="container-xl">
      <Settings
        onChangeText={setTextValue}
        onChangeSpeed={setSpeedValue}
        isTextValid={isTextValid}
        isSpeedValid={isSpeedValid}
      />

      {(() => {
        switch (showStatus) {
          case ShowStatus.InitialText: {
            return <InitialTextArea initialText={initialText} />;
          }
          case ShowStatus.CountDown: {
            return <CountDown handleCountDownFinished={handleCoutnDownFinished} value={3} />;
          }
          case ShowStatus.ExerciseArea: {
            return (
              <TextExerciseArea
                valueText={textValue}
                hilightedWordPosition={hilightedWordPosition}
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

export default Texts;
