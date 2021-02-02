import React from 'react';

import { Text } from 'react-native';
import style_config from './style_config';

export default (param)=>( 
    console.warn(param),
    <Text style={style_config.fontBig}>
        O valor {param.max} é maior que o valor {param.min}
    </Text>
)