import * as React from 'react';
import { Dimensions, View, Text, StyleSheet, Linking} from 'react-native';

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

class SubscribeModal extends React.Component {
    
    static navigationOptions = {
        header: null
    };

    render() {
        const navigate = this.props.navigation
        
        return (
            <View style={styles.container}>
                

                <View style={styles.textContainer}>
                    <Text style={styles.textStyles}>This is a premium feature.</Text>
                    
                    <Text style={styles.hyperlinkStyles} onPress={ ()=> Linking.openURL('https://google.com') } >
                        You can get the upgraded version here.
                    </Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        opacity: .8,
        position: 'absolute',
        height: ScreenHeight,
        width: ScreenWidth,
        zIndex: 10,
    },
    textContainer: {
        marginTop: 200,
        padding: 25,
    },
    textStyles: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        
    },
    hyperlinkStyles: {
        fontSize: 22,
        textDecorationLine: 'underline',
        color: '#2196f3',
        textAlign: 'center',
        marginTop: 10,
    }
});
export default SubscribeModal