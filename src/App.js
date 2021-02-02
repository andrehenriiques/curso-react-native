import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Aleatory from './components/Aleatory';

import  First  from './components/First';
import MinMax from './components/MinMax';
import Comp, { Comp1, Comp2 } from './components/Multi';
import Title from './components/Title';

export default () =>{
    return (
    <View style={style.App}>
        <Title primary="Cadastro" secondary="Tela de Cadastro do Produto"/>
        {/* <Aleatory min={10} max={60}/> */}
        {/*<MinMax min={3} max={20}/>
         <Comp/>
        <Comp1/>
        <Comp2/>
        <First/> */}
    </View>
    )
}

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
})