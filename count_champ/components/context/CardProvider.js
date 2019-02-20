import React, { Component } from 'react'
import axios from 'axios';

const DealCardsContext = React.createContext()

class DealCardsProvider extends Component {
    constructor(){
        super()
        this.state = {
            deckID: '',
            test: 'hello'
        }
    }

    getDecks = () => {
        axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=8').then(response => {
            const deckID = response.data.deck_id;
            this.setState({
                deckID: deckID,
            })
        })
    }

    render(){
        console.log(this.state.test)
        return (
            <DealCardsContext.Provider
                value={{

                }}>
                { this.props.children }
            </DealCardsContext.Provider>
        )
    }
}

export default DealCardsProvider


export const withCard = C => props => (
    <DealCardsContext.Consumer>
        {value => <C {...props} {...value}/>}
    </DealCardsContext.Consumer>
)
