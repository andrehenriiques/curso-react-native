import React, { useState } from 'react';
import { Text } from 'react-native';
import style_config from './../style_config';
import CountDisplay from './CountDisplay.js';
import CountButton from './CountButton.js';

export default props=>{

    const [num, setNum] = useState(0)
  
    const inc = ()=> setNum(num + 1)
    const dec = ()=> {
        if(num>0) setNum(num - 1)
    } 

    return (
    <>
    <Text style={style_config.fontBig}>
        Contador
    </Text>
    <CountDisplay num={num}/>
    <CountButton inc={inc} dec={dec}/>
    </>
)}