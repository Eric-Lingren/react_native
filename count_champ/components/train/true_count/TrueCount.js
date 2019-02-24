import * as React from 'react';
import { Button, Text, View, StyleSheet, Image, TextInput, Dimensions } from 'react-native';
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
            showAnswerBox: false
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
        let guessNumber = parseInt(this.state.input)
        if (this.state.answer === guessNumber){
            this.setState({
                wereTheyRight: true,
            })
        } else{
            this.setState({
                wereTheyRight: false
            })
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
                        <Text style={styles.textStyle}> Running Count: {this.state.randomCount} </Text>
                        <Text style={styles.textStyle}> Decks Left: {this.state.randomDeck} </Text>
                        <Text style={styles.textStyle}> What's the true count? (round down) </Text>
                        <TextInput
                            style={{height: 40, borderColor: 'black', borderWidth: 1, borderRadius: 10, backgroundColor: 'white', opacity: 0.7, width: 100, paddingTop: 5, paddingBottom: 5, paddingLeft: 35, fontSize: 26, fontWeight: 'bold'}}
                            keyboardType = 'phone-pad'
                            maxLength={2}
                            onChangeText={(input) => this.setState({input})}
                            value={this.state.input}
                        />
                    </View>
                    
                    <View style={styles.buttonContainer}>
                        <Button color="#000000" onPress={this.generateNewQuestion} title="New Question"></Button>
                        <Button color="#000000" onPress={this.clickCheck} title="Check Answer"></Button>
                    </View>
                    {
                        this.state.showAnswerBox ?
                        <View style={styles.answerContainer}>
                            { this.state.wereTheyRight ? <Text style={styles.answerStyle}>Correct!</Text> : <Text style={styles.answerStyle}>Answer Was: {this.state.answer}</Text>
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
        height: 200,
        alignItems: 'center',
        alignContent: 'center',
    },
    textStyle: {
        fontSize: 18, 
        fontWeight: 'bold', 
        color: 'white'
    },
    answerContainer: {
        marginTop: 0,
        flex: 0,
        alignItems: 'center',
        alignContent: 'center',
    },
    answerStyle: {
        fontSize: 22, 
        fontWeight: 'bold', 
        color: 'white'
    },
    buttonContainer: {
        marginTop: 0,
        flex: 0,
        justifyContent: 'space-evenly',
        height: 120,
    },
});                                    

export default TrueCount