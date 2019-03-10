import * as React from 'react';
import { Button, View, Text, Image, StyleSheet, Dimensions, AsyncStorage, ScrollView } from 'react-native';
import { Constants } from 'expo';

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

class TrainDeviations extends React.Component {
    constructor(){
        super()
        this.state = {
            deviationsPlayed: 0,
            deviationsCorrect: 0,
            ///////////////////////////////
            ///          RULES         ///
            //////////////////////////////
            dealerStandsOnSoft17: false,
            dealerHitsOnSoft17: false,
            doubleAllowed: false,
            doubleAfterSplitAllowed: false,
            surrenderAllowed: false,
            singleDeck: false,
            doubleDeck: false,
            shoe: true,
            deck: [
                { "value": "6", "image": "https://deckofcardsapi.com/static/img/6H.png" },
                { "value": "QUEEN", "image": "https://deckofcardsapi.com/static/img/QH.png" },
                { "value": "JACK", "image": "https://deckofcardsapi.com/static/img/JC.png" },
                { "value": "QUEEN", "image": "https://deckofcardsapi.com/static/img/QD.png" },
                { "value": "2", "image": "https://deckofcardsapi.com/static/img/2D.png" },
                { "value": "3", "image": "https://deckofcardsapi.com/static/img/3D.png" },
                { "value": "QUEEN", "image": "https://deckofcardsapi.com/static/img/QS.png" },
                { "value": "5", "image": "https://deckofcardsapi.com/static/img/5C.png" },
                { "value": "9", "image": "https://deckofcardsapi.com/static/img/9D.png" },
                { "value": "4", "image": "https://deckofcardsapi.com/static/img/4D.png" },
                { "value": "7", "image": "https://deckofcardsapi.com/static/img/7S.png" },
                { "value": "10", "image": "https://deckofcardsapi.com/static/img/0H.png" },
                { "value": "KING", "image": "https://deckofcardsapi.com/static/img/KD.png" },
                { "value": "6", "image": "https://deckofcardsapi.com/static/img/6S.png" },
                { "value": "JACK", "image": "https://deckofcardsapi.com/static/img/JD.png" },
                { "value": "5", "image": "https://deckofcardsapi.com/static/img/5S.png" },
                { "value": "QUEEN", "image": "https://deckofcardsapi.com/static/img/QC.png" },
                { "value": "10", "image": "https://deckofcardsapi.com/static/img/0D.png" },
                { "value": "8", "image": "https://deckofcardsapi.com/static/img/8S.png" },
                { "value": "KING", "image": "https://deckofcardsapi.com/static/img/KS.png" },
                { "value": "2", "image": "https://deckofcardsapi.com/static/img/2C.png" },
                { "value": "2", "image": "https://deckofcardsapi.com/static/img/2S.png" },
                { "value": "4", "image": "https://deckofcardsapi.com/static/img/4C.png" },
                { "value": "3", "image": "https://deckofcardsapi.com/static/img/3S.png" },
                { "value": "2", "image": "https://deckofcardsapi.com/static/img/2H.png" },
                { "value": "9", "image": "https://deckofcardsapi.com/static/img/9H.png" },
                { "value": "7", "image": "https://deckofcardsapi.com/static/img/7H.png" },
                { "value": "5", "image": "https://deckofcardsapi.com/static/img/5D.png" },
                { "value": "10", "image": "https://deckofcardsapi.com/static/img/0S.png" },
                { "value": "4", "image": "https://deckofcardsapi.com/static/img/4S.png" },
                { "value": "KING", "image": "https://deckofcardsapi.com/static/img/KH.png" },
                { "value": "4", "image": "https://deckofcardsapi.com/static/img/4H.png" },
                { "value": "JACK", "image": "https://deckofcardsapi.com/static/img/JH.png" },
                { "value": "8", "image": "https://deckofcardsapi.com/static/img/8D.png" },
                { "value": "JACK", "image": "https://deckofcardsapi.com/static/img/JS.png" },
                { "value": "5", "image": "https://deckofcardsapi.com/static/img/5H.png" },
                { "value": "6", "image": "https://deckofcardsapi.com/static/img/6D.png" },
                { "value": "KING", "image": "https://deckofcardsapi.com/static/img/KC.png" },
                { "value": "10", "image": "https://deckofcardsapi.com/static/img/0C.png" },
                { "value": "9", "image": "https://deckofcardsapi.com/static/img/9S.png" },
                { "value": "8", "image": "https://deckofcardsapi.com/static/img/8C.png" },
                { "value": "7", "image": "https://deckofcardsapi.com/static/img/7C.png" },
                { "value": "3", "image": "https://deckofcardsapi.com/static/img/3H.png" },
                { "value": "8", "image": "https://deckofcardsapi.com/static/img/8H.png" },
                { "value": "7", "image": "https://deckofcardsapi.com/static/img/7D.png" },
                { "value": "3", "image": "https://deckofcardsapi.com/static/img/3C.png" },
                { "value": "9", "image": "https://deckofcardsapi.com/static/img/9C.png" },
                { "value": "6", "image": "https://deckofcardsapi.com/static/img/6C.png" },
                { "value": "ACE", "image": "https://deckofcardsapi.com/static/img/AS.png" },
                { "value": "ACE", "image": "https://deckofcardsapi.com/static/img/aceDiamonds.png" },
                { "value": "ACE", "image": "https://deckofcardsapi.com/static/img/AH.png" },
                { "value": "ACE", "image": "https://deckofcardsapi.com/static/img/AC.png" }
            ],
            playerHands: [
                {
                    "value": 16,
                    "card1": "10", "image1": "https://deckofcardsapi.com/static/img/0C.png",
                    "card2": "6", "image2": "https://deckofcardsapi.com/static/img/6D.png"
                },
                // {
                //     "value": 16,
                //     "card1": "KING", "image": "https://deckofcardsapi.com/static/img/KC.png",
                //     "card2": "6", "image": "https://deckofcardsapi.com/static/img/6H.png"
                // },
                // {
                //     "value": 16,
                //     "card1": "QUEEN", "image": "https://deckofcardsapi.com/static/img/QC.png",
                //     "card2": "6", "image": "https://deckofcardsapi.com/static/img/6C.png"
                // },
                {
                    "value": 15,
                    "card1": "5", "image1": "https://deckofcardsapi.com/static/img/5D.png" ,
                    "card2": "10", "image2": "https://deckofcardsapi.com/static/img/0S.png" 
                },
                {
                    "value": 14,
                    "card1": "JACK", "image1": "https://deckofcardsapi.com/static/img/JC.png" ,
                    "card2": "4", "image2": "https://deckofcardsapi.com/static/img/4S.png" 
                },
                {
                    "value": 13,
                    "card1": "9", "image1": "https://deckofcardsapi.com/static/img/9C.png" ,
                    "card2": "4", "image2": "https://deckofcardsapi.com/static/img/4H.png" 
                },
                {
                    "value": 12,
                    "card1": "7", "image1": "https://deckofcardsapi.com/static/img/7H.png" ,
                    "card2": "5", "image2": "https://deckofcardsapi.com/static/img/5D.png" 
                },
                {
                    "value": 11,
                    "card1": "6", "image1": "https://deckofcardsapi.com/static/img/6S.png" ,
                    "card2": "5", "image2": "https://deckofcardsapi.com/static/img/5H.png" 
                },
                {
                    "value": 10,
                    "card1": "4", "image1": "https://deckofcardsapi.com/static/img/4C.png" ,
                    "card2": "6", "image2": "https://deckofcardsapi.com/static/img/6C.png" 
                },
                {
                    "value": 9,
                    "card1": "7", "image1": "https://deckofcardsapi.com/static/img/7D.png" ,
                    "card2": "2", "image2": "https://deckofcardsapi.com/static/img/2C.png" 
                },
                {
                    "value": 20,
                    "card1": "KING", "image1": "https://deckofcardsapi.com/static/img/KC.png" ,
                    "card2": "10", "image2": "https://deckofcardsapi.com/static/img/0C.png" 
                },
            ]
        }
    }

