import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../initializer/actions/Actions';

const UsersView = (props) => {

  const {actions, user} = props;

  console.log('USER --------------------------------',user);

  return (
    <View style={styles.parentContainer}>
      <Text style={styles.selfCenter} onPress={() => actions.fetchUser('isharadilshan')}>This is users view</Text>
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

const mapStateToProps = state => ({
  user: state.reducer.user,
});

const ActionCreators = Object.assign(
  {},
  Actions,
);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersView)