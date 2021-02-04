import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import style_config from './../style_config';

export default props=>{

    const [num, setNum] = useState(0)
  
    return (
        <View style={style.Display}>
            <Text style={[style_config.fontBig, style.DisplayText]}>
                {props.num}    
            </Text>
        </View>
    )
}


const style = StyleSheet.create({
    Display: {
        backgroundColor: '#000',
        padding: 20,
        width: 300
    },
    DisplayText: {
        color: '#fff'
    }
})