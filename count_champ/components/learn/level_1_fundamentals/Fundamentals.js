import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Constants } from 'expo';

let ScreenHeight = Dimensions.get("window").height;

class Fundamentals extends React.Component {
    static navigationOptions = {
        title: 'Learn Fundamentals',
    };
    
    render() {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.paragraph}>
                        Gambling games rely sole on luck. Blackjack is unique in that although you have no control of the cards that are dealt, it also allows Players the opportunity to strategically play each hand to minimize the casinos odds. This user-interaction makes Blackjack the game with the best probabilities in any casino...if you know how to play correctly.
                    </Text>
                    <Text style={styles.paragraph}>
                        Blackjack is beatable!
                    </Text>
                    <Text style={styles.paragraph}>
                        Here are some fundamental tips to get you started:
                    </Text>
                    <Text style={styles.subheader}>
                        Know the Rules
                    </Text>
                    <Text style={styles.paragraph}>
                        Rules vary between venues, make sure you understand the rules where you are playing, and account for them in your strategy.
                    </Text>
                    <Text style={styles.paragraph}>
                        Players have free will to play based on all cards dealt. Whereas the Dealer must abide by certain rules, such as hitting on any value less than 17, etc.
                    </Text>
                    <Text style={styles.paragraph}>
                        Know the gestures - there are universal gestures for each play, which were invented to serve as proof in cases of disputes. Security cameras can clearly record any gestures.
                    </Text>
                    <Text style={styles.paragraph}>
                        Less cards is more advantageous - Blackjack is played with one to eight 52-decks of cards; the less that are used, the higher your odds of winning.
                        There are more 10-point value cards in the deck than any other values - 10s, as well a kings, queens, and jacks all count as 10-point value cards.
                        The suit of the cards is irrelevant.
                        The chances of winning each hand, played over several rounds, becomes skewed by the cards removed from the deck.
                    </Text>
                    <Text style={styles.paragraph}>
                        Be Alert - Avoid alcohol, etc.
                    </Text>
                    <Text style={styles.paragraph}>
                        Practice makes perfect!
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
        height: 950,
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