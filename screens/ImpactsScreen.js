import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Alert, ImageBackground, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel'; // Replace with actual import from the package you choose
import { collection, query, where, getDocs } from 'firebase/firestore';
import { firebaseDB } from '../config/firebaseConfig'; // Adjust the import path as necessary

export default function ImpactsScreen({ navigation }) {
  const [volunteerCount, setVolunteerCount] = useState(0);
  const [averageValues, setAverageValues] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch volunteer count
        const volunteerQuery = query(collection(firebaseDB, 'users'), where('type', '==', 'volunteer'));
        const volunteerSnapshot = await getDocs(volunteerQuery);
        setVolunteerCount(volunteerSnapshot.size);

        // Fetch average values for each impact area
        const responseQuery = query(collection(firebaseDB, 'responses'));
        const responseSnapshot = await getDocs(responseQuery);

        let totals = { giving_avg: 0, gracious_avg: 0, grateful_avg: 0, green_avg: 0, grounded_avg: 0 };
        let counts = { giving_avg: 0, gracious_avg: 0, grateful_avg: 0, green_avg: 0, grounded_avg: 0 };

        responseSnapshot.forEach((doc) => {
          const data = doc.data();
          Object.keys(totals).forEach(key => {
            if (data[key] !== null) {
              totals[key] += data[key];
              counts[key]++;
            }
          });
        });

        let averages = {};
        Object.keys(totals).forEach(key => {
          averages[key] = counts[key] > 0 ? (totals[key] / counts[key]).toFixed(2) : 0;
        });
        setAverageValues(averages);
      } catch (e) {
        console.error("Error fetching data:", e);
        setError('Failed to fetch data. Please try again.');
      }
      setLoading(false);
    };

    fetchData();
  }, []);
  const renderCarouselItem = ({ item }) => {
    return (
      <View style={styles.carouselItem}>
        <Text style={styles.carouselTitle}>{item.title}</Text>
        <Text style={styles.carouselValue}>{item.value * 10}% increase</Text>
      </View>
    );
  };

  if (error) {
    Alert.alert("Error", error);
  }

  // ... rest of your component

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const carouselItems = Object.keys(averageValues).map(key => ({
    title: key.replace('_avg', '').charAt(0).toUpperCase() + key.replace('_avg', '').slice(1),
    value: averageValues[key]
  }));

  return (
    <ImageBackground 
      source={require('../assets/voluntree_background_edited.png')} // replace with your image path
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>Impacting Lives Together</Text>
        <Text style={styles.impactText}>Total Volunteers Engaged: {volunteerCount}</Text>
        <Text style={styles.impactText}>Our experience has positively impacted our volunteers in these aspects!</Text>
        <Carousel
          data={carouselItems}
          renderItem={renderCarouselItem}
          sliderWidth={300}
          itemWidth={300}
        />
      </View>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background for better readability
    padding: 10,
  },
  impactText: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background for better readability
    padding: 10,
  },
  carouselItem: {
    backgroundColor: 'floralwhite',
    borderRadius: 5,
    height: 200,
    padding: 50,
    marginLeft: 25,
    marginRight: 25,
  },
  carouselTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    // color: 'white',
  },
  carouselValue: {
    fontSize: 18,
    // color: 'white',
  },
});
