import * as React from 'react';
import { Dimensions, View, Text, StyleSheet, AsyncStorage, Button } from 'react-native';
import { Constants } from 'expo';


let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

class StatsCharts extends React.Component {
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
            percentOfSplitHandsCorrectColor: '',
            sessionsPlayed: 0,
            sessionsCorrect: 0,
            percentOfSessionsCorrect: 0,
            percentOfSessionsCorrectColor: '',
            trueCountQuestionsPlayed: 0,
            trueCountQuestionsCorrect: 0,
            percentOftrueCountQuestionsCorrect: 0,
            percentOftrueCountQuestionsCorrectColor: '',
            betSizingQuestionsPlayed: 0,
            betSizingQuestionsCorrect: 0,
            percentOfBetSizingQuestionsCorrect: 0,
            percentOfBetSizingQuestionsCorrectColor: '',
        }
    }

    componentDidMount(){
        this.getStatsFromStorage()
        this.getCountingStatsFromStorage()
        this.getTrueCountStatsFromStorage()
        this.getBetSizingFromStorage()
    }

    getStatsFromStorage = () => {
        AsyncStorage.getItem("hardHandsPlayed").then((hardHandsPlayed) => {
            let hardHandsPlayedNum;
            hardHandsPlayed === 'NaN' ? hardHandsPlayedNum = 0 : hardHandsPlayedNum = parseInt(hardHandsPlayed)
            this.setState({hardHandsPlayed: hardHandsPlayedNum})
        }).done();
        AsyncStorage.getItem("hardHandsCorrect").then((hardHandsCorrect) => {
            let hardHandsCorrectNum;
            hardHandsCorrect === 'NaN' || hardHandsCorrect === 'null' ? hardHandsCorrectNum = 0 : hardHandsCorrectNum = parseInt(hardHandsCorrect)
            this.setState({hardHandsCorrect: hardHandsCorrectNum})
        }).done();
        AsyncStorage.getItem("softHandsPlayed").then((softHandsPlayed) => {
            let softHandsPlayedNum;
            softHandsPlayed === 'NaN' || softHandsPlayed === 'null' ? softHandsPlayedNum = 0 : softHandsPlayedNum = parseInt(softHandsPlayed)
            this.setState({softHandsPlayed: softHandsPlayedNum})
        }).done();
        AsyncStorage.getItem("softHandsCorrect").then((softHandsCorrect) => {
            let softHandsCorrectNum;
            softHandsCorrect === 'NaN' || softHandsCorrect === 'null' ?  softHandsCorrectNum = 0 : softHandsCorrectNum = parseInt(softHandsCorrect)
            this.setState({softHandsCorrect: softHandsCorrectNum})
        }).done();
        AsyncStorage.getItem("splitHandsPlayed").then((splitHandsPlayed) => {
            let splitHandsPlayedNum;
            splitHandsPlayed === 'NaN' || splitHandsPlayed === 'null' ? splitHandsPlayedNum = 0 : splitHandsPlayedNum = parseInt(splitHandsPlayed)
            this.setState({splitHandsPlayed: splitHandsPlayedNum})
        }).done();
        AsyncStorage.getItem("splitHandsCorrect").then((splitHandsCorrect) => {
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
            percentOfTotalHandsCorrectColor = '#FF0000'
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
        this.calculateSoftHands()
        this.calculateSplitHands()
    }

    calculateHardHands = () => {
        let hardHandsPlayed = this.state.hardHandsPlayed 
        let hardHandsCorrect = this.state.hardHandsCorrect 
        let percentOfHardHandsCorrect = ( (hardHandsCorrect / hardHandsPlayed) * 100 )
        let percentOfHardHandsCorrectColor = '#2196f3'

        if(percentOfHardHandsCorrect >= 90){
            //  Good Score
            percentOfHardHandsCorrectColor = '#49FF58'
        } else if (percentOfHardHandsCorrect <= 70){
            // Bad Score
            percentOfHardHandsCorrectColor = '#FF0000'
        } else {
            //  Medium Score
            percentOfHardHandsCorrectColor = '#FBFC5F'
        }
        this.setState({ 
            percentOfHardHandsCorrect: percentOfHardHandsCorrect,
            percentOfHardHandsCorrectColor: percentOfHardHandsCorrectColor
        })
        
    }

    calculateSoftHands = () => {
        let softHandsPlayed = this.state.softHandsPlayed 
        let softHandsCorrect = this.state.softHandsCorrect 
        let percentOfSoftHandsCorrect = Math.round( (softHandsCorrect / softHandsPlayed) * 100 )
        let percentOfSoftHandsCorrectColor = '#2196f3'

        if(percentOfSoftHandsCorrect >= 90){
            //  Good Score
            percentOfSoftHandsCorrectColor = '#49FF58'
        } else if (percentOfSoftHandsCorrect <= 70){
            // Bad Score
            percentOfSoftHandsCorrectColor = '#FF0000'
        } else {
            //  Medium Score
            percentOfSoftHandsCorrectColor = '#FBFC5F'
        }
        this.setState({ 
            percentOfSoftHandsCorrect: percentOfSoftHandsCorrect,
            percentOfSoftHandsCorrectColor: percentOfSoftHandsCorrectColor
        })
        
    }

    calculateSplitHands = () => {
        let splitHandsPlayed = this.state.splitHandsPlayed 
        let splitHandsCorrect = this.state.splitHandsCorrect 
        let percentOfSplitHandsCorrect = ( (splitHandsCorrect / splitHandsPlayed) * 100 )
        let percentOfSplitHandsCorrectColor = '#2196f3'

        if(percentOfSplitHandsCorrect >= 90){
            //  Good Score
            percentOfSplitHandsCorrectColor = '#49FF58'
        } else if (percentOfSplitHandsCorrect <= 70){
            // Bad Score
            percentOfSplitHandsCorrectColor = '#FF0000'
        } else {
            //  Medium Score
            percentOfSplitHandsCorrectColor = '#FBFC5F'
        }
        this.setState({ 
            percentOfSplitHandsCorrect: percentOfSplitHandsCorrect,
            percentOfSplitHandsCorrectColor: percentOfSplitHandsCorrectColor
        })
    }



    //////////////////////////////////////////////////////////////////////////
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

    /////////////////////////////////////////////////////////////////////////////////////

    getTrueCountStatsFromStorage = () => {
        AsyncStorage.getItem("trueCountQuestionsPlayed").then((trueCountQuestionsPlayed) => {
            let trueCountQuestionsPlayedNum;
            trueCountQuestionsPlayed === 'NaN' || trueCountQuestionsPlayed === 'null' ? trueCountQuestionsPlayedNum = 0 : trueCountQuestionsPlayedNum = parseInt(trueCountQuestionsPlayed)
            this.setState({trueCountQuestionsPlayed: trueCountQuestionsPlayedNum})
        }).done();
        AsyncStorage.getItem("trueCountQuestionsCorrect").then((trueCountQuestionsCorrect) => {
            let trueCountQuestionsCorrectNum;
            trueCountQuestionsCorrect === 'NaN' || trueCountQuestionsCorrect === 'null' ? trueCountQuestionsCorrectNum = 0 : trueCountQuestionsCorrectNum = parseInt(trueCountQuestionsCorrect)
            this.setState({trueCountQuestionsCorrect: trueCountQuestionsCorrectNum}, () => this.calculateTrueCountStats())
        }).done();
    }


    calculateTrueCountStats = () => {
        let totalTrueCountQuestionsPlayed = this.state.trueCountQuestionsPlayed 
        let trueCountQuestionsCorrect = this.state.trueCountQuestionsCorrect
        let percentOftrueCountQuestionsCorrect = ( (trueCountQuestionsCorrect / totalTrueCountQuestionsPlayed) * 100 )
        let percentOftrueCountQuestionsCorrectColor = '#2196f3'

        if(percentOftrueCountQuestionsCorrect >= 90){
            //  Good Score
            percentOftrueCountQuestionsCorrectColor = '#49FF58'
        } else if (percentOftrueCountQuestionsCorrect <= 70){
            // Bad Score
            percentOftrueCountQuestionsCorrectColor = '#FF0000'
        } else {
            //  Medium Score
            percentOftrueCountQuestionsCorrectColor = '#FBFC5F'
        }
        this.setState({ 
            percentOftrueCountQuestionsCorrect: percentOftrueCountQuestionsCorrect,
            percentOftrueCountQuestionsCorrectColor: percentOftrueCountQuestionsCorrectColor
        })
        
    }

    getBetSizingFromStorage = () => {
        AsyncStorage.getItem("betSizingQuestionsPlayed").then((betSizingQuestionsPlayed) => {
            let betSizingQuestionsPlayedNum;
            betSizingQuestionsPlayed === 'NaN' ? betSizingQuestionsPlayedNum = 0 : betSizingQuestionsPlayedNum = parseInt(betSizingQuestionsPlayed)
            this.setState({betSizingQuestionsPlayed: betSizingQuestionsPlayedNum})
        }).done();
        AsyncStorage.getItem("betSizingQuestionsCorrect").then((betSizingQuestionsCorrect) => {
            let betSizingQuestionsCorrectNum;
            betSizingQuestionsCorrect === 'NaN' ? betSizingQuestionsCorrectNum = 0 : betSizingQuestionsCorrectNum = parseInt(betSizingQuestionsCorrect)
            this.setState({betSizingQuestionsCorrect: betSizingQuestionsCorrectNum}, () => this.calculateBetSizingStats())
        }).done();
    }

    calculateBetSizingStats = () => {
        let betSizingQuestionsPlayed = this.state.betSizingQuestionsPlayed
        let betSizingQuestionsCorrect = this.state.betSizingQuestionsCorrect
        let percentOfBetSizingQuestionsCorrect = ( (betSizingQuestionsCorrect / betSizingQuestionsPlayed) * 100 )
        let percentOfBetSizingQuestionsCorrectColor = '#2196f3'

        if(percentOfBetSizingQuestionsCorrect >= 90){
            //  Good Score
            percentOfBetSizingQuestionsCorrectColor = '#49FF58'
        } else if (percentOfBetSizingQuestionsCorrect <= 70){
            // Bad Score
            percentOfBetSizingQuestionsCorrectColor = '#FF0000'
        } else {
            //  Medium Score
            percentOfBetSizingQuestionsCorrectColor = '#FBFC5F'
        }
        this.setState({ 
            percentOfBetSizingQuestionsCorrect: percentOfBetSizingQuestionsCorrect,
            percentOfBetSizingQuestionsCorrectColor: percentOfBetSizingQuestionsCorrectColor
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
        try {
            await AsyncStorage.setItem('trueCountQuestionsPlayed', '0');
        } catch (error) {}
        try {
            await AsyncStorage.setItem('trueCountQuestionsCorrect', '0');
        } catch (error) {}
        try {
            await AsyncStorage.setItem('betSizingQuestionsPlayed', '0');
        } catch (error) {}
        try {
            await AsyncStorage.setItem('betSizingQuestionsCorrect', '0');
        } catch (error) {}
        this.setState({
            sessionsPlayed: 0,
            sessionsCorrect: 0,
            totalHandsPlayed: 0,
            totalHandsCorrect: 0,
            hardHandsPlayed: 0,
            hardHandsCorrect: 0,
            softHandsPlayed: 0,
            softHandsCorrect: 0,
            splitHandsPlayed: 0,
            splitHandsCorrect: 0,
            percentOfTotalHandsCorrect: 0,
            percentOfHardHandsCorrect: 0,
            percentOfSoftHandsCorrect: 0,
            percentOfSplitHandsCorrect: 0,
            percentOfSessionsCorrect: 0,
            trueCountQuestionsPlayed: 0,
            trueCountQuestionsCorrect: 0,
            percentOftrueCountQuestionsCorrect: 0,
            betSizingQuestionsPlayed: 0,
            betSizingQuestionsCorrect: 0,
            percentOfBetSizingQuestionsCorrect: 0,
        })
    }

    static navigationOptions = {
        title: 'My Stats'
    };

    render() {
        const navigate = this.props.navigation
        return (
            <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button color="#003D66" onPress={this.resetStats} title="Reset Stats"></Button>
            </View>
            
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


                <View style={styles.statsContainer}>
                    <Text style={styles.headerStyles}>Speed Count</Text>
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

                <View style={styles.statsContainer}>
                    <Text style={styles.headerStyles}>True Count</Text>
                    <Text style={styles.textStyles}>Played: {this.state.trueCountQuestionsPlayed} </Text>
                    <View style={{  width: '100%', 
                                    height: 30,
                                    borderWidth: 1,
                                    backgroundColor: '#2196f3',
                                    marginBottom: 5}}>
                    </View>
                    <Text style={styles.textStyles}>Correct: {this.state.trueCountQuestionsCorrect} </Text>
                    <View style={{  width: `${this.state.percentOftrueCountQuestionsCorrect}%`, 
                                    height: 30, 
                                    backgroundColor: this.state.percentOftrueCountQuestionsCorrectColor}}></View>
                </View>

                <View style={styles.statsContainer}>
                    <Text style={styles.headerStyles}>Bet Sizing</Text>
                    <Text style={styles.textStyles}>Played: {this.state.betSizingQuestionsPlayed} </Text>
                    <View style={{  width: '100%', 
                                    height: 30,
                                    borderWidth: 1,
                                    backgroundColor: '#2196f3',
                                    marginBottom: 5}}>
                    </View>
                    <Text style={styles.textStyles}>Correct: {this.state.betSizingQuestionsCorrect} </Text>
                    <View style={{  width: `${this.state.percentOfBetSizingQuestionsCorrect}%`, 
                                    height: 30, 
                                    backgroundColor: this.state.percentOfBetSizingQuestionsCorrectColor}}></View>
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
        marginTop: -10,
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
    },
    buttonContainer: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    }
});
export default StatsCharts