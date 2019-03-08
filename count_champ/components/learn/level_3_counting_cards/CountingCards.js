import * as React from 'react';
import { Button, Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Constants } from 'expo';

let ScreenHeight = Dimensions.get("window").height;

class CountingCards extends React.Component {
    static navigationOptions = {
        title: 'Learn Counting Cards',
    };
    
    render() {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.subheader}>
                    Anyone can learn card counting!
                </Text>
                <Text style={styles.paragraph}>
                    Card counting is not a mysterious and magical skill.  Counting cards is simply keeping track of what cards have already been played in order to better predict the cards that will be played in the future.
                </Text>
                <Text style={styles.paragraph}>
                    You will always utilize Basic Strategy to make your playing decisions; counting cards enhances your ability to make strategic moves by keeping track of what cards are left in the deck.
                </Text>
                <Text style={styles.paragraph}>
                    Learning basic strategy is actually much more complex than learning to count cards so if you have already done that, the hard part is out of the way!
                </Text>
                <Text style={styles.paragraph}>
                    The basic principle regarding counting cards is that a deck with more 10-point cards and aces is beneficial for the Player because they will receive more blackjacks, while a deck stacked with small cards is to the Dealer’s advantage because they have less of a chance to bust.
                </Text>
                <Text style={styles.subheader}>
                    Cards are assigned values:
                </Text>
                <Text style={styles.paragraph}>
                    2-6 are assigned a value of +1.
                </Text>
                <Text style={styles.paragraph}>
                    7-9 are assigned a value of 0 and we ignore them.
                </Text>
                <Text style={styles.paragraph}>
                    10-point cards and Aces are assigned a value of -1.
                </Text>
                <Text style={styles.paragraph}>
                    When more high cards are played we know that there will be more low cards in the future and vice versa. We keep track of this with the running count.
                </Text>
                <Text style={styles.subheader}>
                    Remember:
                </Text>
                <Text style={styles.paragraph}>
                    A positive count is good for the player
                </Text>
                <Text style={styles.paragraph}>
                    A negative count is good for the casino.
                </Text>
                <Text style={styles.paragraph}>
                    This method of assigning values to cards is often referred to as the Hi-Lo Strategy.
                </Text>
                <Text style={styles.subheader}>
                    Recap Example:
                </Text>
                <Text style={styles.paragraph}>
                    Every time a card is layed down on the table, you add its value to maintain what is called a running count. You always want to start counting at the beginning of a shoe, starting with 0.
                </Text>
                <Text style={styles.paragraph}>
                    The 4 is a low card. Plus 1.
                </Text>
                <Text style={styles.paragraph}>
                    The 8 is worth 0, so the count stays at plus 1.
                </Text>
                <Text style={styles.paragraph}>
                    The 5 is worth 1, so the count goes to plus 2.
                </Text>
                <Text style={styles.paragraph}>
                    Another low card 3 brings us to plus 3.
                </Text>
                <Text style={styles.paragraph}>
                    Deal a 9.  Those are zero so we stay at plus 3.
                </Text>
                <Text style={styles.paragraph}>
                    An Ace is minus 1. The count drops to plus 2.
                </Text>
                <Text style={styles.paragraph}>
                    The 2 is worth 1 and brings us to plus 3.
                </Text>
                <Text style={styles.paragraph}>
                    The Jack is worth minus 1, so our running count goes down to plus 2.
                </Text>
                <Text style={styles.paragraph}>
                    4 takes it to Plus 3.
                </Text>
                <Text style={styles.paragraph}>
                    3 takes it to Plus 4.
                </Text>
                <Text style={styles.paragraph}>
                    DEALERS HAND King drops it to Plus 3. So the Running Count is Plus 3
                </Text>
                <Text style={styles.paragraph}>
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
        height: 1700,
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

export default CountingCards