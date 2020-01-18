import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {parse, format} from 'date-fns';

const DiscountButton = props => {
  const parsedTime = parse(props.deal.start_time, 'H:m', new Date());
  const {deal, selected} = props;

  const onDiscountPress = () => {
    props.onDiscountPress(deal);
  };

  return (
    <TouchableOpacity style={style.button(selected)} onPress={onDiscountPress}>
      <Text style={style.text(selected)}>
        {format(parsedTime, 'h:mmaaaaa')}m
      </Text>
      <Text style={style.text(selected, true)}>-{deal.discount}%</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: selected => ({
    alignItems: 'center',
    backgroundColor: selected ? '#ec3262' : '#fffffe',
    borderColor: selected ? '#ec3262' : '#898c89',
    borderRadius: 15,
    borderWidth: 1,
    marginLeft: 15,
    padding: 10,
    width: 90,
  }),
  text: (selected, isBig) => ({
    color: selected ? '#fefafd' : '#ec3363',
    fontSize: isBig ? 20 : 14,
    fontWeight: isBig ? 'bold' : 'normal',
  }),
});

export default DiscountButton;
