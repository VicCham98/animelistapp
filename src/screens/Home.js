import React, { useContext } from 'react';
import { StyleSheet, View, ProgressBarAndroid } from 'react-native';
import AppBarHead from '../components/AppBarHead';
import CardAnime from '../components/CardAnime';
import GetAnime from "../hooks/GetAnime";
import { SearchContext } from '../contexts/SearchContext';

const Home = ({ navigation }) => {

  const { state } = useContext(SearchContext)

  const { data, loading } = state.search.length ? GetAnime(`anime?${state.search}page[limit]=10&page[offset]=0`) : GetAnime(`trending/anime`);
  
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
