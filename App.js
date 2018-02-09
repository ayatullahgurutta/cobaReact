import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';

const Navigate = StackNavigator({
  Signup: { screen: SignupScreen },
  Login: {screen: LoginScreen}
});

export default Navigate;