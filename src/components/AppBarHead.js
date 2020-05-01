import React, { useState, Fragment, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import { SearchContext } from './../contexts/SearchContext'

const theme = {
  colors: {
      primary: '#343a40',
  }
}

const AppBarHead = ({ navigation, title, icon }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const { state, dispatch } = useContext(SearchContext)

  return (
    <Appbar.Header theme={theme} >
      {
        state.status ?
        <Fragment>
          <Appbar.Action 
            color='white' 
            icon='arrow-left' 
            onPress={() => {
              navigation.goBack()
              setSearchQuery('')
              dispatch({ type: 'CLEAR_SEARCH' })
              dispatch({ type: 'DISABLE_SEARCH' })
            }} />
          <View style={{ flex: 1 }}>
            <Searchbar
              placeholder="Search"
              onChangeText={(query) =>{
                setSearchQuery(query)
                dispatch({ type: 'ADD_SEARCH', payload: query})
              }}
              value={searchQuery}
              autoFocus={true}
            />
          </View>
        </Fragment>
        :
        <Fragment>
          <Appbar.Action color='white' icon={icon} onPress={() => icon === 'menu' ? navigation.openDrawer() : navigation.goBack()} />
          <Appbar.Content title={title} />
          <Appbar.Action color='white' icon="magnify" onPress={() => {
            dispatch({ type: 'ENABLE_SEARCH' })
            navigation.navigate('Search')
          }} />
        </Fragment>
      }
      </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
});

export default AppBarHead;
