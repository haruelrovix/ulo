import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const DateButton = props => {
  const {date, disabled, selected} = props;

  const onDatePress = () => {
    props.onDatePress(date);
  };

  const renderText = (text, isBig) => (
    <Text style={[style.text(disabled, selected), style.size(isBig)]}>
      {text}
    </Text>
  );

  return (
    <TouchableOpacity
      onPress={onDatePress}
      style={style.button(disabled, selected)}
      disabled={props.disabled}>
      {renderText(date.day, false)}
      {renderText(date.dayOfMonth, true)}
      {renderText(date.month, false)}
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: (disabled, selected) => ({
    alignItems: 'center',
    backgroundColor: selected ? '#ec3365' : '#f9fcf9',
    borderColor: disabled ? '#f9fcf9' : '#ec3363',
    borderRadius: 15,
    borderWidth: 1,
    marginLeft: 15,
    padding: 10,
    width: 60,
  }),
  text: (disabled, selected) => ({
    color: disabled ? '#818481' : selected ? '#fefafd' : '#ec3363',
  }),
  size: isBig => ({
    fontSize: isBig ? 20 : 12,
  }),
});

export default DateButton;
