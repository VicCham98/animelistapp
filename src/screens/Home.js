import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AppBarHead from '../components/AppBarHead';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <AppBarHead
        navigation={navigation}
        title="Home"
      />
      <Text>View Home</Text>
      <Button 
        title="go Category"
        onPress={() => navigation.navigate("Category")}
      />
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
  });

export default Home;
