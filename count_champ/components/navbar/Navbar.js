import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';


class Navbar extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
                <Text>
                    This is the Navbar
                </Text>
        );
    }
}

export default Navbar