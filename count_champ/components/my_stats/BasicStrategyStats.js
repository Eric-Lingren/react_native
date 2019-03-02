import * as React from 'react';
import { Dimensions, View, Text, StyleSheet, AsyncStorage} from 'react-native';
import { Constants } from 'expo';
import SpeedCountStats from './SpeedCountStats'

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

class BasicStrategyStats extends React.Component {
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
            percentOfTotalHandsCorrectColor: '',
            percentOfHardHandsCorrect: 0,
            percentOfHardHandsCorrectColor: '',
            percentOfSoftHandsCorrect: 0,
            percentOfSoftHandsCorrectColor: '',
            percentOfSplitHandsCorrect: 0,
            percentOfSplitHandsCorrectColor: ''
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
        let percentOfTotalHandsCorrect = ( (totalHandsCorrect / totalHandsPlayed) * 100 )
        let percentOfTotalHandsCorrectColor = '#2196f3'

        if(percentOfTotalHandsCorrect >= 90){
            //  Good Score
            percentOfTotalHandsCorrectColor = '#49FF58'
        } else if (percentOfTotalHandsCorrect <= 70){
            // Bad Score
            percentOfTotalHandsCorrectColor = 'FF0000'
        } else {
            //  Medium Score
            percentOfTotalHandsCorrectColor = '#FBFC5F'
        }
        this.setState({ 
            totalHandsPlayed: totalHandsPlayed, 
            totalHandsCorrect: totalHandsCorrect,
            percentOfTotalHandsCorrect: percentOfTotalHandsCorrect,
            percentOfTotalHandsCorrectColor: percentOfTotalHandsCorrectColor
        })
        this.calculateHardHands()
    }

    calculateHardHands = () => {
        let hardHandsPlayed = this.state.hardHandsPlayed 
        let hardHandsCorrect = this.state.hardHandsCorrect 
        let percentOfHardHandsCorrect = ( (hardHandsCorrect / hardHandsPlayed) * 100 )
        console.log('percent correct: ' + percentOfHardHandsCorrect)
        let percentOfHardHandsCorrectColor = '#2196f3'

        if(percentOfHardHandsCorrect >= 90){
            //  Good Score
            percentOfHardHandsCorrectColor = '#49FF58'
        } else if (percentOfHardHandsCorrect <= 70){
            // Bad Score
            percentOfHardHandsCorrectColor = 'FF0000'
        } else {
            //  Medium Score
            percentOfHardHandsCorrectColor = '#FBFC5F'
        }
        this.setState({ 
            percentOfHardHandsCorrect: percentOfHardHandsCorrect,
            percentOfHardHandsCorrectColor: percentOfHardHandsCorrectColor
        })
        this.calculateSoftHands()
    }

    calculateSoftHands = () => {
        let softHandsPlayed = this.state.softHandsPlayed 
        let softHandsCorrect = this.state.softHandsCorrect 
        let percentOfSoftHandsCorrect = ( (softHandsCorrect / softHandsPlayed) * 100 )
        console.log('percent correct: ' + percentOfSoftHandsCorrect)
        let percentOfSoftHandsCorrectColor = '#2196f3'

        if(percentOfSoftHandsCorrect >= 90){
            //  Good Score
            percentOfSoftHandsCorrectColor = '#49FF58'
        } else if (percentOfSoftHandsCorrect <= 70){
            // Bad Score
            percentOfSoftHandsCorrectColor = 'FF0000'
        } else {
            //  Medium Score
            percentOfSoftHandsCorrectColor = '#FBFC5F'
        }
        this.setState({ 
            percentOfSoftHandsCorrect: percentOfSoftHandsCorrect,
            percentOfSoftHandsCorrectColor: percentOfSoftHandsCorrectColor
        })
        this.calculateSplitHands()
    }

    calculateSplitHands = () => {
        let splitHandsPlayed = this.state.splitHandsPlayed 
        let splitHandsCorrect = this.state.splitHandsCorrect 
        let percentOfSplitHandsCorrect = ( (splitHandsCorrect / splitHandsPlayed) * 100 )
        console.log('percent of split hands correct: ' + percentOfSplitHandsCorrect)
        let percentOfSplitHandsCorrectColor = '#2196f3'

        if(percentOfSplitHandsCorrect >= 90){
            //  Good Score
            percentOfSplitHandsCorrectColor = '#49FF58'
        } else if (percentOfSplitHandsCorrect <= 70){
            // Bad Score
            percentOfSplitHandsCorrectColor = 'FF0000'
        } else {
            //  Medium Score
            percentOfSplitHandsCorrectColor = '#FBFC5F'
        }
        this.setState({ 
            percentOfSplitHandsCorrect: percentOfSplitHandsCorrect,
            percentOfSplitHandsCorrectColor: percentOfSplitHandsCorrectColor
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
                    <Text style={styles.headerStyles}>All Hands</Text>
                    <Text style={styles.textStyles}>Played: {this.state.totalHandsPlayed} </Text>
                    <View style={{  width: '100%', 
                                    height: 30,
                                    borderWidth: 1,
                                    backgroundColor: '#2196f3',
                                    marginBottom: 5}}>
                    </View>
                    <Text style={styles.textStyles}>Correct: {this.state.totalHandsCorrect} </Text>
                    <View style={{  width: `${this.state.percentOfTotalHandsCorrect}%`, 
                                    height: 30, 
                                    backgroundColor: this.state.percentOfTotalHandsCorrectColor}}></View>
                </View>

                <View style={styles.statsContainer}>
                    <Text style={styles.headerStyles}>Hard Hands</Text>
                    <Text style={styles.textStyles}>Played: {this.state.hardHandsPlayed} </Text>
                    <View style={{  width: '100%', 
                                    height: 30,
                                    borderWidth: 1,
                                    backgroundColor: '#2196f3',
                                    marginBottom: 5}}>
                    </View>
                    <Text style={styles.textStyles}>Correct: {this.state.hardHandsCorrect} </Text>
                    <View style={{  width: `${this.state.percentOfHardHandsCorrect}%`, 
                                    height: 30, 
                                    backgroundColor: this.state.percentOfHardHandsCorrectColor}}></View>
                </View>

                <View style={styles.statsContainer}>
                    <Text style={styles.headerStyles}>Soft Hands</Text>
                    <Text style={styles.textStyles}>Played: {this.state.softHandsPlayed} </Text>
                    <View style={{  width: '100%', 
                                    height: 30,
                                    borderWidth: 1,
                                    backgroundColor: '#2196f3',
                                    marginBottom: 5}}>
                    </View>
                    <Text style={styles.textStyles}>Correct: {this.state.softHandsCorrect} </Text>
                    <View style={{  width: `${this.state.percentOfSoftHandsCorrect}%`, 
                                    height: 30, 
                                    backgroundColor: this.state.percentOfSoftHandsCorrectColor}}></View>
                </View>

                <View style={styles.statsContainer}>
                    <Text style={styles.headerStyles}>Split Hands</Text>
                    <Text style={styles.textStyles}>Played: {this.state.splitHandsPlayed} </Text>
                    <View style={{  width: '100%', 
                                    height: 30,
                                    borderWidth: 1,
                                    backgroundColor: '#2196f3',
                                    marginBottom: 5}}>
                    </View>
                    <Text style={styles.textStyles}>Correct: {this.state.splitHandsCorrect} </Text>
                    <View style={{  width: `${this.state.percentOfSplitHandsCorrect}%`, 
                                    height: 30, 
                                    backgroundColor: this.state.percentOfSplitHandsCorrectColor}}></View>
                </View>

                <SpeedCountStats />
                
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
        marginLeft: 10,
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
export default BasicStrategyStats