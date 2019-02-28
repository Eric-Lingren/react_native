import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, AsyncStorage } from 'react-native';
import CheckBox from 'react-native-check-box';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { Constants } from 'expo';

let ScreenHeight = Dimensions.get("window").height;

class CasinoRules extends React.Component {
    constructor(){
        super()
        this.state = {
            doubleAllowed: true,
            doubleAfterSplitAllowed: false,
            surrenderAllowed: false,
            dealerRules: 0, // 0 = Dealer stands on soft 17   ;   1 = Dealer hits on soft 17
            radioProps: [
                {label: 'Dealer stands on soft 17', value: 0 },
                {label: 'Dealer hits on soft 17', value: 1 }
            ]
        }
    }

    storeData = async () => {
        console.log('store data ran')
        console.log(this.state.doubleAllowed)
        let isDoubleAllowed = this.state.doubleAllowed 
        try {
            await AsyncStorage.setItem('test', 'new test data');
        } catch (error) {
            // Error saving data
        }
    };

    static navigationOptions = {
        title: 'Casino Rules'
    };

    render() {
        const {navigate} = this.props.navigation;
        // console.log('double allowed: ' + this.state.doubleAllowed)
        // console.log('double after split allowed: ' + this.state.doubleAfterSplitAllowed)
        // console.log('surrender allowed: ' + this.state.surrenderAllowed)
        // console.log('dealer rules: ' + this.state.dealerRules)
        return (
            
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                
                    <RadioForm
                        radio_props={this.state.radioProps}
                        initial={0}
                        onPress={(value) => {this.setState({dealerRules:value})}}
                        buttonColor={'#ffffff'}
                        selectedButtonColor={'#ffffff'}
                        labelStyle={{fontSize: 20, color: '#fff'}}
                        // disabled={true}
                    />
                    <CheckBox
                        onClick={()=>{ this.setState({ doubleAllowed: !this.state.doubleAllowed }, () => this.storeData()) }}
                        isChecked={this.state.doubleAllowed}
                        rightText={"Double allowed"} 
                        checkBoxColor={'#fff'}
                        checkedCheckBoxColor={'#fff'}
                        rightTextStyle={{ fontSize: 20, color: '#fff', paddingLeft: 5}}
                        // disabled={true}
                    /> 
                    <CheckBox
                        onClick={()=>{ this.setState({ doubleAfterSplitAllowed: !this.state.doubleAfterSplitAllowed }) }}
                        isChecked={this.state.doubleAfterSplitAllowed}
                        rightText={"Double after split allowed"}
                        checkBoxColor={'#fff'}
                        checkedCheckBoxColor={'#fff'}
                        rightTextStyle={{ fontSize: 20, color: '#fff', paddingLeft: 5}}
                        // disabled={true}
                    /> 
                    <CheckBox
                        onClick={()=>{ this.setState({ surrenderAllowed: !this.state.surrenderAllowed }) }}
                        isChecked={this.state.surrenderAllowed}
                        rightText={"Surrender Allowed"}
                        checkBoxColor={'#fff'}
                        checkedCheckBoxColor={'#fff'}
                        rightTextStyle={{ fontSize: 20, color: '#fff', paddingLeft: 5}}
                        // disabled={true}
                    /> 
                </View>
                <Text style={{color: '#fff', fontSize: 16, textAlign: 'center', marginTop: 60}}>
                    These options are only editable in premium version
                </Text>
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
    buttonContainer: {
        marginLeft: 30,
        marginTop: -30,
        flex: 0,
        justifyContent: 'space-evenly',
        height: 350,
    },
});

export default CasinoRules