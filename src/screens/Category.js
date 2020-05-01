import React, { useState } from 'react';
import { StyleSheet, View, ProgressBarAndroid, ActivityIndicator } from 'react-native';
import AppBarHead from '../components/AppBarHead';
import GetAnime from "../hooks/GetAnime";
import CardAnime from '../components/CardAnime';

const Category = ({ navigation }) => {
  const [page, SetPage] = useState(0);
  const { data, loading } = GetAnime(`anime?page[limit]=10&page[offset]=${page*10}`)

  const handleLoadMore = () => {
    SetPage(page + 1)
}

const RenderFooter = () => {
  return (
      <View style={styles.loader}>
          <ActivityIndicator size='large' />
      </View>
  )
}

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
          RenderFooter={RenderFooter}
          handleLoadMore={handleLoadMore}
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
  },
  
  loader: {
    marginTop: 10,
    alignItems: 'center'
}
});

export default Category;
