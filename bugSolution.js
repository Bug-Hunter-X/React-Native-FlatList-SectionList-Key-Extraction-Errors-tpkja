// bugSolution.js
import React from 'react';
import { FlatList, Text, StyleSheet, View } from 'react-native';

const data = [
  { id: '1', text: 'Item 1' },
  { id: '2', text: 'Item 2' },
  { id: '3', text: 'Item 3' },
];

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id} // Correct keyExtractor
        renderItem={({ item }) => <Text style={styles.item}>{item.text}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    marginBottom: 5,
  },
});

export default App; 