import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';


class Train extends React.Component {
    static navigationOptions = {
        title: 'Welcome to my App',
    };
    
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>
                    This is the training page
                </Text>
            </View>
        );
    }
}

export default Train