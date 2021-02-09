import React, { Component, useState } from 'react';
import { Text, TextInput, Button, View, StyleSheet } from 'react-native'
import style_config from '../style_config';
import MegaNumber from './MegaNumber'

export default class Mega extends Component{

    state = {
        qtNumber: this.props.qtNumber,
        number: []
    }

    changeNumber = (number) =>{
        this.setState({qtNumber: +number})
    }

    generateNotInclude = arrayNum =>{
        const new_number = parseInt(Math.random() * 60) + 1
        return arrayNum.includes(new_number) ? this.generateNotInclude(arrayNum) : new_number
    }

    generateNumber = () =>{
        const number = Array(this.state.qtNumber)
                            .fill()
                            .reduce(num => [...num, this.generateNotInclude(num)], [])
                            .sort((a,b) => a-b)
        this.setState({number})
    }
    
   /* generateNumber = () =>{
        const numbers = []

        for(let i=0; i< this.state.qtNumber; i++){
            numbers.push(this.generateNotInclude(this.state.number))
        }
        this.setState({number: numbers.sort((a,b) => a-b)})
    }*/

    showNumber = () =>{
        const nums = this.state.number
        return nums.map(num =>{
            return <MegaNumber key={num} num={num}/>
        })
    }

    render(){
        return (
            <>
                <Text style={style_config.fontBig}>
                    Gerador de Mega-Sena
                </Text>
                <TextInput 
                        keyboardType={'numeric'}
                        style={{borderBottomWidth:1}}
                        onChangeText={this.changeNumber}
                        value={`${this.state.qtNumber}`} 
                        placeholder="Digite aqui"
                        />
                <Button title="generate" onPress={this.generateNumber}></Button>
                <View style={style.Container}>
                    {this.showNumber()}
                </View>
            </>
        )
    }
}
const style = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 15
    }
})