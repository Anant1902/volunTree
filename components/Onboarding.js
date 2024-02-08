import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, FlatList, Animated, ImageBackground } from "react-native";
import slides from '../slides';
import OnboardingItem from '../components/OnboardingItem';

export default Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Add this line

  const scrollX = useRef(new Animated.Value(0)).current;
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const slidesRef = useRef(null);

  return (
    <ImageBackground source={require('../assets/onboarding_bg.png')} style={styles.backgroundImage}>
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={slides}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false} // Set to false to hide the indicator
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false,
          })}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
});


// import React, {useState, useRef} from "react";
// import {View, Text, StyleSheet, FlatList, Animated} from "react-native";
// import slides from '../slides';
// import OnboardingItem from '../components/OnboardingItem';

// export default Onboarding = () => {


//     const scrollX = useRef(new Animated.Value(0)).current;
//     const viewableItemsChanged = useRef(({viewableItmes}) => {
//         setCurrentIndex(viewableItems[0].index);
//     }).current;

//     const viewConfig = useRef({viewAreaCoveragePercentThreshold:50}).current;
//     const slidesRef = useRef(null);

//     return (
//         <View style={styles.container}>
//             <View style = {{flex:3}}>
//                 <FlatList 
//                     data = {slides} 
//                     renderItem={({item}) => <OnboardingItem item = {item} />}
//                     horizontal
//                     showsHorizontalScrollIndicator
//                     pagingEnabled
//                     bounces = {false}
//                     keyExtractor={(item => item.id)}
//                     onScroll = {Animated.event([{nativeEvent: {contentOffset:{x:scrollX}}}], {
//                         useNativeDriver:false,
//                     })}
//                     scrollEventThrottle={32}
//                     onViewableItemsChanged={viewableItemsChanged}
//                     viewabilityConfig={viewConfig}
//                     ref = {slidesRef}
//                 />
//             </View>
            
//         </View>
//     );
// }

// const styles = StyleSheet.create({

//     container: {
//         flex:1,
//         justifyContent:"center",
//         alignItems: "center"
//     }
// });