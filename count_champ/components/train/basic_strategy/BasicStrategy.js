import * as React from 'react';
import { Button, Text, View, StyleSheet, Image, Dimensions, ScrollView, AsyncStorage, TouchableWithoutFeedback } from 'react-native';
import { Constants } from 'expo';
import axios from 'axios';

//  Help images imports for all decks
import playerHelpHard10 from './bs_charts/universal_images/hard_10.png'
import playerHelpHard12 from './bs_charts/universal_images/hard_12.png'
import playerHelpHard13 from './bs_charts/universal_images/hard_13.png'
import playerHelpHard14 from './bs_charts/universal_images/hard_14.png'
import playerHelpSplitA from './bs_charts/universal_images/split_A.png'

//  Help images imports for all Single Deck
import sdHard5to7 from './bs_charts/single_deck/hard_5-7.png'
import sdHard8 from './bs_charts/single_deck/hard_8.png'
import sdHard9 from './bs_charts/single_deck/hard_9.png'
import sdHard10 from './bs_charts/single_deck/hard_10.png'
import sdHard11 from './bs_charts/single_deck/hard_11.png'
import sdHard12 from './bs_charts/single_deck/hard_12.png'
import sdHard13 from './bs_charts/single_deck/hard_13.png'
import sdHard14 from './bs_charts/single_deck/hard_14.png'
import sdHard16 from './bs_charts/single_deck/hard_16.png'
import sdHard18 from './bs_charts/single_deck/hard_18+.png'
import sdSoft13 from './bs_charts/single_deck/soft_13.png'
import sdSoft14 from './bs_charts/single_deck/soft_14.png'
import sdSoft15 from './bs_charts/single_deck/soft_15.png'
import sdSoft16 from './bs_charts/single_deck/soft_16.png'
import sdSoft17 from './bs_charts/single_deck/soft_17.png'
import sdSoft19 from './bs_charts/single_deck/soft_19.png'
import sdSoft20 from './bs_charts/single_deck/soft_20+.png'
import sdSplit4 from './bs_charts/single_deck/split_4.png'
import sdSplit6 from './bs_charts/single_deck/split_6.png'
import sdSplit8 from './bs_charts/single_deck/split_8.png'
import sdSplit12 from './bs_charts/single_deck/split_12.png'
import sdSplit14 from './bs_charts/single_deck/split_14.png'
import sdSplit16 from './bs_charts/single_deck/split_16.png'

//  Help images imports for STAND Single Deck
import sdStandHard15 from './bs_charts/singleDeck_dealer_stands_17/hard_15.png'
import sdStandHard17 from './bs_charts/singleDeck_dealer_stands_17/hard_17.png'
import sdStandSoft18 from './bs_charts/singleDeck_dealer_stands_17/soft_18.png'
import sdStandSplit18 from './bs_charts/singleDeck_dealer_stands_17/split_18.png'

//  Help images imports for HIT Single Deck
import sdHitHard15 from './bs_charts/singleDeck_dealer_hits_17/hard_15.png'
import sdHitHard17 from './bs_charts/singleDeck_dealer_hits_17/hard_17.png'
import sdHitSoft18 from './bs_charts/singleDeck_dealer_hits_17/soft_18.png'
import sdHitSplit18 from './bs_charts/singleDeck_dealer_hits_17/split_18.png'

//  Help images imports for all Double Deck
import ddHard5to8 from './bs_charts/double_deck/hard_5-8.png'
import ddHard9 from './bs_charts/double_deck/hard_9.png'
import ddHard11 from './bs_charts/double_deck/hard_11.png'
import ddHard16 from './bs_charts/double_deck/hard_16.png'
import ddHard18 from './bs_charts/double_deck/hard_18+.png'
import ddSoft13 from './bs_charts/double_deck/soft_13.png'
import ddSoft14 from './bs_charts/double_deck/soft_14.png'
import ddSoft15 from './bs_charts/double_deck/soft_15.png'
import ddSoft16 from './bs_charts/double_deck/soft_16.png'
import ddSoft17 from './bs_charts/double_deck/soft_17.png'
import ddSoft20 from './bs_charts/double_deck/soft_20+.png'
import ddSplit4 from './bs_charts/double_deck/split_4.png'
import ddSplit6 from './bs_charts/double_deck/split_6.png'
import ddSplit8 from './bs_charts/double_deck/split_8.png'
import ddSplit12 from './bs_charts/double_deck/split_12.png'
import ddSplit14 from './bs_charts/double_deck/split_14.png'
import ddSplit18 from './bs_charts/double_deck/split_18.png'

//  Help images imports for double deck STAND 17 
import ddStandHard15 from './bs_charts/doubleDeck_dealer_stands_17/hard_15.png'
import ddStandHard17 from './bs_charts/doubleDeck_dealer_stands_17/hard_17.png'
import ddStandSoft18 from './bs_charts/doubleDeck_dealer_stands_17/soft_18.png'
import ddStandSoft19 from './bs_charts/doubleDeck_dealer_stands_17/soft_19.png'
import ddStandSplit16 from './bs_charts/doubleDeck_dealer_stands_17/split_16.png'

//  Help images imports for double deck HIT 17 
import ddHitHard15 from './bs_charts/doubleDeck_dealer_hits_17/hard_15.png'
import ddHitHard17 from './bs_charts/doubleDeck_dealer_hits_17/hard_17.png'
import ddHitSoft18 from './bs_charts/doubleDeck_dealer_hits_17/soft_18.png'
import ddHitSoft19 from './bs_charts/doubleDeck_dealer_hits_17/soft_19.png'
import ddHitSplit16 from './bs_charts/doubleDeck_dealer_hits_17/split_16.png'

