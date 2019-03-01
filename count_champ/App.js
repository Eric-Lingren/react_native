import * as React from 'react';
import HomeScreen from './components/home/HomeScreen'
import Learn from './components/learn/Learn'
import Train from './components/train/Train'
import BasicStrategy from './components/train/basic_strategy/BasicStrategy'
import SelfPacedCount from './components/train/self_paced_count/SelfPacedCount'
import SpeedCount from './components/train/speed_count/SpeedCount'
import TrueCount from './components/train/true_count/TrueCount'
import BetSizing from './components/train/bet_sizing/BetSizing'
import BankrollSizing from './components/train/bankroll_sizing/BankrollSizing'
import Menubar from './components/menubar/Menubar'
import CasinoRules from './components/casino_rules/CasinoRules'
import MyStats from './components/my_stats/MyStats'
import Profile from './components/profile/Profile'
import About from './components/about/About'


import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  
  Home: {screen: HomeScreen},
  Menubar: {screen: Menubar},
  Learn: {screen: Learn},
  Train: {screen: Train},
  BasicStrategy: {screen: BasicStrategy},
  SelfPacedCount: {screen: SelfPacedCount},
  SpeedCount: {screen: SpeedCount},
  TrueCount: {screen: TrueCount},
  BetSizing: {screen: BetSizing},
  BankrollSizing: {screen: BankrollSizing},
  CasinoRules: {screen: CasinoRules},
  MyStats: {screen: MyStats},
  Profile: {screen: Profile},
  About: {screen: About},
});

const App = createAppContainer(MainNavigator);

export default App;


