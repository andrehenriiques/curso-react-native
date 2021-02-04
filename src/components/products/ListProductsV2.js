import React from 'react'
import { Text, FlatList } from 'react-native'
import style_config from '../style_config'
import Products from './Products'


export default props =>{

    const productRender = ({ item: p }) =>{
        return <Text>{p.id}- {p.name} - R$ {p.price}</Text>
    }

    return (
        <>
        <Text style={style_config.fontBig}>Lista de Produtos V2</Text>
        <FlatList
            data={Products}
            keyExtractor={i=>`${i.id}`}
            renderItem={productRender}
        />
        </>
    )
}