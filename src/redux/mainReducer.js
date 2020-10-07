import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard11131404Reducer from '../features/Dashboard11131404/redux/reducers'
import SignIn59131396Reducer from '../features/SignIn59131396/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard11131404: Dashboard11131404Reducer,
SignIn59131396: SignIn59131396Reducer,

});