//  Help images imports for all shoes 
import shoeHard5to8 from './bs_charts/shoe/hard_5-8.png'
import shoeHard9 from './bs_charts/shoe/hard_9.png'
import shoeHard16 from './bs_charts/shoe/hard_16.png'
import shoeSoft13 from './bs_charts/shoe/soft_13.png'
import shoeSoft14 from './bs_charts/shoe/soft_14.png'
import shoeSoft15 from './bs_charts/shoe/soft_15.png'
import shoeSoft16 from './bs_charts/shoe/soft_16.png'
import shoeSoft17 from './bs_charts/shoe/soft_17.png'
import shoeSoft18 from './bs_charts/shoe/soft_18.png'
import shoeSplit4 from './bs_charts/shoe/split_4.png'
import shoeSplit6 from './bs_charts/shoe/split_6.png'
import shoeSplit8 from './bs_charts/shoe/split_8.png'
import shoeSplit12 from './bs_charts/shoe/split_12.png'
import shoeSplit14 from './bs_charts/shoe/split_14.png'
import shoeSplit18 from './bs_charts/shoe/split_18.png'

//  Help images imports for shoe STAND 17 
import shoeStandHard11 from './bs_charts/shoe_dealer_stands_17/hard_11.png'
import shoeStandHard15 from './bs_charts/shoe_dealer_stands_17/hard_15.png'
import shoeStandHard17 from './bs_charts/shoe_dealer_stands_17/hard_17+.png'
import shoeStandSoft19 from './bs_charts/shoe_dealer_stands_17/soft_19+.png'
import shoeStandSplit16 from './bs_charts/shoe_dealer_stands_17/split_16.png'

//  Help images imports for shoe HIT 17
import shoeHitHard11 from './bs_charts/shoe_dealer_hits_17/hard_11.png'
import shoeHitHard15 from './bs_charts/shoe_dealer_hits_17/hard_15.png'
import shoeHitHard17 from './bs_charts/shoe_dealer_hits_17/hard_17.png'
import shoeHitHard18 from './bs_charts/shoe_dealer_hits_17/hard_18+.png'
import shoeHitSoft19 from './bs_charts/shoe_dealer_hits_17/soft_19.png'
import shoeHitSoft20 from './bs_charts/shoe_dealer_hits_17/soft_20+.png'
import shoeHitSplit16 from './bs_charts/shoe_dealer_hits_17/split_16.png'



let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

