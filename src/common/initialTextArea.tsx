import React from 'react';

interface AreaProps {
  initialText: string;
}

function InitialTextArea(props: AreaProps) {
  return (
    <div className="textarea-wrapper">
      <h5>{props.initialText}</h5>
    </div>
  );
}

export default InitialTextArea;
