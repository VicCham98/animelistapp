import React, { useContext } from 'react';
import { StyleSheet, View, ProgressBarAndroid, Button } from 'react-native';
import AppBarHead from '../components/AppBarHead';
import GetAnime from "../hooks/GetAnime";
import CardAnime from '../components/CardAnime';
import { SearchContext } from '../contexts/SearchContext';

const Category = ({ navigation }) => {
  const { state } = useContext(SearchContext)
  const { data, loading } = GetAnime(`anime?${state.search}page[limit]=10&page[offset]=0`);

  return (
    <View style={styles.container}>
        <AppBarHead
          icon='menu'
          navigation={navigation}
          title="Category"
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

export default Category;
