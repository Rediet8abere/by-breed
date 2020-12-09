import React from 'react';
import { StyleSheet, ScrollView, Text, View, FlatList, SafeAreaView} from 'react-native';
import { cats } from './breeds';
import LablesAndStars from './components/LablesAndStars'
import Item from './components/Item'

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.test}>
      <Text style={styles.title}>
      Cats world
      </Text>
     </View>

        <FlatList
        data={cats}
        renderItem= {({index, item}) => {
          return (
          <View style={styles.item}>
            <Text style={styles.title}>
            {item.breed}
            </Text>
            <Item cats={item}/>
          </View>
          )
        }}
        keyExtractor={cats => cats.breed}
        />

    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
  },
  keyValue: {
    padding: 20,
  }
});
