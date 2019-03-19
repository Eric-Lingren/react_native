import * as React from 'react';
import { Button, Text, View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { Constants } from 'expo';

import all_fab4 from './charts/all_fab4.png'
import all_illustrious18 from './charts/all_illustrious18.png'

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

class Deviations extends React.Component {
    static navigationOptions = {
        title: 'Learn Deviations',
    };
    
    render() {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.paragraph}>
                        A deviation is an action we take that is standard to the norm.  In blackjack this refers to alterations we make in our basic strategy depending on the true count.
                    </Text>
                    <Text style={styles.paragraph}>
                        Don't bother learning your deviations until you can play basic strategy perfectly and are getting bored with the game.  They will cause you to lose more money than you will make unless your game is perfect.
                    </Text>
                    <Text style={styles.paragraph}>
                        When we have a perfect game, our betting spread based on the count will account for 60%-80% of all our profits.  Playing deviations will account for the remaining 20%-40% of your profits. Please read Blackjack Attack by Don Schlesinger for far more detailed information on deviations.
                    </Text>
                    <Text style={styles.paragraph}>
                        There are well over 100 different deviations to learn, but there are only 22 that will account for the majority of your profits.  These are called the "Illustrious 18" and the "Fab 4".  Master these before you move on to learning the others.  We have a training drill to help you learn the Illustrious 18 and Fab 4, and the others will be coming soon.
                    </Text>
                    <Text style={styles.subheader}>
                        Please remember that there is no point in learning these unless your basic strategy and counting is PERFECT!
                    </Text>
                    <Text style={styles.paragraph}>
                        It is also worth while to note that some of these deviations may anger conventional players at the table, will attract extra attention from pit bosses, and will require you to develop your own playing style and camouflage.  For example, no one will be happy if you are splitting a pair of tens, especially if this play causes the dealer to make their hand rather than busting, but the payoff in certain situations can be worth it!
                    </Text>
                    <Text style={styles.paragraph}>
                        Fab 4 rules always trump Illustrious 18 rules. For example your default play for Player 15 and Dealer 10 is surrender, but if the casino doesn't allow surrender, you hit. When playing deviations you first check the Fab 4 rule which is to surrender if the true count is 0 or more. If the casino doesn't allow surrender or if the count is negative you should hit (which is default basic strategy). However the Illustrious 18 rule says if the true count 4+ you should stand. Therefore the proper play for this hand is to always surrender if the count is 0 or more if available. If the count is negative you should always hit.  If surrender is not available and the count is 0 or more you should hit up until the count is 4 or more at which point you should stand.
                    </Text>
                    <Text style={styles.paragraph}>
                        Here are the most common play alterations you will need to make for a 6 deck shoe with the dealer standing on soft 17. They are listed in the most profitable order:
                    </Text>
                    <Text style={styles.subheader}>
                        The Fab 4:
                    </Text>
                    <Text style={styles.term}>
                        Player 14 vs Dealer 10: 
                    </Text>
                    <Text style={styles.subparagraph}>
                        Surrender if true count is 4+.  Else Hit.   
                    </Text>
                    <Text style={styles.term}>
                        Player 15 vs Dealer 10: 
                    </Text>
                    <Text style={styles.subparagraph}>
                        Surrender if true count is 0+.  Else Hit.   
                    </Text>
                    <Text style={styles.term}>
                        Player 15 vs Dealer 9:
                    </Text>
                    <Text style={styles.subparagraph}>
                        Surrender if true count is 2+.  Else Hit.   
                    </Text>
                    <Text style={styles.term}>
                        Player 15 vs Dealer A:
                    </Text>
                    <Text style={styles.subparagraph}>
                        Surrender if true count is 1+.  Else Hit.   
                    </Text>

                    <Text style={styles.subheader}>
                        The Illustrious 18:
                    </Text>
                    <Text style={styles.term}>
                        Take Insurance:
                    </Text>
                        <Text style={styles.subparagraph}>
                            When true count is 3+. This play alone accounts for 33% of all the deviations profits.
                        </Text>
                    <Text style={styles.term}>
                        Player 16 vs Dealer 10:
                    </Text>
                        <Text style={styles.subparagraph}>
                            Surrender if possible.  Otherwise Hit when true count is 0- (0 or less). Stand at true count 1+ (1 or more).
                        </Text>
                    <Text style={styles.term}>
                        Player 15 vs Dealer 10:
                    </Text>
                        <Text style={styles.subparagraph}>
                            Surrender if possible.  Otherwise Stand when true count is 4+ (4 or more). Hit at true count 3- (3 or less).
                        </Text>
                    <Text style={styles.term}>
                        Player 10, 10 vs Dealer 5:
                    </Text>
                        <Text style={styles.subparagraph}>
                            Split if count is 5+.  Stand at count 4-.
                        </Text>
                    <Text style={styles.term}>
                        Player 10, 10 vs Dealer 6:
                    </Text>
                        <Text style={styles.subparagraph}>
                            Split if count is 4+.  Stand at count 3-.
                        </Text>
                    <Text style={styles.term}>
                        Player 10 vs Dealer 10:
                    </Text>
                        <Text style={styles.subparagraph}>
                            Double if count is is 4+.  Hit at count 3-.
                        </Text>
                    <Text style={styles.term}>
                        Player 12 vs Dealer 3:
                    </Text>
                        <Text style={styles.subparagraph}>
                            Stand if count is 2+.  Hit at count 1-.
                        </Text>
                    <Text style={styles.term}>
                        Player 12 vs Dealer 2:
                    </Text>
                        <Text style={styles.subparagraph}>
                            Stand if count is 3+.  Hit at count 2-.
                        </Text>
                    <Text style={styles.term}>
                        Player 11 vs Dealer A:
                    </Text>
                        <Text style={styles.subparagraph}>
                            Double if count is 1+.  Hit at count 0-.
                        </Text>
                    <Text style={styles.term}>
                        Player 9 vs Dealer 2:
                    </Text>
                        <Text style={styles.subparagraph}>
                            Double if count is 1+.  Hit at count 0-.
                        </Text>
                    <Text style={styles.term}>
                        Player 10 vs Dealer A:
                    </Text>
                        <Text style={styles.subparagraph}>
                            Double if count is 4+.  Hit at count 3-.
                        </Text>
                    <Text style={styles.term}>
                        Player 9 vs Dealer 7:
                    </Text>
                        <Text style={styles.subparagraph}>
                            Double if count is 3+.  Hit at count 2-.
                        </Text>
                    <Text style={styles.term}>
                        Player 16 vs Dealer 9:
                    </Text>
                        <Text style={styles.subparagraph}>
                            Always surrender if possible.  If not available, stand if count is 5+.  Hit at count 4-.
                        </Text>
                    <Text style={styles.term}>
                    Player 13 vs Dealer 2:
                    </Text>
                        <Text style={styles.subparagraph}>
                            Hit if count is -1-.  Stand at count 0+.
                        </Text>
                    <Text style={styles.term}>
                    Player 12 vs Dealer 4:
                    </Text>
                        <Text style={styles.subparagraph}>
                            Hit if count is 0-.  Stand at count 1+.
                        </Text>
                    <Text style={styles.term}>
                    Player 12 vs Dealer 5:
                    </Text>
                        <Text style={styles.subparagraph}>
                            Hit if count is -2-.  Stand at count -1+.
                        </Text>
                    <Text style={styles.term}>
                    Player 12 vs Dealer 6:
                    </Text>
                        <Text style={styles.subparagraph}>
                            Hit if count is -1- and stand at count 0+ in S17 games. (changes to -3 in H17 games)
                        </Text>
                    <Text style={styles.term}>
                    Player 13 vs Dealer 3:
                    </Text>
                        <Text style={styles.subparagraph}>
                            Hit if count is -2 and stand at count -1+.
                        </Text>




                    <Text style={styles.subheader}>
                        A footnote on abbreviations... 
                    </Text>
                    <Text style={styles.paragraph}>
                        Count is assumed to be a positive number unless denoted as a negative. 
                    </Text>
                    <Text style={styles.paragraph}>
                        4 is plus four and -4 is minus four.  A symbol after the number is used to denote which direction the rule takes effect. 
                    </Text>
                    <Text style={styles.paragraph}>
                        EXAMPLE:  4+ would be read "rule is effective at a count of plus four and above".  
                    </Text>
                    <Text style={styles.paragraph}>
                        EXAMPLE:  4- would be read "rule is effective at a count of plus four and below".
                    </Text>
                    <Text style={styles.paragraph}>
                        EXAMPLE:  -2- would be read "rule is effective at a count of minus two and below".
                    </Text>
                    <Text style={styles.paragraph}>
                        EXAMPLE:  -2+ would be read "rule is effective at a count of minus two and above".
                    </Text>

                    <Image
                    style={styles.fabImage}
                    source={all_fab4}
                    />
                    <Image
                    style={styles.illustriousImage}
                    source={all_illustrious18}
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
        height: 4300,
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
    fabImage: {
        width: ScreenWidth - 55,
        height: 170,
        marginLeft: 15,
        marginBottom: 50,
        borderRadius: 10,
    },
    illustriousImage: {
        width: ScreenWidth - 50,
        height: 505,
        marginLeft: 15,
        marginBottom: 50,
        borderRadius: 10,
    },
});

export default Deviations