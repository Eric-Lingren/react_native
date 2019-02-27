import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, CheckBox } from 'react-native';
import { Constants } from 'expo';

let ScreenHeight = Dimensions.get("window").height;

class CasinoRules extends React.Component {
    constructor(){
        super()
        this.state = {
            checked: false
        }
    }

    static navigationOptions = {
        title: 'Casino Rules'
    };
    
    render() {
        const {navigate} = this.props.navigation;
        console.log(this.state.checked)
        return (
            
            <View style={styles.container}>
                <Text>
                    Casino Rules Component
                </Text>
                <CheckBox
                    title='Click Here'
                    checked={this.state.checked}
                /> 
                <Text> some words</Text>
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