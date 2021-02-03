import React, {useState} from 'react';
import { Text } from 'react-native';
import Sister from './Sister';
import style_config from './../style_config'

export default props =>{

    const [text, setText]= useState('')
    const [num, setNum] = useState(0)

    function showValue(number, text){
        setNum(number)
        setText(text)
    }

    return (
        <>
            <Text style={style_config.fontBig}> {text} {num} </Text>
                <Sister 
                    min={1} 
                    max={60} 
                    func={showValue}/>
        </>
    )
}
