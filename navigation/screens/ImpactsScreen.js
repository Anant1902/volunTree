import * as React from 'react';
import { View, Text } from 'react-native';
import Onboarding from '../../components/Onboarding';

export default function ImpactsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Onboarding/>
        </View>
    );
 }