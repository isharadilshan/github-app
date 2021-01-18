import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SettingsView = () => {
  return (
    <View style={styles.parentContainer}>
      <Text style={styles.selfCenter}>This is settings view</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: 'red',
  },
  selfCenter: {
    alignSelf: 'center',
  }
});

export default SettingsView;