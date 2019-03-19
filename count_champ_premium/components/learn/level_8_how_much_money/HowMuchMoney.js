import * as React from 'react';
import { Button, Text, View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { Constants } from 'expo';

let ScreenHeight = Dimensions.get("window").height;

class HowMuchMoney extends React.Component {
    static navigationOptions = {
        title: 'How Much Money Can I Make?',
    };
    
    render() {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.subheader}>
                    The question everyone wants to know!
                </Text>
                <Text style={styles.paragraph}>
                    Unfortunately, like everything in this game, there are not definitive answers due to variance; BUT there are some general rules of thumb to follow.
                </Text>
                <Text style={styles.paragraph}>
                    To put it simply, you will make approximately 2x your minimum bet for every hour played.  However, this will depend on your bet spread, how often the count is in your favor, if you play during all counts or walk away during negative counts, what the rules are, etc.
                </Text>
                <Text style={styles.paragraph}>
                    Lets break it down a little more...  If you are playing a perfect game with a 1 - 12 spread and favorable rules, here are some specific guidelines:
                </Text>
                <Text style={styles.term}>
                    $1,000 Bankroll : 
                </Text>
                <Text style={styles.subparagraph}>
                    $10/hr with a 45% risk of ruin and a $5 minimum bet.
                </Text>
                <Text style={styles.term}>
                    $5,000 Bankroll : 
                </Text>
                <Text style={styles.subparagraph}>
                    $10/hr but with a 2% risk of ruin and a $5 minimum bet. 
                </Text>
                <Text style={styles.subparagraph}>
                    or 
                </Text>
                <Text style={styles.subparagraph}>
                    $16/hr with a $10 minimum bet and a 10% chance of risk of ruin.    
                </Text>
                <Text style={styles.term}>
                    $10,000 Bankroll : 
                </Text>
                <Text style={styles.subparagraph}>
                    $16/hr with a $10 minimum bet and a 1% risk of ruin.  
                </Text>
                <Text style={styles.subparagraph}>
                    or 
                </Text>
                <Text style={styles.subparagraph}>
                    $33/hr with a $20 minimum bet and a 10% risk of ruin.  
                </Text>
                <Text style={styles.term}>
                    $20,000 Bankroll : 
                </Text>
                <Text style={styles.subparagraph}>
                    $50/hr with a $25 minimum bet and a 5% risk of ruin.  
                </Text>
                <Text style={styles.term}>
                    $50,000 Bankroll : 
                </Text>
                <Text style={styles.subparagraph}>
                    $100/hr with a $50 minimum bet and a 2% risk of ruin.  
                </Text>
                <Text style={styles.paragraph}>
                    With good rules and perfect play you can expect to double your bankroll after roughtly 300 hours of play.
                </Text>
                <Text style={styles.paragraph}>
                    Keep in mind that these are just averages, and if you want to get serious about your play you need to get serious about money management. 
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
        height: 1160,
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

export default HowMuchMoney