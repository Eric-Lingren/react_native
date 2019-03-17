import * as React from 'react';
import { Button, Text, View, StyleSheet, Dimensions, ScrollView, AsyncStorage } from 'react-native';
import { Constants } from 'expo';

let ScreenHeight = Dimensions.get("window").height;

class BetSizing extends React.Component {
    constructor(){
        super()
        this.state = {
            randomCount: 0,
            answer: 0,
            unit1ButtonColor: '#000',
            unit2ButtonColor: '#000',
            unit3ButtonColor: '#000',
            unit4ButtonColor: '#000',
            unit5ButtonColor: '#000',
            unit6ButtonColor: '#000',
            unit12ButtonColor: '#000',
            betSizingQuestionsPlayed: 0,
            betSizingQuestionsCorrect: 0,
        }
    }

    componentDidMount() {
        this.getBetSizingFromStorage()
    }

    componentWillUnmount(){
        let betSizingQuestionsPlayed = this.state.betSizingQuestionsPlayed.toString()
        let betSizingQuestionsCorrect = this.state.betSizingQuestionsCorrect.toString()
        this.saveStatsInStorage(betSizingQuestionsPlayed, betSizingQuestionsCorrect)
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
            this.setState({betSizingQuestionsCorrect: betSizingQuestionsCorrectNum})
        }).done();
    }

    saveStatsInStorage = async ( betSizingQuestionsPlayed, betSizingQuestionsCorrect ) => {
        try {
            await AsyncStorage.setItem('betSizingQuestionsPlayed', betSizingQuestionsPlayed);
        } catch (error) {}
        try {
            await AsyncStorage.setItem('betSizingQuestionsCorrect', betSizingQuestionsCorrect);
        } catch (error) {}
    }

    newQuestion = () => {
        this.setState({
            showAnswer: false,
            unit1ButtonColor: '#000',
            unit2ButtonColor: '#000',
            unit3ButtonColor: '#000',
            unit4ButtonColor: '#000',
            unit5ButtonColor: '#000',
            unit6ButtonColor: '#000',
            unit12ButtonColor: '#000',
        }, () => this.generateRandomCount())
    }

    generateRandomCount = () => {
        const betCountArray = [0,1,2,3,4,5,6]
        let randomCount;
        randomCount = betCountArray[Math.floor(Math.random()*betCountArray.length)]
        if(this.state.randomCount !== randomCount){
            this.setState({
                randomCount: randomCount,
            })
        } else {
            randomCount = betCountArray[Math.floor(Math.random()*betCountArray.length)]
            if(this.state.randomCount !== randomCount){
                this.setState({
                    randomCount: randomCount,
                })
            } else {
                randomCount = betCountArray[Math.floor(Math.random()*betCountArray.length)]
                this.setState({
                    randomCount: randomCount,
                })
            }
            
        }
    }

    setAnswerTo1 = () => {
        this.setState({
            answer: 1
        }, () => this.checkAnswer(this.state.answer))
    }

    setAnswerTo2 = () => {
        this.setState({
            answer: 2
        }, () => this.checkAnswer(this.state.answer))
    }

    setAnswerTo3 = () => {
        this.setState({
            answer: 3
        }, () => this.checkAnswer(this.state.answer))
    }

    setAnswerTo4 = () => {
        this.setState({
            answer: 4
        }, () => this.checkAnswer(this.state.answer))
    }

    setAnswerTo5 = () => {
        this.setState({
            answer: 5
        }, () => this.checkAnswer(this.state.answer))
    }
    setAnswerTo6 = () => {
        this.setState({
            answer: 6
        }, () => this.checkAnswer(this.state.answer))
    }

    setAnswerTo12 = () => {
        this.setState({
            answer: 12
        }, () => this.checkAnswer(this.state.answer))
    }

    checkAnswer = (answer) => {
        this.setState(prevState => ({ betSizingQuestionsPlayed: prevState.betSizingQuestionsPlayed += 1 }))
        let count = this.state.randomCount
        
        if (answer === 1 && count === 0 ){
            this.setState({ unit1ButtonColor: '#055902' })
            this.displayOutputCorrect()
        } else if (answer === 2 && count === 1 ){
            this.setState({ unit2ButtonColor: '#055902' })
            this.displayOutputCorrect()
        } else if (answer === 3 && count === 2 ){
            this.setState({ unit3ButtonColor: '#055902' })
            this.displayOutputCorrect()
        } else if (answer === 4 && count === 3 ){
            this.setState({ unit4ButtonColor: '#055902' })
            this.displayOutputCorrect()
        } else if (answer === 5 && count === 4 ){
            this.setState({ unit5ButtonColor: '#055902' })
            this.displayOutputCorrect()
        } else if (answer === 6 && count === 5 ){
            this.setState({ unit6ButtonColor: '#055902' })
            this.displayOutputCorrect()
        } else if (answer === 12 && count === 6 ){
            this.setState({ unit12ButtonColor: '#055902' })
            this.displayOutputCorrect()
        } else{
            this.displayOutputIncorrect(answer)
        }
    }

    displayOutputCorrect = () => {
        this.setState(prevState => ({ 
            betSizingQuestionsCorrect: prevState.betSizingQuestionsCorrect += 1,
        }))
    }

    displayOutputIncorrect = (answer) => {
        let count = this.state.randomCount
        if(answer === 1){
            this.setState({ unit1ButtonColor: '#ff0000' })
        } else if (answer === 2){
            this.setState({ unit2ButtonColor: '#ff0000' })
        } else if (answer === 3){
            this.setState({ unit3ButtonColor: '#ff0000' })
        } else if (answer === 4){
            this.setState({ unit4ButtonColor: '#ff0000' })
        } else if (answer === 5){
            this.setState({ unit5ButtonColor: '#ff0000' })
        } else if (answer === 6){
            this.setState({ unit6ButtonColor: '#ff0000' })
        } else if (answer === 12){
            this.setState({ unit12ButtonColor: '#ff0000' })
        }

        if(count === 0){
            this.setState({ unit1ButtonColor: '#055902' })
        } else if (count === 1){
            this.setState({ unit2ButtonColor: '#055902' })
        } else if (count === 2){
            this.setState({ unit3ButtonColor: '#055902' })
        } else if (count === 3){
            this.setState({ unit4ButtonColor: '#055902' })
        } else if (count === 4){
            this.setState({ unit5ButtonColor: '#055902' })
        } else if (count === 5){
            this.setState({ unit6ButtonColor: '#055902' })
        } else if (count === 6){
            this.setState({ unit12ButtonColor: '#055902' })
        }
    }

    static navigationOptions = {
        title: 'Bet Sizing Drill',
    };
    
    render() {
        const {navigate} = this.props.navigation;
        
        return (
            <ScrollView>
            <View style={styles.container}>
                <View className='container'>
                    <View style={styles.selectContainer}>
                        <Text style={styles.textStyle}>Press to Select a:</Text>
                        <View style={styles.answerButton}>
                            <Button color='blue' onPress={this.newQuestion} title='New Question'></Button>
                        </View>
                        <Text style={styles.textStyle}>If the True Count is: <Text style={styles.question}>{this.state.randomCount} </Text>  
                        </Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textStyle}>How much should you bet?</Text>
                        <Text style={styles.textStyle2} >(minumum bet size is 1 unit)</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textStyle}>Select how much you should bet:</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button color={this.state.unit1ButtonColor} onPress={this.setAnswerTo1} title='1  hand  of  1  Unit'></Button>
                        <Button color={this.state.unit2ButtonColor} onPress={this.setAnswerTo2} title='1  hand  of  2  Units'></Button>
                        <Button color={this.state.unit3ButtonColor}  onPress={this.setAnswerTo3} title='1  hand  of  3  Units'></Button>
                        <Button color={this.state.unit4ButtonColor}  onPress={this.setAnswerTo4} title='1  hand  of  4  Units'></Button>
                        <Button color={this.state.unit5ButtonColor}  onPress={this.setAnswerTo5} title='1  hand  of  5  Units'></Button>
                        <Button color={this.state.unit6ButtonColor}  onPress={this.setAnswerTo6} title='1  hand  of  6  Units'></Button>
                        <Button color={this.state.unit12ButtonColor}  onPress={this.setAnswerTo12} title='2  hands  of  6  Units'></Button>
                    </View>

                    {
                    this.state.showAnswer ?
                    <View style={styles.answerContainer}>
                        <Text style={styles.answerStyle}> {this.state.output} </Text>
                    </View>
                    :
                    null
                    }
                    
                    
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
        height: ScreenHeight,
    },
    selectContainer: {
        marginTop: -20,
        flex: 0,
        justifyContent: 'space-evenly',
        height: 150,
        alignItems: 'center',
        alignContent: 'center',
    },
    textStyle: {
        fontSize: 18, 
        fontWeight: 'bold', 
        color: 'white'
    },
    textStyle2: {
        color: 'blue',
    },
    buttonContainer: {
        marginTop: 0,
        flex: 0,
        justifyContent: 'space-evenly',
        height: 350,
    },
    answerContainer: {
        marginTop: 30,
    },
    answerStyle: {
        fontSize: 22, 
        fontWeight: 'bold', 
        color: 'white',
        textAlign: 'center',
    },
    answerButton: {
        marginTop: 5,
    },
    question: {
        color: 'orange',
        fontWeight: '900',
        fontSize: 24,
    }
});

export default BetSizing