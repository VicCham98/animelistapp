import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const theme = {
  colors: {
      primary: '#343a40',
  }
}

const AppBarHead = ({ navigation, title, icon }) => {
  return (
    <Appbar.Header theme={theme} >
        <Appbar.Action icon={icon} onPress={() => icon === 'menu' ? navigation.openDrawer() : navigation.goBack()} />
        <Appbar.Content title={title} />
        <Appbar.Action icon="magnify" onPress={() => navigation.openDrawer()} />
      </Appbar.Header>
  );
}

// const styles = StyleSheet.create({
//   bottom: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//   },
// });

export default AppBarHead;
