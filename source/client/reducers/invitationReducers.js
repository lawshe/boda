import update from 'react-addons-update';

import {
  UPDATE_GUEST_NAME,
  UPDATE_GUEST_EMAIL,
  ADD_GUEST,
  UPDATE_SHORT_NAME,
  UPDATE_PLUS_ALLOWED
} from '../actions/actionTypes';

const initialState = {
  shortName: '',
  plus: {
    allowed: 0,
    bringing: 0
  },
  guests: [
    {
      name: {
        first: '',
        last: ''
      },
      email: '',
      rsvp: false
    }
  ]
};

export default function invitationReducers(state = initialState, action) {
  switch (action.type) {
    case UPDATE_GUEST_NAME: {
      const guests = state.guests;

      const updatedPerson = guests[action.guestIndex];
      updatedPerson.name[action.nameProperty] = action.nameValue;

      const updatedGuests = update(guests, {
        $splice: [[action.guestIndex, 1, updatedPerson]]
      });

      const updatedRsvp = update(state, { guests: { $set: updatedGuests } });

      return updatedRsvp;
    }
    case UPDATE_GUEST_EMAIL: {
      const guests = state.guests;
      const updatedPerson = update(guests[action.guestIndex], { email: { $set: action.email } });
      const updatedGuests = update(guests, {
        $splice: [[action.guestIndex, 1, updatedPerson]]
      });
      const updatedRsvp = update(state, { guests: { $set: updatedGuests } });

      return updatedRsvp;
    }
    case ADD_GUEST: {
      const guests = state.guests;
      const updatedGuests = update(guests, { $push : [
        {
          name: {
            first: '',
            last: ''
          },
          email: '',
          rsvp: false
        }] });

      const newGuestState = update(state, { guests: { $set: updatedGuests } });

      return newGuestState;
    }
    case UPDATE_SHORT_NAME: {
      return update(state, { shortName: { $set: action.shortName } });
    }
    case UPDATE_PLUS_ALLOWED: {
      return update(state, { plus: { allowed: { $set: action.allowed } } });
    }
    default:
      return state;
  }
}
