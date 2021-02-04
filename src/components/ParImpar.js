import React from 'react';
import { Text, View } from 'react-native';
import style_config from './style_config';

export default ({num=0}) =>{
    return (
        <View>
            <Text style={style_config.fontBig}> O resultado é:</Text> 
            <Text style={style_config.fontBig}>{num % 2 === 0 ? 'Par': 'Ímpar'}</Text>
        </View>
    )
}

// export default ({num=0}) =>{
//     if(num % 2 === 0){
//         return (
//             <View>
//                 <Text style={style_config.fontBig}>O resultado é: </Text>
//                 <Text style={style_config.fontBig}>Par</Text>
//             </View>
//         )
//     }else{
//         return (
//             <View>
//                 <Text style={style_config.fontBig}>O resultado é: </Text>
//                 <Text style={style_config.fontBig}>Ímpar</Text>
//             </View>
//         )
//     }
// }
