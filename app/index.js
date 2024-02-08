import * as React from 'react';
import MainContainer from '../navigation/MainContainer';
import Onboarding from '../components/Onboarding';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function App() {
  return(
    <MainContainer/>
  );
}


// export default function App() {
//   return(
//     <View style={styles.container}>
//       <MainContainer/>
//     </View>


//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });




// export default function App() {

//   return (
//     <View style={styles.container}>
//       <Onboarding />
//       <StatusBar style="auto" />
//     </View>
//   );
// }