import React from 'react'
import { View, StyleSheet } from 'react-native'
import Square from './Square'

export default props => {

    return (
        <View style={style.FlexV2}>
            <Square color='#ff801a' lado={20}/>
            <Square color='#50d1f6' lado={30}/>
            <Square color='#dd22c1' lado={40}/>
            <Square color='#8312ed' lado={50}/>
            <Square color='#36c9a7' lado={60}/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV2: {
        flexDirection: 'row',
        paddingTop: 10,
        justifyContent: 'space-evenly',
        alignItems: 'baseline',
        height: 350,
        width: '100%',
        backgroundColor: '#000'
    }
})