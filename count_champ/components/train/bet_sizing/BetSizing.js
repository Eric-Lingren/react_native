import * as React from 'react';
import { Button, Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import { Constants } from 'expo';

let ScreenHeight = Dimensions.get("window").height;

class BetSizing extends React.Component {
    constructor(){
        super()
        this.state = {
            randomCount: 0,
            output: '',
            answer: 0,
            showAnswer: false
        }
    }

    newQuestion = () => {
        this.setState({
            showAnswer: false
        }, () => this.generateRandomCount())
    }

    generateRandomCount = () => {
        const betCountArray = [0,1,2,3,4]
        let randomCount = betCountArray[Math.floor(Math.random()*betCountArray.length)]
        this.setState({
            randomCount: randomCount,
        })
    }

    setAnswerTo1 = () => {
        this.setState({
            answer: 1
        }, () => this.checkAnswer())
    }

    setAnswerTo1 = () => {
        this.setState({
            answer: 1
        }, () => this.checkAnswer())
    }

    setAnswerTo2 = () => {
        this.setState({
            answer: 2
        }, () => this.checkAnswer())
    }

    setAnswerTo4 = () => {
        this.setState({
            answer: 4
        }, () => this.checkAnswer())
    }

    setAnswerTo8 = () => {
        this.setState({
            answer: 8
        }, () => this.checkAnswer())
    }

    setAnswerTo16 = () => {
        this.setState({
            answer: 16
        }, () => this.checkAnswer())
    }

    checkAnswer = () => {
        let answer = parseInt(this.state.answer)
        let count = this.state.randomCount

        console.log('answer is ' + answer)
        console.log(typeof(answer))
    
        console.log( 'count is ' + count)
        console.log(typeof(count))

        if (answer === 1 && count === 0 ){
            this.displayOutputCorrect()
        } else if (answer === 2 && count === 1 ){
            this.displayOutputCorrect()
        } else if (answer === 4 && count === 2 ){
            this.displayOutputCorrect()
        } else if (answer === 8 && count === 3 ){
            this.displayOutputCorrect()
        } else if (answer === 16 && count === 4 ){
            this.displayOutputCorrect()
        } else{
            this.displayOutputIncorrect()
        }
    }

    displayOutputCorrect = () => {
        this.setState({
            output: 'Correct!',
            showAnswer: true
        })
    }

    displayOutputIncorrect = () => {
        this.setState({
            output: 'Try Again...',
            showAnswer: true
        })
    }

    static navigationOptions = {
        title: 'Bet Sizing Drill',
    };
    
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <View className='container'>
                    <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>Your minumum bet size is 1 unit.</Text>
                    <Text style={styles.textStyle}>What should your bet be if... </Text>
                    <Text style={styles.textStyle}>The true count is:  {this.state.randomCount}  ? </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button color="#000000" onPress={this.setAnswerTo1} title='1  hand  of  1  Unit'></Button>
                        <Button color="#000000" onPress={this.setAnswerTo2} title='1  hand  of  2  Units'></Button>
                        <Button color="#000000" onPress={this.setAnswerTo4} title='1  hand  of  4  Units'></Button>
                        <Button color="#000000" onPress={this.setAnswerTo8} title='1  hand  of  8  Units'></Button>
                        <Button color="#000000" onPress={this.setAnswerTo16} title='2  hands  of  8  Units'></Button>
                    </View>
                    {
                    this.state.showAnswer ?
                    <View>
                        <Text style={styles.answerStyle}> {this.state.output} </Text>
                    </View>
                    :
                    null
                    }
                    
                    <View style={styles.answerButton}>
                        <Button color="#000000" onPress={this.newQuestion} title='New Question'></Button>
                    </View>
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
        height: 150,
        alignItems: 'center',
        alignContent: 'center',
    },
    textStyle: {
        fontSize: 18, 
        fontWeight: 'bold', 
        color: 'white'
    },
    buttonContainer: {
        marginTop: 0,
        flex: 0,
        justifyContent: 'space-evenly',
        height: 250,
    },
    answerStyle: {
        fontSize: 22, 
        fontWeight: 'bold', 
        color: 'white'
    },
    answerButton: {
        marginTop: 25,
    }
});

export default BetSizing