import * as React from 'react';
import { Button, Text, View, StyleSheet, TextInput,  Image, Dimensions } from 'react-native';
import { Constants } from 'expo';
import axios from 'axios'

let ScreenHeight = Dimensions.get("window").height;

class SpeedCount extends React.Component {
    constructor(){
        super()
        this.state = {
            deckID: '',
            cardsDealt: [],
            cardsDealtImages: 'none',
            cardsDealtValues: [],
            currentCardValue: 0,
            count: 0,
            runningCountVisible: false,
            whatsTheCountVisible: false,
            cardsPerSecond: 1,
            howFast: 1000,
            input: '',
        }
    }

    componentDidMount(){
        axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=8').then(response => {
            const deckID = response.data.deck_id;
            this.setState({
                deckID: deckID,
            })
        })
    }

    dealCard = () => {
        this.setState({
            runningCountVisible: false,
            whatsTheCountVisible: false, 
        })
        
        let speed;
        if(this.state.input){
            speed = ( 1000 / (parseInt(this.state.input)) )
        } else {
            speed = 1000
        }

        const timerId = setInterval(()=>{
            axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=1`).then(response => {
                const oneCardDealt = response.data.cards[0].code;
                const cardImage = response.data.cards[0].image
                const cardValue = response.data.cards[0].value
                this.setState(prevState => {
                    return {
                    cardsDealt: [...prevState.cardsDealt, oneCardDealt],
                    cardsDealtImages: cardImage,
                    cardsDealtValues: [...prevState.cardsDealtValues, cardValue],
                    currentCardValue: cardValue,
                }
                }, () => this.whatsTheCount() )
            })
        },speed)
        setTimeout( ()=> { 
            clearInterval(timerId)
            this.countIsFinished()
        }, 5000)  
    }
    
    whatsTheCount = () => {
        //  if card value is 10 or greater, count is subtracted by 1
        if (this.state.currentCardValue === '10' || this.state.currentCardValue === 'JACK' || this.state.currentCardValue === 'QUEEN' || this.state.currentCardValue === 'KING' || this.state.currentCardValue === 'ACE'){
            this.setState(prevState => {
                return{
                    count: prevState.count -1
                }
            })
        //  if card value is 6 or less, count is added by 1
        } else if(this.state.currentCardValue < 7){
            this.setState(prevState => {
                return{
                    count: prevState.count +1
                }
            })
        }
    }

    countIsFinished = () => {
        setTimeout ( () => {
            this.setState({
                cardsDealtImages: null,
                whatsTheCountVisible: true,
                input: ''
            }) 
        }, 1000)
        this.displayCount()    
    }

    displayCount = () => {
        setTimeout ( () => {
            this.setState({
                runningCountVisible: true,
            }) 
        }, 3000)  
    }

    static navigationOptions = {
        title: 'Speed Count Drill',
    };
    
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textStyle}>Cards Per Second:</Text> 
                        <TextInput
                            style={{height: 40, borderColor: 'black', borderWidth: 1, borderRadius: 10, backgroundColor: 'white', opacity: 0.7, width: 100, paddingTop: 5, paddingBottom: 5, paddingLeft: 35, fontSize: 26, fontWeight: 'bold'}}
                            keyboardType = 'phone-pad'
                            maxLength={3}
                            onChangeText={(input) => this.setState({input})}
                            value={this.state.input}
                        />
                    </View>
                    <View >
                        <View style={styles.deckContainer}>
                            <Image style={styles.deckDisplay} source={{uri: this.state.cardsDealtImages}} />
                            {   this.state.whatsTheCountVisible ? <Text style={styles.textStyleAnswer}>Whats The Count?</Text>
                                : null
                            }
                            {   this.state.runningCountVisible ? <Text style={styles.textStyleAnswer}>{this.state.count}</Text> 
                                : null
                            }
                        </View>
                    </View>
                    <Button color="#000000" onPress={this.dealCard} title="Start"></Button>
                    
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
        height: 100,
        alignItems: 'center',
        alignContent: 'center',
    },
    deckContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: 15,
    },
    deckDisplay: {
        width: 250, 
        height: 350,
    },
    answers: {
        marginTop: -100,
    },
    buttonContainer: {
        marginTop: 100,
        flex: 0,
        justifyContent: 'space-evenly',
        height: 350,
    },
    textStyle: {
        fontSize: 18, 
        fontWeight: 'bold', 
        color: 'white'
    },
    textStyleAnswer: {
        fontSize: 22, 
        fontWeight: 'bold', 
        color: 'white'
    }
});

export default SpeedCount