class BasicStrategy extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            deckID: '',
            dealerHand: '',
            dealerImages: 'string',
            playerCard1: '',
            playerCard2: '',
            playerImage1: 'string',
            playerImage2: 'string',
            remainingCardsInDeck: 0,
            playerCard1IsAce : false,
            playerCard2IsAce : false,
            pCard1Number: '',
            pCard2Number: '',
            dHand: '',
            pHand: '',
            correctPlay: '',
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
            ///////////////////////////////
            currentKindOfHandBeingPlayed: '',
            hardHandsPlayed: 0,
            hardHandsCorrect: 0,
            softHandsPlayed: 0,
            softHandsCorrect: 0,
            splitHandsPlayed: 0,
            splitHandsCorrect: 0,
            ////////////////////////////////
            showBasicStrategyStats: false,
            selectedButtonColor: '',
            hitButtonColor: '#2196f3',
            standButtonColor: '#2196f3',
            doubleButtonColor: '#2196f3',
            splitButtonColor: '#2196f3',
            surrenderButtonColor: '#2196f3',
            showHelp: false,
            helpImageToShow: playerHelpHard10,
        }
    }

    
    
    componentDidMount(){
        axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=8').then(response => {
            const deckID = response.data.deck_id;
            this.setState({
                deckID: deckID,
            })
        })
        this.getSavedRulesFromMemory()
        this.getStatsFromStorage()
    }

    componentWillUnmount(){
        let hardHandsPlayed = this.state.hardHandsPlayed.toString()
        let hardHandsCorrect = this.state.hardHandsCorrect.toString()
        let softHandsPlayed = this.state.softHandsPlayed.toString()
        let softHandsCorrect = this.state.softHandsCorrect.toString()
        let splitHandsPlayed = this.state.splitHandsPlayed.toString()
        let splitHandsCorrect = this.state.splitHandsCorrect.toString()
        
        this.saveStatsInStorage(hardHandsPlayed, hardHandsCorrect, softHandsPlayed, softHandsCorrect, splitHandsPlayed, splitHandsCorrect )

        // this.removeItems()
    }

    removeItems = async () => {
        try {
            await AsyncStorage.removeItem('hardHandsPlayed');
        } catch (error) {}
        try {
            await AsyncStorage.removeItem('hardHandsCorrect');
        } catch (error) {}
        try {
            await AsyncStorage.removeItem('softHandsPlayed');
        } catch (error) {}
        try {
            await AsyncStorage.removeItem('softHandsCorrect');
        } catch (error) {}
        try {
            await AsyncStorage.removeItem('splitHandsPlayed');
        } catch (error) {}
        try {
            await AsyncStorage.removeItem('splitHandsCorrect');
        } catch (error) {}
    }


    saveStatsInStorage = async (hardHandsPlayed, hardHandsCorrect, softHandsPlayed, softHandsCorrect, splitHandsPlayed, splitHandsCorrect ) => {
        try {
            await AsyncStorage.setItem('hardHandsPlayed', hardHandsPlayed);
        } catch (error) {}
        try {
            await AsyncStorage.setItem('hardHandsCorrect', hardHandsCorrect);
        } catch (error) {}
        try {
            await AsyncStorage.setItem('softHandsPlayed', softHandsPlayed);
        } catch (error) {}
        try {
            await AsyncStorage.setItem('softHandsCorrect', softHandsCorrect);
        } catch (error) {}
        try {
            await AsyncStorage.setItem('splitHandsPlayed', splitHandsPlayed);
        } catch (error) {}
        try {
            await AsyncStorage.setItem('splitHandsCorrect', splitHandsCorrect);
        } catch (error) {}
    }

    getStatsFromStorage = () => {
        AsyncStorage.getItem("hardHandsPlayed").then((hardHandsPlayed) => {
            let hardHandsPlayedNum;
            hardHandsPlayed === 'NaN' ? hardHandsPlayedNum = 0 : hardHandsPlayedNum = parseInt(hardHandsPlayed)
            this.setState({hardHandsPlayed: hardHandsPlayedNum})
        }).done();
        AsyncStorage.getItem("hardHandsCorrect").then((hardHandsCorrect) => {
            let hardHandsCorrectNum;
            hardHandsCorrect === 'NaN' || hardHandsCorrect === 'null' ? hardHandsCorrectNum = 0 : hardHandsCorrectNum = parseInt(hardHandsCorrect)
            this.setState({hardHandsCorrect: hardHandsCorrectNum})
        }).done();
        AsyncStorage.getItem("softHandsPlayed").then((softHandsPlayed) => {
            let softHandsPlayedNum;
            softHandsPlayed === 'NaN' || softHandsPlayed === 'null' ? softHandsPlayedNum = 0 : softHandsPlayedNum = parseInt(softHandsPlayed)
            this.setState({softHandsPlayed: softHandsPlayedNum})
        }).done();
        AsyncStorage.getItem("softHandsCorrect").then((softHandsCorrect) => {
            let softHandsCorrectNum;
            softHandsCorrect === 'NaN' || softHandsCorrect === 'null' ?  softHandsCorrectNum = 0 : softHandsCorrectNum = parseInt(softHandsCorrect)
            this.setState({softHandsCorrect: softHandsCorrectNum})
        }).done();
        AsyncStorage.getItem("splitHandsPlayed").then((splitHandsPlayed) => {
            let splitHandsPlayedNum;
            splitHandsPlayed === 'NaN' || splitHandsPlayed === 'null' ? splitHandsPlayedNum = 0 : splitHandsPlayedNum = parseInt(splitHandsPlayed)
            this.setState({splitHandsPlayed: splitHandsPlayedNum})
        }).done();
        AsyncStorage.getItem("splitHandsCorrect").then((splitHandsCorrect) => {
            let splitHandsCorrectNum;
            splitHandsCorrect === 'NaN' || splitHandsCorrect === 'null' ? splitHandsCorrectNum = 0 : splitHandsCorrectNum = parseInt(splitHandsCorrect)
            this.setState({splitHandsCorrect: splitHandsCorrectNum})
        }).done();
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


    dealCard = () => {
        axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=3`).then(response => {
            
            const dealerCardValue = response.data.cards[0].value  
            const playerCardValue1 = response.data.cards[1].value  
            const playerCardValue2 = response.data.cards[2].value  
            const dealerCardImage = response.data.cards[0].image
            const playerCardImage1 = response.data.cards[1].image
            const playerCardImage2 = response.data.cards[2].image

            this.setState({
                dealerHand: dealerCardValue,
                dealerImages: dealerCardImage,
                playerCard1: playerCardValue1, 
                playerCard2: playerCardValue2,
                playerImage1: playerCardImage1, 
                playerImage2: playerCardImage2,
                remainingCardsInDeck: response.data.remaining,
                selectedButtonColor: '',
                hitButtonColor: '',
                standButtonColor: '',
                doubleButtonColor: '',
                splitButtonColor: '',
                surrenderButtonColor: '',
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
        }, () => this.whatCheckHandFunctionToRun() )
    }

    whatCheckHandFunctionToRun = () => {
        const pCard1Number = parseInt(this.state.pCard1Number)
        const pCard2Number = parseInt(this.state.pCard2Number)
    
        let dealerHand = parseInt(this.state.dHand)
        let playerHand = parseInt(this.state.pHand)

        if (pCard1Number === pCard2Number ){
            this.checkSplitHand(dealerHand, playerHand)
        } else if (pCard1Number === 11 || pCard2Number === 11){
            this.checkSoftHand(dealerHand, playerHand)
        } else {
            this.checkHardHand(dealerHand, playerHand)
        }

    }

    //////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////

    checkSplitHand = (dealerHand, playerHand) => {
        console.log('check SPLIT hand function ran ')
        const pHand = playerHand;
        const dHand = dealerHand;

        if(pHand === 20){
            this.setState(prevState => {
                return{
                    hardHandsPlayed: prevState.hardHandsPlayed += 1,
                    currentKindOfHandBeingPlayed: 'HARD'
                }
            })
        } else {
            this.setState(prevState => {
                return{
                    splitHandsPlayed: prevState.splitHandsPlayed += 1,
                    currentKindOfHandBeingPlayed: 'SPLIT'
                }
            })
        }

        if(pHand === 22){
            this.setState({ correctPlay: 'SPLIT' })
        } else if (pHand === 20){
            this.setState({ correctPlay: 'STAND' })
        }  else if(pHand === 10 && dHand <= 9){
            if (this.state.doubleAllowed === true){
                this.setState({ correctPlay: 'DOUBLE' })
            } else if (this.state.doubleAllowed === false){
                this.setState({ correctPlay: 'HIT' })
            } 
        }  else if(pHand === 10 && dHand > 9){
            this.setState({ correctPlay: 'HIT' })
        }else if (pHand === 16){
            if (dHand === 11 && !this.dealerStandsOnSoft17 && this.state.surrenderAllowed) {
                this.setState({ correctPlay: 'SURRENDER' })
            } else {
                this.setState({ correctPlay: 'SPLIT' })
            }
        } else if(pHand === 4  && dHand === 3 && this.state.singleDeck){
                this.setState({ correctPlay: 'SPLIT' }) 
        } else if((pHand === 6) && dHand === 8 && this.state.singleDeck){
            if(this.state.doubleAfterSplitAllowed === true){
                this.setState({ correctPlay: 'SPLIT' })
            } else if (this.state.doubleAfterSplitAllowed === false){
                this.setState({ correctPlay: 'HIT' })
            }
        } else if((pHand === 4 || pHand === 6) && dHand <= 3){
            if(this.state.doubleAfterSplitAllowed === true){
                this.setState({ correctPlay: 'SPLIT' })
            } else if (this.state.doubleAfterSplitAllowed === false){
                this.setState({ correctPlay: 'HIT' })
            }   
        } else if((pHand === 4 || pHand === 6) && dHand <= 7){
            this.setState({ correctPlay: 'SPLIT' })
        } else if((pHand === 4 || pHand === 6) && dHand <= 11){
            this.setState({ correctPlay: 'HIT' })
        } else if(pHand === 8 && dHand === 4 && this.state.singleDeck){
            if(this.state.doubleAfterSplitAllowed === true){
                this.setState({ correctPlay: 'SPLIT' })
            } else if (this.state.doubleAfterSplitAllowed === false){
                this.setState({ correctPlay: 'HIT' })
            }   
        } else if(pHand === 8 && this.state.singleDeck && (dHand === 5 || dHand === 6 )){
            if(this.state.doubleAfterSplitAllowed === true){
                this.setState({ correctPlay: 'SPLIT' })
            } else if (this.state.doubleAfterSplitAllowed === false){
                this.setState({ correctPlay: 'DOUBLE' })
            }   
        } else if(pHand === 8 && dHand <= 4){
            this.setState({ correctPlay: 'HIT' })
        } else if (pHand === 8 && dHand <= 6){
            if(this.state.doubleAfterSplitAllowed === true){
                this.setState({ correctPlay: 'SPLIT' })
            } else if (this.state.doubleAfterSplitAllowed === false){
                this.setState({ correctPlay: 'HIT' })
            }   
        } else if (pHand === 8 && dHand <= 11){
            this.setState({ correctPlay: 'HIT' })
        } else if (pHand === 12 && dHand === 2 && this.state.shoe){
            if(this.state.doubleAfterSplitAllowed === true){
                this.setState({ correctPlay: 'SPLIT' })
            } else if (this.state.doubleAfterSplitAllowed === false){
                this.setState({ correctPlay: 'HIT' })
            }
        }  else if (pHand === 12 && dHand === 2 && !this.state.shoe){
            this.setState({ correctPlay: 'SPLIT' })
        } else if (pHand === 12 && dHand <= 6){
            this.setState({ correctPlay: 'SPLIT' })
        } else if (pHand === 12 && dHand === 7 && !this.state.shoe){
            if(this.state.doubleAfterSplitAllowed === true){
                this.setState({ correctPlay: 'SPLIT' })
            } else if (this.state.doubleAfterSplitAllowed === false){
                this.setState({ correctPlay: 'HIT' })
            }
        } else if (pHand === 12 && dHand <= 11){
            this.setState({ correctPlay: 'HIT' })
        } else if (pHand === 14 && dHand === 8 && !this.state.shoe){
            if(this.state.doubleAfterSplitAllowed === true){
                this.setState({ correctPlay: 'SPLIT' })
            } else if (this.state.doubleAfterSplitAllowed === false){
                this.setState({ correctPlay: 'HIT' })
            }
        } else if (pHand === 14 && dHand === 10 && this.state.singleDeck){
            if(this.state.surrenderAllowed){
                this.setState({ correctPlay: 'SURRENDER' })
            } else {
                this.setState({ correctPlay: 'STAND' })
            }
        } else if (pHand === 14 && dHand === 11 && this.state.singleDeck && !this.state.dealerStandsOnSoft17 ){
            if(this.state.surrenderAllowed){
                this.setState({ correctPlay: 'SURRENDER' })
            } else {
                this.setState({ correctPlay: 'HIT' })
            }
        } else if (pHand === 14 && dHand <= 7){
            this.setState({ correctPlay: 'SPLIT' })
        } else if (pHand === 14 && dHand <= 11){
            this.setState({ correctPlay: 'HIT' })
        } else if (pHand === 18 && dHand === 11 && !this.state.dealerStandsOnSoft17 && this.state.singleDeck ){
            if(this.state.doubleAfterSplitAllowed){
                this.setState({ correctPlay: 'SPLIT' })
            } else {
                this.setState({ correctPlay: 'STAND' })
            }
        } else if (pHand === 18 && (dHand === 7 || dHand === 10 || dHand === 11 ) ){
            this.setState({ correctPlay: 'STAND' })
        }  else if (pHand === 18 && dHand <= 9 ){
            this.setState({ correctPlay: 'SPLIT' })
        }
    }
    
    checkSoftHand = (dealerHand, playerHand) => {
        console.log('check SOFT hand function ran ')
        const pHand = playerHand;
        const dHand = dealerHand;

        this.setState(prevState => {
            return{
                softHandsPlayed: prevState.softHandsPlayed += 1,
                currentKindOfHandBeingPlayed: 'SOFT'
            }
        })

        if (pHand >= 20){
            this.setState({ correctPlay: 'STAND' })
        } else if (pHand === 19){
            if (this.state.dealerStandsOnSoft17 === true){
                this.setState({ correctPlay: 'STAND' })
            } else if (this.state.dealerStandsOnSoft17 === false || (this.state.dealerStandsOnSoft17 && (this.state.singleDeck || this.state.doubleDeck))){
                if(dHand === 6){
                    if (this.state.doubleAllowed === true){
                        this.setState({ correctPlay: 'DOUBLE' })
                    } else if (this.state.doubleAllowed === false){
                        this.setState({ correctPlay: 'STAND' })
                    }
                } else {
                    this.setState({ correctPlay: 'STAND' })
                }
            }  
        } else if(pHand === 13 && dHand <= 4 && !this.state.singleDeck){
            this.setState({ correctPlay: 'HIT' })
        } else if(pHand === 13 && dHand === 4 && this.state.singleDeck){
            if (this.state.doubleAllowed === true){
                this.setState({ correctPlay: 'DOUBLE' })
            } else if (this.state.doubleAllowed === false){
                this.setState({ correctPlay: 'HIT' })
            }
        } else if (pHand === 13 && dHand <= 6){
            if (this.state.doubleAllowed === true){
                this.setState({ correctPlay: 'DOUBLE' })
            } else if (this.state.doubleAllowed === false){
                this.setState({ correctPlay: 'HIT' })
            }
        } else if(pHand === 13 && dHand <= 11){
            this.setState({ correctPlay: 'HIT' })
        } else if(pHand === 14 && dHand <= 4){
            this.setState({ correctPlay: 'HIT' })
        } else if (pHand === 14 && dHand <= 6){
            if (this.state.doubleAllowed === true){
                this.setState({ correctPlay: 'DOUBLE' })
            } else if (this.state.doubleAllowed === false){
                this.setState({ correctPlay: 'HIT' })
            }
        } else if(pHand === 14 && dHand <= 11){
            this.setState({ correctPlay: 'HIT' })
        } else if(pHand === 15 && dHand <= 3){
            this.setState({ correctPlay: 'HIT' })
        } else if (pHand === 15 && dHand <= 6){
            if (this.state.doubleAllowed === true){
                this.setState({ correctPlay: 'DOUBLE' })
            } else if (this.state.doubleAllowed === false){
                this.setState({ correctPlay: 'HIT' })
            }
        } else if(pHand === 15 && dHand <= 11){
            this.setState({ correctPlay: 'HIT' })
        }  else if(pHand === 16 && dHand <= 3){
            this.setState({ correctPlay: 'HIT' })
        } else if (pHand === 16 && dHand <= 6){
            if (this.state.doubleAllowed === true){
                this.setState({ correctPlay: 'DOUBLE' })
            } else if (this.state.doubleAllowed === false){
                this.setState({ correctPlay: 'HIT' })
            }
        } else if(pHand === 16 && dHand <= 11){
            this.setState({ correctPlay: 'HIT' })
        } else if(pHand === 17 && dHand === 2 && !this.state.singleDeck){
            this.setState({ correctPlay: 'HIT' })
        } else if(pHand === 17 && dHand === 2 && this.state.singleDeck){
            if (this.state.doubleAllowed === true){
                this.setState({ correctPlay: 'DOUBLE' })
            } else if (this.state.doubleAllowed === false){
                this.setState({ correctPlay: 'HIT' })
            }
        }else if (pHand === 17 && dHand <= 6){
            if (this.state.doubleAllowed === true){
                this.setState({ correctPlay: 'DOUBLE' })
            } else if (this.state.doubleAllowed === false){
                this.setState({ correctPlay: 'HIT' })
            }
        } else if(pHand === 17 && dHand <= 11){
            this.setState({ correctPlay: 'HIT' })
        } else if(pHand === 18 && dHand === 2){
            if(this.dealerStandsOnSoft17 === true) {
                this.setState({ correctPlay: 'STAND' })
            } else if (this.dealerStandsOnSoft17 === false) {
                if(this.state.doubleAllowed === true){
                    this.setState({ correctPlay: 'DOUBLE' })
                } else if (this.state.doubleAllowed === false){
                    this.setState({ correctPlay: 'STAND' })
                }
            }
        } else if (pHand === 18 && dHand <= 6){
            if(this.state.doubleAllowed === true){
                this.setState({ correctPlay: 'DOUBLE' })
            } else if (this.state.doubleAllowed === false){
                this.setState({ correctPlay: 'STAND' }) 
            }
        } else if(pHand === 18 && dHand <= 8){
            this.setState({ correctPlay: 'STAND' })
        } else if(pHand === 18 && dHand === 11 && this.state.singleDeck && this.state.dealerStandsOnSoft17){
            this.setState({ correctPlay: 'STAND' })
        } else if(pHand === 18 && dHand <= 11){
            this.setState({ correctPlay: 'HIT' })
        }
    }
    
    checkHardHand = (dealerHand, playerHand) => {
        console.log('check HARD hand function ran ')

        const pHand = playerHand;
        const dHand = dealerHand;

        this.setState(prevState => {
            return{
                hardHandsPlayed: prevState.hardHandsPlayed += 1,
                currentKindOfHandBeingPlayed: 'HARD'
            }
        })

        if(pHand === 8 && this.state.singleDeck && (dHand === 5 || dHand === 6)){
            if(this.state.doubleAllowed){
                this.setState({ correctPlay: 'DOUBLE' })
            } else {
                this.setState({ correctPlay: 'HIT' })
            }
        } else if (pHand <= 8 ){
            this.setState({ correctPlay: 'HIT' })
        } else if (pHand > 17) {
            this.setState({ correctPlay: 'STAND' })
        } else if (pHand === 17) {
            if(this.state.dealerStandsOnSoft17 === true){
                this.setState({ correctPlay: 'STAND' })
            }
            if(this.state.dealerStandsOnSoft17 === false){
                if(dHand === 11 && this.state.surrenderAllowed === true){
                    this.setState({ correctPlay: 'SURRENDER' })
                } else {
                    this.setState({ correctPlay: 'STAND' })
                }
            }
        } else if (pHand === 9 && dHand === 2){
            this.setState({ correctPlay: 'HIT' })
        } else if(pHand <= 9 && dHand <= 6){
            if (this.state.doubleAllowed === true){
                this.setState({ correctPlay: 'DOUBLE' })
            } else if (this.state.doubleAllowed === false){
                this.setState({ correctPlay: 'HIT' })
            } 
        } else if(pHand === 9 && dHand <= 11){
            this.setState({ correctPlay: 'HIT' })
        } else if(pHand === 10 && dHand <= 9){
            if (this.state.doubleAllowed === true){
                this.setState({ correctPlay: 'DOUBLE' })
            } else if (this.state.doubleAllowed === false){
                this.setState({ correctPlay: 'HIT' })
            } 
        } else if (pHand === 10 && dHand <= 11){
            this.setState({ correctPlay: 'HIT' })
        } else if (pHand === 11 && dHand <= 10){
            if (this.state.doubleAllowed === true){
                this.setState({ correctPlay: 'DOUBLE' })
            } else if (this.state.doubleAllowed === false){
                this.setState({ correctPlay: 'HIT' })
            } 
        } else if (pHand === 11 && dHand === 11){
            if (this.state.dealerStandsOnSoft17 === true && this.state.shoe){
                this.setState({ correctPlay: 'HIT' })
            } else if (this.state.dealerStandsOnSoft17 === false && this.state.doubleAllowed === true){
                this.setState({ correctPlay: 'DOUBLE' })
            }  else if (this.state.dealerStandsOnSoft17 === false && this.state.doubleAllowed === false){
                this.setState({ correctPlay: 'HIT' })
            } 
        } else if (pHand === 12 && dHand <= 3){
            this.setState({ correctPlay: 'HIT' })
        } else if (pHand === 12 && dHand <= 6){
            this.setState({ correctPlay: 'STAND' })
        } else if(pHand === 12 && dHand <= 11){
            this.setState({ correctPlay: 'HIT' })
        } else if (pHand === 13 && dHand <= 6){
            this.setState({ correctPlay: 'STAND' })
        } else if (pHand === 13 && dHand <= 11){
            this.setState({ correctPlay: 'HIT' })
        } else if (pHand === 14 && dHand <= 6){
            this.setState({ correctPlay: 'STAND' })
        } else if (pHand === 14 && dHand <= 11){
            this.setState({ correctPlay: 'HIT' })
        } else if (pHand === 15 && dHand <= 6){
            this.setState({ correctPlay: 'STAND' })
        } else if (pHand === 15 && dHand <= 9){
            this.setState({ correctPlay: 'HIT' })
        } else if (pHand === 15 && dHand === 10){
            if(this.state.surrenderAllowed === true && (this.state.doubleDeck || this.state.shoe) ){
                this.setState({ correctPlay: 'SURRENDER' })
            } else if (this.state.surrenderAllowed === false){
                this.setState({ correctPlay: 'HIT' })
            }   
        } else if (pHand === 15 && dHand === 11){
            if(this.state.dealerStandsOnSoft17 === true){
                this.setState({ correctPlay: 'HIT' })
            } else if (this.state.dealerStandsOnSoft17 === false){
                if(this.state.surrenderAllowed === true){
                    this.setState({ correctPlay: 'SURRENDER' })
                } else if (this.state.surrenderAllowed === false){
                    this.setState({ correctPlay: 'HIT' })
                } 
            }  
        } else if (pHand === 16 && dHand <= 6){
            this.setState({ correctPlay: 'STAND' })
        } else if (pHand === 16 && dHand <= 8){
            this.setState({ correctPlay: 'HIT' })
        }  else if (pHand === 16 && dHand <= 11){
            if(this.state.surrenderAllowed === true){
                this.setState({ correctPlay: 'SURRENDER' })
            } else if (this.state.surrenderAllowed === false){
                this.setState({ correctPlay: 'HIT' })
            } 
        }
    }

    checkHitButton = (e) => {
        if (this.state.correctPlay === 'HIT'){
            this.setState({ hitButtonColor: '#055902' })

            if (this.state.currentKindOfHandBeingPlayed === 'HARD'){
                this.setState(prevState => { return{ hardHandsCorrect: prevState.hardHandsCorrect += 1 }} )
            } else if(this.state.currentKindOfHandBeingPlayed === 'SOFT'){
                this.setState(prevState => { return{ softHandsCorrect: prevState.softHandsCorrect += 1 }} )
            } else if(this.state.currentKindOfHandBeingPlayed === 'SPLIT'){
                this.setState(prevState => { return{ splitHandsCorrect: prevState.splitHandsCorrect += 1 }} )
            }

        } else {
            this.setState({ hitButtonColor: '#ff0000' })
            if(this.state.correctPlay === 'STAND'){
                this.setState({ standButtonColor: '#055902' })
            } else if(this.state.correctPlay === 'DOUBLE'){
                this.setState({ doubleButtonColor: '#055902' })
            } else if(this.state.correctPlay === 'SURRENDER'){
                this.setState({ surrenderButtonColor: '#055902' })
            } else if(this.state.correctPlay === 'SPLIT'){
                this.setState({ splitButtonColor: '#055902' })
            }
        }
    }

    checkStandButton = (e) => {
        if (this.state.correctPlay === 'STAND'){
            this.setState({ standButtonColor: '#055902' })
            if (this.state.currentKindOfHandBeingPlayed === 'HARD'){
                this.setState(prevState => { return{ hardHandsCorrect: prevState.hardHandsCorrect += 1 }} )
            } else if(this.state.currentKindOfHandBeingPlayed === 'SOFT'){
                this.setState(prevState => { return{ softHandsCorrect: prevState.softHandsCorrect += 1 }} )
            } else if(this.state.currentKindOfHandBeingPlayed === 'SPLIT'){
                this.setState(prevState => { return{ splitHandsCorrect: prevState.splitHandsCorrect += 1 }} )
            }
        } else {
            this.setState({ standButtonColor: '#ff0000' })
            if(this.state.correctPlay === 'HIT'){
                this.setState({ hitButtonColor: '#055902' })
            } else if(this.state.correctPlay === 'DOUBLE'){
                this.setState({ doubleButtonColor: '#055902' })
            } else if(this.state.correctPlay === 'SURRENDER'){
                this.setState({ surrenderButtonColor: '#055902' })
            } else if(this.state.correctPlay === 'SPLIT'){
                this.setState({ splitButtonColor: '#055902' })
            }
        }
    }

    checkDoubleButton = (e) => {
        if (this.state.correctPlay === 'DOUBLE'){
            this.setState({ doubleButtonColor: '#055902' })
            if (this.state.currentKindOfHandBeingPlayed === 'HARD'){
                this.setState(prevState => { return{ hardHandsCorrect: prevState.hardHandsCorrect += 1 }} )
            } else if(this.state.currentKindOfHandBeingPlayed === 'SOFT'){
                this.setState(prevState => { return{ softHandsCorrect: prevState.softHandsCorrect += 1 }} )
            } else if(this.state.currentKindOfHandBeingPlayed === 'SPLIT'){
                this.setState(prevState => { return{ splitHandsCorrect: prevState.splitHandsCorrect += 1 }} )
            }
        } else {
            this.setState({ doubleButtonColor: '#ff0000' })
            if(this.state.correctPlay === 'STAND'){
                this.setState({ standButtonColor: '#055902' })
            } else if(this.state.correctPlay === 'HIT'){
                this.setState({ hitButtonColor: '#055902' })
            } else if(this.state.correctPlay === 'SURRENDER'){
                this.setState({ surrenderButtonColor: '#055902' })
            } else if(this.state.correctPlay === 'SPLIT'){
                this.setState({ splitButtonColor: '#055902' })
            }
        }
    }

    checkSplitButton = (e) => {
        if (this.state.correctPlay === 'SPLIT'){
            this.setState({ splitButtonColor: '#055902' })
            if (this.state.currentKindOfHandBeingPlayed === 'HARD'){
                this.setState(prevState => { return{ hardHandsCorrect: prevState.hardHandsCorrect += 1 }} )
            } else if(this.state.currentKindOfHandBeingPlayed === 'SOFT'){
                this.setState(prevState => { return{ softHandsCorrect: prevState.softHandsCorrect += 1 }} )
            } else if(this.state.currentKindOfHandBeingPlayed === 'SPLIT'){
                this.setState(prevState => { return{ splitHandsCorrect: prevState.splitHandsCorrect += 1 }} )
            }
        } else {
            this.setState({ splitButtonColor: '#ff0000' })
            if(this.state.correctPlay === 'STAND'){
                this.setState({ standButtonColor: '#055902' })
            } else if(this.state.correctPlay === 'DOUBLE'){
                this.setState({ doubleButtonColor: '#055902' })
            } else if(this.state.correctPlay === 'SURRENDER'){
                this.setState({ surrenderButtonColor: '#055902' })
            } else if(this.state.correctPlay === 'HIT'){
                this.setState({ hitButtonColor: '#055902' })
            }
        }
    }

    checkSurrenderButton = (e) => {
        if (this.state.correctPlay === 'SURRENDER'){
            this.setState({ surrenderButtonColor: '#055902' })
            if (this.state.currentKindOfHandBeingPlayed === 'HARD'){
                this.setState(prevState => { return{ hardHandsCorrect: prevState.hardHandsCorrect += 1 }} )
            } else if(this.state.currentKindOfHandBeingPlayed === 'SOFT'){
                this.setState(prevState => { return{ softHandsCorrect: prevState.softHandsCorrect += 1 }} )
            } else if(this.state.currentKindOfHandBeingPlayed === 'SPLIT'){
                this.setState(prevState => { return{ splitHandsCorrect: prevState.splitHandsCorrect += 1 }} )
            }
        } else {
            this.setState({ surrenderButtonColor: '#ff0000' })
            if(this.state.correctPlay === 'STAND'){
                this.setState({ standButtonColor: '#055902' })
            } else if(this.state.correctPlay === 'DOUBLE'){
                this.setState({ doubleButtonColor: '#055902' })
            } else if(this.state.correctPlay === 'HIT'){
                this.setState({ hitButtonColor: '#055902' })
            } else if(this.state.correctPlay === 'SPLIT'){
                this.setState({ splitButtonColor: '#055902' })
            }
        }
    }

    helpButton = () => {
        let pHand = this.state.pHand
        let handType = this.state.currentKindOfHandBeingPlayed
        this.setState({showHelp: !this.state.showHelp})

        console.log(handType)
        console.log(pHand)

        console.log('dealer stands on soft 17: ' + this.state.dealerStandsOnSoft17)

        if(this.state.shoe){
            if(handType === 'HARD'){
            switch(pHand){
                case 9:
                    this.setState({ helpImageToShow: shoeHard9 })
                    break;
                case 10:
                    this.setState({ helpImageToShow: playerHelpHard10 })
                    break;
                case 11:
                    if(this.state.dealerStandsOnSoft17){
                        this.setState({ helpImageToShow: shoeStandHard11 })
                    } else {
                        this.setState({ helpImageToShow: shoeHitHard11 })
                    }
                    break;
                case 12:
                    this.setState({ helpImageToShow: playerHelpHard12 })
                    break;
                case 13:
                    this.setState({ helpImageToShow: playerHelpHard13 })
                    break;
                case 14:
                    this.setState({ helpImageToShow: playerHelpHard14 })
                    break;
                case 15:
                    if(this.state.dealerStandsOnSoft17){
                        this.setState({ helpImageToShow: shoeStandHard15 })
                    } else {
                        this.setState({ helpImageToShow: shoeHitHard15 })
                    }
                    break;
                case 16:
                    this.setState({ helpImageToShow: shoeHard16 })
                    break;
                case 17:
                    if(this.state.dealerStandsOnSoft17){
                        this.setState({ helpImageToShow: shoeStandHard17 })
                    } else {
                        this.setState({ helpImageToShow: shoeHitHard17 })
                    }
                    break;
                case 18:
                    if(this.state.dealerStandsOnSoft17){
                        this.setState({ helpImageToShow: shoeStandHard17 })
                    } else {
                        this.setState({ helpImageToShow: shoeHitHard18 })
                    }
                    break;
                case 19:
                    if(this.state.dealerStandsOnSoft17){
                        this.setState({ helpImageToShow: shoeStandHard17 })
                    } else {
                        this.setState({ helpImageToShow: shoeHitHard18 })
                    }
                    break;
                case 20:
                    if(this.state.dealerStandsOnSoft17){
                        this.setState({ helpImageToShow: shoeStandHard17 })
                    } else {
                        this.setState({ helpImageToShow: shoeHitHard18 })
                    }
                    break;
                default:
                    this.setState({ helpImageToShow: shoeHard5to8 })
                }
            } 
            if(handType === 'SOFT'){
                switch(pHand){
                    case 13:
                        this.setState({ helpImageToShow: shoeSoft13 })
                        break;
                    case 14:
                        this.setState({ helpImageToShow: shoeSoft14 })
                        break;
                    case 15:
                        this.setState({ helpImageToShow: shoeSoft15 })
                        break;
                    case 16:
                        this.setState({ helpImageToShow: shoeSoft16 })
                        break;
                    case 17:
                        this.setState({ helpImageToShow: shoeSoft17 })
                        break;
                    case 18:
                        this.setState({ helpImageToShow: shoeSoft18 })
                        break;
                    case 19:
                        if(this.state.dealerStandsOnSoft17){
                            this.setState({ helpImageToShow: shoeStandSoft19 })
                        } else {
                            this.setState({ helpImageToShow: shoeHitSoft19 })
                        }
                        break;
                    case 20:
                        if(this.state.dealerStandsOnSoft17){
                            this.setState({ helpImageToShow: shoeStandSoft19 })
                        } else {
                            this.setState({ helpImageToShow: shoeHitSoft20 })
                        }
                        break;
                    case 21:
                        if(this.state.dealerStandsOnSoft17){
                            this.setState({ helpImageToShow: shoeStandSoft19 })
                        } else {
                            this.setState({ helpImageToShow: shoeHitSoft20 })
                        }
                        break;
                    default:
                        null
                }
            }
            if(handType === 'SPLIT'){
                switch(pHand){
                    case 4:
                        this.setState({ helpImageToShow: shoeSplit4 })
                        break;
                    case 6:
                        this.setState({ helpImageToShow: shoeSplit6 })
                        break;
                    case 8:
                        this.setState({ helpImageToShow: shoeSplit8 })
                        break;
                    case 10:
                        this.setState({ helpImageToShow: playerHelpHard10 })
                        break;
                    case 12:
                        this.setState({ helpImageToShow: shoeSplit12 })
                        break;
                    case 14:
                        this.setState({ helpImageToShow: shoeSplit14 })
                        break;
                    case 16:
                        if(this.state.dealerStandsOnSoft17){
                            this.setState({ helpImageToShow: shoeStandSplit16  })
                        } else {
                            this.setState({ helpImageToShow: shoeHitSplit16 })
                        }
                        break;
                    case 18:
                        this.setState({ helpImageToShow: shoeSplit18 })
                        break;
                    default:
                        this.setState({ helpImageToShow: playerHelpSplitA })
                }
            }
        }   
    }


    static navigationOptions = {
        title: 'Basic Strategy Drill',
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
                    <Button onPress={this.dealCard} width='50' color='#000000' title='Deal'></Button>
                    
                    <Text style={styles.handLabel}> Choose the correct play:</Text>
                    <View style={styles.buttonWrapper}>
                        <View style={styles.buttonContainerLeft}>
                            <Button onPress={this.checkHitButton} title='Hit' color={this.state.hitButtonColor}></Button>
                            <Button onPress={this.checkDoubleButton} title='Double' color={this.state.doubleButtonColor}></Button>
                            <Button onPress={this.checkSurrenderButton} title='Surrender' color={this.state.surrenderButtonColor}></Button>
                            
                        </View>
                        <View style={styles.buttonContainerRight}>
                            <Button onPress={this.checkStandButton} title='Stand' color={this.state.standButtonColor}></Button>
                            <Button onPress={this.checkSplitButton} title='Split' color={this.state.splitButtonColor}></Button>
                            <Button onPress={this.helpButton} title='Help' color='#2196f3'></Button>
                        </View>
                    </View>

                    { this.state.showHelp ?
                    <View style={styles.helpModalContainer}>
                        <View style={styles.helpModal}>
                        <TouchableWithoutFeedback onPress={() => this.helpButton()} style={{  }}>
                            <Image
                                source={require('../../images/close_white.png')}
                                style={{ width: 30, height: 30, marginLeft:(ScreenWidth -60), marginTop: 10, zIndex: 6, position: 'absolute'}}/>
                        </TouchableWithoutFeedback>

                            <View style={styles.helpImageContainer}>
                            <Image
                                source={this.state.helpImageToShow}
                                style={{ width: 320, height: 120, resizeMode: 'contain', marginTop: 25, borderRadius: 2, zIndex: 6 }}/>
                            </View>
                        </View>
                    </View>
                    : null
                    }


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
        height: 160,
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
        marginTop: 100,
    },
    helpImageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default BasicStrategy