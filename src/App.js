import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
//import Aleatory from './components/Aleatory';
//import ButtonExec from './components/ButtonExec';
//import Count from './components/Count';
//import Dad from './components/direct/Dad';
import Mother from './components/indirect/Mother';

//import  First  from './components/First';
//import MinMax from './components/MinMax';
//import Comp, { Comp1, Comp2 } from './components/Multi';
//import Title from './components/Title';

export default () =>{
    return (
    <View style={style.App}>
        <Mother/>
        {/* <Dad x={10} y={20}/> */}
        {/* <Title primary="Cadastro" secondary="Tela de Cadastro do Produto"/> */}
        {/* <Count start={100} pass={13}/> */}
        {/* <ButtonExec/> */}
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