import * as React from 'react';
import { TextInput, View, Text } from 'react-native';

export default function MyTextInput(props) {
    const { input, meta: { error, pristine }, ...inputProps } = props;
    return (
        <View>
            <TextInput
                style={{ height: 50 }}
                {...inputProps}
                onChangeText={input.onChange}
                onBlur={input.onBlur}
                onFocus={input.onFocus}
                value={input.value}
            />
            {!pristine ? <Text>{error}</Text> : null}
        </View>
    );
}
