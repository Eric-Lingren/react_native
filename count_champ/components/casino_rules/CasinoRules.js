import * as React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { Constants } from 'expo';

let ScreenHeight = Dimensions.get("window").height;

class CasinoRules extends React.Component {
    static navigationOptions = {
        title: 'Casino Rules'
    };
    
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>

                <Text>
                    Casino Rules Component
                </Text>
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

export default CasinoRules