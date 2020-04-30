import React, { useState } from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native'
import { Paragraph, Avatar, Title } from 'react-native-paper';
import { WebView } from 'react-native-webview';
import AppBarHead from '../components/AppBarHead';
import DialogDetailAnime from '../components/DialogDetailAnime';

const DetailAnime = ({ route, navigation }) => {
  
  const { id, title, poster, synopsis, averageRating, startDate, ageRatingGuide, episodeCount, youtubeVideoId, cover } = route.params

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
        <Avatar.Image style={styles.avatarImage} size={100} source={{uri: poster}} />
        <Title style={styles.textTitle}>{title}</Title>
        <Paragraph style={styles.textSynopsis}>{synopsis}</Paragraph>
        <WebView
                style={{ height: 200, width: '100%', bottom: 10 }}
                source={{
                  html: `${iframeString}`,
                }}
                automaticallyAdjustContentInsets={true}
              />
      </ScrollView>
      <DialogDetailAnime
        visibleFAB={visibleFAB}
        setVisibleFAB={setVisibleFAB}
        title={title}
        averageRating={averageRating}
        startDate={startDate}
        ageRatingGuide={ageRatingGuide}
        episodeCount={episodeCount}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
  },
  textTitle: {
    fontSize: 25,
    paddingTop: 10,
    paddingLeft: 10
  },
  textSynopsis: {
    padding: 20,
    fontSize: 15
  },
  avatarImage: {
    position: 'absolute',
    alignSelf: 'flex-end',
    top: 75,
    shadowColor: 'black',
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 6
  }
});

export default DetailAnime;
