import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AppBarHead from '../components/AppBarHead';

const Category = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <AppBarHead
          icon='menu'
          navigation={navigation}
          title="Category"
        />
      <Text>View Category</Text>
      <Button 
        title="go Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
  },
});

export default Category;
