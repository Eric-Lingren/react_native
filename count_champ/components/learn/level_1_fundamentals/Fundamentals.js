import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Constants, AdMobBanner } from 'expo';

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

class Fundamentals extends React.Component {
    static navigationOptions = {
        title: 'Learn Fundamentals',
    };
    
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.paragraph}>
                        Gambling games rely sole on luck. Blackjack is unique in that although you have no control of the cards that are dealt, it allows Players the opportunity to strategically play each hand to minimize the casinos odds. This user-interaction makes Blackjack the game with the best probabilities in any casino...if you know how to play correctly.
                    </Text>
                    <Text style={styles.paragraph}>
                        Blackjack is beatable!
                    </Text>
                    <Text style={styles.paragraph}>
                        Here are some tips to get you started:
                    </Text>
                    <Text style={styles.subheader}>
                        Know the Rules
                    </Text>
                    <Text style={styles.paragraph}>
                        Rules vary between venues, make sure you understand the rules where you are playing and account for them in your strategy.
                    </Text>
                    <Text style={styles.paragraph}>
                        Players have free will to play based on all cards dealt. Whereas the Dealer must abide by certain rules, such as hitting on any value less than 17, etc.
                    </Text>
                    <Text style={styles.subheader}>
                        Know the Gestures
                    </Text>
                    <Text style={styles.paragraph}>
                        There are universal gestures for each play, which were invented to serve as proof in cases of disputes. Security cameras can clearly record any gestures.
                    </Text>
                    <Text style={styles.subheader}>
                        Less Is More
                    </Text>
                    <Text style={styles.paragraph}>
                        Blackjack is played with one to eight 52-decks of cards. Fewer decks is more advantageous for the player. 
                        There are more 10-point value cards in the deck than any other values - 10s, as well a kings, queens, and jacks all count as 10-point value cards.
                        The suit of the cards is irrelevant.
                        The chances of winning each hand, played over several rounds, becomes skewed by the cards removed from the deck.
                    </Text>
                    <Text style={styles.paragraph}>
                        Be Alert - Avoid alcohol, be well rested and focused!
                    </Text>
                    <Text style={styles.paragraph}>
                        Practice makes perfect!
                    </Text>
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
        height: 1070,
    },
    header: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
    subheader: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 15,
    },
    paragraph: {
        color: '#fff',
        fontSize: 16,
        padding: 10,
    },
});

export default Fundamentals