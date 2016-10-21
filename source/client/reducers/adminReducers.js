import wedding from '../../../config/wedding.js';
import { AUTHORIZE_ADMIN } from '../actions/actionTypes';

const initialState = {
  authorized: false,
  secret: ''
};

export default function adminReducers(state = initialState, action) {
  switch (action.type) {
    case AUTHORIZE_ADMIN: {
      let authorized = false;
      if (action.secret && action.secret === wedding.adminSecret) {
        authorized = true;
      }
      const newAdminState = Object.assign({}, state, { authorized, secret: action.secret });
      return newAdminState;
    }
    default:
      return state;
  }
}
