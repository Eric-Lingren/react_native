import * as React from 'react';
import { Dimensions, View, Text, StyleSheet, AsyncStorage, Button} from 'react-native';
import { Constants } from 'expo';

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

class SpeedCountStats extends React.Component {
    constructor(){
        super()
        this.state = {
            sessionsPlayed: 0,
            sessionsCorrect: 0,
            percentOfSessionsCorrect: 0,
            percentOfSessionsCorrectColor: '',
            itemsReset: false
        }
    }

    componentDidMount(){
        this.getCountingStatsFromStorage()
    }

    getCountingStatsFromStorage = () => {
        AsyncStorage.getItem("speedCountSessionsPlayed").then((speedCountSessionsPlayed) => {
            let speedCountSessionsPlayedNum;
            speedCountSessionsPlayed === 'NaN' || speedCountSessionsPlayed === 'null' ? speedCountSessionsPlayedNum = 0 : speedCountSessionsPlayedNum = parseInt(speedCountSessionsPlayed)
            this.setState({sessionsPlayed: speedCountSessionsPlayedNum})
        }).done();
        AsyncStorage.getItem("speedCountSessionsCorrect").then((speedCountSessionsCorrect) => {
            let speedCountSessionsCorrectNum;
            speedCountSessionsCorrect === 'NaN' || speedCountSessionsCorrect === 'null' ? speedCountSessionsCorrectNum = 0 : speedCountSessionsCorrectNum = parseInt(speedCountSessionsCorrect)
            this.setState({sessionsCorrect: speedCountSessionsCorrectNum}, () => this.calculateSpeedCountStats())
        }).done();
    }


    calculateSpeedCountStats = () => {
        let totalSessionsPlayed = this.state.sessionsPlayed 
        let totalSessionsCorrect = this.state.sessionsCorrect
        let percentOfSessionsCorrect = ( (totalSessionsCorrect / totalSessionsPlayed) * 100 )
        let percentOfSessionsCorrectColor = '#2196f3'

        if(percentOfSessionsCorrect >= 90){
            //  Good Score
            percentOfSessionsCorrectColor = '#49FF58'
        } else if (percentOfSessionsCorrect <= 70){
            // Bad Score
            percentOfSessionsCorrectColor = '#FF0000'
        } else {
            //  Medium Score
            percentOfSessionsCorrectColor = '#FBFC5F'
        }
        this.setState({ 
            percentOfSessionsCorrect: percentOfSessionsCorrect,
            percentOfSessionsCorrectColor: percentOfSessionsCorrectColor
        })
        
    }

    resetStats = async () => {
        console.log('clear button pressed')
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
        this.setState({
            sessionsPlayed: 0,
            sessionsCorrect: 0,})
    }

    static navigationOptions = {
        title: 'My Stats'
    };

    render() {
        const navigate = this.props.navigation
        
        return (
            <View style={styles.container}>
                <View style={styles.statsContainer}>
                    <Text style={styles.headerStyles}>Speed Counting Drill</Text>
                    <Text style={styles.textStyles}>Played: {this.state.sessionsPlayed} </Text>
                    <View style={{  width: '100%', 
                                    height: 30,
                                    borderWidth: 1,
                                    backgroundColor: '#2196f3',
                                    marginBottom: 5}}>
                    </View>
                    <Text style={styles.textStyles}>Correct: {this.state.sessionsCorrect} </Text>
                    <View style={{  width: `${this.state.percentOfSessionsCorrect}%`, 
                                    height: 30, 
                                    backgroundColor: this.state.percentOfSessionsCorrectColor}}></View>
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        title="Reset Stats"
                        
                        onPress={() => this.resetStats()}
                    />
                </View>
                
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        padding: 8,
        backgroundColor: ( '#0f9b0f'),
        height: ScreenHeight,
        marginTop: 170,
        marginLeft: 10,
    },
    statsContainer: {
        width: ScreenWidth-50,
        marginBottom: 25,
        backgroundColor: 'black',
        padding: 20,
        paddingBottom: 30,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
    },
    headerStyles: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
    textStyles: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonContainer: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default SpeedCountStats