import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import RequestScreen from '../screens/RequestScreen';
import DonateScreen from '../screens/DonateScreen';

export const AppTabNavigator = createBottomTabNavigator({
    Donate : {
    screen: DonateScreen,
   
  },
    Sponsorships: {
    screen: RequestScreen,
    
  }
});
