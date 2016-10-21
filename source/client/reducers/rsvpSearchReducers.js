import { UPDATE_RSVP_QUERY, UPDATE_RSVP_RESULT } from '../actions/actionTypes';
import objectAssign from 'object-assign';

const initialState = { query: '', result: null };

export default function rsvpReducers(state = initialState, action) {
  switch (action.type) {
    case UPDATE_RSVP_QUERY: {
      const newState = objectAssign({}, state, { query: action.query });
      return newState;
    }
    case UPDATE_RSVP_RESULT: {
      const newStateResults = objectAssign({}, state, { result: action.result });
      return newStateResults;
    }
    default:
      return state;
  }
}
