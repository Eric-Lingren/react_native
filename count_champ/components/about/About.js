import * as React from 'react';
import { Dimensions, View, Text, StyleSheet, TouchableHighlight, Linking} from 'react-native';
import { Constants } from 'expo';

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

class About extends React.Component {
    
    static navigationOptions = {
        title: 'About'
    };

    render() {
        const navigate = this.props.navigation
        
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.textStyles}>
                        All content and drills are property of and copyrighted by Card Champ LLC
                    </Text>
                </View>
                <View>
                    <Text style={styles.textStyles}>
                        If you find incorrect info or anything broken, please let us know and we will update or fix it as quickly as we can.
                    </Text>
                </View>
                <View>
                    <Text style={styles.textStyles}>
                        If you have recommendations for improvements or additional content or training drills you would like to see, we would be happy to build it!
                    </Text>
                </View>

                <View>
                    <Text style={styles.textStyles}>
                        You can reach us through google play or email our team directly at:
                    </Text>
                        <TouchableHighlight onPress={() => Linking.openURL('mailto:info@countchamp.com')}>
                            <Text style={styles.URLtextStyles}>info@countchamp.com</Text>
                        </TouchableHighlight>

                    
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        padding: 8,
        backgroundColor: ( '#0f9b0f'),
        height: ScreenHeight,
    },
    textStyles: {
        color: 'white',
        fontSize: 20,
        marginBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },
    URLtextStyles: {
        color: 'blue',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        textDecorationLine: 'underline',
    }
});
export default About