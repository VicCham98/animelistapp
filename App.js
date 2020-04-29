import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Category from './src/screens/Category';
import Home from './src/screens/Home';
import ThemeContextProvider from './src/contexts/ThemeContext'
import DetailAnime from './src/screens/DetailAnime';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <ThemeContextProvider>
      <PaperProvider>
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
                <Drawer.Screen name="Detail" component={DetailAnime} options={{ drawerLabel: 'Detail' }} />
            </Drawer.Navigator>
          </NavigationContainer>
        </View>
      </PaperProvider>
    </ThemeContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
    // marginTop: Contants.statusBarHeight,
  },
});
