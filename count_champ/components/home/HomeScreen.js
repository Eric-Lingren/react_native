import * as React from 'react';
import { Button, Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import { Constants } from 'expo';
import homeLogo from './blackjackLogo.jpg';
import Navbar from '../navbar/Navbar'

let ScreenHeight = Dimensions.get("window").height;

class HomeScreen extends React.Component {

    static navigationOptions = {
        headerTitle: <Image
        source={require('./blackjackLogo.jpg')}
        style={{ width: 30, height: 30 }}
      />,
    };

    render() {
        const {navigate} = this.props.navigation;
    
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.paragraph}>
                        So You Want To Be A Card Counter...
                    </Text>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={homeLogo} alt='' ></Image>
                    </View>
                    <Text style={styles.paragraph}>
                        You Better Start By Learning!
                    </Text>
                </View>
                
                <View style={styles.buttonContainer}>
                    <Button
                    title="Learn"
                    color="#000000"
                    onPress={() => navigate('Learn', {name: 'Learn'})}
                    />
                    <Button
                    title="Train"
                    color="#000000"
                    onPress={() => navigate('Train', {name: 'Train'})}
                    />
                </View>
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
        zIndex: 10,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        borderRadius: 10,
        width: 300,
        height: 200,
        borderWidth: 1,
        borderColor: 'white',
    },
    buttonContainer: {
        marginTop: 100,
        flex: 0,
        justifyContent: 'space-evenly',
        height: 120,
    },
});

export default HomeScreen