import * as React from 'react';
// import { Text, View, StyleSheet } from 'react-native';
// import { Constants } from 'expo';
import HomeScreen from './components/home/HomeScreen'
import Learn from './components/learn/Learn'
import Train from './components/train/Train'
import BasicStrategy from './components/train/basic_strategy/BasicStrategy'
import SelfPacedCount from './components/train/self_paced_count/SelfPacedCount'
import SpeedCount from './components/train/speed_count/SpeedCount'
import TrueCount from './components/train/true_count/TrueCount'
import BetSizing from './components/train/bet_sizing/BetSizing'
import BankrollSizing from './components/train/bankroll_sizing/BankrollSizing'
// import CorrectPlays from './components/train/basic_strategy/CorrectPlays'

// // or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';

import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Learn: {screen: Learn},
  Train: {screen: Train},
  BasicStrategy: {screen: BasicStrategy},
  SelfPacedCount: {screen: SelfPacedCount},
  SpeedCount: {screen: SpeedCount},
  TrueCount: {screen: TrueCount},
  BetSizing: {screen: BetSizing},
  BankrollSizing: {screen: BankrollSizing},
  //CorrectPlays: {screen: CorrectPlays},
});

const App = createAppContainer(MainNavigator);

export default App;


