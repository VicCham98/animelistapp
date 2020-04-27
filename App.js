import React from 'react';
import { StyleSheet, View } from 'react-native';
import Contants from 'expo-constants'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Category from './src/screens/Category';
import Home from './src/screens/Home';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Drawer.Navigator 
          initialRouteName="Home" 
          drawerStyle={{ backgroundColor: '#fff' }}
          drawerContentOptions={{
            activeTintColor: 'black',
          }}  
        >
            <Drawer.Screen name="Home" component={Home} options={{ drawerLabel: 'Home' }} />
            <Drawer.Screen name="Category" component={Category} options={{ drawerLabel: 'Category' }} />
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
    marginTop: Contants.statusBarHeight,
  },
});
