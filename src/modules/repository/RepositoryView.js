import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const RepositoryView = () => {
  return (
    <View style={styles.parentContainer}>
      <Text style={styles.selfCenter}>This is repository view</Text>
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

export default RepositoryView;