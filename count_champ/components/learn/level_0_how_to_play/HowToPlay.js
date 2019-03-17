import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Constants } from 'expo';

let ScreenHeight = Dimensions.get("window").height;

class HowToPlay extends React.Component {
    static navigationOptions = {
        title: 'Learn How To Play',
    };
    
    render() {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.container}>
                    {/* <Text style={styles.subheader}>
                    One of the attractions of Blackjack is the game’s simplicity.
                    </Text> */}
                    <Text style={styles.subheader}>
                    There is only one objective in Blackjack - Beat the Dealer.
                    </Text>
                    <Text style={styles.paragraph}>
                    Don’t be intimidated if there is a full table of people playing;  You only have to beat the Dealer, not the other Players. They’re just trying to beat the Dealer too. Any and every Player can beat the Dealer on every hand - although I wouldn’t bet on it : )
                    </Text>
                    <Text style={styles.paragraph}>
                    There are only three ways the game is won:
                    </Text>
                    <Text style={styles.paragraph}>
                    🂡  Get 21 points with your first two cards, without the dealer getting 21 as well.
                    </Text>
                    <Text style={styles.paragraph}>
                    🂾  Reach a final score higher than the dealer without exceeding 21 points.
                    </Text>
                    <Text style={styles.paragraph}>
                    🂫  The dealers hand exceeds 21 points, without yours doing the same.
                    </Text>
                    <Text style={styles.subheader}>
                    Cards & Values
                    </Text>
                    <Text style={styles.paragraph}>
                    Cards Used:
                    52-card deck(s) are used (jokers are removed).
                    One to Eight decks of cards may be used.
                    </Text>
                    <Text style={styles.paragraph}>
                    Card Values:
                    Numbered cards are worth the corresponding number indicated on the card.
                    Face cards are worth 10.
                    Ace cards are worth 1 or 11.
                    </Text>
                    <Text style={styles.subheader}>
                    Hand Values:
                    </Text>
                    <Text style={styles.paragraph}>
                    Hand values are equal to the values of each card. 
                    A Blackjack (an Ace and any 10-point card) trumps all other 21-point hands.
                    </Text>
                    <Text style={styles.subheader}>
                    How the Game is Played:
                    </Text>
                    <Text style={styles.paragraph}>
                    To be included in a hand, a Player must lay out an initial bet.
                    The Dealer will deal two cards to each player who has placed a bet face up (unless it is a pitch game).  Dont touch the cards!
                    The Dealer takes two cards as well. One of the Dealer’s cards is placed face up. The Dealer’s facedown card is called a "hole card."
                    </Text>
                    <Text style={styles.paragraph}>
                    Once all initial cards are dealt, if the Dealer has an Ace showing a side bet called “Insurance” is offered to Players. If the Dealer’s hole card is any 10-point card, insurance will pay 2-to-1. (note: Insurance wagers may not exceed half the original wager).
                    </Text>
                    <Text style={styles.paragraph}>
                    The Dealer will check his hole card at this time. If the Dealer has a blackjack, all wagers lose, except those who took the insurance bet or those players who also have a blackjack, resulting in a push.
                    If the Dealer does not have a blackjack, play continues normally.
                    </Text>
                    <Text style={styles.paragraph}>
                    The Player to the left of the Dealer starts.
                    The following options are available to each Player:
                    </Text>
                    <Text style={styles.paragraph}>
                    ◆  Stand - Player indicates they want no more cards
                    </Text>
                    <Text style={styles.paragraph}>
                    ◆  Hit - Player asks for additional card(s)
                    </Text>
                    <Text style={styles.paragraph}>
                    ◆  Double - Player doubles her bet. Doubling is like Hitting, but only one additional card is provided to the Player.
                    </Text>
                    <Text style={styles.paragraph}>
                    ◆  Split - When a Player has a pair or any two 10-point cards, splitting is a method of separating each card into two separate hands, thereby doubling the bet (each of the two new hands is worth the original bet). 
                    </Text>
                    <Text style={styles.paragraph}>
                    The Dealer will deal a new card to each of the split cards. The Player then plays each hand out normally. A few rules apply:
                    </Text>
                    <Text style={styles.paragraph}>
                    ◆  Splitting is only allowed on the first move of each hand.
                    </Text>
                    <Text style={styles.paragraph}>
                    ◆  When splitting Aces, only one additional card can be dealt to each (some casino rules do not allow splitting Aces).
                    </Text>
                    <Text style={styles.paragraph}>
                    ◆  Obtaining a ten and an ace after splitting counts as 21 points, not blackjack.
                    </Text>
                    <Text style={styles.paragraph}>
                    ◆  Splitting is generally limited to a total of four hands.
                    </Text>
                    <Text style={styles.paragraph}>
                    ◆  Doubling may or may not be allowed after splitting.
                    </Text>
                    <Text style={styles.paragraph}>
                    ◆  Surrender - this option is only available with the initial two cards dealt. In this case a Player surrenders half their wager and does not play out their hand (Note: some rules do not allow Surrenders).
                    </Text>
                    <Text style={styles.paragraph}>
                    When all Players are satisfied with their hands & want no more cards or have busted, the Dealer will play out his hand.
                    </Text>
                    <Text style={styles.paragraph}>
                    The Dealer flips over his hole card.
                    If the Dealer has 16 points or less, they will draw one or more cards.
                    Soft 17 occurs when the Dealer has an Ace and any number of additional cards totalling six points. House rules determine if the Dealer hits on soft 17.
                    </Text>
                    <Text style={styles.subheader}>
                    Outcomes:
                    </Text>
                    <Text style={styles.paragraph}>
                    ◇  If the Dealer’s hands exceeds 21, any Player(s) who didn’t bust, wins.
                    </Text>
                    <Text style={styles.paragraph}>
                    ◇  If the Dealer does not bust, then any Player(s) with higher points that the Dealer win.
                    </Text>
                    <Text style={styles.paragraph}>
                    ◇  A true blackjack, earned with the 1st 2 cards, pays out 1.5x the Player’s wager (some casinos pay 6:5 rather than 1: 1.5 on a blackjack.  Dont play these games.).
                    </Text>
                    <Text style={styles.paragraph}>
                    ◇  When a Player ties the Dealer, which is called a push, the Player’s bet remains on the table. The Player may choose to use it in the next round, or take it back.
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
        height: 2700,
        marginTop: -20,
    },
    header: {
        color: '#ffb600',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
    item: {
        marginBottom: 25,
    },
    subheader: {
        color: '#ffb600',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 15,
    },
    paragraph: {
        color: '#ffb600',
        fontSize: 16,
        padding: 10,
    },
});

export default HowToPlay