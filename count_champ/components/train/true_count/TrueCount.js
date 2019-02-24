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
            guess: 1,
            answer: 1,
            wereTheyRight: true
        }
    }

    clickNew = () => {
        console.log('guess is : ' + this.state.guess)
        // this.setState({
        //     wereTheyRight: true
        // })
        this.generateNumbers()
    }
    generateNumbers = () => {
        const decksLeftArray = [1,2,3,4,5,6,7,8];
        let randomDeck = decksLeftArray[Math.floor(Math.random()*decksLeftArray.length)]
        const countArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
        let randomCount = countArray[Math.floor(Math.random()*countArray.length)]
        this.setState({
            randomDeck: randomDeck,
            randomCount: randomCount
        })
    }

    handleChange = event => {
        this.setState({ 
            [event.target.name]: event.target.value,  
        }) 
    }

    clickCheck = () => {
        console.log('check was clicked')
        const deck = this.state.randomDeck;
        const count = this.state.randomCount;
        const correctAnswer = (Math.round( count / deck));
        this.setState({
            answer: correctAnswer,
        }, () => this.checkAnswer() )
    }

    checkAnswer = () => {
        let guessNumber = parseInt(this.state.guess)
        if (this.state.answer === guessNumber){
            this.setState({
                wereTheyRight: true,
            })
            return <h2>Correct!</h2>
        } else{
            this.setState({
                wereTheyRight: false
            })
            return <h2> answered wrong</h2>
        }
    }
    

    static navigationOptions = {
        title: 'Count Champ',
    };
    
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <View className='container'>
                    <Text className='trainDrillSubtitle'>Convert to True Count Drill</Text>
                    <Text className='subTitle'>Running Count is: {this.state.randomCount} </Text>
                    <Text className='subTitle'>Decks Left: {this.state.randomDeck}</Text>
                    <Text className='subTitleMargin'>What's the true count? (round) </Text>
                    <TextInput
                        style={{height: 40, borderColor: 'black', borderWidth: 1, borderRadius: 10, backgroundColor: 'white', opacity: 0.7, width: 100, paddingTop: 5, paddingBottom: 5, paddingLeft: 35, fontSize: 26, fontWeight: 'bold'}}
                        keyboardType = 'phone-pad'
                        maxLength={2}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                    {/* <form className='runningCountTrueCountForm'>
                        <input  className='runCountTrueCountInput' 
                                type='number' 
                                name='guess' 
                                value={this.state.guess} 
                                onChange={this.handleChange} 
                                placeholder='Enter True Count' >
                        </input>
                    </form> */}
                    <View style={styles.buttonContainer}>
                        <Button color="#000000" onPress={this.clickNew} title="New"></Button>
                        <Button color="#000000" onPress={this.clickCheck} title="Check"></Button>
                    </View>
                    <Text className={this.state.wereTheyRight ? 'showCountDiv' : 'hideCountDiv' }>Correct!</Text>
                    <Text className={this.state.wereTheyRight ? 'hideCountDiv' : 'showCountDiv' }>The Answer Was: {this.state.answer}</Text>
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
    buttonContainer: {
        marginTop: 0,
        flex: 0,
        justifyContent: 'space-evenly',
        height: 120,
    },
});                                    

export default TrueCount