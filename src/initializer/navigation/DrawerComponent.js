import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DrawerContent = () => {
  return (
    <View style={styles.drawerWrapper}>
      <View style={styles.logoWrapper}>
        <Text>This is logo</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerWrapper: {
    flex: 1,
    backgroundColor: 'purple',
  },
  logoWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
});

export default DrawerContent;