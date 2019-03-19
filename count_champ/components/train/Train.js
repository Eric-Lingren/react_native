import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Constants } from 'expo';
import AwesomeButton from 'react-native-really-awesome-button';

let ScreenHeight = Dimensions.get("window").height;

class Train extends React.Component {
    static navigationOptions = {
        title: 'Count Champ Training'
    };
    
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <AwesomeButton
                        type='primary'
                        backgroundColor='#FFDF00'
                        textColor='#000'
                        textSize={16}
                        raiseLevel={0}
                        stretch={true}
                        height={40}
                        onPress={() => navigate('BasicStrategy', {name: 'Basic Strategy'})}
                        >
                        Basic Strategy
                    </AwesomeButton>

                    <AwesomeButton
                        type='primary'
                        backgroundColor='#FFDF00'
                        textColor='#000'
                        textSize={16}
                        raiseLevel={0}
                        stretch={true}
                        height={40}
                        onPress={() => navigate('SelfPacedCount', {name: 'Self Paced Count'})}
                        >
                        Self Paced Count
                    </AwesomeButton>

                    <AwesomeButton
                        type='primary'
                        backgroundColor='#FFDF00'
                        textColor='#000'
                        textSize={16}
                        raiseLevel={0}
                        stretch={true}
                        height={40}
                        onPress={() => navigate('SpeedCount', {name: 'Speed Count'})}
                        >
                        Speed Count
                    </AwesomeButton>

                    <AwesomeButton
                        type='primary'
                        backgroundColor='#FFDF00'
                        textColor='#000'
                        textSize={16}
                        raiseLevel={0}
                        stretch={true}
                        height={40}
                        onPress={() => navigate('TrainDeviations', {name: 'Train Deviations'})}
                        >
                        Deviations
                    </AwesomeButton>

                    <AwesomeButton
                        type='primary'
                        backgroundColor='#FFDF00'
                        textColor='#000'
                        textSize={16}
                        raiseLevel={0}
                        stretch={true}
                        height={40}
                        onPress={() => navigate('TrueCount', {name: 'True Count'})}
                        >
                        True Count
                    </AwesomeButton>

                    <AwesomeButton
                        type='primary'
                        backgroundColor='#FFDF00'
                        textColor='#000'
                        textSize={16}
                        raiseLevel={0}
                        stretch={true}
                        height={40}
                        onPress={() => navigate('BetSizing', {name: 'Bet Sizing'})}
                        >
                        Bet Sizing
                    </AwesomeButton>
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
    },
    buttonContainer: {
        marginTop: 60,
        flex: 0,
        justifyContent: 'space-evenly',
        height: 400,
    },
});

export default Train