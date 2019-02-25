import React, { Component } from 'react';

const CorrectPlayContext = React.createContext()

class CorrectPlayProvider extends Component {
    constructor(){
        super()
        this.state = {
            correctPlay: '',
            dealerStandsSoft17: false,
            doubleAllowed: false,
            doubleAfterSplitAllowed: false,
            surrenderAllowed: false,
            hardHandsPlayed: 0,
            hardHandsCorrect: 0,
            softHandsPlayed: 0,
            softHandsCorrect: 0,
            splitHandsPlayed: 0,
            splitHandsCorrect: 0,
            currentKindOfHandBeingPlayed: '',
            showBasicStrategyStats: false,
        }
    }

    setCorrectPlayRules = (name, checked) => {
        this.setState({
            [name]: checked
        })
    }

    setCorrectHandsPlayed = (playerWasCorrect, currentHandType) => {
        console.log(playerWasCorrect, currentHandType) 
        if (currentHandType === 'HARD'){
            if(playerWasCorrect){
                this.setState(prevState =>{
                    return {
                        hardHandsCorrect: prevState.hardHandsCorrect += 1
                    }
                })
            } 
        } else if (currentHandType === 'SOFT'){
            if(playerWasCorrect){
                this.setState(prevState =>{
                    return {
                        softHandsCorrect: prevState.softHandsCorrect += 1
                    }
                })
            } 
        } else {
            if(playerWasCorrect){
                this.setState(prevState =>{
                    return {
                        splitHandsCorrect: prevState.splitHandsCorrect += 1
                    }
                })
            } 
        }
    }

    toggleBasicStrategyStats = () => {
        if (this.state.showBasicStrategyStats === false){
            this.setState({showBasicStrategyStats: true})
        } else{
            this.setState({showBasicStrategyStats: false})
        }
    }

