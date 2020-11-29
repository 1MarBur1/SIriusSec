import React, {useState} from 'react';
import {TextInput} from 'react-native';

const Input = ({header, style}) => {
  const [text, setText] = useState('');
  return (
    <TextInput
      style={{height: 61, width: 307, marginTop: 29}}
      placeholder={header}
      onChangeText={(text) => setText(text)}
    />
  );
};

export default Input;
