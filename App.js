/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import DailyDeals from './containers/DailyDeals';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <DailyDeals />
      </SafeAreaView>
    </>
  );
};

export default App;
