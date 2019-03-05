import * as React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { Constants } from 'expo';
// import BasicStrategy from '../../../../count_champ_free/components/train/basic_strategy/BasicStrategy.js'

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;


class CustomDecks extends React.Component {
    constructor(){
        super()
        this.state = {
            deck: [
                {
                    "value": "6",
                    "image": "https://deckofcardsapi.com/static/img/6H.png"
                },
                {
                    "value": "QUEEN",
                    "image": "https://deckofcardsapi.com/static/img/QH.png"
                },
                {
                    "value": "JACK",
                    "image": "https://deckofcardsapi.com/static/img/JC.png"
                },
                {
                    "value": "QUEEN",
                    "image": "https://deckofcardsapi.com/static/img/QD.png"
                },
                {
                    "value": "2",
                    "image": "https://deckofcardsapi.com/static/img/2D.png"
                },
                {
                    "value": "3",
                    "image": "https://deckofcardsapi.com/static/img/3D.png"
                },
                {
                    "value": "QUEEN",
                    "image": "https://deckofcardsapi.com/static/img/QS.png"
                },
                {
                    "value": "5",
                    "image": "https://deckofcardsapi.com/static/img/5C.png"
                },
                {
                    "value": "9",
                    "image": "https://deckofcardsapi.com/static/img/9D.png"
                },
                {
                    "value": "4",
                    "image": "https://deckofcardsapi.com/static/img/4D.png"
                },
                {
                    "value": "7",
                    "image": "https://deckofcardsapi.com/static/img/7S.png"
                },
                {
                    "value": "10",
                        "image": "https://deckofcardsapi.com/static/img/0H.png"
                },
                {
                    "value": "KING",
                    "image": "https://deckofcardsapi.com/static/img/KD.png"
                },
                {
                    "value": "6",
                    "image": "https://deckofcardsapi.com/static/img/6S.png"
                },
                {
                    "value": "JACK",
                    "image": "https://deckofcardsapi.com/static/img/JD.png"
                },
                {
                    "value": "5",
                    "image": "https://deckofcardsapi.com/static/img/5S.png"
                },
                {
                    "value": "QUEEN",
                    "image": "https://deckofcardsapi.com/static/img/QC.png"
                },
                {
                    "value": "10",
                    "image": "https://deckofcardsapi.com/static/img/0D.png"
                },
                {
                    "value": "8",
                    "image": "https://deckofcardsapi.com/static/img/8S.png"
                },
                {
                    "value": "KING",
                    "image": "https://deckofcardsapi.com/static/img/KS.png"
                },
                {
                    "value": "2",
                    "image": "https://deckofcardsapi.com/static/img/2C.png"
                },
                {
                    "value": "2",
                    "image": "https://deckofcardsapi.com/static/img/2S.png"
                },
                {
                    "value": "4",
                    "image": "https://deckofcardsapi.com/static/img/4C.png"
                },
                {
                    "value": "3",
                    "image": "https://deckofcardsapi.com/static/img/3S.png"
                },
                {
                    "value": "2",
                    "image": "https://deckofcardsapi.com/static/img/2H.png"
                },
                {
                    "value": "9",
                    "image": "https://deckofcardsapi.com/static/img/9H.png"
                },
                {
                    "value": "7",
                    "image": "https://deckofcardsapi.com/static/img/7H.png"
                },
                {
                    "value": "5",
                    "image": "https://deckofcardsapi.com/static/img/5D.png"
                },
                {
                    "value": "10",
                    "image": "https://deckofcardsapi.com/static/img/0S.png"
                },
                {
                    "value": "4",
                    "image": "https://deckofcardsapi.com/static/img/4S.png"
                },
                {
                    "value": "KING",
                    "image": "https://deckofcardsapi.com/static/img/KH.png"
                },
                {
                    "value": "4",
                    "image": "https://deckofcardsapi.com/static/img/4H.png"
                },
                {
                    "value": "JACK",
                    "image": "https://deckofcardsapi.com/static/img/JH.png"
                },
                {
                    "value": "8",
                    "image": "https://deckofcardsapi.com/static/img/8D.png"
                },
                {
                    "value": "JACK",
                    "image": "https://deckofcardsapi.com/static/img/JS.png"
                },
                {
                    "value": "5",
                    "image": "https://deckofcardsapi.com/static/img/5H.png"
                },
                {
                    "value": "6",
                    "image": "https://deckofcardsapi.com/static/img/6D.png"
                },
                {
                    "value": "KING",
                    "image": "https://deckofcardsapi.com/static/img/KC.png"
                },
                {
                    "value": "10",
                    "image": "https://deckofcardsapi.com/static/img/0C.png"
                },
                {
                    "value": "9",
                    "image": "https://deckofcardsapi.com/static/img/9S.png"
                },
                {
                    "value": "8",
                    "image": "https://deckofcardsapi.com/static/img/8C.png"
                },
                {
                    "value": "7",
                    "image": "https://deckofcardsapi.com/static/img/7C.png"
                },
                {
                    "value": "3",
                    "image": "https://deckofcardsapi.com/static/img/3H.png"
                },
                {
                    "value": "8",
                    "image": "https://deckofcardsapi.com/static/img/8H.png"
                },
                {
                    "value": "7",
                    "image": "https://deckofcardsapi.com/static/img/7D.png"
                },
                {
                    "value": "3",
                    "image": "https://deckofcardsapi.com/static/img/3C.png"
                },
                {
                    "value": "9",
                    "image": "https://deckofcardsapi.com/static/img/9C.png"
                },
                {
                    "value": "6",
                    "image": "https://deckofcardsapi.com/static/img/6C.png"
                },
                {
                    "value": "ACE",
                    "image": "https://deckofcardsapi.com/static/img/AS.png"
                },
                {
                    "value": "ACE",
                    "image": "https://deckofcardsapi.com/static/img/aceDiamonds.png"
                },
                {
                    "value": "ACE",
                    "image": "https://deckofcardsapi.com/static/img/AH.png"
                },
                {
                    "value": "ACE",
                    "image": "https://deckofcardsapi.com/static/img/AC.png"
                }
            ],
            aces: [
                {
                    "value": "ACE",
                    "image": "https://deckofcardsapi.com/static/img/AS.png"
                },
                {
                    "value": "ACE",
                    "image": "https://deckofcardsapi.com/static/img/aceDiamonds.png"
                },
                {
                    "value": "ACE",
                    "image": "https://deckofcardsapi.com/static/img/AH.png"
                },
                {
                    "value": "ACE",
                    "image": "https://deckofcardsapi.com/static/img/AC.png"
                }
            ],
            dealCards: true
        }
    }


