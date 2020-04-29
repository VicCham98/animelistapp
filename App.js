import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Category from './src/screens/Category';
import Home from './src/screens/Home';
import ThemeContextProvider from './src/contexts/ThemeContext'
import DetailAnime from './src/screens/DetailAnime';
import { DrawerContent } from './src/screens/DrawerContent';
import Contants from 'expo-constants'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <ThemeContextProvider>
      <PaperProvider>
        <View style={styles.container}>
          <NavigationContainer>
            <Drawer.Navigator
              drawerContent={ props => <DrawerContent {...props} />}
              initialRouteName="Home" 
              drawerStyle={{ backgroundColor: '#fff', marginTop: Contants.statusBarHeight, }}
              drawerContentOptions={{
                activeTintColor: 'black',
              }}  
            >
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Category" component={Category} />
                <Drawer.Screen name="Detail" component={DetailAnime} />
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