    checkSplitHand = (dealerHand, playerHand) => {
        this.setState(prevState => {
            return{
                splitHandsPlayed: prevState.splitHandsPlayed += 1,
                currentKindOfHandBeingPlayed: 'SPLIT'
            }
        })

        const pHand = playerHand;
        const dHand = dealerHand;

        if(pHand === 22){
            console.log('the correct play is SPLIT')
            this.setState({
                correctPlay: 'SPLIT',
            })
        } else if (pHand === 20){
            console.log('the correct play is STAND')
            this.setState({
                correctPlay: 'STAND',
            })
        } else if (pHand === 16){
            if (dHand === 11 && this.dealerStandsSoft17 === false && this.state.surrenderAllowed === true) {
                console.log('the correct play is SURRENDER')
                this.setState({
                    correctPlay: 'SURRENDER',
                })
            } else {
                console.log('the correct play is SPLIT')
                this.setState({
                    correctPlay: 'SPLIT',
                })
            }
        } else if((pHand === 4 || pHand === 6) && dHand <= 3){
            if(this.state.doubleAfterSplitAllowed === true){
                console.log('the correct play is SPLIT')
                this.setState({
                    correctPlay: 'SPLIT',
                })
            } else if (this.state.doubleAfterSplitAllowed === false){
                console.log('the correct play is HIT')
                this.setState({
                    correctPlay: 'HIT',
                })
            }   
        } else if((pHand === 4 || pHand === 6) && dHand <= 7){
            console.log('the correct play is SPLIT')
            this.setState({
                correctPlay: 'SPLIT',
            })
        } else if((pHand === 4 || pHand === 6) && dHand <= 11){
            console.log('the correct play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if(pHand === 8 && dHand <= 4){
            console.log('the correct play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if (pHand === 8 && dHand <= 6){
            if(this.state.doubleAfterSplitAllowed === true){
                console.log('the correct play is SPLIT')
                this.setState({
                    correctPlay: 'SPLIT',
                })
            } else if (this.state.doubleAfterSplitAllowed === false){
                console.log('the correct play is HIT')
                this.setState({
                    correctPlay: 'HIT',
                })
            }   
        } else if (pHand === 8 && dHand <= 11){
            console.log('the correct play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if (pHand === 12 && dHand === 2){
            if(this.state.doubleAfterSplitAllowed === true){
                console.log('the correct play is SPLIT')
                this.setState({
                    correctPlay: 'SPLIT',
                })
            } else if (this.state.doubleAfterSplitAllowed === false){
                console.log('the correct play is HIT')
                this.setState({
                    correctPlay: 'HIT',
                })
            }
        } else if (pHand === 12 && dHand <= 6){
            console.log('the correct play is SPLIT')
            this.setState({
                correctPlay: 'SPLIT',
            })
        } else if (pHand === 12 && dHand <= 11){
            console.log('the correct play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if (pHand === 14 && dHand <= 7){
            console.log('the correct play is SPLIT')
            this.setState({
                correctPlay: 'SPLIT',
            })
        } else if (pHand === 14 && dHand <= 11){
            console.log('the correct play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if (pHand === 18 & (dHand === 7 || dHand === 10 || dHand === 11 ) ){
            console.log('the correct play is STAND')
            this.setState({
                correctPlay: 'STAND',
            })
        }  else if (pHand === 18 && dHand <= 9 ){
            console.log('the correct play is SPLIT')
            this.setState({
                correctPlay: 'SPLIT',
            })
        }
    }
    
    checkSoftHand = (dealerHand, playerHand) => {
        const pHand = playerHand;
        const dHand = dealerHand;

        this.setState(prevState => {
            return{
                softHandsPlayed: prevState.softHandsPlayed += 1,
                currentKindOfHandBeingPlayed: 'SOFT'
            }
        })

        if (pHand >= 20){
            console.log('the correct play is STAND')
            this.setState({
                correctPlay: 'STAND',
            })
        } else if (pHand === 19){
            if (this.state.dealerStandsSoft17 === true){
                console.log('the correct play is STAND')
                this.setState({
                    correctPlay: 'STAND',
                })
            } else if (this.state.dealerStandsSoft17 === false){
                if(dHand === 6){
                    if (this.state.doubleAllowed === true){
                        console.log('the correct play is DOUBLE')
                        this.setState({
                        correctPlay: 'DOUBLE',
                        })
                    } else if (this.state.doubleAllowed === false){
                        console.log('the correct play is STAND')
                        this.setState({
                        correctPlay: 'STAND',
                        })
                    }
                } else {
                    console.log('the correct play is STAND')
                    this.setState({
                    correctPlay: 'STAND',
                    })
                }
            }  
        } else if(pHand === 13 && dHand <= 4){
            console.log('the correct play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if (pHand === 13 && dHand <= 6){
            if (this.state.doubleAllowed === true){
                console.log('the correct play is DOUBLE')
                this.setState({
                correctPlay: 'DOUBLE',
                })
            } else if (this.state.doubleAllowed === false){
                console.log('the correct play is HIT')
                this.setState({
                correctPlay: 'HIT',
                })
            }
        } else if(pHand === 13 && dHand <= 11){
            console.log('the correct play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if(pHand === 14 && dHand <= 4){
            console.log('the correct play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if (pHand === 14 && dHand <= 6){
            if (this.state.doubleAllowed === true){
                console.log('the correct play is DOUBLE')
                this.setState({
                correctPlay: 'DOUBLE',
                })
            } else if (this.state.doubleAllowed === false){
                console.log('the correct play is HIT')
                this.setState({
                correctPlay: 'HIT',
                })
            }
        } else if(pHand === 14 && dHand <= 11){
            console.log('the correct play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if(pHand === 15 && dHand <= 3){
            console.log('the correct play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if (pHand === 15 && dHand <= 6){
            if (this.state.doubleAllowed === true){
                console.log('the correct play is DOUBLE')
                this.setState({
                correctPlay: 'DOUBLE',
                })
            } else if (this.state.doubleAllowed === false){
                console.log('the correct play is HIT')
                this.setState({
                correctPlay: 'HIT',
                })
            }
        } else if(pHand === 15 && dHand <= 11){
            console.log('the correct play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        }  else if(pHand === 16 && dHand <= 3){
            console.log('the correct play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if (pHand === 16 && dHand <= 6){
            if (this.state.doubleAllowed === true){
                console.log('the correct play is DOUBLE')
                this.setState({
                correctPlay: 'DOUBLE',
                })
            } else if (this.state.doubleAllowed === false){
                console.log('the correct play is HIT')
                this.setState({
                correctPlay: 'HIT',
                })
            }
        } else if(pHand === 16 && dHand <= 11){
            console.log('the correct play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if(pHand === 17 && dHand === 2){
            console.log('the correct play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if (pHand === 17 && dHand <= 6){
            if (this.state.doubleAllowed === true){
                console.log('the correct play is DOUBLE')
                this.setState({
                correctPlay: 'DOUBLE',
                })
            } else if (this.state.doubleAllowed === false){
                console.log('the correct play is HIT')
                this.setState({
                correctPlay: 'HIT',
                })
            }
        } else if(pHand === 17 && dHand <= 11){
            console.log('the correct play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if(pHand === 18 && dHand === 2){
            if(this.dealerStandsSoft17 === true) {
                console.log('the correct play is STAND')
                this.setState({
                    correctPlay: 'STAND',
                })
            } else if (this.dealerStandsSoft17 === false) {
                if(this.state.doubleAllowed === true){
                    console.log('the correct play is DOUBLE')
                    this.setState({
                        correctPlay: 'DOUBLE',
                    })
                } else if (this.state.doubleAllowed === false){
                    console.log('the correct play is STAND')
                    this.setState({
                        correctPlay: 'STAND',
                    })
                }
            }
        } else if (pHand === 18 && dHand <= 6){
            if(this.state.doubleAllowed === true){
                console.log('the correct play is DOUBLE')
                this.setState({
                    correctPlay: 'DOUBLE',
                })
            } else if (this.state.doubleAllowed === false){
                console.log('the correct play is STAND')
                this.setState({
                    correctPlay: 'STAND',
                })
            }
        } else if(pHand === 18 && dHand <= 8){
            console.log('the correct play is STAND')
            this.setState({
                correctPlay: 'STAND',
            })
        } else if(pHand === 18 && dHand <= 11){
            console.log('the correct play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        }
    }
    
    checkHardHand = (dealerHand, playerHand) => {
        const pHand = playerHand;
        const dHand = dealerHand;

        this.setState(prevState => {
            return{
                hardHandsPlayed: prevState.hardHandsPlayed += 1,
                currentKindOfHandBeingPlayed: 'HARD'
            }
        })

        if (pHand <= 8 ){
            console.log('the correct Play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if (pHand > 17) {
            console.log('the correct Play is STAND')
            this.setState({
                correctPlay: 'STAND',
            })
        } else if (pHand === 17) {
            if(this.state.dealerStandsSoft17 === true){
                console.log('the correct Play is STAND')
                this.setState({
                    correctPlay: 'STAND',
                })
            }
            if(this.state.dealerStandsSoft17 === false){
                if(dHand === 11 && this.state.surrenderAllowed === true){
                    console.log('the correct Play is SURRENDER')
                    this.setState({
                        correctPlay: 'SURRENDER',
                    })
                } else {
                    console.log('the correct Play is STAND')
                    this.setState({
                        correctPlay: 'STAND',
                    })
                }
            }
        } else if (pHand === 9 && dHand === 2){
            console.log('the correct Play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if(pHand <= 9 && dHand <= 6){
            if (this.state.doubleAllowed === true){
                console.log('the correct Play is DOUBLE')
                this.setState({
                    correctPlay: 'DOUBLE',
                })
            } else if (this.state.doubleAllowed === false){
                console.log('the correct Play is HIT')
                this.setState({
                    correctPlay: 'HIT',
                })
            } 
        } else if(pHand === 9 && dHand <= 11){
            console.log('the correct Play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if(pHand === 10 && dHand <= 9){
            if (this.state.doubleAllowed === true){
                console.log('the correct Play is DOUBLE')
                this.setState({
                    correctPlay: 'DOUBLE',
                })
            } else if (this.state.doubleAllowed === false){
                console.log('the correct Play is HIT')
                this.setState({
                    correctPlay: 'HIT',
                })
            } 
        } else if (pHand === 10 && dHand <= 11){
            console.log('the correct Play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if (pHand === 11 && dHand <= 10){
            if (this.state.doubleAllowed === true){
                console.log('the correct Play is DOUBLE')
                this.setState({
                    correctPlay: 'DOUBLE',
                })
            } else if (this.state.doubleAllowed === false){
                console.log('the correct Play is HIT')
                this.setState({
                    correctPlay: 'HIT',
                })
            } 
        } else if (pHand === 11 && dHand === 11){
            if (this.state.dealerStandsSoft17 === true){
                console.log('the correct Play is HIT')
                this.setState({
                    correctPlay: 'HIT',
                })
            } else if (this.state.dealerStandsSoft17 === false && this.state.doubleAllowed === true){
                console.log('the correct Play is DOUBLE')
                this.setState({
                    correctPlay: 'DOUBLE',
                })
            }  else if (this.state.dealerStandsSoft17 === false && this.state.doubleAllowed === false){
                console.log('the correct Play is HIT')
                this.setState({
                    correctPlay: 'HIT',
                })
            } 
        } else if (pHand === 12 && dHand <= 3){
            console.log('the correct Play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if (pHand === 12 && dHand <= 6){
            console.log('the correct Play is STAND')
            this.setState({
                correctPlay: 'STAND',
            })
        } else if(pHand === 12 && dHand <= 11){
            console.log('the correct Play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if (pHand === 13 && dHand <= 6){
            console.log('the correct Play is STAND')
            this.setState({
                correctPlay: 'STAND',
            })
        } else if (pHand === 13 && dHand <= 11){
            console.log('the correct Play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if (pHand === 14 && dHand <= 6){
            console.log('the correct Play is STAND')
            this.setState({
                correctPlay: 'STAND',
            })
        } else if (pHand === 14 && dHand <= 11){
            console.log('the correct Play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if (pHand === 15 && dHand <= 6){
            console.log('the correct Play is STAND')
            this.setState({
                correctPlay: 'STAND',
            })
        } else if (pHand === 15 && dHand <= 9){
            console.log('the correct Play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        } else if (pHand === 15 && dHand === 10){
            if(this.state.surrenderAllowed === true){
                console.log('the correct Play is SURRENDER')
                this.setState({
                    correctPlay: 'SURRENDER',
                })
            } else if (this.state.surrenderAllowed === false){
                console.log('the correct Play is HIT')
                this.setState({
                    correctPlay: 'HIT',
                })
            }   
        } else if (pHand === 15 && dHand === 11){
            if(this.state.dealerStandsSoft17 === true){
                console.log('the correct Play is HIT')
                this.setState({
                    correctPlay: 'HIT',
                })
            } else if (this.state.dealerStandsSoft17 === false){
                if(this.state.surrenderAllowed === true){
                    console.log('the correct Play is SURRENDER')
                    this.setState({
                        correctPlay: 'SURRENDER',
                    })
                } else if (this.state.surrenderAllowed === false){
                    console.log('the correct Play is HIT')
                    this.setState({
                        correctPlay: 'HIT',
                    })
                } 
            }  
        } else if (pHand === 16 && dHand <= 6){
            console.log('the correct Play is STAND')
            this.setState({
                correctPlay: 'STAND',
            })
        } else if (pHand === 16 && dHand <= 8){
            console.log('the correct Play is HIT')
            this.setState({
                correctPlay: 'HIT',
            })
        }  else if (pHand === 16 && dHand <= 11){
            if(this.state.surrenderAllowed === true){
                console.log('the correct Play is SURRENDER')
                this.setState({
                    correctPlay: 'SURRENDER',
                })
            } else if (this.state.surrenderAllowed === false){
                console.log('the correct Play is HIT')
                this.setState({
                    correctPlay: 'HIT',
                })
            } 
        }
    }



    render(){
        return (
            <CorrectPlayContext.Provider 
                value={{
                    checkSplitHand: this.checkSplitHand,
                    checkSoftHand: this.checkSoftHand,
                    checkHardHand: this.checkHardHand,
                    correctPlay: this.state.correctPlay,
                    setCorrectPlayRules: this.setCorrectPlayRules,
                    currentKindOfHandBeingPlayed: this.state.currentKindOfHandBeingPlayed,
                    setCorrectHandsPlayed: this.setCorrectHandsPlayed,
                    hardHandsPlayed: this.state.hardHandsPlayed,
                    hardHandsCorrect: this.state.hardHandsCorrect,
                    softHandsPlayed: this.state.softHandsPlayed,
                    softHandsCorrect: this.state.softHandsCorrect,
                    splitHandsPlayed: this.state.splitHandsPlayed,
                    splitHandsCorrect: this.state.splitHandsCorrect,
                    toggleBasicStrategyStats: this.toggleBasicStrategyStats,
                    showBasicStrategyStats: this.state.showBasicStrategyStats,
                }}>
                { this.props.children }
            </CorrectPlayContext.Provider>
        )
    }
}

export default CorrectPlayProvider


export const withCorrectPlay = C => props => (
    <CorrectPlayContext.Consumer>
        {value => <C {...props} {...value}/>}
    </CorrectPlayContext.Consumer>
)
