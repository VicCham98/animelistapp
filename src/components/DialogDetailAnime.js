import React, { Fragment } from 'react';
import { StyleSheet, View } from 'react-native'
import { FAB } from 'react-native-paper';
import { Button, Paragraph, Dialog, Portal, Title } from 'react-native-paper';

const DialogDetailAnime = ({ visibleFAB, setVisibleFAB, title, averageRating, startDate, ageRatingGuide, episodeCount }) => {
    return (
        <Fragment>
            <FAB
            style={styles.fab}
            icon="information-variant"
            color={'#fff'}
            theme={{colors: {accent: '#343a40'}}}
            onPress={() => setVisibleFAB(!visibleFAB)}
            />
            <Portal>
                <Dialog
                visible={visibleFAB}
                onDismiss={() => setVisibleFAB(!visibleFAB)}
                >
                <Dialog.Title>Anime details</Dialog.Title>
                <Dialog.Content>
                    <View style={styles.dialogRow}>
                    <Title style={{fontSize: 17}}>English: </Title>
                    <Paragraph style={{fontSize: 15, alignSelf: 'center'}}>{title}</Paragraph>
                    </View>
                    <View style={styles.dialogRow}>
                    <Title style={{fontSize: 17}}>Rating: </Title>
                    <Paragraph style={{fontSize: 15, alignSelf: 'center'}}>{averageRating}%</Paragraph>
                    </View>
                    <View style={styles.dialogRow}>
                    <Title style={{fontSize: 17}}>Start Date: </Title>
                    <Paragraph style={{fontSize: 15, alignSelf: 'center'}}>{startDate}</Paragraph>
                    </View>
                    <View style={styles.dialogRow}>
                    <Title style={{fontSize: 17}}>Age Guide: </Title>
                    <Paragraph style={{fontSize: 15, alignSelf: 'center'}}>{ageRatingGuide}</Paragraph>
                    </View>
                    <View style={styles.dialogRow}>
                    <Title style={{fontSize: 17}}>Episodes: </Title>
                    <Paragraph style={{fontSize: 15, alignSelf: 'center'}}>{episodeCount}</Paragraph>
                    </View>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={() => setVisibleFAB(!visibleFAB)}>Done</Button>
                </Dialog.Actions>
                </Dialog>
            </Portal>
        </Fragment>
    );
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
    dialogRow: {
        flexDirection: 'row'
    }
});

export default DialogDetailAnime;