import React from 'react'
import { Text } from 'react-native'
import style_config from '../style_config'
import Products from './Products'


export default props =>{

    function list (){
        return Products.map(item => {
            return <Text key={item.id}>{item.id} - {item.name} - tem R$ {item.price}</Text>
            })
    }

    return (
        <>
        <Text style={style_config.fontBig}>Lista de Produtos</Text>
        {list()}
        </>
    )
}