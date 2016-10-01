import update from 'react-addons-update';
import fxns from '../../utils/fxns';

import { SET_RSVP, UPDATE_PERSON_RSVP, UPDATE_PLUS } from '../actions/actionTypes';

const initialState = {};

export default function rsvpReducers(state = initialState, action) {
  switch (action.type) {
    case SET_RSVP: {
      return update(action.rsvp, {
        processed: { $set: fxns.rsvpProcessData(action.rsvp) }
      });
    }
    case UPDATE_PERSON_RSVP: {
      const guests = state.guests;
      const updatedPerson = update(guests[action.index], { rsvp: { $set: action.rsvp } });
      const updatedGuests = update(guests, {
        $splice: [[action.index, 1, updatedPerson]]
      });
      const updatedRsvp = update(state, { guests: { $set: updatedGuests } });

      const processed = fxns.rsvpProcessData(updatedRsvp);
      const updatedRsvpProcessed = update(updatedRsvp, { processed: { $set: processed } });

      return updatedRsvpProcessed;
    }
    case UPDATE_PLUS: {
      const plus = parseInt(action.plus, 10);
      const updatedPlus = update(state, { plus: { bringing: { $set: plus } } });

      const processed = fxns.rsvpProcessData(updatedPlus);
      const updatedPlusProcessed = update(updatedPlus, { processed: { $set: processed } });

      return updatedPlusProcessed;
    }
    default:
      return state;
  }
}
