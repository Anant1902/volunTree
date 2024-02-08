import * as React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

// Mock data for todo feedbacks
const feedbacks = [
  { id: '1', title: 'Streaming Through Nature', content: 'Content for feedback 1' },
  { id: '2', title: 'Wood Joinery Workshop', content: 'Content for feedback 2' },
  // Add more feedback items as needed
];

export default function AttendanceScreen({ navigation }) {
    // Function to handle feedback press
    const onFeedbackPress = (feedback) => {
        // Navigate to Feedback Detail Screen with the feedback's details
        // Assuming the detail screen is named 'FeedbackDetail'
        navigation.navigate('FeedbackDetailScreen', { screen: 'FeedbackDetailScreen', params: { feedback: feedback } });
    };

    // Render a single feedback item
    const renderFeedbackItem = ({ item }) => (
        <TouchableOpacity onPress={() => onFeedbackPress(item)} style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Text style={{ fontSize: 18 }}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={feedbacks}
                renderItem={renderFeedbackItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}
