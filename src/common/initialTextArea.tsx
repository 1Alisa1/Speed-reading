import React from 'react';

interface AreaProps {
  initialText: string;
}

function InitialTextArea(props: AreaProps) {
  return (
    <div className="textarea-wrapper col-8">
      <h5>{props.initialText}</h5>
    </div>
  );
}

export default InitialTextArea;
