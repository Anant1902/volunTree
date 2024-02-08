import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import SvgExample from './(volunteer)/svgExample';
import Onboarding from '../components/Onboarding';


export default function App() {

  return (
    <View style={styles.container}>
      <Onboarding />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
