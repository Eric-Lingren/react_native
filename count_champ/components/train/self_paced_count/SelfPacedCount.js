import * as React from 'react';
import { Button, Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import { Constants } from 'expo';
import axios from 'axios';
import AwesomeButton from 'react-native-really-awesome-button';

let ScreenHeight = Dimensions.get("window").height;

class SelfPacedCount extends React.Component {
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
            remainingCardsInDeck: 10,
            deck: [],
            index: 0,
        }
        
    }

    componentDidMount(){
        this.getDeck()
    }

    getDeck = () => {
        axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=20').then(response => {
            const deckID = response.data.deck_id;
            this.setState({
                deckID: deckID,
            }, () => this.setDeck())
        })
    }
    setDeck = () => {
        axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=1040`).then(response => {
                this.setState({deck: response.data.cards})
            })
    }


    dealCard = () => {
        let deck = this.state.deck
        let index = this.state.index

        const oneCardDealt = deck[index].code;
        const cardImage = deck[index].image
        const cardValue = deck[index].value
        
        this.setState(prevState => {
            return {
                cardsDealt: [...prevState.cardsDealt, oneCardDealt],
                cardsDealtImages: cardImage,
                cardsDealtValues: [...prevState.cardsDealtValues, cardValue],
                currentCardValue: cardValue,
                index: prevState.index += 1

            }
        }, () => this.whatsTheCount() )
        
        // axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=1`).then(response => {
        //     const oneCardDealt = response.data.cards[0].code;
        //     const cardImage = response.data.cards[0].image
        //     const cardValue = response.data.cards[0].value
        //     const remaining = response.data.remaining
        //     this.setState(prevState => {
        //     return {
        //         cardsDealt: [...prevState.cardsDealt, oneCardDealt],
        //         cardsDealtImages: cardImage,
        //         cardsDealtValues: [...prevState.cardsDealtValues, cardValue],
        //         currentCardValue: cardValue,
        //         remainingCardsInDeck: remaining
        //     }
        //     }, () => this.whatsTheCount() )
        // })
    }

    whatsTheCount = () => {
        if(this.state.remainingCardsInDeck <= 1){
            axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/shuffle/`).then(response => {
            })
        }
        //  If card value is 10 or greater, count is decremented by 1
        if (this.state.currentCardValue === '10' || this.state.currentCardValue === 'JACK' || this.state.currentCardValue === 'QUEEN' || this.state.currentCardValue === 'KING' || this.state.currentCardValue === 'ACE'){
            this.setState(prevState => {
                return{
                    count: prevState.count -1
                }
            })
        //  If card value is 6 or less, count is incremented by 1
        } else if(this.state.currentCardValue < 7){
            this.setState(prevState => {
                return{
                    count: prevState.count +1
                }
            })
        }
    }

    toggleShowCount = () => {
        if (this.state.runningCountVisible){
            this.setState({
                runningCountVisible: false
            }); 
        } else {
            this.setState({
                runningCountVisible: true
            })
        }
    }

    static navigationOptions = {
        title: 'Self Paced Count Drill'
    };
    
    render() {
        return (
            <View style={styles.container}>
                {/* <View style={styles.textContainer}>
                    <Text style={styles.textStyleTitle}>Practice your Card Counting Abilities</Text>
                </View> */}
                <View className='trainingWrapper'>
                    <View style={styles.deckContainer}>
                        <Image
                            style={styles.deckDisplay}
                            source={{uri: this.state.cardsDealtImages}}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <AwesomeButton
                            type='primary'
                            backgroundColor='#000'
                            textColor='#FFDF00'
                            textSize={16}
                            raiseLevel={0}
                            stretch={true}
                            height={40}
                            onPress={this.dealCard}
                            >
                            Deal Card
                        </AwesomeButton>
                        <AwesomeButton
                            type='primary'
                            backgroundColor='#FFDF00'
                            textColor='#000'
                            textSize={16}
                            raiseLevel={0}
                            width={200}
                            height={40}
                            onPress={this.toggleShowCount}
                            >
                            {this.state.runningCountVisible ? 'Hide Count' : 'Show Count' }
                        </AwesomeButton>
                    </View>
                    <View>
                    {
                        this.state.runningCountVisible ?
                        <Text style={styles.count}> Running Count: {this.state.count}</Text>
                        :
                        null
                    }
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
    deckContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: 15,
    },
    deckDisplay: {
        width: 200, 
        height: 280,
    },
    buttonContainer: {
        marginTop: 0,
        flex: 0,
        justifyContent: 'space-evenly',
        height: 120,
        alignContent:'center',
        alignItems: 'center',
    },
    count: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "#ffffff",
        textAlign: 'center',
    },
    textContainer: {
        marginTop: -20,
        flex: 0,
        justifyContent: 'space-evenly',
        height: 80,
        alignItems: 'center',
        alignContent: 'center',
    },
    textStyleTitle: {
        marginTop: -15,
        fontSize: 22, 
        fontWeight: 'bold', 
        color: '#ffb600',   
    },
});

export default SelfPacedCount