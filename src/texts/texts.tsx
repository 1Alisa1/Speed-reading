import React, { useState, useEffect } from 'react';
import Buttons from '../common/buttons';
import Settings from '../texts/settings';
import CountDown from '../common/countDown';
import TextExerciseArea from '../texts/textExerciseArea';
import InitialTextArea from '../common/initialTextArea';
import Data from './data';

enum ShowStatus {
  InitialText = 1,
  CountDown = 2,
  ExerciseArea = 3,
}

const Texts: React.FC = () => {
  const getText = (textNum: number) => {
    return Data.texts[textNum];
  };

  const initialText =
    'It is necessary to read the selected text, following the highlighted area with your eyes. Try to follow the highlight cloud as close as possible, even if you did not have time to read something';

  const splitTextToWords = (text: string) => {
    return text.match(/((["(]*)(\w+[\-'])?(\w+)(\s*)([.,:;\-!?'")])*(\s*))/g) as string[];
  };

  const [textValue, setTextValue] = useState(0);
  const [speedValue, setSpeedValue] = useState(0);
  const [isTextValid, setIsTextValid] = useState(true);
  const [isSpeedValid, setIsSpeedValid] = useState(true);
  const [showStatus, setShowStatus] = useState(ShowStatus.InitialText);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hilightedWordPosition, setHilightedWordPosition] = useState(0);
  const [visibleSettings, setVisibleSettings] = useState(true);
  const [finished, setFinished] = useState(false);
  const [arr, setArr] = useState(() => {
    return splitTextToWords(getText(textValue));
  });

  useEffect(() => {
    setIsTextValid(textValue !== 0);
    setIsSpeedValid(speedValue !== 0);
  }, [textValue, speedValue]);

  useEffect(() => {
    let timerId: NodeJS.Timeout;
    if (isPlaying) {
      timerId = setTimeout(() => {
        setHilightedWordPosition((prev) => prev + 1);

        if (hilightedWordPosition === arr.length - 1) {
          setFinished(true);
        }
      }, 60000 / speedValue);
    }

    return () => clearTimeout(timerId);
  }, [isPlaying, hilightedWordPosition, speedValue, arr.length]);

  const handleTextValueChanged = (textValue: number) => {
    setTextValue(textValue);
    setArr(splitTextToWords(getText(textValue - 1)));
  };

  const onStartClick = () => {
    if (textValue === 0 || speedValue === 0) {
      setShowStatus(ShowStatus.InitialText);
    } else {
      setShowStatus(ShowStatus.CountDown);
    }
  };

  const onPauseClick = () => {
    setIsPlaying(false);
    setVisibleSettings(false);
  };

  const onResetClick = () => {
    setIsPlaying(false);
    setShowStatus(ShowStatus.InitialText);
    setHilightedWordPosition(0);
    setVisibleSettings(true);
    setTextValue(0);
    setSpeedValue(0);
  };

  const handleCoutnDownFinished = () => {
    setShowStatus(ShowStatus.ExerciseArea);
    setIsPlaying(true);
    setVisibleSettings(false);

    if (finished) {
      setFinished(false);
      setHilightedWordPosition(0);
    }
  };

  const settings = (
    <Settings
      onChangeText={handleTextValueChanged}
      onChangeSpeed={setSpeedValue}
      isTextValid={isTextValid}
      isSpeedValid={isSpeedValid}
    />
  );

  return (
    <div className="container-xl">
      {visibleSettings ? settings : ''}

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
                arr={arr}
                hilightedWordPosition={hilightedWordPosition}
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
};

export default Texts;
