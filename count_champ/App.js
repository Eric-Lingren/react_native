import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import HomeScreen from './components/home/HomeScreen'
import Learn from './components/learn/Learn'
import Train from './components/train/Train'
import BasicStrategy from './components/train/basic_strategy/BasicStrategy'
import SelfPacedCount from './components/train/self_paced_count/SelfPacedCount'
import SpeedCount from './components/train/speed_count/SpeedCount'
import TrueCount from './components/train/true_count/TrueCount'
import BetSizing from './components/train/bet_sizing/BetSizing'

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

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
  //Profile: {screen: ProfileScreen},
});

const App = createAppContainer(MainNavigator);

export default App;

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.paragraph}>
//           Lets play with react native!

//         Learning react native is fun
//         </Text>
//         <Card>
//           <AssetExample />
//         </Card>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    //backgroundColor: '#fff',
    padding: 8,
    backgroundColor: ( '#0f9b0f', '#52c234', '#52c234', '#0f9b0f'),
  
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
