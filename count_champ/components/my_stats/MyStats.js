import * as React from 'react';
import { Dimensions, View, Text, StyleSheet, ScrollView } from 'react-native';
import { Constants } from 'expo';
import BasicStrategyStats from './BasicStrategyStats';
// import SpeedCountStats from './SpeedCountStats';


let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

class MyStats extends React.Component {
    constructor(){
        super()
        this.state = {
        }
    }

    
    static navigationOptions = {
        title: 'My Stats'
    };

    render() {
        const navigate = this.props.navigation
        console.log(ScreenHeight)
        
        return (
            <ScrollView>
                <View style={styles.container}>
                    <BasicStrategyStats />
                    {/* <SpeedCountStats /> */}
                    
                    
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        padding: 8,
        backgroundColor: ( '#0f9b0f'),
        height: 1400,
        marginTop: -20,
    }
});
export default MyStats