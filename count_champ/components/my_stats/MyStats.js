import * as React from 'react';
import { Dimensions, View, Text, StyleSheet} from 'react-native';
import { Constants } from 'expo';

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

class MyStats extends React.Component {
    
    static navigationOptions = {
        title: 'My Stats'
    };

    render() {
        const navigate = this.props.navigation
        
        return (
            <View style={styles.container}>
                <Text style={styles.textStyles}>My Stats Page</Text>
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
    }
});
export default MyStats