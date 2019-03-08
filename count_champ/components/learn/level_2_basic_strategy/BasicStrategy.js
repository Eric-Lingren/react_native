import * as React from 'react';
import { Text, View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { Constants } from 'expo';
import shoe_dh17 from './charts/shoe_dh17.png'
import shoe_ds17 from './charts/shoe_ds17.png'
import dd_dh17 from './charts/dd_dh17.png'
import dd_ds17 from './charts/dd_ds17.png'
import sd_dh17 from './charts/sd_dh17.png'
import sd_ds17 from './charts/sd_ds17.png'

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

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
                    Blackjack is based on mathematical odds
                </Text>
                <Text style={styles.paragraph}>
                    That’s good! That means there are decisions that can be made on each hand to sway the advantage in your favor.
                </Text>
                <Text style={styles.paragraph}>
                    Basic strategy is the mathematically correct play for any combination of cards.
                </Text>
                <Text style={styles.paragraph}>
                    There are 312 different play combinations to remember and every one is different. You can practice them all on the training page! Make sure to reference a basic strategy chart. Once you can play basic strategy perfectly on every hand, you will reduce the casino advantage from about 10% to 0.5%.
                </Text>
                <Text style={styles.paragraph}>
                    Here are some general rules of thumb you can use to start memorizing the charts (they may not be accurate for every deck size or rule combination):
                </Text>
                <Text style={styles.paragraph}>
                    Two 8’s - Split
                </Text>
                <Text style={styles.paragraph}>
                    Hard 8 or less - Hit
                </Text>
                <Text style={styles.paragraph}>
                    10 or 11- If higher than the dealer's up card (treating a dealer ace as 11 points) - Double; Otherwise - Hit
                </Text>
                <Text style={styles.paragraph}>
                    Soft 15 or less - Hit
                </Text>
                <Text style={styles.paragraph}>
                    Hard 17 or more - Stand
                </Text>
                <Text style={styles.paragraph}>
                Soft 19 or more - Stand
                </Text>
                <Text style={styles.paragraph}>
                    16 against 10 - Surrender
                </Text>
                <Text style={styles.paragraph}>
                    Two Aces - Split
                </Text>
                <Text style={styles.paragraph}>
                    If your hand doesn’t match any above situations AND the dealer is showing 2 to 6:
                </Text>
                <Text style={styles.paragraph}>
                    9 - Double
                </Text>
                <Text style={styles.paragraph}>
                    Hard 12 to 16 - Stand
                </Text>
                <Text style={styles.paragraph}>
                    Soft 16 to 18 - Double
                </Text>
                <Text style={styles.paragraph}>
                    2's, 3's, 6's, 7's, and 9's - Split
                </Text>
                <Text style={styles.paragraph}>
                    If your hand doesn’t match any above situations AND the dealer is showing 7 to Ace - Hit
                </Text>

                <Image
                    style={styles.bsImage}
                    source={shoe_dh17}
                />
                <Image
                    style={styles.bsImage}
                    source={shoe_ds17}
                />
                <Image
                    style={styles.bsImage}
                    source={dd_dh17}
                />
                <Image
                    style={styles.bsImage}
                    source={dd_ds17}
                />
                <Image
                    style={styles.bsImage}
                    source={sd_dh17}
                />
                <Image
                    style={styles.bsImage}
                    source={sd_ds17}
                />

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
        height: 6200,
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
    bsImage: {
        width: ScreenWidth - 50,
        height: 795,
        marginLeft: 15,
        marginBottom: 50,
        borderRadius: 10,
    }
});

export default BasicStrategy