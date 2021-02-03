import React from 'react';
import { Text } from 'react-native';
import style_config from './../style_config';

export default props =>{
    return (
        <>
        <Text style={style_config.fontBig}> {props.a} </Text>
        <Text style={style_config.fontBig}> {props.b} </Text>
        </>
    )
}
