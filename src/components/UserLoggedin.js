import React from 'react';
import { Button, Text } from 'react-native';
import If from './If';
import style_config from './style_config';

export default props =>{

    const user = props.user || {}

    return (
        <>
            <If test={user && user.name && user.email}>
                <Text style={style_config.fontBig}>Usuário Logado: </Text>
                <Text style={style_config.fontBig}>{user.name} - {user.email}</Text>
            </If>
        </>
    )
}