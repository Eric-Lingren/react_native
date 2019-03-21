import * as React from 'react';
import { Button, Text, View, StyleSheet, AsyncStorage, TextInput, Dimensions } from 'react-native';
import { Constants } from 'expo';
import SubscribeModal from '../../subscribe_modal/SubscribeModal';
import AwesomeButton from 'react-native-really-awesome-button';

let ScreenWidth = Dimensions.get("window").width;
let ScreenHeight = Dimensions.get("window").height;

/////////////////////////////////////////////////////////////////////////////////////////
////                                                                                 ////
////  To change from premium to free change this.state.showSubscriberModal to true   ////
////                                                                                 ////
/////////////////////////////////////////////////////////////////////////////////////////

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
            showSubscribeModal: true,
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
                {this.state.showSubscribeModal 
                    ?   <View style={styles.modalContainer}>
                            <SubscribeModal />
                        </View>
                    : null
                }
                <View>
                    <View style={styles.questionContainer}>
                        <AwesomeButton
                            type='primary'
                            backgroundColor='#FFDF00'
                            textColor='#000'
                            textSize={16}
                            raiseLevel={0}
                            stretch={true}
                            height={40}
                            onPress={this.generateNewQuestion}                          
                            >
                            New Question
                        </AwesomeButton>
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
                            style={{height: 40, borderColor: 'black', borderWidth: 1, borderRadius: 10, backgroundColor: 'white', opacity: 0.7, width: 100, paddingTop: 5, paddingBottom: 5, paddingLeft: 35, fontSize: 26, fontWeight: 'bold', marginBottom: -40, marginTop: -40}}
                            keyboardType = 'phone-pad'
                            maxLength={2}
                            onChangeText={(input) => this.setState({input})}
                            value={this.state.input}
                        />
                    </View>
                    {this.state.showSubscribeModal 
                        ?   null
                        : 
                        <View style={styles.buttonContainer}>
                            <AwesomeButton
                                type='primary'
                                backgroundColor='#000'
                                textColor='#FFDF00'
                                textSize={16}
                                raiseLevel={0}
                                width={200}
                                height={40}
                                onPress={this.clickCheck}
                                >
                                Check Answer
                            </AwesomeButton>
                        </View>
                    }
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
        marginTop: -20,
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
        margin: 0,
    },
    buttonContainer: {
        marginTop: 0,
        flex: 0,
        justifyContent: 'center',
        height: 120,
        alignItems: 'center',
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
        marginTop: -10,
        flex: 0,
        justifyContent: 'space-evenly',
        height: 90,
    },
    question: {
        color: '#FFDF00',
        fontWeight: '900',
        fontSize: 24,
    },
    modalContainer: {
        width: ScreenWidth + 30, 
        marginLeft: -8,
        marginTop: -25,
        zIndex: 100,
    },
    Button: {
        margin: 5,
    },
});                                    

export default TrueCount 