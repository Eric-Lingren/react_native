import * as React from 'react';
import { Button, Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Constants, AdMobBanner } from 'expo';

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

class CountingCards extends React.Component {
    static navigationOptions = {
        title: 'Learn Running Count',
    };
    
    bannerError() {
        console.log("An error");
        return;
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.subheader}>
                    Anyone can learn card counting!
                </Text>
                <Text style={styles.paragraph}>
                    The purpose of a running count is to keep track of the historical cards that have already been dealt.
                </Text>
                <Text style={styles.paragraph}>
                    Card counting is not a mysterious or magical skill.  Counting cards is simply keeping track of what cards have already been played in order to better predict the cards that will be played in the future.
                </Text>
                <Text style={styles.paragraph}>
                    You will always utilize Basic Strategy to make your playing decisions;  Counting cards enhances your ability to make strategic moves by keeping track of what cards are left in the deck.
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
                    Every time a card is played, you add its value to maintain what is called a running count. You always want to start counting at the beginning of a shoe, starting with 0.
                </Text>
                <Text style={styles.paragraph}>
                    The 4 is a low card. Plus 1.
                </Text>
                <Text style={styles.paragraph}>
                    The 8 is worth 0, so the count stays at Plus 1.
                </Text>
                <Text style={styles.paragraph}>
                    The 5 is worth 1, so the count goes to Plus 2.
                </Text>
                <Text style={styles.paragraph}>
                    Another low card 3 brings us to Plus 3.
                </Text>
                <Text style={styles.paragraph}>
                    Deal a 9.  Those are zero so we stay at Plus 3.
                </Text>
                <Text style={styles.paragraph}>
                    An Ace is minus 1. The count drops to Plus 2.
                </Text>
                <Text style={styles.paragraph}>
                    The 2 is worth 1 and brings us to Plus 3.
                </Text>
                <Text style={styles.paragraph}>
                    The Jack is worth minus 1, so our running count goes down to Plus 2.
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
                {/* <AdMobBanner
                    bannerSize="fullBanner"
                    adUnitID="ca-app-pub-9918224509174617/8198931096" 
                    testDeviceID="EMULATOR"
                    onDidFailToReceiveAdWithError={this.bannerError} 
                    style={{width: ScreenWidth, paddingLeft:0, marginLeft: 0, position: 'absolute', bottom: -1 }}
                /> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        padding: 8,
        backgroundColor: ( '#0f9b0f', '#52c234', '#52c234', '#0f9b0f'),
        height: 1850,
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