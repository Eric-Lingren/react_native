import * as React from 'react';
import { Button, Text, View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { Constants } from 'expo';

let ScreenHeight = Dimensions.get("window").height;

class HowToBet extends React.Component {
    static navigationOptions = {
        title: 'Learn How to Bet',
    };
    
    render() {
        const {navigate} = this.props.navigation;
        return (
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
                    Budget
                </Text>
                <Text style={styles.paragraph}>
                    As with most things in life, budgeting is a prudent way to manage your money, betting is no different. 
                </Text>
                <Text style={styles.subheader}>
                    Betting unit 
                </Text>
                <Text style={styles.paragraph}>
                    Establish a betting unit, then make all bets as a multiple of your betting unit. For example, if your betting unit is $1, wagering $5 would be 5x your betting unit.
                </Text>
                <Text style={styles.paragraph}>
                    Determining your betting unit value should be based on your bank roll. A good starting point is to assign your betting unit as 1/1000 of your bank roll. You should continually evaluate the value of your betting unit and modify it as your bankroll changes. This ensures you don’t lose all your money, and you will see a faster increase in profits in the long run.
                </Text>
                <Text style={styles.subheader}>
                    Strategy 
                </Text>
                <Text style={styles.paragraph}>
                    Now that we know how to maximize our playing odds on every hand, we need a strategy to maximize our returns on each hand by making optimal bets.
                </Text>
                <Text style={styles.paragraph}>
                    Opinion varies widely on how to do this, but the general rule of thumb is for every time the true count increases by 1 we need to double our bet. By following all these rules it is possible to make your minimum bet size every for hour of playing.
                </Text>
                <Text style={styles.paragraph}>
                    First, before you start play, you have to determine your betting unit. Then, when you have the advantage and the count’s favorable, you bet in multiples of your betting unit according to the count. 
                </Text>
                <Text style={styles.paragraph}>
                    Your maximum bet should be at least 4 times, preferably 8 times, your betting unit. Your maximum bet can be higher if it won’t get you kicked out of the casino. Never bet more than 1/4 of the money you have on you on one round, because you always want to have enough money to be able to split and double down.
                </Text>
                <Text style={styles.subheader}>
                    Optimal Betting
                </Text>
                <Text style={styles.paragraph}>
                    Subtract 1 from the true count to determine how many units to bet. Multiply the number of units to bet by your betting unit.
                </Text>
                <Text style={styles.paragraph}>
                    For Example, your betting unit is $100, running count is +10, and true count is +5, then the optimal bet would be 4 X $100 which gives us $400.
                </Text>
                <Text style={styles.paragraph}>
                    Play two hands at a time on spots next to each other, and bet that amount per hand. If you’re the only player at the table, or if you can only play 1 hand, bet 25% more on one hand.
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

export default HowToBet