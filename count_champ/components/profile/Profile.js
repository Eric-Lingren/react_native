import * as React from 'react';
import { Dimensions, View, Text, StyleSheet} from 'react-native';
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
                        You are currently using the paid version.  This version contains full app functionality and no ads.
                    </Text>
                </View>
                <View>
                    <Text style={styles.textStyles}>
                        Your license is maintained by the Google Play Store.
                    </Text>
                </View>
                <View>
                    <Text style={styles.textStyles}>
                        Thank you for your subscription!  We appreciate it!
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
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 40,
    }
});
export default Profile