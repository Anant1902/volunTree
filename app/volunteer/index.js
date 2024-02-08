import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import SvgExample from './svgExample';

export default function Home() {

  const renderTrees = (numTrees) => {
    const gridWidth = 315; 
    const gridHeight = 300; 
    const numRows = 6; 
    const numCols = 7; 

    const boxWidth = gridWidth / numCols;
    const boxHeight = gridHeight / numRows;

    const treesPerRow = Math.ceil(numTrees / numCols);
    const treesPerCol = Math.ceil(numTrees / numCols);

    let trees = [];
    for (let i = 0; i < numTrees; i++) {
      const row = Math.floor(i / numCols);
      const col = i % numCols;
      const x = col * boxWidth + boxWidth / 2 - 24;
      const y = row * boxHeight + boxHeight / 2 - 19;
      trees.push({ x, y });
    }

    return trees.map((tree, index) => (
      <Image
        key={index}
        source={require('../../assets/image-removebg-preview (1).png')} 
        style={[
          styles.treeImage,
          { top: tree.y, left: tree.x },
        ]}
        resizeMode="contain"
      />
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.svgContainer}>
      <SvgExample />
      {renderTrees(9)}
      <Text>9 Hours!</Text>
      </View>
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
  treeImage: {
    position: 'absolute',
    top: 7,
    left: 0,
    width: '12%', // Adjust width as needed
    height: '12%', // Adjust height as needed
  },
  svgContainer: {
    position: 'relative'
  }
});
