import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const DetailAnime = () => {
  return (
    <View style={styles.container}>
      <Text>View Detail Anime</Text>
      <View style={styles.viewOne}/>
      <View style={styles.viewTwo}/>
      <View style={styles.viewThree}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewOne: {
    backgroundColor: 'black',
    width: '100%',
    height: 100,
  },
  viewTwo: {
    backgroundColor: 'green',
    width: '75%',
    height: 100,
  },
  viewThree: {
    backgroundColor: 'red',
    width: '25%',
    height: 100,
  }
});

export default DetailAnime;
