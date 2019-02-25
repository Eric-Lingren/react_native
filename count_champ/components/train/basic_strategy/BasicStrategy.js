import * as React from 'react';
import { Button, Text, View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { Constants } from 'expo';
import axios from 'axios'

let ScreenHeight = Dimensions.get("window").height;
let bigScreenHeight = ScreenHeight + ScreenHeight

class BasicStrategy extends React.Component {
    constructor(){
        super()
        this.state = {
            deckID: '',
            dealerHand: '',
            dealerImages: '',
            playerCard1: '',
            playerCard2: '',
            playerImage1: '',
            playerImage2: '',
            remainingCardsInDeck: 0,
            playerCard1IsAce : false,
            playerCard2IsAce : false,
            pCard1Number: '',
            pCard2Number: '',
            dHand: '',
            pHand: '',
            // options: ['HIT', 'STAND', 'DOUBLE', 'SPLIT', 'SURRENDER'],
            // playerGuess: '',
            // buttonList: '',
            // buttonClass: 'checkButton',
            // //bottomMargin: '18px',
            // 
        }
    }

    
    
    componentDidMount(){
        this.getDecks()
    }

    getDecks = () => {
        axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=8').then(response => {
            const deckID = response.data.deck_id;
            this.setState({
                deckID: deckID,
            })
        })
    }

    dealCard = () => {
        axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=3`).then(response => {
            
            const dealerCardValue = response.data.cards[0].value  
            const playerCardValue1 = response.data.cards[1].value  
            const playerCardValue2 = response.data.cards[2].value  
            const dealerCardImage = response.data.cards[0].image
            const playerCardImage1 = response.data.cards[1].image
            const playerCardImage2 = response.data.cards[2].image

            // const hands = ['Hit', 'Stand', 'Double', 'Split', 'Surrender']
            // const options = hands.map(hand => <button className='checkButton' onClick={this.checkButton} id='notSelected' 
            //                 name={hand.toUpperCase()} value={hand.toUpperCase()} >{hand}</button>)

            this.setState({
                dealerHand: dealerCardValue,
                dealerImages: dealerCardImage,
                playerCard1: playerCardValue1, 
                playerCard2: playerCardValue2,
                playerImage1: playerCardImage1, 
                playerImage2: playerCardImage2,
                remainingCardsInDeck: response.data.remaining,
                //buttonList: options
            }, () => this.showCardData() )
        })
    }
    showCardData = () => {
        if(this.state.remainingCardsInDeck <= 5){
            axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/shuffle/`).then(response => {
            })
        }
        const dCard = this.state.dealerHand;
        let dCardNumber = 0
        const pCard1 = this.state.playerCard1;
        let pCard1Number = 0
        const pCard2 = this.state.playerCard2;
        let pCard2Number = 0

        //  Sets the proper numberical values to dealer hand for future evaluation
        if (dCard === 'JACK' ||dCard === 'QUEEN' || dCard === 'KING' ){
            dCardNumber  = 10
            this.setState({
                dHand: dCardNumber
            })
        } else if (dCard === 'ACE') {
            dCardNumber  = 11
            this.setState({
                dhand: dCardNumber
            })
        } else {
            dCardNumber  = dCard
            this.setState({
                dhand: dCardNumber
            })
        }

        //  Sets the proper numberical values to player card 1 for future evaluation
        if (pCard1 === 'JACK' ||pCard1 === 'QUEEN' || pCard1 === 'KING' ){
            pCard1Number  = 10
        } else if (pCard1 === 'ACE' ) {
            pCard1Number  = 11
            this.setState({
                playerCard1IsAce: true,
            })
        } else {
            pCard1Number = pCard1 
        }

        //  Sets the proper numerical values to player card 2 for future evaluation
        if (pCard2 === 'JACK' ||pCard2 === 'QUEEN' || pCard2 === 'KING' ){
            pCard2Number  = 10
        } else if (pCard2 === 'ACE' ) {
            pCard2Number  = 11
            this.setState({
                playerCard2IsAce: true,
            })
        } else {
            pCard2Number = pCard2 
        }

        //  Sums the 2 player cards into 1 hand value
        const pHand = parseInt(pCard1Number) +  parseInt(pCard2Number)
        const dHand = dCardNumber

        //  Sets state of values parsed above for other functions to access.
        this.setState({
            pHand: pHand,
            dHand: dHand,
            pCard1Number: pCard1Number,
            pCard2Number: pCard2Number,
        }, () => this.whatCheckHandFunctionToRun() )
    }

    whatCheckHandFunctionToRun = () => {
        console.log(this.state)
    }

    checkButton = () => {
        console.log('check button ran')
    }

    static navigationOptions = {
        title: 'Basic Strategy Drill',
    };

    render() {
        const {navigate} = this.props.navigation;
        
        return (
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.rulesLabel}>Choose your Casino Rules:</Text>
                {/* <form onChange={this.handleRulesCheckbox} className='casino-rules-form'>
                    <input  className='rules-checkbox' 
                            name='dealerStandsSoft17' 
                            type='checkbox'>
                    </input> Dealer stand's on soft 17
                    <input  className='rules-checkbox'
                            name='doubleAllowed' 
                            type='checkbox'>
                    </input>  Double allowed
                    <input  className='rules-checkbox'
                            name='doubleAfterSplitAllowed' 
                            type='checkbox'>
                    </input>  Double after split allowed
                    <input  className='rules-checkbox' 
                            name='surrenderAllowed' 
                            type='checkbox'>
                    </input>  Surrender allowed
                </form> */}
                <Text style={styles.handLabel}>Dealer Hand</Text>
                
                    <View style={styles.tableContainer}>
                        <Image
                            style={styles.cardDisplay}
                            source={{uri: this.state.dealerImages}}
                        />
                        <View style={styles.playerHandContainer}>
                        <Image
                            style={styles.cardDisplay}
                            source={{uri: this.state.playerImage1}}
                        />
                        <Image
                            style={styles.cardDisplay}
                            source={{uri: this.state.playerImage2}}
                        />
                        </View>
                    </View>

                    <Text style={styles.handLabel}>Player Hand</Text>
                    <Button onPress={this.dealCard} width='50' color='#000000' title='Deal'></Button>
                    
                        <Text style={{marginBottom: this.state.bottomMargin}}>Choose the correct play:</Text>
                        <View style={styles.buttonWrapper}>
                            <View style={styles.buttonContainerLeft}>
                                <Button onPress={this.checkButton} title='Hit'></Button>
                                <Button onPress={this.checkButton} title='Double'></Button>
                                <Button onPress={this.checkButton} title='Surrender' ></Button>
                                
                                {/* {this.state.buttonList} */}
                                {/* <Button onPress={this.checkStats} title='Check Stats'></Button> */}
                            </View>
                            <View style={styles.buttonContainerRight}>
                                <Button onPress={this.checkButton} title='Stand'></Button>
                                <Button onPress={this.checkButton} title='Split'></Button>
                                {/* {this.state.buttonList} */}
                                {/* <Button onPress={this.checkStats} title='Check Stats'></Button> */}
                            </View>
                        </View>
                    {/* <BasicStrategyStatsModal /> */}
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
        height: 700,
    },
    buttonWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonContainerLeft: {
        flex: 1,
        justifyContent: 'space-evenly',
        height: 160,
        width: 100,
        marginRight: 5,
    },
    buttonContainerRight: {
        flex: 1,
        justifyContent: 'space-evenly',
        height: 112,
        width: 100,
        marginLeft: 5,
    },
    rulesLabel: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: -15,
    },
    tableContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: 0,
    },
    playerHandContainer: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        
    },
    handLabel: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },
    cardDisplay: {
        width: 120, 
        height: 170,
        marginRight: 5,
        marginTop: 5,
    },
});

export default BasicStrategy