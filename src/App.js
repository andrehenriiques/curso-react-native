import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
//import Aleatory from './components/Aleatory';
//import ButtonExec from './components/ButtonExec';
//import Count from './components/Count';
//import Dad from './components/direct/Dad';
//import Mother from './components/indirect/Mother';
//import CountV2 from './components/count/CountV2';
//import Differentiate from './components/Differentiate';
//import ParImpar from './components/ParImpar';
//import RelationshipFather from './components/relationship/RelationshipFather';
//import RelationshipSon from './components/relationship/RelationshipSon';
import UserLoggedin from './components/UserLoggedin';

//import  First  from './components/First';
//import MinMax from './components/MinMax';
//import Comp, { Comp1, Comp2 } from './components/Multi';
//import Title from './components/Title';

export default () =>{
    return (
    <SafeAreaView style={style.App}>
        <UserLoggedin user={ {name: 'Gui', email: 'gui@gui.com'} }/>
        <UserLoggedin user={ {name: 'Gui'} }/>
        {/* <RelationshipFather>
            <RelationshipSon name="Carlos" surname="Arruda"></RelationshipSon>
            <RelationshipSon name="João" surname="Arruda"></RelationshipSon>
        </RelationshipFather> */}
        {/* <ParImpar  num={3}/> */}
        {/* <Differentiate/> */}
        {/* <CountV2/> */}
        {/* <Mother/> */}
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
    </SafeAreaView>
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