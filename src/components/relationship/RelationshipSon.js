import React from 'react';
import { Button, Text } from 'react-native';
import style_config from '../style_config';

export default props =>{

    return (
        <Text style={style_config.fontBig}>
            {props.name} {props.surname}
        </Text>
    )
}