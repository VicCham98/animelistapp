import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ProgressBarAndroid } from 'react-native';
import AppBarHead from '../components/AppBarHead';
import CardAnime from '../components/CardAnime';
import Axios from 'axios'

const Home = ({ navigation }) => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(()=> {
    const getRecentlyAnimes = async () => {
      try {
          let response = await Axios.get(`https://kitsu.io/api/edge/trending/anime`);
          let data = await response.data;
          setData(data.data);
          setLoading(false);
      } catch (e) {
          setLoading(false);
          setError(e);
          console.log(e)
      }
    };
    getRecentlyAnimes();
  },[])
  
  return (
    <View style={styles.container}>
      <AppBarHead
        icon='menu'
        navigation={navigation}
        title="Home"
      />
      {
        loading ? 
        <View style={styles.loadingStyle}>
          <ProgressBarAndroid color="#343a40" styleAttr='Large' />
        </View>
        :
        <CardAnime
          navigation={navigation}
          data={data}
        />
      }
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingStyle: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  }
  });

export default Home;
