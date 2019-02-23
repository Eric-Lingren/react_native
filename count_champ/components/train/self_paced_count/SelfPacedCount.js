import * as React from 'react';
import { Button, Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import { Constants } from 'expo';
import axios from 'axios'

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
            remainingCardsInDeck: 10
        }
        
    }

    componentDidMount(){
        axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1').then(response => {
            const deckID = response.data.deck_id;
            this.setState({
                deckID: deckID,
            })
        })
    }

    dealCard = () => {
        axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=1`).then(response => {
            const oneCardDealt = response.data.cards[0].code;
            const cardImage = response.data.cards[0].image
            const cardValue = response.data.cards[0].value
            const remaining = response.data.remaining
            this.setState(prevState => {
            return {
                cardsDealt: [...prevState.cardsDealt, oneCardDealt],
                cardsDealtImages: cardImage,
                cardsDealtValues: [...prevState.cardsDealtValues, cardValue],
                currentCardValue: cardValue,
                remainingCardsInDeck: remaining
            }
            }, () => this.whatsTheCount() )
        })
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
        title: 'Count Champ'
    };
    
    render() {
        return (
            <View style={styles.container}>
                <View className='trainingWrapper'>
                    <View style={styles.deckContainer}>

                        <Image
                            style={styles.deckDisplay}
                            source={{uri: this.state.cardsDealtImages}}
                        />

                    </View>
                    <View style={styles.buttonContainer}>
                        <Button color="#000000" onPress={this.dealCard} title="Deal Card"></Button>
                        { 
                            this.state.runningCountVisible ?
                            <Button color="#000000" onPress={this.toggleShowCount} title="Hide Count">Show Count</Button>
                            :
                            <Button color="#000000" onPress={this.toggleShowCount} title="Show Count">Show Count</Button>
                        }
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
        width: 250, 
        height: 350,
    },
    buttonContainer: {
        marginTop: 0,
        flex: 0,
        justifyContent: 'space-evenly',
        height: 120,
    },
    count: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "#ffffff",
        textAlign: 'center',


    },
});

export default SelfPacedCount