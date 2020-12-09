import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import LablesAndStars from './LablesAndStars'


const Item = ({cats}) => {
  const keys = Object.keys(cats)
  const features = keys.map((item)=> {
    return <LablesAndStars text={item} value={cats[item]}/>
  })
  return (
    <View style={styles.item}>
      { features }
    </View>
    );
}

const styles = StyleSheet.create({
  test: {
    backgroundColor: 'purple',
    padding: 5,
    width: '100%',
    borderWidth: 2,
  },
  item: {
    backgroundColor: '#f3c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 2,
  },
})

export default Item
