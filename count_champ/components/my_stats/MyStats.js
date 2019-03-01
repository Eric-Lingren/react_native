import * as React from 'react';
import { Dimensions, View, Text, StyleSheet, AsyncStorage} from 'react-native';
import { Constants } from 'expo';

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

class MyStats extends React.Component {
    constructor(){
        super()
        this.state = {
            totalHandsPlayed: 0,
            totalHandsCorrect: 0,
            hardHandsPlayed: 0,
            hardHandsCorrect: 0,
            softHandsPlayed: 0,
            softHandsCorrect: 0,
            splitHandsPlayed: 0,
            splitHandsCorrect: 0,
            percentOfTotalHandsCorrect: 0,
            percentOfTotalHandsCorrectColor: 0,
        }
    }

    componentDidMount(){
        this.getStatsFromStorage()
    }

    getStatsFromStorage = () => {
        AsyncStorage.getItem("hardHandsPlayed").then((hardHandsPlayed) => {
            console.log('hard hands played is: ' + hardHandsPlayed)
            let hardHandsPlayedNum;
            hardHandsPlayed === 'NaN' ? hardHandsPlayedNum = 0 : hardHandsPlayedNum = parseInt(hardHandsPlayed)
            this.setState({hardHandsPlayed: hardHandsPlayedNum})
        }).done();
        AsyncStorage.getItem("hardHandsCorrect").then((hardHandsCorrect) => {
            console.log('hard hands Correct is: ' + hardHandsCorrect)
            let hardHandsCorrectNum;
            hardHandsCorrect === 'NaN' || hardHandsCorrect === 'null' ? hardHandsCorrectNum = 0 : hardHandsCorrectNum = parseInt(hardHandsCorrect)
            this.setState({hardHandsCorrect: hardHandsCorrectNum})
        }).done();
        AsyncStorage.getItem("softHandsPlayed").then((softHandsPlayed) => {
            console.log('soft hands played is: ' + softHandsPlayed)
            let softHandsPlayedNum;
            softHandsPlayed === 'NaN' || softHandsPlayed === 'null' ? softHandsPlayedNum = 0 : softHandsPlayedNum = parseInt(softHandsPlayed)
            this.setState({softHandsPlayed: softHandsPlayedNum})
        }).done();
        AsyncStorage.getItem("softHandsCorrect").then((softHandsCorrect) => {
            console.log('soft hands Correct is: ' + softHandsCorrect)
            let softHandsCorrectNum;
            softHandsCorrect === 'NaN' || softHandsCorrect === 'null' ?  softHandsCorrectNum = 0 : softHandsCorrectNum = parseInt(softHandsCorrect)
            this.setState({softHandsCorrect: softHandsCorrectNum})
        }).done();
        AsyncStorage.getItem("splitHandsPlayed").then((splitHandsPlayed) => {
            console.log('split hands played is: ' + splitHandsPlayed)
            let splitHandsPlayedNum;
            splitHandsPlayed === 'NaN' || splitHandsPlayed === 'null' ? splitHandsPlayedNum = 0 : splitHandsPlayedNum = parseInt(splitHandsPlayed)
            this.setState({splitHandsPlayed: splitHandsPlayedNum})
        }).done();
        AsyncStorage.getItem("splitHandsCorrect").then((splitHandsCorrect) => {
            console.log('split hands Correct is: ' + splitHandsCorrect)
            let splitHandsCorrectNum;
            splitHandsCorrect === 'NaN' || splitHandsCorrect === 'null' ? splitHandsCorrectNum = 0 : splitHandsCorrectNum = parseInt(splitHandsCorrect)
            this.setState({splitHandsCorrect: splitHandsCorrectNum}, () => this.calculateTotalHands())
        }).done();
        
    }

    calculateTotalHands = () => {
        
        let totalHandsPlayed = this.state.hardHandsPlayed + this.state.softHandsPlayed + this.state.splitHandsPlayed
        let totalHandsCorrect = this.state.hardHandsCorrect + this.state.softHandsCorrect + this.state.splitHandsCorrect
        console.log('TOTAL HANDS PLAYED' + totalHandsPlayed)
        console.log('TOTAL HANDS CORRECT' + totalHandsCorrect)

        let percentOfTotalHandsCorrect = ( (totalHandsCorrect / totalHandsPlayed) * 100 )
        console.log('percent correct: ' + percentOfTotalHandsCorrect)
        let percentOfTotalHandsCorrectColor = 'blue'
        if(percentOfTotalHandsCorrect >= 90){
            console.log('more than 90% right ')
            percentOfTotalHandsCorrectColor = 'green'
        } else if (percentOfTotalHandsCorrect <= 70){
            console.log('less than 70% right ')
            percentOfTotalHandsCorrectColor = 'red'
        } else {
            console.log('more than 70% less than 90 ')
            percentOfTotalHandsCorrectColor = 'yellow'
        }
        this.setState({ 
            totalHandsPlayed: totalHandsPlayed, 
            totalHandsCorrect: totalHandsCorrect,
            percentOfTotalHandsCorrect: percentOfTotalHandsCorrect,
            percentOfTotalHandsCorrectColor: percentOfTotalHandsCorrectColor
        })
    }

    static navigationOptions = {
        title: 'My Stats'
    };

    render() {
        const navigate = this.props.navigation
        
        return (
            <View style={styles.container}>
                <View style={styles.statsContainer}>
                    <Text style={styles.textStyles}>Total Hands</Text>
                    <Text style={styles.textStyles}>Total Hands Played: {this.state.totalHandsPlayed} </Text>
                    <View style={{  width: '100%', 
                                    height: 30, 
                                    backgroundColor: 'blue'}}>
                    </View>
                    <Text style={styles.textStyles}>Total Hands Correct: {this.state.totalHandsCorrect} </Text>
                    <View style={{  width: `${this.state.percentOfTotalHandsCorrect}%`, 
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
    },
    statsContainer: {
        width: ScreenWidth-50,
        marginLeft: 20,
    },
    textStyles: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
export default MyStats