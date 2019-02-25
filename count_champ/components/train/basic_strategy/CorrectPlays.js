import * as React from 'react';
import { Button, Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import { Constants } from 'expo';
import BasicStrategy from './BasicStrategy'

let ScreenHeight = Dimensions.get("window").height;

class CorrectPlays extends React.Component {
    constructor(){
        super()
        this.state = {
            test: 'this is a test state'
        }
    }

    static navigationOptions = {
        title: 'Correct Plays'
    };
    
    render() {
        const {navigate} = this.props.navigation;
        return (
                <BasicStrategy test={this.state.test} />

        );
    }
}

export default CorrectPlays