    dealHardHand = () => {
        let randomCardIndex1 = Math.floor(Math.random() * 52 )
        let randomCardIndex2 = Math.floor(Math.random() * 48 )
        let randomCardIndex3 = Math.floor(Math.random() * 48 )

        let randomDealerCard = this.state.deck[randomCardIndex1].value
        let randomPlayerCard1 = this.state.deck[randomCardIndex2].value
        let randomPlayerCard2 = this.state.deck[randomCardIndex3].value

        this.checkHardHand(randomDealerCard, randomPlayerCard1, randomPlayerCard2)
    }

    checkHardHand = (randomDealerCard, randomPlayerCard1, randomPlayerCard2) => {
        if(randomPlayerCard1 === randomPlayerCard2){
            this.dealHardHand()
        } else{
            console.log(` random dealer card is : ${randomDealerCard}`)
            console.log(` random player card 1 is : ${randomPlayerCard1}`)
            console.log(` random Player card 2 is : ${randomPlayerCard2}`)
            console.log('----------------------------------------------')
        }

    }

    dealSplitHand = () => {
        let randomCardIndex1 = Math.floor(Math.random() * 52 )
        let randomCardIndex2 = Math.floor(Math.random() * 52 )
        let randomCardIndex3 = Math.floor(Math.random() * 52 )

        let randomDealerCard = this.state.deck[randomCardIndex1].value
        let randomPlayerCard1 = this.state.deck[randomCardIndex2].value
        let randomPlayerCard2 = this.state.deck[randomCardIndex3].value

        this.checkSplitHand(randomDealerCard, randomPlayerCard1, randomPlayerCard2)
    }

    checkSplitHand = (randomDealerCard, randomPlayerCard1, randomPlayerCard2) => {
        if(randomPlayerCard1 !== randomPlayerCard2){
            this.dealSplitHand()
        } else{
            console.log(` random dealer card is : ${randomDealerCard}`)
            console.log(` random player card 1 is : ${randomPlayerCard1}`)
            console.log(` random Player card 2 is : ${randomPlayerCard2}`)
            console.log('----------------------------------------------')
        }

    }

    dealSoftHand = () => {
        let randomCardIndex1 = Math.floor(Math.random() * 52 )
        let randomCardIndex2 = Math.floor(Math.random() * 52 )
        let randomCardIndex3 = Math.floor(Math.random() * 4 )

        let randomDealerCard = this.state.deck[randomCardIndex1].value
        let randomPlayerCard1 = this.state.deck[randomCardIndex2].value
        let randomPlayerCard2 = this.state.aces[randomCardIndex3].value

        this.checkSoftHand(randomDealerCard, randomPlayerCard1, randomPlayerCard2)
    }

    checkSoftHand = (randomDealerCard, randomPlayerCard1, randomPlayerCard2) => {
            console.log(` random dealer card is : ${randomDealerCard}`)
            console.log(` random player card 1 is : ${randomPlayerCard1}`)
            console.log(` random Player card 2 is : ${randomPlayerCard2}`)
            console.log('----------------------------------------------')
    }


    static navigationOptions = {
        header: null
    };

    render() {

        return (
            <View>
                {/* {this.dealHardHand()} */}
                {/* {this.dealSplitHand()} */}
                {this.dealSoftHand()}
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
        zIndex: 10,
    },
});

export default CustomDecks