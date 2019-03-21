import * as React from 'react';
import { Dimensions, View, Text, StyleSheet, Linking} from 'react-native';
import { Constants } from 'expo';

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

class Profile extends React.Component {
    
    static navigationOptions = {
        title: 'Profile'
    };

    render() {
        const navigate = this.props.navigation
        
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.textStyles}>
                        You are currently using the free version.  This version contains limited app functionality and ads.
                    </Text>
                </View>
                <View>
                    <Text style={styles.textStyles}>
                        Your license is maintained by the Google Play Store.
                    </Text>
                </View>
                <View>
                    <Text style={styles.textStyles2}>
                        Please download the premium version for full unlocked and ad free content here: 
                    </Text>
                    <Text style={styles.hyperlinkStyles} onPress={ ()=> Linking.openURL('https://play.google.com/store/apps/details?id=com.cardchamp.countchamp&rdid=com.cardchamp.countchamp') } >
                        Download Premium
                    </Text>
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
        textAlign: 'center',
        marginBottom: 40,
        paddingLeft: 10,
        paddingRight: 10,
    },
    textStyles2: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 60,
        paddingLeft: 10,
        paddingRight: 10,
    },
    hyperlinkStyles: {
        fontSize: 22,
        textDecorationLine: 'underline',
        color: 'blue',
        textAlign: 'center',
        marginTop: 10,
    }
});
export default Profile