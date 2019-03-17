import * as React from 'react';
import { Button, Text, View, StyleSheet, AsyncStorage, TextInput, Dimensions } from 'react-native';
import { Constants } from 'expo';

let ScreenHeight = Dimensions.get("window").height;

class TrueCount extends React.Component {
    constructor(){
        super()
        this.state = {
            randomDeck: 2,
            randomCount: 2,
            answer: 1,
            wereTheyRight: '',
            input: '',
            showAnswerBox: false,
            questionsPlayed: 0,
            questionsCorrect: 0,
        }
    }

    componentDidMount(){
        this.getTrueCountStatsFromStorage()
    }

    componentWillUnmount(){
        let trueCountQuestionsPlayed = this.state.questionsPlayed.toString()
        let trueCountQuestionsCorrect = this.state.questionsCorrect.toString()
        
        this.saveStatsInStorage(trueCountQuestionsPlayed, trueCountQuestionsCorrect)
    }

    getTrueCountStatsFromStorage = () => {
        AsyncStorage.getItem("trueCountQuestionsPlayed").then((trueCountQuestionsPlayed) => {
            let trueCountQuestionsPlayedNum;
            trueCountQuestionsPlayed === 'NaN' || trueCountQuestionsPlayed === 'null' ? trueCountQuestionsPlayedNum = 0 : trueCountQuestionsPlayedNum = parseInt(trueCountQuestionsPlayed)
            this.setState({questionsPlayed: trueCountQuestionsPlayedNum} )
        }).done();
        AsyncStorage.getItem("trueCountQuestionsCorrect").then((trueCountQuestionsCorrect) => {
            let trueCountQuestionsCorrectNum;
            trueCountQuestionsCorrect === 'NaN' || trueCountQuestionsCorrect === 'null' ? trueCountQuestionsCorrectNum = 0 : trueCountQuestionsCorrectNum = parseInt(trueCountQuestionsCorrect)
            this.setState({questionsCorrect: trueCountQuestionsCorrectNum})
        }).done();
        
    }

    saveStatsInStorage = async (trueCountQuestionsPlayed, trueCountQuestionsCorrect) => {
        try {
            await AsyncStorage.setItem('trueCountQuestionsPlayed', trueCountQuestionsPlayed);
        } catch (error) {
        }
        try {
            await AsyncStorage.setItem('trueCountQuestionsCorrect', trueCountQuestionsCorrect);
        } catch (error) {
        }
    }

    generateNewQuestion = () => {
        const decksLeftArray = [1,2,3,4,5,6,7,8];
        let randomDeck = decksLeftArray[Math.floor(Math.random()*decksLeftArray.length)]
        const countArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
        let randomCount = countArray[Math.floor(Math.random()*countArray.length)]
        this.setState({
            randomDeck: randomDeck,
            randomCount: randomCount,
            input: '',
            showAnswerBox: false
        })
    }

    clickCheck = () => {
        const deck = this.state.randomDeck;
        const count = this.state.randomCount;
        const correctAnswer = (Math.floor( count / deck));
        this.setState({
            answer: correctAnswer,
            showAnswerBox: true
        }, () => this.checkAnswer() )
    }

    checkAnswer = () => {
        this.setState(prevState => ({ questionsPlayed: prevState.questionsPlayed += 1 }))
        let guessNumber = parseInt(this.state.input)
        if (this.state.answer === guessNumber){
            this.setState(prevState => ({ 
                wereTheyRight: true,
                questionsCorrect: prevState.questionsCorrect += 1 
            }))
        } else{
            this.setState({ wereTheyRight: false })
        }
    }
    
    static navigationOptions = {
        title: 'True Count Drill',
    };
    
    render() { 
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textStyle}>Press to Select a:</Text>
                    </View>
                    <View style={styles.questionContainer}>
                        <Button color='blue' onPress={this.generateNewQuestion} title='New Question'></Button>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textStyle2}>If the</Text>
                        <Text style={styles.textStyle}> Running Count: <Text style={styles.question}> {this.state.randomCount} </Text> </Text>
                        <Text style={styles.textStyle2}>and there are</Text>
                        <Text style={styles.textStyle}> Decks Left: <Text style={styles.question}> {this.state.randomDeck}</Text> </Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textStyle}> What is the true count? (round down) </Text>
                        <TextInput
                            style={{height: 40, borderColor: 'black', borderWidth: 1, borderRadius: 10, backgroundColor: 'white', opacity: 0.7, width: 100, paddingTop: 5, paddingBottom: 5, paddingLeft: 35, fontSize: 26, fontWeight: 'bold'}}
                            keyboardType = 'phone-pad'
                            maxLength={2}
                            onChangeText={(input) => this.setState({input})}
                            value={this.state.input}
                        />
                    </View>                    
                    <View>
                        <Button color="blue" onPress={this.clickCheck} title="Check Answer"></Button>
                    </View>
                    {
                        this.state.showAnswerBox ?
                        <View style={styles.answerContainer}>
                            { this.state.wereTheyRight ? <Text style={styles.correctStyle}>Correct!</Text> : <Text style={styles.wrongStyle}>Sorry, the Correct Answer Was: {this.state.answer}</Text>
                            }
                        </View>
                        :
                        null
                    }
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
    textContainer: {
        marginTop: 0,
        flex: 0,
        justifyContent: 'space-evenly',
        height: 140,
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
        fontSize: 16,
    },
    answerContainer: {
        marginTop: 0,
        flex: 0,
        alignItems: 'center',
        alignContent: 'center',
    },
    correctStyle: {
        fontSize: 22, 
        fontWeight: 'bold', 
        color: 'blue',
    },
    wrongStyle: {
        fontSize: 20, 
        fontWeight: 'bold', 
        color: 'red',
    },
    questionContainer: {
        marginTop: -70,
        flex: 0,
        justifyContent: 'space-evenly',
        height: 90,
    },
    question: {
        color: 'orange',
        fontWeight: '900',
        fontSize: 24,
    },
});                                    

export default TrueCount