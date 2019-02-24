import * as React from 'react';
import { Button, Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import { Constants } from 'expo';
import CardProvider from '../context/CardProvider'

let ScreenHeight = Dimensions.get("window").height;

class Train extends React.Component {
    static navigationOptions = {
        title: 'Count Champ Training',
    };
    
    render() {
        const {navigate} = this.props.navigation;
        return (
            <CardProvider>
            <View style={styles.container}>

                <View style={styles.buttonContainer}>
                    <Button
                    title="Basic Strategy"
                    color="#000000"
                    onPress={() => navigate('BasicStrategy', {name: 'Basic Strategy'})}
                    />
                    <Button
                    title="Self Paced Count"
                    color="#000000"
                    onPress={() => navigate('SelfPacedCount', {name: 'Self Paced Count'})}
                    />
                    <Button
                    title="Speed Count"
                    color="#000000"
                    onPress={() => navigate('SpeedCount', {name: 'Speed Count'})}
                    />
                    <Button
                    title="True Count"
                    color="#000000"
                    onPress={() => navigate('TrueCount', {name: 'True Count'})}
                    />
                    <Button
                    title="Bankroll Sizing"
                    color="#000000"
                    onPress={() => navigate('BankrollSizing', {name: 'Bankroll Sizing'})}
                    />
                    <Button
                    title="Bet Sizing"
                    color="#000000"
                    onPress={() => navigate('BetSizing', {name: 'Bet Sizing'})}
                    />
                </View>
            </View>
            </CardProvider>


            
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
    buttonContainer: {
        marginTop: 100,
        flex: 0,
        justifyContent: 'space-evenly',
        height: 350,
    },
});

export default Train