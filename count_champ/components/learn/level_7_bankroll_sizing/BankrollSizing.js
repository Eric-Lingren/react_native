import * as React from 'react';
import { Button, Text, View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { Constants, AdMobBanner } from 'expo';

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

class BankrollSizing extends React.Component {
    static navigationOptions = {
        title: 'Learn Bankroll Sizing',
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
                    <Text style={styles.paragraph}>
                        You can have the biggest bankroll in the world, but if you can't play a perfect game, with perfect counting and perfect basic strategy, you will evenutally lose everything.
                    </Text>
                    <Text style={styles.paragraph}>
                        Your bankroll is what you’re willing to invest in yourself as a blackjack player. 
                    </Text>
                    <Text style={styles.subheader}>
                        How do I not go broke?
                    </Text>
                    <Text style={styles.paragraph}>
                        The short answer is that your betting unit should be 1/1000 of your total bankroll.  Your bankroll is 1000 units and your bet size is 1 unit. This means you need a $5000 bankroll for a $5 minimum bet.
                    </Text>
                    <Text style={styles.subheader}>
                        Lets break down the numbers
                    </Text>
                    <Text style={styles.paragraph}>
                        Assuming perfect play, standard rules and a 1-12 bet spread, here are some bankroll sizing risk guidelines:
                    </Text>
                    <Text style={styles.term}>
                        200 Betting Units: 
                    </Text>
                    <Text style={styles.subparagraph}>
                        40% Risk of Ruin. That means that 4/10 players will lose all of their money. The other 6/10 card counters get lucky with positive variance and have success.
                    </Text>
                    <Text style={styles.term}>
                        400 Units:
                    </Text>
                    <Text style={styles.subparagraph}>
                        20% Risk of Ruin. This is still too risky for professional play.
                    </Text>
                    <Text style={styles.term}>
                        500 Units: 
                    </Text>
                    <Text style={styles.subparagraph}>
                        10% Risk of Ruin. Still very high for long-term play, but with these odds 9/10 card counters will be okay if they started at this level.
                    </Text>
                    <Text style={styles.term}>
                        1000 Units: 
                    </Text>
                    <Text style={styles.subparagraph}>
                        1% Risk of Ruin. This level of risk, or lower is acceptable for a professional player. 
                    </Text>
                </View>
            </ScrollView>
                {/* <AdMobBanner
                    bannerSize="fullBanner"
                    adUnitID="ca-app-pub-9918224509174617/8198931096" 
                    testDeviceID="EMULATOR"
                    onDidFailToReceiveAdWithError={this.bannerError} 
                    style={{width: ScreenWidth, paddingLeft:0, marginLeft: 0, position: 'absolute', bottom: 0 }}
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
        height: 1000,
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
    term: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 5,
    },
    subparagraph: {
        color: '#fff',
        fontSize: 16,
        paddingLeft: 25,
        paddingRight: 10,
    },
});

export default BankrollSizing