import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import DiscountButton from './DiscountButton';

const Discount = props => {
  const onDiscountPress = deal => {
    props.onDiscountPress(deal);
  };
  const {discount} = props;

  const renderItem = ({item}) => (
    <DiscountButton
      selected={discount.selectedId === item.id}
      deal={item}
      onDiscountPress={onDiscountPress}
    />
  );

  return (
    <View style={style.container}>
      <FlatList
        horizontal
        data={discount.deals}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#f7faf7',
    flexDirection: 'row',
    paddingVertical: 20,
  },
});

export default Discount;
