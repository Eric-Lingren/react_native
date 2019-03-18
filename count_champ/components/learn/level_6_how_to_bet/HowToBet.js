import * as React from 'react';
import { Button, Text, View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { Constants, AdMobBanner } from 'expo';

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

class HowToBet extends React.Component {
    static navigationOptions = {
        title: 'Learn How to Bet',
    };
    
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.subheader}>
                    This is where we apply our advantage and make money!
                </Text>
                <Text style={styles.paragraph}>
                    That’s what this is all about, right?
                </Text>
                <Text style={styles.paragraph}>
                    Often people will bet the same amount on every hand, but why would we only bet the table minimum bet if we know that we now have an advantage over the casino? We wouldn't! 
                    When we have the advantage we need to bet large! 
                </Text>
                <Text style={styles.subheader}>
                    Budget:
                </Text>
                <Text style={styles.paragraph}>
                    As with most things in life, budgeting is a prudent way to manage your money and betting is no different. 
                </Text>
                <Text style={styles.subheader}>
                    Betting unit:
                </Text>
                <Text style={styles.paragraph}>
                    Establish a betting unit, then make all bets as a multiple of your betting unit. For example, if your betting unit is $1, wagering $5 would be 5x your betting unit (or 5 units).
                </Text>
                <Text style={styles.paragraph}>
                    Determining your betting unit value should be based on your bank roll. A good starting point is to assign your betting unit as 1/1000 of your bank roll. You should continually evaluate the value of your betting unit and modify it as your bankroll changes. This ensures you don’t lose all your money, and you will see a faster increase in profits in the long run.
                </Text>
                <Text style={styles.subheader}>
                    Strategy: 
                </Text>
                <Text style={styles.paragraph}>
                    Now that we know how to maximize our playing odds on every hand, we need a strategy to maximize our returns on each hand by making optimal bets.
                </Text>
                <Text style={styles.paragraph}>
                    Opinion varies widely on how to do this, but the general rule of thumb is for every time the true count increases by 1 we need to increase our betting unit by 1 up to a maximum of 12 units. This is called a 1 - 12 spread.  By following all these rules it is possible to make your minimum bet size every for hour of playing.
                </Text>
                <Text style={styles.paragraph}>
                    First, before you start play, you have to determine your betting unit. Then, when you have the advantage and the count’s favorable, you bet in multiples of your betting unit according to the count. 
                </Text>
                <Text style={styles.paragraph}>
                    Your maximum bet should be at least 4 times your minimum bet, but preferably 8 times your betting unit. Your maximum bet can even be up to 12 times if it won’t get you kicked out of the casino. 
                </Text>
                <Text style={styles.subheader}>
                    Optimal Betting:
                </Text>
                <Text style={styles.paragraph}>
                    For a rule of thumb, you can subtract 1 from the true count to determine how many units to bet.  You should be more conserative if the casino has worse player rules and more agressive if the casino has favorable rules.
                </Text>
                <Text style={styles.paragraph}>
                    For optimal betting in a game with good rules you want to vary from 1 - 12 units.  Here is an example:
                </Text>
                <Text style={styles.list}>
                    True Count -1 (or lower) :   1 unit (or leave)
                </Text>
                <Text style={styles.list}>
                    True Count 0 :   1 unit
                </Text>
                <Text style={styles.list}>
                    True Count 1 :   2 units
                </Text>
                <Text style={styles.list}>
                    True Count 2 :   3 units
                </Text>
                <Text style={styles.list}>
                    True Count 3 :   4 units
                </Text>
                <Text style={styles.list}>
                    True Count 4 :   5 units
                </Text>
                <Text style={styles.list}>
                    True Count 5 :   6 units
                </Text>
                <Text style={styles.list}>
                    True Count 6 :   2 hands of 6 units
                </Text>
                <Text style={styles.list}>
                    (If you can't play 2 hands beacuse the table is full, you should play 1 hand of 13 units)
                </Text>

                <Text style={styles.paragraph}>
                    For betting with less risk and lower payoff, or if the casiono has less favorable player rules, you want to vary from 1 - 8 units.  Here is an example:
                </Text>
                <Text style={styles.list}>
                    True Count -1 (or lower) :   1 unit (or leave)
                </Text>
                <Text style={styles.list}>
                    True Count 0 :   1 unit
                </Text>
                <Text style={styles.list}>
                    True Count 1 :   2 units
                </Text>
                <Text style={styles.list}>
                    True Count 2 :   4 units
                </Text>
                <Text style={styles.list}>
                    True Count 3 :   2 hands of 4 units
                </Text>
                <Text style={styles.list}>
                    (If you can't play 2 hands because the table is full, you should play 1 hand of 5 units)
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
        height: 2030,
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
    list: {
        color: '#fff',
        fontSize: 16,
        padding: 0,
    },
});

export default HowToBet