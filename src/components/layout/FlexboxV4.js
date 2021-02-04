import React from 'react'
import { View, StyleSheet } from 'react-native'
import Square from './Square'

export default props => {

    return (
        <View style={style.FlexV4}>
            <View style={style.V1}></View>
            <View style={style.V2}></View>
            <View style={style.V3}></View>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV4: {
        flexGrow: 1,
        width: 100,
        backgroundColor: '#000'
    },
    V1:{
        flexGrow: 1,
        backgroundColor: '#ff801a'
    },
    V2:{
        flexGrow: 1,
        backgroundColor: '#50d1f6'
    },
    V3:{
        height:500,
        backgroundColor: '#36c9a7'
    }
})