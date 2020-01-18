import React, {Component} from 'react';
import {View} from 'react-native';
import {add, format} from 'date-fns';

import DateListComponent from '../../components/DailyDeals/DateList';
import DiscountComponent from '../../components/DailyDeals/Discount';
import HeaderComponent from '../../components/DailyDeals/Header';

import rawData from '../../ulo.json';
import getSortedData from '../../lib/getSortedData';

class DailyDeals extends Component {
  state = {
    data: getSortedData(rawData),
    dates: [],
    selectedDeal: {deals: []},
  };

  componentDidMount() {
    let dates = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const date = add(today, {days: i});
      dates[i] = {
        day: format(date, 'E'),
        dayOfMonth: format(date, 'd'),
        dayOfWeek: format(date, 'i'),
        month: format(date, 'MMM'),
      };
    }

    // https://github.com/airbnb/javascript/issues/684
    this.setState({dates}); // eslint-disable-line react/no-did-mount-set-state
  }

  onDatePress = date => {
    const selectedDeal = this.state.data[date.dayOfWeek];
    selectedDeal.selectedId = (
      selectedDeal.deals.find(
        deal => deal.discount === selectedDeal.maxDiscount,
      ) || {}
    ).id;
    this.setState({selectedDeal});
  };

  onDiscountPress = deal => {
    const {selectedDeal} = this.state;
    selectedDeal.selectedId = deal.id;
    this.setState({selectedDeal});
  };

  render() {
    const {data, dates, selectedDeal} = this.state;

    return (
      <View>
        <HeaderComponent />
        <DateListComponent
          data={data}
          dates={dates}
          onDatePress={this.onDatePress}
        />
        <DiscountComponent
          discount={selectedDeal}
          onDiscountPress={this.onDiscountPress}
        />
      </View>
    );
  }
}

export default DailyDeals;
