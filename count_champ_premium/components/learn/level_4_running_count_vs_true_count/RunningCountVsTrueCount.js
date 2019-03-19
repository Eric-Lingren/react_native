import * as React from 'react';
import { Button, Text, View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { Constants } from 'expo';

class RunningCountVsTrueCount extends React.Component {
    static navigationOptions = {
        title: 'Running Count vs True Count',
    };
    
    render() {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                    Now that we have learned how to keep track of the running count, we need to be able to calculate our exact advantage over the casino by converting the running count into the true count. 
                </Text>
                <Text style={styles.paragraph}>
                    The purpose of a true count is to know what the upcoming cards will be.
                </Text>
                <Text style={styles.paragraph}>
                    Again, this is not complex. Simply divide the running count by how many decks are left to be played! 
                    We know what our running count is, but how many decks remain?
                </Text>
                <Text style={styles.paragraph}>
                    You can estimate how many decks remain by looking at how many cards are in the discard tray. Generally casinos use a 6-deck shoe, but make sure to ask how many decks are being used if you are unsure.
                    By dividing the running count by the number of decks remaining, we determine the true count.
                </Text>
                <Text style={styles.paragraph}>
                    Statistics:  For each true count of 1, the advantage shifts to the player by 0.5%. For example if the true count is +1 you are playing an even probability game.  If the running count is +8 and there are 2 decks left that puts the true count at +4. This means the player now has a 3.5% advantage over the casino (remember that if we play perfect basic strategy the casino still has approximately a 0.5% advantage.) 
                </Text>
                <Text style={styles.paragraph}>
                    Cards:  For each true count of 1, we know that there is 1 more high card in each deck remaing to be played.  If the true count at +4 that means there are 4 more high cards in each deck remaining. 
                </Text>
                <Text style={styles.paragraph}>
                    Card counting is really that simple!
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
        height: 800,
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

export default RunningCountVsTrueCount