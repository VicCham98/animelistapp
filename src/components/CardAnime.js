import React from 'react';
import { View, StyleSheet, FlatList, Text, Dimensions, TouchableOpacity } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Constants from 'expo-constants';

export const RenderList = ({ id, title, image}) => {
    return (
        <TouchableOpacity 
            style={styles.viewStyle}
        >
            <Card style={styles.item}>
                <Card.Cover source={{ uri: image }} />
                <Card.Title title={title} />
            </Card>
        </TouchableOpacity>
    )
}

const numColumns = 2;

const CardAnime = ({ data }) => {
    return (
        <View style={styles.container}>
        <FlatList
            keyExtractor={item => item.id}
            data={data}
            renderItem={({item}) => (
                <RenderList
                    id={item.id}    
                    title={item.attributes.canonicalTitle}
                    image={item.attributes.posterImage.small}
                />
            )}
            numColumns={numColumns}
        />
    </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e3e3e3',
        marginTop: Constants.statusBarHeight,
        top: '5%',
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