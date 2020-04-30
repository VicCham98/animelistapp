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
  const [openSearch, setOpenSearch] = useState(false)
  const { state, dispatch } = useContext(SearchContext)

  return (
    <Appbar.Header theme={theme} >
      {
        openSearch ?
        <Fragment>
          <Appbar.Action 
            color='white' 
            icon='arrow-left' 
            onPress={() => {
              setOpenSearch(!openSearch)
              setSearchQuery('')
              dispatch({ type: 'CLEAR_SEARCH' })
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
          <Appbar.Action color='white' icon="magnify" onPress={() => setOpenSearch(!openSearch)} />
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
