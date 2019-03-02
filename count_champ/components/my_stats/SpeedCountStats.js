import * as React from 'react';
import { Dimensions, View, Text, StyleSheet, AsyncStorage} from 'react-native';
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
            this.setState({sessionsCorrect: speedCountSessionsCorrectNum})
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
            percentOfSessionsCorrectColor = 'FF0000'
        } else {
            //  Medium Score
            percentOfSessionsCorrectColor = '#FBFC5F'
        }
        this.setState({ 
            percentOfSessionsCorrect: percentOfSessionsCorrect,
            percentOfSessionsCorrectColor: percentOfSessionsCorrectColor
        }, () => console.log(this.state))
        
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
                                    backgroundColor: this.state.percentOfTotalHandsCorrectColor}}></View>
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
        marginTop: -25,
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
    }
});
export default SpeedCountStats