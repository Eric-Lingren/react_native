import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, AsyncStorage, WebView, TouchableWithoutFeedback, Image, ScrollView } from 'react-native';
import CheckBox from 'react-native-check-box';
import { Constants } from 'expo';
// import SubscribeModal from '../subscribe_modal/SubscribeModal'

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

class CasinoRules extends React.Component {
    constructor(){
        super()
        this.state = {
            doubleAllowed: true,
            doubleAfterSplitAllowed: false,
            surrenderAllowed: false,
            dealerStandsOnSoft17: true,
            dealerHitsOnSoft17: false,
            showSubscribeModal: false,
            singleDeck: false,
            doubleDeck: false,
            shoe: true,
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

        AsyncStorage.getItem("singleDeck").then((singleDeckValue) => {
            if(singleDeckValue === 'true'){
                this.setState({singleDeck: true})
            } else{
                this.setState({singleDeck: false})
            }
        }).done();

        AsyncStorage.getItem("doubleDeck").then((doubleDeckValue) => {
            if(doubleDeckValue === 'true'){
                this.setState({doubleDeck: true})
            } else{
                this.setState({doubleDeck: false})
            }
        }).done();

        AsyncStorage.getItem("shoe").then((shoeValue) => {
            if(shoeValue === 'true'){
                this.setState({shoe: true})
            } else{
                this.setState({shoe: false})
            }
        }).done();

        
    }

    saveRuleInStorage = async (rule , value) => {
        console.log('rule is : '+ rule)
        console.log('value is : '+ value)
        if(rule === 'doubleAllowed'){
            if(value === true){
                try {
                    await AsyncStorage.setItem('doubleAllowed', 'true');
                } catch (error) {}
            } else {
                try {
                    await AsyncStorage.setItem('doubleAllowed', 'false');
                } catch (error) {}
            }
        } else if(rule === 'doubleAfterSplitAllowed'){
            if(value === true){
                try {
                    await AsyncStorage.setItem('doubleAfterSplitAllowed', 'true');
                } catch (error) {}
            } else {
                try {
                    await AsyncStorage.setItem('doubleAfterSplitAllowed', 'false');
                } catch (error) {}
            }
        } else if(rule === 'surrenderAllowed'){
            if(value === true){
                try {
                    await AsyncStorage.setItem('surrenderAllowed', 'true');
                } catch (error) {}
            } else {
                try {
                    await AsyncStorage.setItem('surrenderAllowed', 'false');
                } catch (error) {}
            }
        } else if(rule === 'dealerStandsOnSoft17'){
            if(this.state.dealerStandsOnSoft17 === true){
                try {
                    await AsyncStorage.setItem('dealerStandsOnSoft17', 'true');
                } catch (error) {}
                try {
                    await AsyncStorage.setItem('dealerHitsOnSoft17', 'false');
                } catch (error) {}
            } else {
                try {
                    await AsyncStorage.setItem('dealerStandsOnSoft17', 'false');
                } catch (error) {}
                try {
                    await AsyncStorage.setItem('dealerHitsOnSoft17', 'true');
                } catch (error) {}
            }
        }else if(rule === 'dealerHitsOnSoft17'){
            if(this.state.dealerHitsOnSoft17 === true){
                try {
                    await AsyncStorage.setItem('dealerHitsOnSoft17', 'true');
                } catch (error) {}
                try {
                    await AsyncStorage.setItem('dealerStandsOnSoft17', 'false');
                } catch (error) {}
            } else {
                try {
                    await AsyncStorage.setItem('dealerHitsOnSoft17', 'false');
                } catch (error) {}
                try {
                    await AsyncStorage.setItem('dealerStandsOnSoft17', 'true');
                } catch (error) {}
            } 
        } else if(rule === 'singleDeck'){
            if(this.state.singleDeck === true){
                try {
                    await AsyncStorage.setItem('singleDeck', 'true');
                } catch (error) {}
                try {
                    await AsyncStorage.setItem('doubleDeck', 'false');
                } catch (error) {}
                try {
                    await AsyncStorage.setItem('shoe', 'false');
                } catch (error) {}
            } 
        } else if(rule === 'doubleDeck'){
            if(this.state.doubleDeck === true){
                try {
                    await AsyncStorage.setItem('singleDeck', 'false');
                } catch (error) {}
                try {
                    await AsyncStorage.setItem('doubleDeck', 'true');
                } catch (error) {}
                try {
                    await AsyncStorage.setItem('shoe', 'false');
                } catch (error) {}
            } 
        }  else if(rule === 'shoe'){
            if(this.state.shoe === true){
                try {
                    await AsyncStorage.setItem('singleDeck', 'false');
                } catch (error) {}
                try {
                    await AsyncStorage.setItem('doubleDeck', 'false');
                } catch (error) {}
                try {
                    await AsyncStorage.setItem('shoe', 'true');
                } catch (error) {}
            } 
        }

        this.getSavedRulesFromMemory()
    };

    static navigationOptions = {
        title: 'Casino Rules'
    };

    toggleSubscribeModal = () => {
        this.setState({showSubscribeModal: !this.state.showSubscribeModal})
    }   

    render() {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView>
            <View style={styles.container}>
                {/* {this.state.showSubscribeModal 
                ?   <View style={styles.modalContainer}>
                        <TouchableWithoutFeedback onPress={() => this.toggleSubscribeModal()} style={{  }}>
                            <Image
                                source={require('../images/close_white.png')}
                                style={{ width: 40, height: 40, marginLeft:(ScreenWidth -60), marginTop: 20, zIndex: 6, position: 'absolute'}}/>
                        </TouchableWithoutFeedback>
                        <SubscribeModal />
                    </View>
                : null
                } */}
                <View style={styles.buttonContainer}>

                    <View style={styles.rulesWrapper}>
                        <Text style={styles.rulesHeader}>Dealer Rules:</Text>
                        <CheckBox
                            onClick={   ()=>{ this.setState({ dealerStandsOnSoft17: !this.state.dealerStandsOnSoft17 }, 
                                        () => this.saveRuleInStorage('dealerStandsOnSoft17' , this.state.dealerStandsOnSoft17 )) }}
                            isChecked={this.state.dealerStandsOnSoft17}
                            rightText={"Dealer stands on soft 17"} 
                            checkBoxColor={'#fff'}
                            checkedCheckBoxColor={'#fff'}
                            rightTextStyle={{ fontSize: 20, color: '#fff', paddingLeft: 5, paddingBottom: 5}}
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
                    </View>

                    <View style={styles.rulesWrapper}>
                        <Text style={styles.rulesHeader}>Player Rules:</Text>
                        <CheckBox
                            onClick={   ()=>{ this.setState({ doubleAllowed: !this.state.doubleAllowed }, 
                                        // () => this.saveRuleInStorage('doubleAllowed' , this.state.doubleAllowed )) }}
                                        () => this.toggleSubscribeModal() ) }}
                            isChecked={this.state.doubleAllowed}
                            rightText={"Double allowed"} 
                            checkBoxColor={'#fff'}
                            checkedCheckBoxColor={'#fff'}
                            rightTextStyle={{ fontSize: 20, color: '#fff', paddingLeft: 5, paddingBottom: 5}}
                            // disabled={true}
                        /> 
                        <CheckBox
                            onClick={()=>{  this.setState({ doubleAfterSplitAllowed: !this.state.doubleAfterSplitAllowed },
                                            () => this.saveRuleInStorage('doubleAfterSplitAllowed', this.state.doubleAfterSplitAllowed)) }}
                            isChecked={this.state.doubleAfterSplitAllowed}
                            rightText={"Double after split"}
                            checkBoxColor={'#fff'}
                            checkedCheckBoxColor={'#fff'}
                            rightTextStyle={{ fontSize: 20, color: '#fff', paddingLeft: 5, paddingBottom: 5}}
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

                    <View style={styles.rulesWrapper}>
                        <Text style={styles.rulesHeader}>Decks:</Text>
                        <CheckBox
                            onClick={   ()=>{ this.setState({ singleDeck: !this.state.singleDeck }, 
                                        () => this.saveRuleInStorage('singleDeck' , this.state.singleDeck )) }}
                            isChecked={this.state.singleDeck}
                            rightText={"Single Deck"} 
                            checkBoxColor={'#fff'}
                            checkedCheckBoxColor={'#fff'}
                            rightTextStyle={{ fontSize: 20, color: '#fff', paddingLeft: 5, paddingBottom: 5}}
                            // disabled={true}
                        /> 
                        <CheckBox
                            onClick={()=>{  this.setState({ doubleDeck: !this.state.doubleDeck },
                                            () => this.saveRuleInStorage('doubleDeck', this.state.doubleDeck)) }}
                            isChecked={this.state.doubleDeck}
                            rightText={"Double Deck"}
                            checkBoxColor={'#fff'}
                            checkedCheckBoxColor={'#fff'}
                            rightTextStyle={{ fontSize: 20, color: '#fff', paddingLeft: 5, paddingBottom: 5}}
                            // disabled={true}
                        /> 
                        <CheckBox
                            onClick={()=>{ this.setState({ shoe: !this.state.shoe },
                                () => this.saveRuleInStorage('shoe', this.state.shoe)) }}
                            isChecked={this.state.shoe}
                            rightText={"4 - 8 Deck Shoe"}
                            checkBoxColor={'#fff'}
                            checkedCheckBoxColor={'#fff'}
                            rightTextStyle={{ fontSize: 20, color: '#fff', paddingLeft: 5}}
                        /> 
                    </View>

                </View>
            </View>
            </ScrollView>
            

        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        padding: 8,
        backgroundColor: ( '#0f9b0f', '#52c234', '#52c234', '#0f9b0f'),
        height: 600,
    },
    modalContainer: {
        width: ScreenWidth + 30, 
        marginLeft: -8,
        marginTop: -25,
    },
    rulesWrapper: {
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 1,
        padding: 20,
        paddingTop: 10,
        backgroundColor: 'black',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        
    },
    rulesHeader: {
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        textDecorationLine: 'underline',
    },
});

export default CasinoRules