import React from 'react';
import Son from './Son';

export default props =>{

    return (
        <>
            <Son a={props.x} b={props.y}/>  
            <Son a={props.x+100} b={props.y+200}/>  
        </>
    )
}