import React from 'react';
import { View } from 'react-native';
import NameSearchAndList from './NameSearchAndList';

const names = ['John', 'Jane', 'Doe', 'Alice', 'Bob', 'Charlie'];

export default function AttendanceNatureScreen({ navigation }) {
  return (
    <View>
      <NameSearchAndList data={names} />
    </View>
  );
};
