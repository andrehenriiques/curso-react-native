import React, {Fragment} from 'react'
import { View, Text } from 'react-native'
import style_config from './style_config';

export default props => {
    return (
        <Fragment>
            <Text style={style_config.fontBig}>{props.primary}</Text>
            <Text>{props.secondary}</Text>
        </Fragment>
    )
}
