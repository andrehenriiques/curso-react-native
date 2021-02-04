import React from 'react';
import { Text, Platform } from 'react-native'
import style_config from './style_config';

export default props =>{
    if(Platform.OS === 'android'){
        return <Text style={style_config.fontBig}>Android</Text>
    }else if(Platform.OS === 'android'){
        return <Text style={style_config.fontBig}>iOS</Text>
    }else{
        return <Text style={style_config.fontBig}>eita!!!</Text>
    }
}
