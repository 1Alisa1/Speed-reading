import React from 'react';

interface SelectProps {
  data: { [key: string]: string };
  isValid: boolean;
  initialValue?: string;
  onChange: (value: string) => void;
}

const Select = (props: SelectProps) => {
  const values = Object.getOwnPropertyNames(props.data);
  if (!values.length) {
    throw Error('Empty data list');
  }

  const initialValue = props.initialValue ?? values[0];

  const [value, setValue] = React.useState(initialValue);

  return (
    <select
      className={'option form-select' + (props.isValid ? '' : ' invalid')}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        props.onChange(e.target.value);
      }}
    >
      {values.map((value) => (
        <option key={value} value={value}>
          {props.data[value]}
        </option>
      ))}
    </select>
  );
};

export default Select;
