import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AppBarHead from '../components/AppBarHead';
import CardAnime from '../components/CardAnime';
import Axios from 'axios'
import Constants from 'expo-constants';
const Home = ({ navigation }) => {

  const [data, setData] = useState([])
  
  useEffect(()=> {
    Axios.get(`https://kitsu.io/api/edge/trending/anime`)
      .then(res => {
        let response = res.data;
        setData(response.data)
      })
  },[])

  return (
    <View style={styles.container}>
      <AppBarHead
        navigation={navigation}
        title="Home"
      />
      <CardAnime 
          data={data}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
  });

export default Home;
