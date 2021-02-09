import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import style_config from '../style_config'

export default props =>{
    return (
        <View style={style.Container}>
            <Text style={style_config.fontBig, style.Num}>
                {props.num}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    Container: {
        height: 50,
        width: 50,
        backgroundColor: '#000',
        margin: 5,
        borderRadius: 25,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    Num :{
        color: '#fff'
    }
})