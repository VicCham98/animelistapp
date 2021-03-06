import React, { useContext } from 'react';
import { View, StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-paper';
import { SearchContext } from '../contexts/SearchContext';

const numColumns = 2;

const CardAnime = ({ data, navigation, handleLoadMore, RenderFooter }) => {

    const { dispatch } = useContext(SearchContext)

    

    return (
        <View style={styles.container}>
        <FlatList
            ListFooterComponent={RenderFooter}
            onEndReached={handleLoadMore}
            // onEndReachedThreshold={1}
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
                                poster: item.attributes.posterImage != null ? item.attributes.posterImage.small : null,
                                synopsis: item.attributes.synopsis,
                                averageRating: item.attributes.averageRating,
                                startDate: item.attributes.startDate,
                                ageRatingGuide: item.attributes.ageRatingGuide,
                                episodeCount: item.attributes.episodeCount,
                                youtubeVideoId: item.attributes.youtubeVideoId,
                                cover: item.attributes.coverImage != null ? item.attributes.coverImage.small : null
                            })
                            dispatch({ type: 'DISABLE_SEARCH' })
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