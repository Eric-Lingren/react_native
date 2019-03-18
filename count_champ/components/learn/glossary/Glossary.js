import * as React from 'react';
import { Button, Text, View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { Constants, AdMobBanner, } from 'expo';

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

class Glossary extends React.Component {
    static navigationOptions = {
        title: 'Glossary',
    };
    
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
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
                            Being banned from playing by the casino, generally due to suspected advantage play.
                        </Text>
                    </View>

                    <Text style={styles.header}>
                        A
                    </Text>

                    <View style={styles.item}>
                        <Text style={styles.term}>
                            Advantage play : 
                        </Text>
                        <Text style={styles.definition}>
                            The act of legally exploiting procedural or structural weaknesses in some aspect of casino games or operations in a way that generates an edge over the casino. 
                        </Text>
                    </View>

                    <View style={styles.item}>
                        <Text style={styles.term}>
                            AP (Advantaged Player) : 
                        </Text>
                        <Text style={styles.definition}>
                            A Player who has an advantage in the casino, usually because of counting cards. 
                        </Text>
                    </View>

                    <Text style={styles.header}>
                        B
                    </Text>

                    <View style={styles.item}>
                        <Text style={styles.term}>
                            Balanced Count : 
                        </Text>
                        <Text style={styles.definition}>
                            When counting cards, a Balanced Count refers to an exact balance between plus cards and minus cards. Counting down to the bottom of the deck If the deck results in the sum being zero.
                        </Text>
                    </View>

                    <View style={styles.item}>
                        <Text style={styles.term}>
                            Blackjack : 
                        </Text>
                        <Text style={styles.definition}>
                            The best possible hand, consisting of an ace and a card valued at 10 (namely, 10, J, Q, K).
                        </Text>
                    </View>

                    <View style={styles.item}>
                        <Text style={styles.term}>
                            Bust : 
                        </Text>
                        <Text style={styles.definition}>
                            A hand with a total value exceeding 21 points.
                        </Text>
                    </View>

                    <View style={styles.item}>
                        <Text style={styles.term}>
                            Bust Card : 
                        </Text>
                        <Text style={styles.definition}>
                            The card that brings a hand's total value over 21.
                        </Text>
                    </View>

                    <View style={styles.item}>
                        <Text style={styles.term}>
                            Basic Strategy : 
                        </Text>
                        <Text style={styles.definition}>
                            A collection of predetermined actions to be made based on specific cards that are played, that are designed to provide the best odds of winning each hand.
                        </Text>
                    </View>

                    <Text style={styles.header}>
                        D
                    </Text>

                    <View style={styles.item}>
                        <Text style={styles.term}>
                            Double / Double Down : 
                        </Text>
                        <Text style={styles.definition}>
                            A Player can double their bet by placing an additional bet equal to his original bet and drawing only one additional card. Doubling can only be played on the first two cards.
                        </Text>
                    </View>

                    <Text style={styles.header}>
                        E
                    </Text>

                    <View style={styles.item}>
                        <Text style={styles.term}>
                            Even Money : 
                        </Text>
                        <Text style={styles.definition}>
                            A version of Insurance, where the Player can opt for a 1:1 payout When the Dealer shows an ace and the Player has a blackjack.
                        </Text>
                    </View>

                    <Text style={styles.header}>
                        F
                    </Text>

                    <View style={styles.item}>
                        <Text style={styles.term}>
                            First Base : 
                        </Text>
                        <Text style={styles.definition}>
                            The Player spot at the table located to the Dealer's left, who is first to receive cards and first to play.
                        </Text>
                    </View>

                    <View style={styles.item}>
                        <Text style={styles.term}>
                            Five Card Charlie : 
                        </Text>
                        <Text style={styles.definition}>
                            A hand that contains 5 cards without busting, which may receive a bonus or automatic win.
                        </Text>
                    </View>

                    <Text style={styles.header}>
                        H
                    </Text>

                    <View style={styles.item}>
                        <Text style={styles.term}>
                            Hard Hand : 
                        </Text>
                        <Text style={styles.definition}>
                            A hand that does not contain an ace.
                        </Text>
                    </View>

                    <View style={styles.item}>
                        <Text style={styles.term}>
                            Hit : 
                        </Text>
                        <Text style={styles.definition}>
                            To ask for another card.
                        </Text>
                    </View>

                    <View style={styles.item}>
                        <Text style={styles.term}>
                            Hole Card :
                        </Text>
                        <Text style={styles.definition}>
                            The Dealer’s card that is dealt face down.
                        </Text>
                    </View>

                    <Text style={styles.header}>
                        I
                    </Text>

                    <View style={styles.item}>
                        <Text style={styles.term}>
                            Insurance : 
                        </Text>
                        <Text style={styles.definition}>
                            If the Dealer’s shown card is an Ace, a side bet is offered to Players, of whether the Dealer has blackjack. Payout for an insurance bet is 2:1. Players lose the wager if the Dealer does not have blackjack.  There are only a few situations where are should you take insurance as a card counter.
                        </Text>
                    </View>

                    <Text style={styles.header}>
                        N
                    </Text>

                    <View style={styles.item}>
                        <Text style={styles.term}>
                            Natural Blackjack : 
                        </Text>
                        <Text style={styles.definition}>
                            Receiving a sum of 21 with the first two cards
                        </Text>
                    </View>

                    <Text style={styles.header}>
                        P
                    </Text>

                    <View style={styles.item}>
                        <Text style={styles.term}>
                            Ploppy : 
                        </Text>
                        <Text style={styles.definition}>
                            A typical blackjack Player who has false beliefs about the game, and through those beliefs they sometimes cause or enables the casino to make the game tougher to win at. 
                        </Text>
                    </View>

                    <View style={styles.item}>
                        <Text style={styles.term}>
                            Push : 
                        </Text>
                        <Text style={styles.definition}>
                            A tie. The Player and Dealer have hands with the same total.
                        </Text>
                    </View>

                    <Text style={styles.header}>
                        S
                    </Text>

                    <View style={styles.item}>
                        <Text style={styles.term}>
                            Shoe : 
                        </Text>
                        <Text style={styles.definition}>
                            A device used to hold the decks of cards that are dealt to be used during play.
                        </Text>
                    </View>

                    <View style={styles.item}>
                        <Text style={styles.term}>
                            Soft Hand : 
                        </Text>
                        <Text style={styles.definition}>
                            A hand that includes an ace.
                        </Text>
                    </View>

                    <View style={styles.item}>
                        <Text style={styles.term}>
                            Split : 
                        </Text>
                        <Text style={styles.definition}>
                            If a Player is dealt two cards of the same rank, he can choose to play each of them separately, putting up a bet for each one.
                        </Text>
                    </View>

                    <View style={styles.item}>
                        <Text style={styles.term}>
                            Stand : 
                        </Text>
                        <Text style={styles.definition}>
                            Player indicates to the Dealer that she wants no more cards for the current hand.
                        </Text>
                    </View>

                    <View style={styles.item}>
                        <Text style={styles.term}>
                            Stiff : 
                        </Text>
                        <Text style={styles.definition}>
                            A hard hand where the possibility to exceed 21 exists by drawing an additional card.
                        </Text>
                    </View>

                    <View style={styles.item}>
                        <Text style={styles.term}>
                            Surrender : 
                        </Text>
                        <Text style={styles.definition}>
                            To abandon your current hand. When surrendering, a Player receives half of his initial bet.
                        </Text>
                    </View>

                    <Text style={styles.header}>
                        T
                    </Text>

                    <View style={styles.item}>
                        <Text style={styles.term}>
                            Third Base : 
                        </Text>
                        <Text style={styles.definition}>
                            The betting spot at the table, located to the Dealer's right hand side, who is last to play.
                        </Text>
                    </View>

                    <Text style={styles.header}>
                        U
                    </Text>

                    <View style={styles.item}>
                        <Text style={styles.term}>
                            Upcard : 
                        </Text>
                        <Text style={styles.definition}>
                            The Dealer’s card that is face-up.
                        </Text>
                    </View>

                </View> 

                

            </ScrollView>
                <AdMobBanner
                    bannerSize="fullBanner"
                    adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
                    testDeviceID="EMULATOR"
                    onDidFailToReceiveAdWithError={this.bannerError} 
                    style={{width: ScreenWidth, paddingLeft:0, marginLeft: 0, position: 'absolute', bottom: 0 }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        padding: 8,
        backgroundColor: ( '#0f9b0f', '#52c234', '#52c234', '#0f9b0f'),
        height: 3330,
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
    term: {
        color: '#ffb600',
        fontSize: 18,
        fontWeight: 'bold'
    },
    definition: {
        color: '#ffb600',
        fontSize: 16,
        paddingLeft: 25,
    },

});

export default Glossary