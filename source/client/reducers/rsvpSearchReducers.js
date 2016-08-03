import addons from 'react-addons';
import update from 'react-addons-update';


import { UPDATE_RSVP_QUERY, UPDATE_RSVP_RESULT } from '../actions/actionTypes';

const initialState = { query: '', result: null };

export default function rsvpReducers(state = initialState, action) {
  switch (action.type) {
    case UPDATE_RSVP_QUERY: {
      const newState = Object.assign({}, state, { query: action.query });
      return newState;
    }
    case UPDATE_RSVP_RESULT: {
      const newStateResults = Object.assign({}, state, { result: action.result });
      return newStateResults;
    }
    default:
      return state;
  }
}
