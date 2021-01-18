import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const UsersView = () => {
  return (
    <View style={styles.parentContainer}>
      <Text style={styles.selfCenter}>This is users view</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: 'blue',
  },
  selfCenter: {
    alignSelf: 'center',
  }
});

export default UsersView;