    componentDidMount(){
        this.getSavedRulesFromMemory()
        this.getStatsFromStorage()
    }

    componentWillUnmount(){
        let deviationsPlayed = this.state.deviationsPlayed.toString()
        let deviationsCorrect = this.state.deviationsCorrect.toString()
        
        this.saveStatsInStorage( deviationsPlayed, deviationsCorrect )
    }


    getStatsFromStorage = () => {
        AsyncStorage.getItem("deviationsPlayed").then((deviationsPlayed) => {
            let deviationsPlayedNum;
            deviationsPlayed === 'NaN' ? deviationsPlayedNum = 0 : deviationsPlayedNum = parseInt(deviationsPlayed)
            this.setState({deviationsPlayed: deviationsPlayedNum})
        }).done();
        AsyncStorage.getItem("deviationsCorrect").then((deviationsCorrect) => {
            let deviationsCorrectNum;
            deviationsCorrect === 'NaN' || deviationsCorrect === 'null' ? deviationsCorrectNum = 0 : deviationsCorrectNum = parseInt(deviationsCorrect)
            this.setState({deviationsCorrect: deviationsCorrectNum})
        }).done();
    }


    saveStatsInStorage = async (deviationsPlayed, deviationsCorrect ) => {
        try {
            await AsyncStorage.setItem('deviationsPlayed', deviationsPlayed);
        } catch (error) {}
        try {
            await AsyncStorage.setItem('deviationsCorrect', deviationsCorrect);
        } catch (error) {}
    }


