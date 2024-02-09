// FeedbackDetail.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function FeedbackDetailScreen({ route, navigation }) {
  const { feedback } = route.params.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{feedback.title}</Text>
      <Text>{feedback.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default FeedbackDetailScreen;
