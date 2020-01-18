import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => (
  <View style={style.container}>
    <Text style={style.header}>Daily Deals</Text>
  </View>
);

const style = StyleSheet.create({
  container: {
    margin: 15,
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Header;
