import * as React from 'react';
import { Button, Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import { Constants } from 'expo';

let ScreenHeight = Dimensions.get("window").height;

class SpeedCount extends React.Component {
    static navigationOptions = {
        title: 'Count Champ',
    };
    
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>
                    SPEED COUNT
                </Text>
                {/* <View style={styles.buttonContainer}>
                    <Button
                    title="Basic Strategy"
                    color="#000000"
                    onPress={() => navigate('Home', {name: 'Basic Strategy'})}
                    />
                    <Button
                    title="Self Paced Count"
                    color="#000000"
                    onPress={() => navigate('Learn', {name: 'Self Paced Count'})}
                    />
                    <Button
                    title="Speed Count"
                    color="#000000"
                    onPress={() => navigate('Train', {name: 'Speed Count'})}
                    />
                    <Button
                    title="True Count"
                    color="#000000"
                    onPress={() => navigate('Train', {name: 'True Count'})}
                    />
                    <Button
                    title="Bet Sizing"
                    color="#000000"
                    onPress={() => navigate('Train', {name: 'Bet Sizing'})}
                    />
                </View> */}
        </View>


            
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

export default SpeedCount