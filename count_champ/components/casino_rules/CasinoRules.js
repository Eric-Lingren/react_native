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
            dealerStandsOnSoft17: true,
            dealerHitsOnSoft17: false
        }
    }

    componentDidMount(){
        this.getSavedRulesFromMemory()
    }

    getSavedRulesFromMemory = () =>{

        AsyncStorage.getItem("dealerStandsOnSoft17").then((dealerStandsOnSoft17Value) => {
            if(dealerStandsOnSoft17Value === 'true'){
                this.setState({dealerStandsOnSoft17: true, dealerHitsOnSoft17: false} )
            } else{
                this.setState({dealerStandsOnSoft17: false, dealerHitsOnSoft17: true} )
            }
        }).done();

        AsyncStorage.getItem("doubleAllowed").then((doubleAllowedValue) => {
            if(doubleAllowedValue === 'true'){
                this.setState({doubleAllowed: true})
            } else{
                this.setState({doubleAllowed: false})
            }
        }).done();

        AsyncStorage.getItem("doubleAfterSplitAllowed").then((doubleAfterSplitAllowedValue) => {
            if(doubleAfterSplitAllowedValue === 'true'){
                this.setState({doubleAfterSplitAllowed: true})
            } else{
                this.setState({doubleAfterSplitAllowed: false})
            }
        }).done();

        AsyncStorage.getItem("surrenderAllowed").then((surrenderAllowedValue) => {
            if(surrenderAllowedValue === 'true'){
                this.setState({surrenderAllowed: true})
            } else{
                this.setState({surrenderAllowed: false})
            }
        }).done();

        
    }

    saveRuleInStorage = async (rule , value) => {
        if(rule === 'doubleAllowed'){
            if(value === true){
                try {
                    await AsyncStorage.setItem('doubleAllowed', 'true');
                } catch (error) {
                }
            } else {
                try {
                    await AsyncStorage.setItem('doubleAllowed', 'false');
                } catch (error) {
                }
            }
        } else if(rule === 'doubleAfterSplitAllowed'){
            if(value === true){
                try {
                    await AsyncStorage.setItem('doubleAfterSplitAllowed', 'true');
                } catch (error) {
                }
            } else {
                try {
                    await AsyncStorage.setItem('doubleAfterSplitAllowed', 'false');
                } catch (error) {
                }
            }
        } else if(rule === 'surrenderAllowed'){
            if(value === true){
                try {
                    await AsyncStorage.setItem('surrenderAllowed', 'true');
                } catch (error) {
                }
            } else {
                try {
                    await AsyncStorage.setItem('surrenderAllowed', 'false');
                } catch (error) {
                }
            }
        } else if(rule === 'dealerStandsOnSoft17'){
            if(this.state.dealerStandsOnSoft17 === true){
                try {
                    await AsyncStorage.setItem('dealerStandsOnSoft17', 'true');
                } catch (error) {
                }
                try {
                    await AsyncStorage.setItem('dealerHitsOnSoft17', 'false');
                } catch (error) {
                }
            } else {
                try {
                    await AsyncStorage.setItem('dealerStandsOnSoft17', 'false');
                } catch (error) {
                }
                try {
                    await AsyncStorage.setItem('dealerHitsOnSoft17', 'true');
                } catch (error) {
                }
            }
        }else if(rule === 'dealerHitsOnSoft17'){
            if(this.state.dealerHitsOnSoft17 === true){
                try {
                    await AsyncStorage.setItem('dealerHitsOnSoft17', 'true');
                } catch (error) {
                }
                try {
                    await AsyncStorage.setItem('dealerStandsOnSoft17', 'false');
                } catch (error) {
                }
            } else {
                try {
                    await AsyncStorage.setItem('dealerHitsOnSoft17', 'false');
                } catch (error) {
                }
                try {
                    await AsyncStorage.setItem('dealerStandsOnSoft17', 'true');
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
        return (
            
            <View style={styles.container}>
                <View style={styles.buttonContainer}>

                    <CheckBox
                        onClick={   ()=>{ this.setState({ dealerStandsOnSoft17: !this.state.dealerStandsOnSoft17 }, 
                                    () => this.saveRuleInStorage('dealerStandsOnSoft17' , this.state.dealerStandsOnSoft17 )) }}
                        isChecked={this.state.dealerStandsOnSoft17}
                        rightText={"Dealer stands on soft 17"} 
                        checkBoxColor={'#fff'}
                        checkedCheckBoxColor={'#fff'}
                        rightTextStyle={{ fontSize: 20, color: '#fff', paddingLeft: 5}}
                        // disabled={true}
                    /> 

                    <CheckBox
                        onClick={   ()=>{ this.setState({ dealerHitsOnSoft17: !this.state.dealerHitsOnSoft17 }, 
                                    () => this.saveRuleInStorage('dealerHitsOnSoft17' , this.state.dealerHitsOnSoft17 )) }}
                        isChecked={this.state.dealerHitsOnSoft17}
                        rightText={"Dealer hits on soft 17"} 
                        checkBoxColor={'#fff'}
                        checkedCheckBoxColor={'#fff'}
                        rightTextStyle={{ fontSize: 20, color: '#fff', paddingLeft: 5}}
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
                        onClick={()=>{ this.setState({ surrenderAllowed: !this.state.surrenderAllowed },
                            () => this.saveRuleInStorage('surrenderAllowed', this.state.surrenderAllowed)) }}
                        isChecked={this.state.surrenderAllowed}
                        rightText={"Surrender Allowed"}
                        checkBoxColor={'#fff'}
                        checkedCheckBoxColor={'#fff'}
                        rightTextStyle={{ fontSize: 20, color: '#fff', paddingLeft: 5}}
                        // disabled={true}
                    /> 
                </View>
                <Text style={{color: '#fff', fontSize: 16, textAlign: 'center', marginTop: 60}}>
                    {/* These options are only editable in premium version */}
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