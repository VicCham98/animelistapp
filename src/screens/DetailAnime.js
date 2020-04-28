import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native'
import Axios from 'axios';
import AppBarHead from '../components/AppBarHead';

const DetailAnime = ({ route, navigation }) => {
  const { id, title } = route.params
  const [data, setData] = useState([])
  
  useEffect(()=> {
    Axios.get(`https://kitsu.io/api/edge/anime/${id}`)
      .then(res => {
        let response = res.data;
        setData(response.data)
      })
  },[id])

  console.log(data.attributes.posterImage.tiny);
  

  return (
    <View style={styles.container}>
      <AppBarHead
        icon='arrow-left'
        navigation={navigation}
        title={title}
      />
      <View style={styles.cover}>
        <Image 
          style={{width: '100%', height: '30%'}}
          source={{uri: data.attributes.coverImage.tiny}} 
        />
      </View>
      
      <Text>View Detail Anime</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
  },
  cover: {
    flex: 1
  }
});

export default DetailAnime;
