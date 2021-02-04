import React, { useState } from 'react'
import { View, TextInput, Text } from 'react-native'

export default props =>{

    const [name, setName] = useState('test')

    return (
        <View>
            <Text> {name} </Text>
            <TextInput
                placeholder="Digite seu Nome"
                value={name}
                onChangeText={name => setName(name)}
            />
        </View>
    )
}