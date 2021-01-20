import axios from 'axios';

export const ModuleEvents = {
    FETCH_USER: 'FETCH_USER',
    LOADING_FINISHED: 'LOADING_FINISHED',
    TEST_ACTION: 'TEST_ACTION',
  };

  export function setFetchUser(user) {
    return {
      type: ModuleEvents.FETCH_USER,
      payload: user,
    };
  }
  
  export function fetchUser(username) {
    return async (dispatch) => {
      try {
        const apiResponse = await axios({
          method: 'get',
          url: `https://api.github.com/users/${username}`,
          responseType: 'json'
        });
        await dispatch(setFetchUser(apiResponse.data));
        return apiResponse.data || {};
      } catch (error) {
        console.error(error);
      }
    };
  }