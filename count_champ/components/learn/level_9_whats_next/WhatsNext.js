import * as React from 'react';
import { Button, Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import { Constants, AdMobBanner } from 'expo';

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

class WhatsNext extends React.Component {
    static navigationOptions = {
        title: 'Learn Whats Next',
    };
    
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
            <View style={styles.container}>
                <Text style={styles.subheader}>
                    You now know the basics of how to count cards! 
                </Text>
                <Text style={styles.paragraph}>
                    Please use all the training drills and games on this site to practice and improve both your skills and speed. 
                </Text>
                <Text style={styles.paragraph}>
                    You can’t play professionally until you train like a professional.
                </Text>
                
            </View> 
                {/* <AdMobBanner
                    bannerSize="fullBanner"
                    adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
                    testDeviceID="EMULATOR"
                    onDidFailToReceiveAdWithError={this.bannerError} 
                    style={{width: ScreenWidth, paddingLeft:0, marginLeft: 0, position: 'absolute', bottom: 0 }}
                /> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        padding: 8,
        backgroundColor: ( '#0f9b0f', '#52c234', '#52c234', '#0f9b0f'),
        height: ScreenHeight,
    },
    subheader: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 15,
    },
    paragraph: {
        color: '#fff',
        fontSize: 16,
        padding: 10,
    },
});

export default WhatsNext