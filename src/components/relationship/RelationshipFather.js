import React from 'react';
import { Button, Text } from 'react-native';
import style_config from '../style_config';
import RelationshipSon from './RelationshipSon';

export default props =>{

    return (
        <>  
            <Text>Membros da Família: </Text>
            {props.children}
        </>
    )
}