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
    'It is necessary to read the selected text, following the highlighted area with your eyes. Try to follow the highlight cloud as close as possible, even if you did not have time to read something';

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
  }, [isPlaying, hilightedWordPosition, speedValue]);

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
