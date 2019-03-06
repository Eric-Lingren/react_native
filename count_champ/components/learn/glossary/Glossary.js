import * as React from 'react';
import { Button, Text, View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { Constants } from 'expo';

let ScreenHeight = Dimensions.get("window").height;

class Glossary extends React.Component {
    static navigationOptions = {
        title: 'Glossary',
    };
    
    render() {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView>
            <View style={styles.container}>
                
                
                <Text style={styles.header}>
                    #
                </Text>

                <View style={styles.item}>
                    <Text style={styles.term}>
                        86'd : 
                    </Text>
                    <Text style={styles.definition}>
                        Being banned from playing by the casino, generally due to suspected advantage play (legal methods of play used to gain advantage; however, still frowned upon by casinos)
                    </Text>
                </View>

                <Text style={styles.header}>
                    A
                </Text>
                <Text style={styles.term}>
                    86'd : 
                </Text>
                <Text style={styles.definition}>
                    Being banned from playing by the casino, generally due to suspected advantage play (legal methods of play used to gain advantage; however, still frowned upon by casinos)
                </Text>



                    <Text>

                    
                    Advantage play -
                    B
                    Balanced Count - When counting cards, a Balanced Count refers to an exact balance between plus cards and minus cards. Counting down to the bottom of the deck If the deck results in the sum being zero.
                    Blackjack - the best possible hand, consisting of an ace and a card valued at 10 (namely, 10, J, Q, K).
                    Bust - a hand with a total value exceeding 21 points.
                    Bust card - the card that brings a hand's total value over 21.
                    Basic Strategy - a collection of predetermined actions to be made based on specific cards that are played, that are designed to provide the best odds of winning each hand
                    D
                    double / double down - A Player can Double his bet by placing an additional bet equal to his original bet and drawing only one additional card. Doubling can only be played on the first two cards.
                    E
                    even money - A version of Insurance, where the player can opt for a 1:1 When the dealer shows an ace and the player has a blackjack
                    F
                    first base - The Player spot at the table located to the dealer's left, who is first to receive cards and first to play.
                    five card Charlie - a hand that contains 5 cards without busting often receives a bonus or automatic win.
                    H
                    Hard hand - A hand in which there is a chance the player will bust on a hit. As opposed to a ‘soft hand’ that includes an ace.
                    Hit - To ask for another card.
                    Hole Card - the Dealer’s card that is dealt face down
                    I
                    Insurance - If the Dealer’s shown card is an Ace, a side bet is offered to players, of whether the Dealer has blackjack. Payout for an insurance bet is 2:1. Players lose the wager if the Dealer does not have blackjack.
                    N
                    Natural Blackjack - Receiving a sum of 21 with the first two cards
                    P
                    Push - A tie. The player and dealer have hands with the same total.
                    S
                    Shoe - A device used to hold the decks of cards that are dealt to be used during play.
                    Soft / soft hand - Includes an ace valued as 11, as opposed to 1.
                    Split - If a player is dealt two cards of the same rank, he can choose to play each of them separately, putting up a bet for each one.
                    Stand - Player indicates to the Dealer that she wants no more cards for the current hand.
                    Stiff - A hard hand where the possibility to exceed 21 exists by drawing an additional card.
                    Surrender - To abandon your current hand. When surrendering, a Player receives half of his initial bet.
                    T
                    Third Base - The betting spot located to the Dealer's right hand side, who is last to play.
                    U
                    Upcard - the Dealer’s card that is face-up.

                </Text>
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
        height: 1500,
    },
    header: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
    item: {
        marginBottom: 25,
    },
    term: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    definition: {
        color: '#fff',
        fontSize: 16,
        paddingLeft: 25,
    },

});

export default Glossary