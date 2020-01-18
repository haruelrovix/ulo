import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const DateButton = props => {
  const disabled = props.disabled ? style.disabled : undefined;
  const {date} = props;

  const onDatePress = () => {
    props.onDatePress(date);
  };

  return (
    <TouchableOpacity
      onPress={onDatePress}
      style={[style.button, disabled]}
      disabled={props.disabled}>
      <Text>{date.day}</Text>
      <Text>{date.dayOfMonth}</Text>
      <Text>{date.month}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: {
    borderColor: 'green',
    borderWidth: 1,
    margin: 2,
  },
  disabled: {
    backgroundColor: 'grey',
  },
});

export default DateButton;
