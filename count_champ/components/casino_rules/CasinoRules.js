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
            dealerStands17: true, // 0 = Dealer stands on soft 17   ;   1 = Dealer hits on soft 17
            radioProps: [
                {label: 'Dealer stands on soft 17', value: 0 },
                {label: 'Dealer hits on soft 17', value: 1 }
            ]
        }
    }

    componentDidMount(){
        this.getSavedRulesFromMemory()
    }

    getSavedRulesFromMemory = () =>{
        console.log('got saved rules')

        AsyncStorage.getItem("doubleAllowed").then((doubleAllowedValue) => {
            if(doubleAllowedValue === 'true'){
                this.setState({doubleAllowed: true})
            } else{
                this.setState({doubleAllowed: false})
            }
        }).done();


        AsyncStorage.getItem("doubleAfterSplitAllowed").then((doubleAfterSplitAllowedValue) => {
            console.log('Rules -- double after split allowed value: ' + doubleAfterSplitAllowedValue)
            console.log('state- double allowed: ' + this.state.doubleAfterSplitAllowed)
            if(doubleAfterSplitAllowedValue === 'true'){
                console.log('If statement rule was true')
                this.setState({doubleAfterSplitAllowed: true}, () => console.log('state- double after split allowed: ' + this.state.doubleAfterSplitAllowed))
            } else{
                console.log('If statement rule was false')
                this.setState({doubleAfterSplitAllowed: false}, () => console.log('state- double after split allowed: ' + this.state.doubleAfterSplitAllowed ))
            }
        }).done();

        // AsyncStorage.getItem("surrenderAllowed").then((surrenderAllowedValue) => {
        //     console.log('Rules -- surrender allowed value: ' + surrenderAllowedValue)
        //     console.log('state- double allowed: ' + this.state.surrenderAllowed)
        //     if(surrenderAllowedValue === 'true'){
        //         console.log('If statement rule was true')
        //         this.setState({surrenderAllowed: true}, () => console.log('state- surrender allowed: ' + this.state.surrenderAllowed))
        //     } else{
        //         console.log('If statement rule was false')
        //         this.setState({surrenderAllowed: false}, () => console.log('state- surrender allowed: ' + this.state.surrenderAllowed ))
        //     }
        // }).done();

        // AsyncStorage.getItem("dealerStands17").then((dealerStands17Value) => {
        //     console.log('Rules -- dealer stands 17 value: ' + dealerStands17Value)
        //     console.log('state -- dealer stands 17 value: ' + this.state.dealerStands17)
        //     if(surrenderAllowedValue === 'true'){
        //         console.log('If statement rule was true')
        //         this.setState({surrenderAllowed: true}, () => console.log('state- surrender allowed: ' + this.state.surrenderAllowed))
        //     } else{
        //         console.log('If statement rule was false')
        //         this.setState({surrenderAllowed: false}, () => console.log('state- surrender allowed: ' + this.state.surrenderAllowed ))
        //     }
        // }).done();
    }

    saveRuleInStorage = async (rule , value) => {
        console.log(rule)
        console.log(value)
        console.log(typeof(value))
        //console.log('store data ran')
        //console.log(this.state.doubleAllowed)
        //let isDoubleAllowed = this.state.doubleAllowed 
        if(rule === 'doubleAllowed'){
            console.log('if statement got hit')
            if(value === true){
                console.log('value was true')
                try {
                    await AsyncStorage.setItem('doubleAllowed', 'true');
                } catch (error) {
                }
            } else {
                console.log('value was false')
                try {
                    await AsyncStorage.setItem('doubleAllowed', 'false');
                } catch (error) {
                }
            }
        }
        this.getSavedRulesFromMemory()
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
                        onClick={   ()=>{ this.setState({ doubleAllowed: !this.state.doubleAllowed }, 
                                    () => this.saveRuleInStorage('doubleAllowed' , this.state.doubleAllowed )) }}
                        isChecked={this.state.doubleAllowed}
                        rightText={"Double allowed"} 
                        checkBoxColor={'#fff'}
                        checkedCheckBoxColor={'#fff'}
                        rightTextStyle={{ fontSize: 20, color: '#fff', paddingLeft: 5}}
                        // disabled={true}
                    /> 
                    <CheckBox
                        onClick={()=>{  this.setState({ doubleAfterSplitAllowed: !this.state.doubleAfterSplitAllowed },
                                        () => this.saveRuleInStorage('doubleAfterSplitAllowed', this.state.doubleAfterSplitAllowed)) }}
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