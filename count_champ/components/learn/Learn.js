import * as React from 'react';
import { Button, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Constants } from 'expo';

let ScreenHeight = Dimensions.get("window").height;

class Learn extends React.Component {
    static navigationOptions = {
        title: 'Learn',
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Level 0:  How To Play"
                        color="#000000"
                        onPress={() => navigate('HowToPlay', {name: 'How To Play'})}
                        />
                    <Button
                        title="Level 1:  Fundamentals"
                        color="#000000"
                        onPress={() => navigate('Fundamentals', {name: 'Fundamentals'})}
                        />
                    <Button
                        title="Level 2:  Basic Strategy"
                        color="#000000"
                        onPress={() => navigate('LearnBasicStrategy', {name: 'Learn Basic Strategy'})}
                        />
                    <Button
                        title="Level 3:  Counting Cards"
                        color="#000000"
                        onPress={() => navigate('CountingCards', {name: 'Counting Cards'})}
                        />
                    <Button
                        title="Level 4:  Running Count vs True Count"
                        color="#000000"
                        onPress={() => navigate('RunningCountVsTrueCount', {name: 'Running Count vs True Count'})}
                        />
                    <Button
                        title="Level 5:  Divergences & Illustrious 18"
                        color="#000000"
                        onPress={() => navigate('Divergences', {name: 'Divergences'})}
                        />
                    <Button
                        title="Level 6:  How to Bet"
                        color="#000000"
                        onPress={() => navigate('HowToBet', {name: 'How to Bet'})}
                        />
                    <Button
                        title="Level 7:  Bankroll Sizing"
                        color="#000000"
                        onPress={() => navigate('BankrollSizing', {name: 'Bankroll Sizing'})}
                        />
                    <Button
                        title="Level 8:  How Much $ Can I Make?"
                        color="#000000"
                        onPress={() => navigate('HowMuchMoney', {name: 'How Much Money'})}
                        />
                    <Button
                        title="Level 9:  What’s Next"
                        color="#000000"
                        onPress={() => navigate('WhatsNext', {name: 'Whats Next'})}
                        />
                    <Button
                        title="Glossary of Terms"
                        color="#000000"
                        onPress={() => navigate('Glossary', {name: 'Glossary'})}
                        />
                </View>
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
        height: 650,
    },
    buttonContainer: {
        marginTop: 0,
        flex: 0,
        justifyContent: 'space-evenly',
        height: 550,
    },
});

export default Learn