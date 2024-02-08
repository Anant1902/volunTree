import * as React from 'react';
import { View, Text } from 'react-native';

export default function LogoutScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                Logout
            </Text>
        </View>
    );
}