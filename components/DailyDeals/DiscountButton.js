import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {parse, format} from 'date-fns';

const DiscountButton = props => {
  const parsedTime = parse(props.deal.start_time, 'H:m', new Date());
  const selected = props.selected ? style.selected : undefined;
  const {deal} = props;

  const onDiscountPress = () => {
    props.onDiscountPress(deal);
  };

  return (
    <TouchableOpacity
      style={[style.button, selected]}
      onPress={onDiscountPress}>
      <Text>{format(parsedTime, 'h:mmaaaaa')}m</Text>
      <Text>-{deal.discount}%</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: {
    borderColor: 'pink',
    borderWidth: 1,
    margin: 2,
  },
  selected: {
    backgroundColor: 'pink',
  },
});

export default DiscountButton;
