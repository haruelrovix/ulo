import React from 'react';
import { View } from 'react-native';

import HeaderComponent from './Header';
import DateListComponent from './DateList';
import DiscountComponent from './Discount';

const DailyDeals = () => {
  return (
    <View>
      <HeaderComponent />
      <DateListComponent />
      <DiscountComponent />
    </View>
  );
};

export default DailyDeals;
