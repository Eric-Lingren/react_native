import * as React from 'react';
import { Text, Button, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Constants } from 'expo';
import AwesomeButton from 'react-native-really-awesome-button';

let ScreenHeight = Dimensions.get("window").height;

class Learn extends React.Component {
    static navigationOptions = {
        title: 'Learn',
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <AwesomeButton
                        type='primary'
                        backgroundColor='#000'
                        textColor='#FFDF00'
                        textSize={16}
                        raiseLevel={0}
                        stretch={true}
                        height={40}
                        onPress={() => navigate('HowToPlay', {name: 'How To Play'})}
                    >
                        Level 0:  How To Play
                    </AwesomeButton>
                    
                    <AwesomeButton
                        type='primary'
                        backgroundColor='#000'
                        textColor='#FFDF00'
                        textSize={16}
                        raiseLevel={0}
                        stretch={true}
                        height={40}
                        onPress={() => navigate('Fundamentals', {name: 'Fundamentals'})}
                    >
                        Level 1:  Fundamentals
                    </AwesomeButton>
                    
                    <AwesomeButton
                        type='primary'
                        backgroundColor='#000'
                        textColor='#FFDF00'
                        textSize={16}
                        raiseLevel={0}
                        stretch={true}
                        height={40}
                        onPress={() => navigate('LearnBasicStrategy', {name: 'Learn Basic Strategy'})}
                    >
                        Level 2:  Basic Strategy
                    </AwesomeButton>

                    <AwesomeButton
                        type='primary'
                        backgroundColor='#000'
                        textColor='#FFDF00'
                        textSize={16}
                        raiseLevel={0}
                        stretch={true}
                        height={40}
                        onPress={() => navigate('CountingCards', {name: 'Counting Cards'})}
                    >
                        Level 3:  Running Count
                    </AwesomeButton>
                    
                    <AwesomeButton
                        type='primary'
                        backgroundColor='#000'
                        textColor='#FFDF00'
                        textSize={16}
                        raiseLevel={0}
                        stretch={true}
                        height={40}
                        onPress={() => navigate('RunningCountVsTrueCount', {name: 'Running Count vs True Count'})}
                    >
                        Level 4:  Running Count vs True Count
                    </AwesomeButton>

                    <AwesomeButton
                        type='primary'
                        backgroundColor='#000'
                        textColor='#FFDF00'
                        textSize={16}
                        raiseLevel={0}
                        stretch={true}
                        height={40}
                        onPress={() => navigate('Deviations', {name: 'Deviations'})}
                    >
                        Level 5:  Deviations & Illustrious 18
                    </AwesomeButton>

                    <AwesomeButton
                        type='primary'
                        backgroundColor='#000'
                        textColor='#FFDF00'
                        textSize={16}
                        raiseLevel={0}
                        stretch={true}
                        height={40}
                        onPress={() => navigate('HowToBet', {name: 'How to Bet'})}
                    >
                        Level 6:  How to Bet
                    </AwesomeButton>
                    
                    <AwesomeButton
                        type='primary'
                        backgroundColor='#000'
                        textColor='#FFDF00'
                        textSize={16}
                        raiseLevel={0}
                        stretch={true}
                        height={40}
                        onPress={() => navigate('BankrollSizing', {name: 'Bankroll Sizing'})}
                    >
                        Level 7:  Bankroll Sizing
                    </AwesomeButton>
                    
                    <AwesomeButton
                        type='primary'
                        backgroundColor='#000'
                        textColor='#FFDF00'
                        textSize={16}
                        raiseLevel={0}
                        stretch={true}
                        height={40}
                        onPress={() => navigate('HowMuchMoney', {name: 'How Much Money'})}
                    >
                        Level 8:  How Much $ Can I Make?
                    </AwesomeButton>
                    
                    <AwesomeButton
                        type='primary'
                        backgroundColor='#000'
                        textColor='#FFDF00'
                        textSize={16}
                        raiseLevel={0}
                        stretch={true}
                        height={40}
                        onPress={() => navigate('WhatsNext', {name: 'Whats Next'})}
                    >
                        Level 9:  What’s Next
                    </AwesomeButton>
                    
                    <AwesomeButton
                        type='primary'
                        backgroundColor='#000'
                        textColor='#FFDF00'
                        textSize={16}
                        raiseLevel={0}
                        stretch={true}
                        height={40}
                        onPress={() => navigate('Glossary', {name: 'Glossary'})}
                    >
                        Glossary of Terms
                    </AwesomeButton>

                    
                </View>
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        padding: 8,
        backgroundColor: ( '#0f9b0f', '#52c234', '#52c234', '#0f9b0f'),
        height: 750,
    },
    buttonContainer: {
        marginTop: 0,
        flex: 0,
        justifyContent: 'space-evenly',
        height: 550,
    },
    buttonStyle: {
        backgroundColor: '#fff',
        color: '#fff',
    },
});

export default Learn