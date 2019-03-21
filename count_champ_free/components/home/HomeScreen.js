import * as React from 'react';
import { Button, Text, View, StyleSheet, Image, Dimensions, TouchableWithoutFeedback, AsyncStorage } from 'react-native';
import { Constants, AdMobBanner } from 'expo';
import AwesomeButton from 'react-native-really-awesome-button';
import Menubar from '../menubar/Menubar';

import premiumLogo from './premium_logo.png';
import freeLogo from './free_logo.png';



let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;
let menuIconMargin = ScreenWidth - 65;


class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      sideMenuShowing: false,
      menuIconMargin: menuIconMargin
    };
  }

  componentDidMount() {
    AsyncStorage.getItem("doubleAllowed")
      .then(doubleAllowedValue => {
        if (typeof doubleAllowedValue === "object") {
          // Rules haven't been set to local storage yet (first load only)
          this.setDefaultCasinoRules();
        }
      })
      .done();
  }

  componentWillUnmount() {
    console.log("component unmounted");
  }

  toggleMenu = () => {
    this.state.sideMenuShowing
      ? this.setState({
          sideMenuShowing: false,
          menuIconMargin: menuIconMargin
        })
      : this.setState({
          sideMenuShowing: true,
          menuIconMargin: ScreenWidth * 0.24
        });
  };

  setDefaultCasinoRules = async () => {
    try {
      await AsyncStorage.setItem("doubleAllowed", "true");
    } catch (error) {}
    try {
      await AsyncStorage.setItem("doubleAfterSplitAllowed", "false");
    } catch (error) {}
    try {
      await AsyncStorage.setItem("surrenderAllowed", "false");
    } catch (error) {}
    try {
      await AsyncStorage.setItem("dealerStands17", "true");
    } catch (error) {}
    try {
      await AsyncStorage.setItem("singleDeck", "false");
    } catch (error) {}
    try {
      await AsyncStorage.setItem("doubleDeck", "false");
    } catch (error) {}
    try {
      await AsyncStorage.setItem("shoe", "true");
    } catch (error) {}
    try {
      await AsyncStorage.setItem("hardHandsPlayed", "0");
    } catch (error) {}
    try {
      await AsyncStorage.setItem("hardHandsCorrect", "0");
    } catch (error) {}
    try {
      await AsyncStorage.setItem("softHandsPlayed", "0");
    } catch (error) {}
    try {
      await AsyncStorage.setItem("softHandsCorrect", "0");
    } catch (error) {}
    try {
      await AsyncStorage.setItem("splitHandsPlayed", "0");
    } catch (error) {}
    try {
      await AsyncStorage.setItem("splitHandsCorrect", "0");
    } catch (error) {}
    try {
      await AsyncStorage.setItem("speedCountSessionsPlayed", "0");
    } catch (error) {}
    try {
      await AsyncStorage.setItem("speedCountSessionsCorrect", "0");
    } catch (error) {}
    try {
      await AsyncStorage.setItem("trueCountQuestionsPlayed", "0");
    } catch (error) {}
    try {
      await AsyncStorage.setItem("trueCountQuestionsCorrect", "0");
    } catch (error) {}
    try {
      await AsyncStorage.setItem("betSizingQuestionsPlayed", "0");
    } catch (error) {}
    try {
      await AsyncStorage.setItem("betSizingQuestionsCorrect", "0");
    } catch (error) {}
    try {
      await AsyncStorage.setItem("deviationsPlayed", "0");
    } catch (error) {}
    try {
      await AsyncStorage.setItem("deviationsCorrect", "0");
    } catch (error) {}
  };

  bannerError() {
    console.log("An error");
    return;
  }

  test = () => {
    console.log('test press')
  }

  static navigationOptions = {
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {this.state.sideMenuShowing ? (
          <View style={styles.menuContainer}>
            <Menubar navigation={navigate} />
            <TouchableWithoutFeedback onPress={() => this.toggleMenu()}>
              <Image
                source={require("../../assets/images/close_icon.png")}
                style={{
                  width: 40,
                  height: 40,
                  marginLeft: this.state.menuIconMargin + 10,
                  marginTop: 30
                }}
              />
            </TouchableWithoutFeedback>
          </View>
        ) : (
          <TouchableWithoutFeedback onPress={() => this.toggleMenu()}>
            <Image
              source={require("./menu_icon.png")}
              style={{
                width: 50,
                height: 50,
                marginLeft: this.state.menuIconMargin
              }}
            />
          </TouchableWithoutFeedback>
        )}

        <View>
          <Text style={styles.paragraph1}>Welcome to</Text>
          <View style={styles.imageContainer}>
            {/* <Image style={styles.image} source={premiumLogo} alt="" /> */}
            <Image style={styles.image} source={freeLogo} alt="" />
          </View>
          <Text style={styles.paragraph2}>
            Learn How to Count Cards and Win at Blackjack!
          </Text>
        </View> 
          <View style={styles.buttonContainer}>
              <AwesomeButton
                type='primary'
                backgroundColor='#000'
                textColor='#FFDF00'
                textSize={20}
                raiseLevel={0}
                stretch={true}
                height={40}
                onPress={() => navigate('Learn', {name: 'Learn'}) }
                >
                LEARN
              </AwesomeButton>

              <AwesomeButton
                type='primary'
                backgroundColor='#FFDF00'
                textColor='#000'
                textSize={20}
                raiseLevel={0}
                stretch={true}
                height={40}
                onPress={() => navigate('Train', {name: 'Train'})}
                >
                TRAIN
              </AwesomeButton>

          </View>
                <AdMobBanner
                    bannerSize="fullBanner"
                    adUnitID="ca-app-pub-9918224509174617/8198931096" 
                    testDeviceID="EMULATOR"
                    onDidFailToReceiveAdWithError={this.bannerError} 
                    style={{width: ScreenWidth, paddingLeft:0, marginLeft: 0, position: 'absolute', bottom: -1 }}
                />
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: ("#0f9b0f", "#52c234", "#52c234", "#0f9b0f"),
    height: ScreenHeight,
    zIndex: 10
  },
  menuContainer: {
    marginTop: -20
  },
  paragraph1: {
    marginTop: -5,
    marginBottom: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FFF",
  },
  paragraph2: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  countChamp: {
    marginBottom: 20,
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffb600"
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    borderRadius: 10,
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: "black"
  },
  buttonContainer: {
    marginTop: -20,
    flex: 0,
    justifyContent: "space-evenly",
    height: 160
  }
});

export default HomeScreen;
