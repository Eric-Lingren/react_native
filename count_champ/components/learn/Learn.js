import * as React from 'react';
import { Text, Button, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
// import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'
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
                        color="#ffb600"
                        onPress={() => navigate('HowToPlay', {name: 'How To Play'})}
                        />
                    <Button
                        title="Level 1:  Fundamentals"
                        color="#ffb600"
                        onPress={() => navigate('Fundamentals', {name: 'Fundamentals'})}
                        />
                    <Button
                        title="Level 2:  Basic Strategy"
                        color="#ffb600"
                        onPress={() => navigate('LearnBasicStrategy', {name: 'Learn Basic Strategy'})}
                        />
                    <Button
                        title="Level 3:  Running Count"
                        color="#ffb600"
                        onPress={() => navigate('CountingCards', {name: 'Counting Cards'})}
                        />
                    <Button
                        title="Level 4:  Running Count vs True Count"
                        color="#ffb600"
                        onPress={() => navigate('RunningCountVsTrueCount', {name: 'Running Count vs True Count'})}
                        />
                    <Button
                        title="Level 5:  Deviations & Illustrious 18"
                        color="#ffb600"
                        onPress={() => navigate('Deviations', {name: 'Deviations'})}
                        />
                    <Button
                        title="Level 6:  How to Bet"
                        color="#ffb600"
                        onPress={() => navigate('HowToBet', {name: 'How to Bet'})}
                        />
                    <Button
                        title="Level 7:  Bankroll Sizing"
                        color="#ffb600"
                        onPress={() => navigate('BankrollSizing', {name: 'Bankroll Sizing'})}
                        />
                    <Button
                        title="Level 8:  How Much $ Can I Make?"
                        color="#ffb600"
                        onPress={() => navigate('HowMuchMoney', {name: 'How Much Money'})}
                        />
                    <Button
                        title="Level 9:  What’s Next"
                        color="#ffb600"
                        onPress={() => navigate('WhatsNext', {name: 'Whats Next'})}
                        />
                    <Button
                        style={styles.buttonStyle}
                        title="Glossary of Terms"
                        color="#ffb600"
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
        height: 750,
    },
    buttonContainer: {
        marginTop: 0,
        flex: 0,
        justifyContent: 'space-evenly',
        height: 550,
    },
    buttonStyle: {
        backgroundColor: '#fff',
        color: '#fff',
    },
});

export default Learn