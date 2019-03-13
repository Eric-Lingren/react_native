import * as React from 'react';
import { Button, View, Text, Image, StyleSheet, Dimensions, AsyncStorage, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Constants } from 'expo';

import fab14v10 from './charts/fab_14v10.png'
import fab15v9 from './charts/fab_15v9.png'
import fab15v10 from './charts/fab_15v10.png'
import fab15vA from './charts/fab_15vA.png'
import illustrious9v2 from './charts/illustrious_9v2.png'
import illustrious9v7 from './charts/illustrious_9v7.png'
import illustrious10v10 from './charts/illustrious_10v10.png'
import illustrious10vA from './charts/illustrious_10vA.png'
import illustrious11vA from './charts/illustrious_11vA.png'
import illustrious12v2 from './charts/illustrious_12v2.png'
import illustrious12v3 from './charts/illustrious_12v3.png'
import illustrious12v4 from './charts/illustrious_12v4.png'
import illustrious12v5 from './charts/illustrious_12v5.png'
import illustrious12v6 from './charts/illustrious_12v6.png'
import illustrious13v2 from './charts/illustrious_13v2.png'
import illustrious13v3 from './charts/illustrious_13v3.png'
import illustrious15v10 from './charts/illustrious_15v10.png'
import illustrious16v9 from './charts/illustrious_16v9.png'
import illustrious16v10 from './charts/illustrious_16v10.png'
import illustrious20v5 from './charts/illustrious_20v5.png'
import illustrious20v6 from './charts/illustrious_20v6.png'

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
            plus5ButtonColor: '#2196f3',
            plus4ButtonColor: '#2196f3',
            plus3ButtonColor: '#2196f3',
            plus2ButtonColor: '#2196f3',
            plus1ButtonColor: '#2196f3',
            plus0ButtonColor: '#2196f3',
            minus1ButtonColor: '#2196f3',
            minus2ButtonColor: '#2196f3',
            minus3ButtonColor: '#2196f3',
            correctIndex: 10,
            checkAnswer: false,
            fab4RuleSelected: false,
            showHelp: false,
            helpImageToShow: '',
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

        this.setState({
            dealerHand: dealerCard.value,
            dealerImages: dealerCard.image,
            playerCard1: randomPlayerHand.card1, 
            playerCard2: randomPlayerHand.card2,
            playerImage1: randomPlayerHand.image1, 
            playerImage2: randomPlayerHand.image2,
            correctIndex:10,
            plus5ButtonColor: '#2196f3',
            plus4ButtonColor: '#2196f3',
            plus3ButtonColor: '#2196f3',
            plus2ButtonColor: '#2196f3',
            plus1ButtonColor: '#2196f3',
            plus0ButtonColor: '#2196f3',
            minus1ButtonColor: '#2196f3',
            minus2ButtonColor: '#2196f3',
            minus3ButtonColor: '#2196f3',
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
        const dHand = parseInt(dCardNumber)
        
        //  Sets state of values parsed above for other functions to access.
        this.setState({
            pHand: pHand,
            dHand: dHand,
            pCard1Number: pCard1Number,
            pCard2Number: pCard2Number,
        }, () => this.checkFab4Rule() )
    }

    checkFab4Rule = () => {
        let pHand = this.state.pHand
        let dHand = this.state.dHand

        if(this.state.surrenderAllowed){
            if(this.state.shoe){
                if(pHand === 15){
                    if(dHand === 11){
                        this.setState({correctIndex: -2, fab4RuleSelected: true}, () => this.calculateAnswer())
                    } else if(dHand === 10){
                        this.setState({correctIndex: 0, fab4RuleSelected: true}, () => this.calculateAnswer())
                    } else if(dHand === 9){
                        this.setState({correctIndex: 3, fab4RuleSelected: true}, () => this.calculateAnswer())
                    }
                }else if(pHand === 14){
                    this.setState({correctIndex: 4, fab4RuleSelected: true}, () => this.calculateAnswer())
                }else {
                    this.setState({fab4RuleSelected: false}, () => this.calculateAnswer())
                }
            } else if(this.state.doubleDeck){
                if(pHand === 15){
                    if(dHand === 11){
                        this.setState({correctIndex: -1, fab4RuleSelected: true}, () => this.calculateAnswer())
                    } else if(dHand === 10){
                        this.setState({correctIndex: 0, fab4RuleSelected: true}, () => this.calculateAnswer())
                    } else if(dHand === 9){
                        this.setState({correctIndex: 3, fab4RuleSelected: true})
                    }
                }else if(pHand === 14){
                    this.setState({correctIndex: 4, fab4RuleSelected: true}, () => this.calculateAnswer())
                }else {
                    this.setState({fab4RuleSelected: false}, () => this.calculateAnswer())
                }
            } else if(this.state.singleDeck){
                if(pHand === 15){
                    if(dHand === 11){
                        if(this.state.dealerHitsOnSoft17){
                            this.setState({correctIndex: -2, fab4RuleSelected: true}, () => this.calculateAnswer())
                        }else{
                            this.setState({correctIndex: 0, fab4RuleSelected: true}, () => this.calculateAnswer())
                        }
                    } else if(dHand === 10){
                        this.setState({correctIndex: 0, fab4RuleSelected: true}, () => this.calculateAnswer())
                    } else if(dHand === 9){
                        this.setState({correctIndex: 2, fab4RuleSelected: true}, () => this.calculateAnswer())
                    }
                }else if(pHand === 14){
                    this.setState({correctIndex: 4, fab4RuleSelected: true}, () => this.calculateAnswer())
                }else {
                    this.setState({fab4RuleSelected: false}, () => this.calculateAnswer())
                }
            }
        }else {
            this.setState({fab4RuleSelected: false}, () => this.calculateAnswer())
        }
    }

    calculateAnswer = () => {
        let pHand = this.state.pHand
        let dHand = this.state.dHand

        this.setState(prevState => {
            return{
                deviationsPlayed: prevState.deviationsPlayed += 1
            }
        })

        if(!this.state.fab4RuleSelected){
            if(this.state.shoe){
                if(pHand === 16){
                    if(dHand === 10){
                        this.setState({correctIndex: 0})
                    } else if(dHand === 9){
                        this.setState({correctIndex: 5})
                    }
                } else if (pHand === 15){
                    this.setState({correctIndex: 4})
                } else if (pHand === 13){
                    if(dHand === 2){
                        this.setState({correctIndex: 0})
                    } else if(dHand === 3){
                        this.setState({correctIndex: -2})
                    }
                }else if (pHand === 12){
                    if(dHand === 2){
                        this.setState({correctIndex: 4})
                    } else if(dHand === 3){
                        this.setState({correctIndex: 2})
                    } else if(dHand === 4){
                        this.setState({correctIndex: 0})
                    } else if(dHand === 5){
                        this.setState({correctIndex: -1})
                    } else if(dHand === 6){
                        if(this.state.dealerHitsOnSoft17){
                            this.setState({correctIndex: -3})
                        }else{
                            this.setState({correctIndex: -1})
                        }
                    }
                }else if (pHand === 11){
                    if(this.state.dealerHitsOnSoft17){
                        this.setState({correctIndex: 0})
                    }else{
                        this.setState({correctIndex: 1})
                    }
                }else if (pHand === 10){
                    if(dHand === 11) {
                        if(this.state.dealerHitsOnSoft17){
                            this.setState({correctIndex: 3})
                        }else{
                            this.setState({correctIndex: 4})
                        }
                    }else if(dHand === 10) {
                        this.setState({correctIndex: 4})
                    }
                }else if (pHand === 9){
                    if(dHand === 2){
                        this.setState({correctIndex: 1})
                    }
                    if(dHand === 7){
                        this.setState({correctIndex: 4})
                    }
                }else if (pHand === 20){
                    if(dHand === 5){
                        this.setState({correctIndex: 5})
                    }
                    if(dHand === 6){
                        if(this.state.dealerHitsOnSoft17){
                            this.setState({correctIndex: 4})
                        }else{
                            this.setState({correctIndex: 5})
                        }
                    }
                }
            } else if(this.state.doubleDeck){
                if(pHand === 16){
                    if(dHand === 10){
                        this.setState({correctIndex: 0})
                    } else if(dHand === 9){
                        this.setState({correctIndex: 5})
                    }
                } else if (pHand === 15){
                    this.setState({correctIndex: 4})
                } else if (pHand === 13){
                    if(dHand === 2){
                        this.setState({correctIndex: 0})
                    } else if(dHand === 3){
                        this.setState({correctIndex: -2})
                    }
                }else if (pHand === 12){
                    if(dHand === 2){
                        this.setState({correctIndex: 4})
                    } else if(dHand === 3){
                        this.setState({correctIndex: 3})
                    } else if(dHand === 4){
                        this.setState({correctIndex: 0})
                    } else if(dHand === 5){
                        this.setState({correctIndex: -1})
                    } else if(dHand === 6){
                        if(this.state.dealerHitsOnSoft17){
                            this.setState({correctIndex: -3})
                        }else{
                            this.setState({correctIndex: 0})
                        }
                    }
                }else if (pHand === 11){
                    if(this.state.dealerHitsOnSoft17){
                        this.setState({correctIndex: -1})
                    }else{
                        this.setState({correctIndex: 0})
                    }
                }else if (pHand === 10){
                    if(dHand === 11) {
                        this.setState({correctIndex: 3})
                    }else if(dHand === 10) {
                        this.setState({correctIndex: 4})
                    }
                }else if (pHand === 9){
                    if(dHand === 2){
                        this.setState({correctIndex: 1})
                    }
                    if(dHand === 7){
                        this.setState({correctIndex: 4})
                    }
                }else if (pHand === 20){
                    if(dHand === 5){
                        this.setState({correctIndex: 5})
                    }
                    if(dHand === 6){
                        if(this.state.dealerHitsOnSoft17){
                            this.setState({correctIndex: 4})
                        }else{
                            this.setState({correctIndex: 5})
                        }
                    }
                }
            } else if(this.state.singleDeck){
                if(pHand === 16){
                    if(dHand === 10){
                        this.setState({correctIndex: 0})
                    } else if(dHand === 9){
                        this.setState({correctIndex: 5})
                    }
                } else if (pHand === 15){
                    this.setState({correctIndex: 4})
                } else if (pHand === 13){
                    if(dHand === 2){
                        this.setState({correctIndex: 0})
                    } else if(dHand === 3){
                        this.setState({correctIndex: -1})
                    }
                }else if (pHand === 12){
                    if(dHand === 2){
                        this.setState({correctIndex: 4})
                    } else if(dHand === 3){
                        this.setState({correctIndex: 3})
                    } else if(dHand === 4){
                        this.setState({correctIndex: 1})
                    } else if(dHand === 5){
                        this.setState({correctIndex: 0})
                    } else if(dHand === 6){
                        if(this.state.dealerHitsOnSoft17){
                            this.setState({correctIndex: -2})
                        }else{
                            this.setState({correctIndex: 1})
                        }
                    }
                }else if (pHand === 11){
                    if(this.state.dealerHitsOnSoft17){
                        this.setState({correctIndex: -2})
                    }else{
                        this.setState({correctIndex: -1})
                    }
                }else if (pHand === 10){
                    if(dHand === 11) {
                        this.setState({correctIndex: 2})
                    }else if(dHand === 10) {
                        this.setState({correctIndex: 3})
                    }
                }else if (pHand === 9){
                    if(dHand === 2){
                        this.setState({correctIndex: 1})
                    }
                    if(dHand === 7){
                        this.setState({correctIndex: 3})
                    }
                }else if (pHand === 20){
                    if(dHand === 5){
                        this.setState({correctIndex: 5})
                    }
                    if(dHand === 6){
                        this.setState({correctIndex: 5})
                    }
                }
            }
        }
    }

    checkPlus5Button = () => {
        let index = this.state.correctIndex
        if(index === 5){
            this.setState(prevState => {
                return{
                    deviationsCorrect: prevState.deviationsCorrect += 1,
                    plus5ButtonColor: '#055902'
                }
            })
        }else if(index === 4){
            this.setState({plus5ButtonColor: '#ff0000', plus4ButtonColor: '#055902'})
        }else if(index === 3){
            this.setState({plus5ButtonColor: '#ff0000', plus3ButtonColor: '#055902'})
        }else if(index === 2){
            this.setState({plus5ButtonColor: '#ff0000', plus2ButtonColor: '#055902'})
        }else if(index === 1){
            this.setState({plus5ButtonColor: '#ff0000', plus1ButtonColor: '#055902'})
        }else if(index === 0){
            this.setState({plus5ButtonColor: '#ff0000', plus0ButtonColor: '#055902'})
        }else if(index === -1){
            this.setState({plus5ButtonColor: '#ff0000', minus1ButtonColor: '#055902'})
        }else if(index === -2){
            this.setState({plus5ButtonColor: '#ff0000', minus2ButtonColor: '#055902'})
        }else if(index === -3){
            this.setState({plus5ButtonColor: '#ff0000', minus3ButtonColor: '#055902'})
        }
        
    }

    checkPlus4Button = () => {
        let index = this.state.correctIndex
        if(index === 4){
            this.setState(prevState => {
                return{
                    deviationsCorrect: prevState.deviationsCorrect += 1,
                    plus4ButtonColor: '#055902'
                }
            })
        }else if(index === 5){
            this.setState({plus4ButtonColor: '#ff0000', plus5ButtonColor: '#055902'})
        }else if(index === 3){
            this.setState({plus4ButtonColor: '#ff0000', plus3ButtonColor: '#055902'})
        }else if(index === 2){
            this.setState({plus4ButtonColor: '#ff0000', plus2ButtonColor: '#055902'})
        }else if(index === 1){
            this.setState({plus4ButtonColor: '#ff0000', plus1ButtonColor: '#055902'})
        }else if(index === 0){
            this.setState({plus4ButtonColor: '#ff0000', plus0ButtonColor: '#055902'})
        }else if(index === -1){
            this.setState({plus4ButtonColor: '#ff0000', minus1ButtonColor: '#055902'})
        }else if(index === -2){
            this.setState({plus4ButtonColor: '#ff0000', minus2ButtonColor: '#055902'})
        }else if(index === -3){
            this.setState({plus4ButtonColor: '#ff0000', minus3ButtonColor: '#055902'})
        }
    }

    checkPlus3Button = () => {
        let index = this.state.correctIndex
        if(index === 3){
            this.setState(prevState => {
                return{
                    deviationsCorrect: prevState.deviationsCorrect += 1,
                    plus3ButtonColor: '#055902'
                }
            })
        }else if(index === 5){
            this.setState({plus3ButtonColor: '#ff0000', plus5ButtonColor: '#055902'})
        }else if(index === 4){
            this.setState({plus3ButtonColor: '#ff0000', plus4ButtonColor: '#055902'})
        }else if(index === 2){
            this.setState({plus3ButtonColor: '#ff0000', plus2ButtonColor: '#055902'})
        }else if(index === 1){
            this.setState({plus3ButtonColor: '#ff0000', plus1ButtonColor: '#055902'})
        }else if(index === 0){
            this.setState({plus3ButtonColor: '#ff0000', plus0ButtonColor: '#055902'})
        }else if(index === -1){
            this.setState({plus3ButtonColor: '#ff0000', minus1ButtonColor: '#055902'})
        }else if(index === -2){
            this.setState({plus3ButtonColor: '#ff0000', minus2ButtonColor: '#055902'})
        }else if(index === -3){
            this.setState({plus3ButtonColor: '#ff0000', minus3ButtonColor: '#055902'})
        }
    }

    checkPlus2Button = () => {
        let index = this.state.correctIndex
        if(index === 2){
            this.setState(prevState => {
                return{
                    deviationsCorrect: prevState.deviationsCorrect += 1,
                    plus2ButtonColor: '#055902'
                }
            })
        }else if(index === 5){
            this.setState({plus2ButtonColor: '#ff0000', plus5ButtonColor: '#055902'})
        }else if(index === 4){
            this.setState({plus2ButtonColor: '#ff0000', plus4ButtonColor: '#055902'})
        }else if(index === 3){
            this.setState({plus2ButtonColor: '#ff0000', plus3ButtonColor: '#055902'})
        }else if(index === 1){
            this.setState({plus2ButtonColor: '#ff0000', plus1ButtonColor: '#055902'})
        }else if(index === 0){
            this.setState({plus2ButtonColor: '#ff0000', plus0ButtonColor: '#055902'})
        }else if(index === -1){
            this.setState({plus2ButtonColor: '#ff0000', minus1ButtonColor: '#055902'})
        }else if(index === -2){
            this.setState({plus2ButtonColor: '#ff0000', minus2ButtonColor: '#055902'})
        }else if(index === -3){
            this.setState({plus2ButtonColor: '#ff0000', minus3ButtonColor: '#055902'})
        }
    }

    checkPlus1Button = () => {
        let index = this.state.correctIndex
        if(index === 1){
            this.setState(prevState => {
                return{
                    deviationsCorrect: prevState.deviationsCorrect += 1,
                    plus1ButtonColor: '#055902'
                }
            })
        }else if(index === 5){
            this.setState({plus1ButtonColor: '#ff0000', plus5ButtonColor: '#055902'})
        }else if(index === 4){
            this.setState({plus1ButtonColor: '#ff0000', plus4ButtonColor: '#055902'})
        }else if(index === 3){
            this.setState({plus1ButtonColor: '#ff0000', plus3ButtonColor: '#055902'})
        }else if(index === 2){
            this.setState({plus1ButtonColor: '#ff0000', plus2ButtonColor: '#055902'})
        }else if(index === 0){
            this.setState({plus1ButtonColor: '#ff0000', plus0ButtonColor: '#055902'})
        }else if(index === -1){
            this.setState({plus1ButtonColor: '#ff0000', minus1ButtonColor: '#055902'})
        }else if(index === -2){
            this.setState({plus1ButtonColor: '#ff0000', minus2ButtonColor: '#055902'})
        }else if(index === -3){
            this.setState({plus1ButtonColor: '#ff0000', minus3ButtonColor: '#055902'})
        }
    }

    checkPlus0Button = () => {
        let index = this.state.correctIndex
        if(index === 0){
            this.setState(prevState => {
                return{
                    deviationsCorrect: prevState.deviationsCorrect += 1,
                    plus0ButtonColor: '#055902'
                }
            })
        }else if(index === 5){
            this.setState({plus0ButtonColor: '#ff0000', plus5ButtonColor: '#055902'})
        }else if(index === 4){
            this.setState({plus0ButtonColor: '#ff0000', plus4ButtonColor: '#055902'})
        }else if(index === 3){
            this.setState({plus0ButtonColor: '#ff0000', plus3ButtonColor: '#055902'})
        }else if(index === 2){
            this.setState({plus0ButtonColor: '#ff0000', plus2ButtonColor: '#055902'})
        }else if(index === 1){
            this.setState({plus0ButtonColor: '#ff0000', plus1ButtonColor: '#055902'})
        }else if(index === -1){
            this.setState({plus0ButtonColor: '#ff0000', minus1ButtonColor: '#055902'})
        }else if(index === -2){
            this.setState({plus0ButtonColor: '#ff0000', minus2ButtonColor: '#055902'})
        }else if(index === -3){
            this.setState({plus0ButtonColor: '#ff0000', minus3ButtonColor: '#055902'})
        }
    }

    checkMinus1Button = () => {
        let index = this.state.correctIndex
        if(index === -1){
            this.setState(prevState => {
                return{
                    deviationsCorrect: prevState.deviationsCorrect += 1,
                    minus1ButtonColor: '#055902'
                }
            })
        }else if(index === 5){
            this.setState({minus1ButtonColor: '#ff0000', plus5ButtonColor: '#055902'})
        }else if(index === 4){
            this.setState({minus1ButtonColor: '#ff0000', plus4ButtonColor: '#055902'})
        }else if(index === 3){
            this.setState({minus1ButtonColor: '#ff0000', plus3ButtonColor: '#055902'})
        }else if(index === 2){
            this.setState({minus1ButtonColor: '#ff0000', plus2ButtonColor: '#055902'})
        }else if(index === 0){
            this.setState({minus1ButtonColor: '#ff0000', plus0ButtonColor: '#055902'})
        }else if(index === 1){
            this.setState({minus1ButtonColor: '#ff0000', plus1ButtonColor: '#055902'})
        }else if(index === -2){
            this.setState({minus1ButtonColor: '#ff0000', minus2ButtonColor: '#055902'})
        }else if(index === -3){
            this.setState({minus1ButtonColor: '#ff0000', minus3ButtonColor: '#055902'})
        }
    }

    checkMinus2Button = () => {
        let index = this.state.correctIndex
        if(index === -2){
            this.setState(prevState => {
                return{
                    deviationsCorrect: prevState.deviationsCorrect += 1,
                    minus2ButtonColor: '#055902'
                }
            })
        }else if(index === 5){
            this.setState({minus2ButtonColor: '#ff0000', plus5ButtonColor: '#055902'})
        }else if(index === 4){
            this.setState({minus2ButtonColor: '#ff0000', plus4ButtonColor: '#055902'})
        }else if(index === 3){
            this.setState({minus2ButtonColor: '#ff0000', plus3ButtonColor: '#055902'})
        }else if(index === 2){
            this.setState({minus2ButtonColor: '#ff0000', plus2ButtonColor: '#055902'})
        }else if(index === 0){
            this.setState({minus2ButtonColor: '#ff0000', plus0ButtonColor: '#055902'})
        }else if(index === -1){
            this.setState({minus2ButtonColor: '#ff0000', plus1ButtonColor: '#055902'})
        }else if(index === 1){
            this.setState({minus2ButtonColor: '#ff0000', plus1ButtonColor: '#055902'})
        }else if(index === -3){
            this.setState({minus2ButtonColor: '#ff0000', minus3ButtonColor: '#055902'})
        }
    }

    checkMinus3Button = () => {
        let index = this.state.correctIndex
        if(index === -3){
            this.setState(prevState => {
                return{
                    deviationsCorrect: prevState.deviationsCorrect += 1,
                    minus3ButtonColor: '#055902'
                }
            })
        }else if(index === 5){
            this.setState({minus3ButtonColor: '#ff0000', plus5ButtonColor: '#055902'})
        }else if(index === 4){
            this.setState({minus3ButtonColor: '#ff0000', plus4ButtonColor: '#055902'})
        }else if(index === 3){
            this.setState({minus3ButtonColor: '#ff0000', plus3ButtonColor: '#055902'})
        }else if(index === 2){
            this.setState({minus3ButtonColor: '#ff0000', plus2ButtonColor: '#055902'})
        }else if(index === 1){
            this.setState({minus3ButtonColor: '#ff0000', plus1ButtonColor: '#055902'})
        }else if(index === 0){
            this.setState({minus3ButtonColor: '#ff0000', plus0ButtonColor: '#055902'})
        }else if(index === -1){
            this.setState({minus3ButtonColor: '#ff0000', minus1ButtonColor: '#055902'})
        }else if(index === -2){
            this.setState({minus3ButtonColor: '#ff0000', minus2ButtonColor: '#055902'})
        }
    }

    helpButton = () => {
    this.setState({showHelp: !this.state.showHelp})
    let surrenderAllowed = this.state.surrenderAllowed
    let pHand = this.state.pHand
    let dHand = this.state.dHand
        
        if(surrenderAllowed){
            switch(pHand){
                case 14:
                    this.setState({ helpImageToShow: fab14v10 })
                    break;
                case 15:
                    if(surrenderAllowed){
                        if(dHand === 9){
                            this.setState({ helpImageToShow: fab15v9 })
                        } else if(dHand === 10){
                            this.setState({ helpImageToShow: fab15v10 })
                        } else if(dHand === 11){
                            this.setState({ helpImageToShow: fab15vA })
                        }
                    } else{
                        this.setState({ helpImageToShow: illustrious15v10})
                    }
                    break;
                case 9:
                    if(dHand === 2){
                        this.setState({ helpImageToShow: illustrious9v2 })
                    } else if(dHand === 7){
                        this.setState({ helpImageToShow: illustrious9v7 })
                    }
                    break;
                case 10:
                    if(dHand === 10){
                        this.setState({ helpImageToShow: illustrious10v10 })
                    } else if(dHand === 11){
                        this.setState({ helpImageToShow: illustrious10vA })
                    }
                    break;
                case 12:
                    if(dHand === 2){
                        this.setState({ helpImageToShow: illustrious12v2 })
                    } else if(dHand === 3){
                        this.setState({ helpImageToShow: illustrious12v3 })
                    } else if(dHand === 4){
                        this.setState({ helpImageToShow: illustrious12v4 })
                    } else if(dHand === 5){
                        this.setState({ helpImageToShow: illustrious12v5 })
                    } else if(dHand === 6){
                        this.setState({ helpImageToShow: illustrious12v6 })
                    }
                    break;
                case 13:
                    if(dHand === 2){
                        this.setState({ helpImageToShow: illustrious13v2 })
                    } else if(dHand === 3){
                        this.setState({ helpImageToShow: illustrious13v3 })
                    }
                    break;
                case 16:
                    if(dHand === 9){
                        this.setState({ helpImageToShow: illustrious16v9 })
                    } else if(dHand === 10){
                        this.setState({ helpImageToShow: illustrious16v10 })
                    }
                    break;
                case 20:
                    if(dHand === 5){
                        this.setState({ helpImageToShow: illustrious20v5 })
                    } else if(dHand === 6){
                        this.setState({ helpImageToShow: illustrious20v6 })
                    }
                    break;
                default:
                    this.setState({ helpImageToShow: illustrious11vA })
            }
        }


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
                        <Button onPress={this.checkPlus5Button} title='+ 5' color={this.state.plus5ButtonColor}></Button>
                        <Button onPress={this.checkPlus4Button} title='+ 4' color={this.state.plus4ButtonColor}></Button>
                        <Button onPress={this.checkPlus3Button} title='+ 3' color={this.state.plus3ButtonColor}></Button>
                        <Button onPress={this.checkPlus2Button} title='+ 2' color={this.state.plus2ButtonColor}></Button>
                        <Button onPress={this.checkPlus1Button} title='+ 1' color={this.state.plus1ButtonColor}></Button>
                        
                    </View>
                    <View style={styles.buttonContainerRight}>
                        <Button onPress={this.checkPlus0Button} title='0' color={this.state.plus0ButtonColor}></Button>
                        <Button onPress={this.checkMinus1Button} title='- 1' color={this.state.minus1ButtonColor}></Button>
                        <Button onPress={this.checkMinus2Button} title='- 2' color={this.state.minus2ButtonColor}></Button>
                        <Button onPress={this.checkMinus3Button} title='- 3' color={this.state.minus3ButtonColor}></Button>
                        <Button onPress={this.helpButton} title='Help'color='#2196f3' ></Button>
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
        marginTop: 150,
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