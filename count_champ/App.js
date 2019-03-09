import HomeScreen from './components/home/HomeScreen'
import Learn from './components/learn/Learn'
import Train from './components/train/Train'
import BasicStrategy from './components/train/basic_strategy/BasicStrategy'
import SelfPacedCount from './components/train/self_paced_count/SelfPacedCount'
import SpeedCount from './components/train/speed_count/SpeedCount'
import TrueCount from './components/train/true_count/TrueCount'
import BetSizing from './components/train/bet_sizing/BetSizing'
import Menubar from './components/menubar/Menubar'
import CasinoRules from './components/casino_rules/CasinoRules'
import MyStats from './components/my_stats/MyStats'
import Profile from './components/profile/Profile'
import About from './components/about/About'
import Glossary from './components/learn/glossary/Glossary'
import HowToPlay from './components/learn/level_0_how_to_play/HowToPlay'
import Fundamentals from './components/learn/level_1_fundamentals/Fundamentals'
import LearnBasicStrategy from './components/learn/level_2_basic_strategy/BasicStrategy'
import CountingCards from './components/learn/level_3_counting_cards/CountingCards'
import RunningCountVsTrueCount from './components/learn/level_4_running_count_vs_true_count/RunningCountVsTrueCount'
import Divergences from './components/learn/level_5_divergences/Divergences'
import HowToBet from './components/learn/level_6_how_to_bet/HowToBet'
import BankrollSizing from './components/learn/level_7_bankroll_sizing/BankrollSizing'
import HowMuchMoney from './components/learn/level_8_how_much_money/HowMuchMoney'
import WhatsNext from './components/learn/level_9_whats_next/WhatsNext'
import {createStackNavigator, createAppContainer} from 'react-navigation'

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
  CasinoRules: {screen: CasinoRules},
  MyStats: {screen: MyStats},
  Profile: {screen: Profile},
  About: {screen: About},
  Glossary: {screen: Glossary},
  HowToPlay: {screen: HowToPlay},
  Fundamentals: {screen: Fundamentals},
  LearnBasicStrategy: {screen: LearnBasicStrategy},
  CountingCards: {screen: CountingCards},
  RunningCountVsTrueCount: {screen: RunningCountVsTrueCount},
  Divergences: {screen: Divergences},
  HowToBet: {screen: HowToBet},
  BankrollSizing: {screen: BankrollSizing},
  HowMuchMoney: {screen: HowMuchMoney},
  WhatsNext: {screen: WhatsNext},
});

const App = createAppContainer(MainNavigator);

export default App;


