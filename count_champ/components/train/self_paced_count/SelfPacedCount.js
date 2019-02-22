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
            //  Once state is set from the new card, re-run the player hand total functions
            }, () => this.whatsTheCount() )
        })
    }

    whatsTheCount = () => {
        if(this.state.remainingCardsInDeck <= 1){
            axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/shuffle/`).then(response => {
            })
        }
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

    hideShowRunningCount = () => {
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

    hideShowCountDiv = () => {
        if (this.state.runningCountVisible) {
            return <Text>Click To Show Running Count</Text>
        } else {
            return <Text>Click To Hide Running Count</Text>
        }
    }

    // navigate = this.props.navigation.state.params.name;
    static navigationOptions = {
        title: 'Count Champ'
    };
    
    render() {
        
        console.log(this.props.navigation.state.params.name)
        return (
            <View style={styles.container}>
                <View className='trainingWrapper'>
                    <View className='container'>
                        <Text className='trainDrillSubtitle'>Self Paced Count Drill</Text>
                        <View className='deckDisplay'>

                            <Image
                                style={{width: 250, height: 350}}
                                source={{uri: this.state.cardsDealtImages}}
                            />

                        </View>
                        <Button onPress={this.dealCard} title="Deal Card">Deal Card</Button>
                        <Text onPress={this.hideShowRunningCount} className='toggleCount'>{this.hideShowCountDiv()} </Text>
                        <Text className={this.state.runningCountVisible ? 'hideCountDiv' : 'showCountDiv' }> Running Count: {this.state.count}</Text>
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
    buttonContainer: {
        marginTop: 100,
        flex: 0,
        justifyContent: 'space-evenly',
        height: 350,
    },
});

export default SelfPacedCount