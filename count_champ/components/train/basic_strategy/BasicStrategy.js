import * as React from 'react';
import { Button, Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import { Constants } from 'expo';
import {withCard} from '../../context/CardProvider'
import axios from 'axios'

let ScreenHeight = Dimensions.get("window").height;

class BasicStrategy extends React.Component {
    constructor(){
        super()
        this.state = {
            deckID: '',
        }
    }

    static navigationOptions = {
        title: 'Count Champ',
    };
    
    componentDidMount(){
        this.getDecks()
    }

    getDecks = () => {
        axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=8').then(response => {
            const deckID = response.data.deck_id;
            this.setState({
                deckID: deckID,
            })
        })
    }

    render() {
        const {navigate} = this.props.navigation;
        console.log(this.state.deckID)
        return (
            
            <View style={styles.container}>
                <Text>
                    THIS IS THE BASIC STRATEGY PAGE
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
        marginTop: 100,
        flex: 0,
        justifyContent: 'space-evenly',
        height: 350,
    },
});

export default withCard(BasicStrategy)