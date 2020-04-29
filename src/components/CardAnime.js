import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, Dimensions, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-paper';

const numColumns = 2;

const CardAnime = ({ data, navigation }) => {

    return (
        <View style={styles.container}>
        <FlatList
            keyExtractor={item => item.id}
            data={data}
            renderItem={({item}) => {
                return (
                    <TouchableOpacity 
                        style={styles.viewStyle}
                        onPress={() => {
                            navigation.navigate('Detail', {
                                id: item.id,
                                title: item.attributes.canonicalTitle,
                                poster: item.attributes.posterImage.small,
                                synopsis: item.attributes.synopsis,
                                averageRating: item.attributes.averageRating,
                                startDate: item.attributes.startDate,
                                ageRatingGuide: item.attributes.ageRatingGuide,
                                episodeCount: item.attributes.episodeCount,
                                youtubeVideoId: item.attributes.youtubeVideoId,
                                cover: item.attributes.coverImage.small
                            })
                        }}
                    >
                        <Card style={styles.item}>
                            <Card.Cover source={{ uri: item.attributes.posterImage.small }} />
                            <Card.Title title={item.attributes.canonicalTitle} />
                        </Card>
                    </TouchableOpacity>
                )
            }}
            numColumns={numColumns}
        />
    </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e3e3e3',
        // marginTop: Constants.statusBarHeight,
        // top: '5%',
    },
    item: {
        backgroundColor: '#fff',
        width: '100%',
        // height: Dimensions.get('window').width / numColumns,
    }, 
    viewStyle: {
        flex: 1,
        padding: 10,
    }
});

export default CardAnime;