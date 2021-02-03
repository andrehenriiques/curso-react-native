import React, { useState } from 'react'
import { Text, Button } from 'react-native'
import style_config from './style_config'

export default props =>{

    //let numero = props.start

    const [numerItem, setNumber] = useState(props.start)

   

    const inc = ()=> setNumber(numerItem+props.pass)
    const dec = ()=> setNumber(numerItem-props.pass)

    return (
        <>
            <Text style={style_config.fontBig}>{numerItem}</Text>
            <Button onPress={inc} title="+"/>
            <Button onPress={dec} title="-"/>
        </>
    )
}