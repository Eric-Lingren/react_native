import * as React from 'react';
import { Dimensions, View, Text, StyleSheet} from 'react-native';

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

class Menubar extends React.Component {
    
    static navigationOptions = {
        header: null
    };

    render() {
        const navigate = this.props.navigation
        
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text   style={styles.textStyles}
                            onPress={() => navigate('CasinoRules', {name: 'Casino Rules'})}
                    > Casino Rules </Text>
                    <Text   style={styles.textStyles}
                            onPress={() => navigate('MyStats', {name: 'My Stats'})}
                    > My Stats </Text>
                    <Text   style={styles.textStyles}
                            onPress={() => navigate('Profile', {name: 'Profile'})}
                    > Profile </Text>
                    <Text   style={styles.textStyles}
                            onPress={() => navigate('About', {name: 'About'})}
                    > About </Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        opacity: .9,
        width: (ScreenWidth * .6),
        position: 'absolute',
        marginTop: 24,
        marginLeft: (ScreenWidth * .4),
        height: (ScreenHeight - 300),
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        zIndex: 10,
    },
    textContainer: {
        flex: 0,
        justifyContent: 'space-evenly',
        height: (ScreenHeight - 400),
        width: (ScreenWidth * .6),
        alignItems: 'center',
    },
    textStyles: {
        color: '#daa520',
        fontSize: 22,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    }
});
export default Menubar