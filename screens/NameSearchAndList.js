import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';

const NameSearchAndList = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNames, setSelectedNames] = useState([]);

  // Function to handle search input
  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  // Function to handle adding a name to the list
  const handleAddName = (name) => {
    setSelectedNames([...selectedNames, name]);
  };

  // Filter names based on search query
  const filteredNames = data.filter((name) =>
    name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Render a single name item
  const renderNameItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleAddName(item)} style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  // Render the component
  return (
    <View style={{ flex: 1, padding: 10 }}>
      {/* Search input */}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
        placeholder="Search names"
        onChangeText={handleSearch}
        value={searchQuery}
      />

      {/* Search results */}
      <FlatList
        data={filteredNames}
        renderItem={renderNameItem}
        keyExtractor={(item) => item.toString()}
        ListEmptyComponent={() => <Text>No matching names</Text>}
      />

      {/* Selected names list */}
      <View style={{ marginTop: 20 }}>
        <Text>Selected Names:</Text>
        <FlatList
          data={selectedNames}
          renderItem={({ item }) => (
            <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
              <Text>{item}</Text>
            </View>
          )}
          keyExtractor={(item) => item.toString()}
        />
      </View>
    </View>
  );
};

export default NameSearchAndList;
