import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import DateButton from './DateButton';

const DateList = props => {
  const onDatePress = date => {
    props.onDatePress(date);
  };

  return (
    <ScrollView style={style.container} horizontal>
      {props.dates.map((date, i) => {
        const disabled = props.data[date.dayOfWeek] ? false : true;

        return (
          <DateButton
            date={date}
            key={i}
            onDatePress={onDatePress}
            disabled={disabled}
            selected={props.selectedDate === date.dayOfMonth}
          />
        );
      })}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
  },
});

export default DateList;
