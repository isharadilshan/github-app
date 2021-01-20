import { ModuleEvents } from "../actions/Actions";

const initialState = {
  user: {},
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ModuleEvents.FETCH_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
export default Reducer;
 