import * as React from 'react';
import { Button, Text, View, StyleSheet, Image, Dimensions, TouchableWithoutFeedback, AsyncStorage } from 'react-native';
import { Constants } from 'expo';
import homeLogo from './blackjackLogo.jpg';
import closeIcon from './close.png'
import Menubar from '../menubar/Menubar';

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;
let menuIconMargin = (ScreenWidth - 65)


class HomeScreen extends React.Component {
    constructor(){
        super()
        this.state = {
            sideMenuShowing: false,
            menuIconMargin: menuIconMargin,
        }
    }

    componentDidMount(){
        AsyncStorage.getItem("doubleAllowed").then((doubleAllowedValue) => {
            if(typeof(doubleAllowedValue) === 'object'){
                // Rules haven't been set to local storage yet (first load only)
                this.setDefaultCasinoRules()
            }
        }).done();
    }

    toggleMenu = () => {
        this.state.sideMenuShowing ? this.setState({sideMenuShowing: false, menuIconMargin: menuIconMargin}) : this.setState({sideMenuShowing: true, menuIconMargin: (ScreenWidth * .24)})
    }


    setDefaultCasinoRules = async () => {
        try {
            await AsyncStorage.setItem('doubleAllowed', 'true');
        } catch (error) {}
        try {
            await AsyncStorage.setItem('doubleAfterSplitAllowed', 'false');
        } catch (error) {}
        try {
            await AsyncStorage.setItem('surrenderAllowed', 'false');
        } catch (error) {}
        try {
            await AsyncStorage.setItem('dealerStands17', 'true');
        } catch (error) {}
        try {
            await AsyncStorage.setItem('hardHandsPlayed', '0');
        } catch (error) {}
        try {
            await AsyncStorage.setItem('hardHandsCorrect', '0');
        } catch (error) {}
        try {
            await AsyncStorage.setItem('softHandsPlayed', '0');
        } catch (error) {}
        try {
            await AsyncStorage.setItem('softHandsCorrect', '0');
        } catch (error) {}
        try {
            await AsyncStorage.setItem('splitHandsPlayed', '0');
        } catch (error) {}
        try {
            await AsyncStorage.setItem('splitHandsCorrect', '0');
        } catch (error) {}
        try {
            await AsyncStorage.setItem('speedCountSessionsPlayed', '0');
        } catch (error) {}
        try {
            await AsyncStorage.setItem('speedCountSessionsCorrect', '0');
        } catch (error) {}
        try {
            await AsyncStorage.setItem('trueCountQuestionsPlayed', '0');
        } catch (error) {}
        try {
            await AsyncStorage.setItem('trueCountQuestionsCorrect', '0');
        } catch (error) {}
    };

    static navigationOptions = {
        header: null
    };

    render() {
        const {navigate} = this.props.navigation;
        //console.log(navigate)
        return (
            <View style={styles.container}>
            { this.state.sideMenuShowing ? 
                    <View style={styles.menuContainer}>
                        <Menubar navigation={navigate} /> 
                        <TouchableWithoutFeedback onPress={() => this.toggleMenu()}>
                            <Image
                                source={require('./close.png')}
                                style={{ width: 40, height: 40, marginLeft:(this.state.menuIconMargin +10), marginTop: 30}}/>
                        </TouchableWithoutFeedback>
                    </View>
                    : 
                    <TouchableWithoutFeedback onPress={() => this.toggleMenu()}>
                        <Image
                            source={require('./menu.png')}
                            style={{ width: 50, height: 50, marginLeft: this.state.menuIconMargin}}/>
                    </TouchableWithoutFeedback>
                    }

                <View>
                    <Text style={styles.paragraph}>
                        So You Want To Be A Card Counter...
                    </Text>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={homeLogo} alt='' ></Image>
                    </View>
                    <Text style={styles.paragraph}>
                        You Better Start By Learning!
                    </Text>
                </View>
                
                <View style={styles.buttonContainer}>
                    <Button
                    title="Learn"
                    color="#000000"
                    onPress={() => navigate('Learn', {name: 'Learn'})}
                    />
                    <Button
                    title="Train"
                    color="#000000"
                    onPress={() => navigate('Train', {name: 'Train'})}
                    />
                </View>
                
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        padding: 8,
        backgroundColor: ( '#0f9b0f', '#52c234', '#52c234', '#0f9b0f'),
        height: ScreenHeight,
        zIndex: 10,
    },
    menuContainer: {
        marginTop: -20,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        borderRadius: 10,
        width: 300,
        height: 200,
        borderWidth: 1,
        borderColor: 'white',
    },
    buttonContainer: {
        marginTop: 100,
        flex: 0,
        justifyContent: 'space-evenly',
        height: 120,
    },
});

export default HomeScreen