    getSavedRulesFromMemory = () =>{
        AsyncStorage.getItem("dealerStandsOnSoft17").then((dealerStandsOnSoft17Value) => {
            if(dealerStandsOnSoft17Value === 'true'){
                this.setState({dealerStandsOnSoft17: true, dealerHitsOnSoft17: false} )
            } else{
                this.setState({dealerStandsOnSoft17: false, dealerHitsOnSoft17: true} )
            }
        }).done();

        AsyncStorage.getItem("doubleAllowed").then((doubleAllowedValue) => {
            if(doubleAllowedValue === 'true'){
                this.setState({doubleAllowed: true})
            } else{
                this.setState({doubleAllowed: false})
            }
        }).done();

        AsyncStorage.getItem("doubleAfterSplitAllowed").then((doubleAfterSplitAllowedValue) => {
            if(doubleAfterSplitAllowedValue === 'true'){
                this.setState({doubleAfterSplitAllowed: true})
            } else{
                this.setState({doubleAfterSplitAllowed: false})
            }
        }).done();

        AsyncStorage.getItem("surrenderAllowed").then((surrenderAllowedValue) => {
            if(surrenderAllowedValue === 'true'){
                this.setState({surrenderAllowed: true})
            } else{
                this.setState({surrenderAllowed: false})
            }
        }).done();

        AsyncStorage.getItem("singleDeck").then((singleDeckValue) => {
            if(singleDeckValue === 'true'){
                this.setState({singleDeck: true})
            } else{
                this.setState({singleDeck: false})
            }
        }).done();
        AsyncStorage.getItem("doubleDeck").then((doubleDeckValue) => {
            if(doubleDeckValue === 'true'){
                this.setState({doubleDeck: true})
            } else{
                this.setState({doubleDeck: false})
            }
        }).done();
        AsyncStorage.getItem("shoe").then((shoeValue) => {
            if(shoeValue === 'true'){
                this.setState({shoe: true})
            } else{
                this.setState({shoe: false})
            }
        }).done();
    }

