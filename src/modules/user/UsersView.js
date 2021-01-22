import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Searchbar} from 'react-native-paper';
import _ from 'lodash';
import * as Actions from '../../initializer/actions/Actions';

const UsersView = (props) => {

  const {actions, user} = props;
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (searchText && searchText.length > 0) {
      actions.fetchUser(searchText);
    }
  }, [searchText])

  console.log('USER --------------------------------',user);

  // const searchUsers = _.debounce((text) => {
  //   if (text && text.length > 1) {
  //     actions.fetchUser(text);
  //   }
  // }, 600, {trailing: true, leading: false});

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView style={styles.parentContainer} behavior='height'>
        <Searchbar
          placeholder="Search user"
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
        />
        {
          !_.isEmpty(user) && searchText.length > 0 ? 
          <TouchableOpacity style={styles.userProfileCardWrapper} onPress={Keyboard.dismiss}>
            <View style={styles.contentRow}>
              <View style={styles.imageWrapper}></View>
              <View style={styles.userDetailsWrapper}>
                <Text style={styles.detailText}>ishara dilshan</Text>
              </View>
            </View>
          </TouchableOpacity> : null
        }
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: '#f7f9fc',
    padding: 20,
  },
  userProfileCardWrapper: {

    borderRadius: 4,
    backgroundColor: '#bef5cb',
    height: 300,
    marginTop: 20,
  },
  contentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageWrapper: {
    margin: 10,
    height: 60,
    width: 60,
    borderRadius: 60/2,
    backgroundColor: 'red',
  },
  userDetailsWrapper: {
    margin: 5,
    width: '75%',
    backgroundColor:'red',
    padding: 5,
  },
  detailText: {
    fontSize: 14,
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