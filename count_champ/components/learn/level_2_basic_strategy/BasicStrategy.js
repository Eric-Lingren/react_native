import * as React from 'react';
import { Text, View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { Constants } from 'expo';

let ScreenHeight = Dimensions.get("window").height;

class BasicStrategy extends React.Component {
    static navigationOptions = {
        title: 'Learn Basic Strategy',
    };
    
    render() {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                Basic strategy is the mathematically correct play for every combination of cards.

                Blackjack is based on mathematical odds

                That’s good! That means there are decisions that can be made on each hand to sway the advantage in your favor.

                There are 312 different play combinations to remember and every one is different. You can practice them all on the training page! Make sure to reference a basic strategy chart. Once you can play basic strategy perfectly on every hand, you will reduce the casino advantage from about 10% to 0.5%.

                In the following situations:
                Two 8’s - Split
                Hard 8 or less - Hit
                10 or 11
                If higher than the dealer's up card (treating a dealer ace as 11 points) - Double
                Otherwise - Hit
                Soft 15 or less - Hit
                Hard 17 or more - Stand
                Soft 19 or more - Stand
                16 against 10 - Surrender
                Two Aces - Split
                If your hand doesn’t match any above situations AND the dealer is showing 2 to 6:
                9 - Double
                Hard 12 to 16 - Stand
                Soft 16 to 18 - Double
                2's, 3's, 6's, 7's, and 9's - Split
                If your hand doesn’t match any above situations AND the dealer is showing 7 to Ace - Hit

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
        height: ScreenHeight,
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

export default BasicStrategy