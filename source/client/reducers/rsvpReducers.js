import addons from 'react-addons';
import update from 'react-addons-update';

import { SET_RSVP, UPDATE_PERSON_RSVP, UPDATE_PLUS } from '../actions/actionTypes';

const initialState = {};

export default function rsvpReducers(state = initialState, action) {
  switch (action.type) {
    case SET_RSVP: {
      return Object.assign({}, state, action.rsvp);
    }
    case UPDATE_PERSON_RSVP: {
      const guests = state.guests;
      const updatedPerson = update(guests[action.index], { rsvp: { $set: action.rsvp } });
      const updatedGuests = update(guests, {
        $splice: [[action.index, 1, updatedPerson]]
      });
      const updatedRsvp = update(state, { guests: { $set: updatedGuests } });

      return updatedRsvp;
    }
    case UPDATE_PLUS: {
      const plus = parseInt(action.plus, 10);

      return update(state, { plus: { bringing: { $set: plus } } });
    }
    default:
      return state;
  }
}
