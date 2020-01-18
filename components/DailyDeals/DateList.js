import React from 'react';
import {StyleSheet, View} from 'react-native';

import DateButton from './DateButton';

const DateList = props => {
  const onDatePress = date => {
    props.onDatePress(date);
  };

  return (
    <View style={style.container}>
      {props.dates.map((date, i) => {
        const disabled = props.data[date.dayOfWeek] ? false : true;
        return (
          <DateButton
            date={date}
            key={i}
            onDatePress={onDatePress}
            disabled={disabled}
          />
        );
      })}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default DateList;