    dealHand = () => {
        let playerHands = this.state.playerHands
        let randomPlayerHand = playerHands[Math.floor(Math.random()*playerHands.length)];
        let dealerValues = []

        switch(randomPlayerHand.value){
            case 16:
                dealerValues = [9, 10]
                break;
            case 15:
                dealerValues = [9, 10, 'ACE']
                break;
            case 14:
                dealerValues = [10]
                break;
            case 13:
                dealerValues = [2, 3]
                break;
            case 12:
                dealerValues = [2, 3, 4, 5, 6]
                break;
            case 11:
                dealerValues = ['ACE']
                break;
            case 10:
                dealerValues = [10, 'ACE']
                break;
            case 9:
                dealerValues = [2, 7]
                break;
            default:
                dealerValues = [5, 6]
        }

        let randomDealerValue = dealerValues[Math.floor(Math.random()*dealerValues.length)]
        let randomDealerString  = randomDealerValue.toString()
        let dealerCardsArray = this.state.deck.filter(card =>  card.value.includes(randomDealerString) )
        let randomDealerIndex =  Math.floor(Math.random()*4)
        let dealerCard = dealerCardsArray[randomDealerIndex]
        
        // console.log(randomPlayerHand )
        // console.log(dealerCard)

        this.setState({
            dealerHand: dealerCard.value,
            dealerImages: dealerCard.image,
            playerCard1: randomPlayerHand.card1, 
            playerCard2: randomPlayerHand.card2,
            playerImage1: randomPlayerHand.image1, 
            playerImage2: randomPlayerHand.image2,
            // selectedButtonColor: '',
            // hitButtonColor: '',
            // standButtonColor: '',
            // doubleButtonColor: '',
            // splitButtonColor: '',
            // surrenderButtonColor: '',
        }, () => this.showCardData() )
    }


    showCardData = () => {
        const dCard = this.state.dealerHand;
        let dCardNumber = 0
        const pCard1 = this.state.playerCard1;
        let pCard1Number = 0
        const pCard2 = this.state.playerCard2;
        let pCard2Number = 0

        //  Sets the proper numerical values to dealer hand for future evaluation
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

        //  Sets the proper numerical values to player card 1 for future evaluation
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
        })
    }

    static navigationOptions = {
        title: 'Deviations'
    };
    
    render() {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.container}>
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
                    <Button onPress={this.dealHand} width='50' color='#000000' title='Deal'></Button>
                    
                    <Text style={styles.handLabel}> Choose the count for deviating:</Text>


                    <View style={styles.buttonWrapper}>
                        <View style={styles.buttonContainerLeft}>
                            <Button onPress={this.checkHitButton} title='+ 5' color={this.state.hitButtonColor}></Button>
                            <Button onPress={this.checkDoubleButton} title='+ 3' color={this.state.doubleButtonColor}></Button>
                            <Button onPress={this.checkSurrenderButton} title='+ 1' color={this.state.surrenderButtonColor}></Button>
                            <Button onPress={this.checkSurrenderButton} title='- 1' color={this.state.surrenderButtonColor}></Button>
                            <Button onPress={this.checkSurrenderButton} title='- 3' color={this.state.surrenderButtonColor}></Button>
                            
                        </View>
                        <View style={styles.buttonContainerRight}>
                            <Button onPress={this.checkStandButton} title='+ 4' color={this.state.standButtonColor}></Button>
                            <Button onPress={this.checkSplitButton} title='+ 2' color={this.state.splitButtonColor}></Button>
                            <Button onPress={this.helpButton} title='0' color='#2196f3'></Button>
                            <Button onPress={this.checkSurrenderButton} title='- 2' color={this.state.surrenderButtonColor}></Button>
                            <Button onPress={this.checkSurrenderButton} title='Help' color={this.state.surrenderButtonColor}></Button>
                        </View>
                    </View>
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
        height: 720,
    },
    buttonWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonContainerLeft: {
        flex: 1,
        justifyContent: 'space-evenly',
        height: 220,
        width: 100,
        marginRight: 5,
    },
    buttonContainerRight: {
        flex: 1,
        justifyContent: 'space-evenly',
        height: 220,
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
    helpModalContainer: {
        flex: 1,
        height: ScreenHeight,
        width: ScreenWidth,
        position: 'absolute',
        alignItems: 'center',
        zIndex: 5,
    },
    helpModal: {
        backgroundColor: 'black',
        opacity: 1,
        height: ScreenHeight/3,
        width: ScreenWidth-20,
        borderRadius: 20,
        zIndex: 5,
        marginTop: 225,
    },
    helpImageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rulesWrapper: {
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 1,
        paddingTop: 5,
        paddingLeft: 20,
        backgroundColor: 'black',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
        height: 100,
        
    },
    rulesHeader: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        textDecorationLine: 'underline',
    },
});

export default TrainDeviations