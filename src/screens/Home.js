import React, { Fragment } from 'react';
import { StyleSheet, View, ProgressBarAndroid } from 'react-native';
import AppBarHead from '../components/AppBarHead';
import CardAnime from '../components/CardAnime';
import GetAnime from "../hooks/GetAnime";
import { Title } from 'react-native-paper';

const Home = ({ navigation }) => {

  const { data, loading } = GetAnime(`trending/anime`) ;
  
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
        <Fragment>
          <Title style={{marginLeft: 10, marginTop: 10, fontSize: 20}}>Trending This Week</Title>
          <CardAnime
            navigation={navigation}
            data={data}
          />
        </Fragment>
      }
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3e3e3'
  },
  loadingStyle: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  }
});

export default Home;
