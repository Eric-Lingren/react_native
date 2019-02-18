import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';


class Learn extends React.Component {
    static navigationOptions = {
        title: 'Welcome to my App',
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>
                    Here is some text for this page
                </Text>
            </View>
        );
    }
}

export default Learn