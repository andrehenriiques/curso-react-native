import React from 'react'
import { View, StyleSheet } from 'react-native'
import Square from './Square'

export default props => {

    return (
        <View style={style.FlexV1}>
            <Square color='#ff801a'/>
            <Square color='#50d1f6'/>
            <Square color='#dd22c1'/>
            <Square color='#8312ed'/>
            <Square color='#36c9a7'/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1: {
        flexGrow: 1,
        justifyContent: 'space-between',
        backgroundColor: '#000'
    }
})