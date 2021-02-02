import React from 'react';
import { Text } from 'react-native';
import style_config from './style_config';

export default (props)=>{
    const delta = props.max - props.min + 1
    const aleatory = parseInt(Math.random() * delta) + props.min
    return (
    <Text style={style_config.fontBig}>
        {aleatory}
    </Text>
)}