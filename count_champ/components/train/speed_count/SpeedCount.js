import * as React from 'react';
import { Button, Text, View, StyleSheet, FormLabel,  Image, Dimensions } from 'react-native';
import { Constants } from 'expo';
import axios from 'axios'

let ScreenHeight = Dimensions.get("window").height;

class SpeedCount extends React.Component {
    constructor(){
        super()
        this.state = {
            deckID: '',
            cardsDealt: [],
            cardsDealtImages: 'none',
            cardsDealtValues: [],
            currentCardValue: 0,
            count: 0,
            runningCountVisible: false,
            whatsTheCountVisible: false,
            cardsPerSecond: 1,
            howFast: 1000,
        }
    }

    componentDidMount(){
        axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=8').then(response => {
            const deckID = response.data.deck_id;
            this.setState({
                deckID: deckID,
            })
        })
    }

    dealCard = () => {
        this.setState({
            runningCountVisible: false,
            whatsTheCountVisible: false, 
        })
        const speed = this.state.howFast
        const timerId = setInterval(()=>{
            axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=1`).then(response => {
                const oneCardDealt = response.data.cards[0].code;
                const cardImage = response.data.cards[0].image
                const cardValue = response.data.cards[0].value
                this.setState(prevState => {
                    return {
                    cardsDealt: [...prevState.cardsDealt, oneCardDealt],
                    cardsDealtImages: cardImage,
                    cardsDealtValues: [...prevState.cardsDealtValues, cardValue],
                    currentCardValue: cardValue,
                }
                //  Once state is set from the new card, re-run the player hand total functions
                }, () => this.whatsTheCount() )
            })
        },speed)
        setTimeout( ()=> { 
            clearInterval(timerId)
            this.countIsFinished()
        }, 30000)  
    }
    
    whatsTheCount = () => {
        //  if card value is 10 or greater, count is subtracted by 1
        if (this.state.currentCardValue === '10' || this.state.currentCardValue === 'JACK' || this.state.currentCardValue === 'QUEEN' || this.state.currentCardValue === 'KING' || this.state.currentCardValue === 'ACE'){
            this.setState(prevState => {
                return{
                    count: prevState.count -1
                }
            })
        //  if card value is 6 or less, count is added by 1
        } else if(this.state.currentCardValue < 7){
            this.setState(prevState => {
                return{
                    count: prevState.count +1
                }
            })
        }
    }

    countIsFinished = () => {
        setTimeout ( () => {
            this.setState({
                cardsDealtImages: null,
                whatsTheCountVisible: true 
            }) 
        }, 1000)
        this.displayCount()    
    }

    displayCount = () => {
        setTimeout ( () => {
            this.setState({
                runningCountVisible: true,
            }) 
        }, 3000)  
    }
    
    handleChange = event => {
        this.setState({ 
            [event.target.name]: event.target.value,
            runningCountVisible: false
        }, () => {
            this.setState({
                howFast: (1000 / this.state.cardsPerSecond),
            })
            
        }, () => console.log(this.state.cardsPerSecond) ) 
    }

    static navigationOptions = {
        title: 'Speed Count Drill',
    };
    
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <View className='container'>

                    {/* <Form > */}
                        <Text >Cards Per Second:</Text> 
                        
                        {/* <FormInput   
                                // name='cardsPerSecond' 
                                // type='number' 
                                // value={this.state.cardsPerSecond} 
                                // placeholder='Cards Per Second' 
                                // onChange={this.handleChange}
                        //         >
                        // </FormInput>
                    </Form>  */}

                    <View >
                        <View style={styles.deckContainer}>
                            <Image style={styles.deckDisplay} source={{uri: this.state.cardsDealtImages}} />
                        </View>
                        
                        {
                            this.state.whatsTheCountVisible 
                            ?
                            <Text >Whats The Count?</Text>
                            : 
                            null
                        }
                        {
                            this.state.runningCountVisible 
                            ?
                            <Text >{this.state.count}</Text> 
                            :
                            null
                        }
                    </View>
                    <Button color="#000000" onPress={this.dealCard} title="Start"></Button>
                    
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
    },
    deckContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: 15,
    },
    deckDisplay: {
        width: 250, 
        height: 350,
    },
    buttonContainer: {
        marginTop: 100,
        flex: 0,
        justifyContent: 'space-evenly',
        height: 350,
    },
});

export default SpeedCount