import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { FAB } from 'react-native-paper';
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import { WebView } from 'react-native-webview';
import AppBarHead from '../components/AppBarHead';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};

const DetailAnime = ({ route, navigation }) => {
  
  const { id, title, poster, synopsis, averageRating, startDate, ageRatingGuide, episodeCount, youtubeVideoId, cover } = route.params

  const posterImage = {
    uri: poster,
    width: '100%',
    height: 300
  }

  const coverImage = {
    uri: cover,
    width: '100%',
    height: 150
  };

  const iframeString = `<iframe width='100%' height='100%' src='https://www.youtube.com/embed/${youtubeVideoId}' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>`

  const [visibleFAB, setVisibleFAB] = useState(false)

  return (
    <View style={styles.container}>
      <AppBarHead
        icon='arrow-left'
        navigation={navigation}
        title="Details"
      />
      
      <ScrollView>
        <Image 
          source={coverImage} 
        />
        <Text style={styles.textTitle}>{title} - {episodeCount} caps</Text>
        <Text style={styles.textSynopsis}>{synopsis}</Text>
        
        <WebView
                style={{ height: 200, width: '100%', bottom: 10 }}
                source={{
                  html: `${iframeString}`,
                }}
                automaticallyAdjustContentInsets={true}
              />
      </ScrollView>
      <FAB
        style={styles.fab}
        icon="tooltip-image-outline"
        color={'#fff'}
        theme={{colors: {accent: '#343a40'}}}
        onPress={() => setVisibleFAB(!visibleFAB)}
      />
      <Portal>
        <Dialog
          visible={visibleFAB}
          onDismiss={() => setVisibleFAB(!visibleFAB)}
        >
          <Dialog.Title>{title}</Dialog.Title>
          <Dialog.Content>
            <Image 
              source={posterImage} 
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setVisibleFAB(!visibleFAB)}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  textTitle: {
    fontSize: 25,
    paddingTop: 10,
    paddingLeft: 10
  },
  textSynopsis: {
    padding: 20,
    fontSize: 15
  }
});

export default DetailAnime;
