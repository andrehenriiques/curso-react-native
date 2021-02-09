import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import FlexboxV1 from './components/layout/FlexboxV1';
import FlexboxV2 from './components/layout/FlexboxV2';
import FlexboxV3 from './components/layout/FlexboxV3';
import FlexboxV4 from './components/layout/FlexboxV4';
import Square from './components/layout/Square';
import Mega from './components/mega/Mega';

//import ListProductsV2 from './components/products/ListProductsV2';
import TypeYourName from './components/TypeYourName';
//import ListProducts from './components/products/ListProducts';
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
//import UserLoggedin from './components/UserLoggedin';

//import  First  from './components/First';
//import MinMax from './components/MinMax';
//import Comp, { Comp1, Comp2 } from './components/Multi';
//import Title from './components/Title';

export default () =>{
    return (
    <SafeAreaView style={style.App}>
        <Mega qtNumber={12}/>
        {/* <FlexboxV4/> */}
        {/* <FlexboxV3/> */}
        {/* <FlexboxV2/> */}
        {/* <FlexboxV1/> */}
        {/* <TypeYourName/> */}
        {/* <ListProductsV2/> */}
        {/* <ListProducts/> */}
        {/* <UserLoggedin user={ {name: 'Gui', email: 'gui@gui.com'} }/>
        <UserLoggedin user={ {name: 'Gui'} }/> */}
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
    }
})