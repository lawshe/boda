import {
  SET_RSVP,
  UPDATE_PERSON_RSVP,
  UPDATE_PLUS,
  UPDATE_RSVP_QUERY,
  UPDATE_RSVP_RESULT,
  ADD_INVITATION,
  UPDATE_GUEST_NAME,
  UPDATE_GUEST_EMAIL,
  ADD_GUEST,
  UPDATE_SHORT_NAME,
  UPDATE_PLUS_ALLOWED
} from '../actions/actionTypes';

module.exports = {
  setRsvp(rsvp) {
    return {
      type: SET_RSVP,
      rsvp
    };
  },
  updateRsvp(rsvpBool, index) {
    return {
      type: UPDATE_PERSON_RSVP,
      rsvp: rsvpBool,
      index
    };
  },
  updatePlus(plus) {
    return {
      type: UPDATE_PLUS,
      plus
    };
  },
  updateRsvpQuery(query) {
    return {
      type: UPDATE_RSVP_QUERY,
      query
    };
  },
  updateRsvpResult(result) {
    return {
      type: UPDATE_RSVP_RESULT,
      result
    };
  },
  addInvitation(invitation) {
    return {
      type: ADD_INVITATION,
      invitation
    };
  },
  updateGuestName(nameProperty, nameValue, guestIndex) {
    return {
      type: UPDATE_GUEST_NAME,
      nameProperty,
      nameValue,
      guestIndex
    };
  },
  updateGuestEmail(email, guestIndex) {
    return {
      type: UPDATE_GUEST_EMAIL,
      email,
      guestIndex
    };
  },
  addGuest() {
    return {
      type: ADD_GUEST
    };
  },
  updateShortName(shortName) {
    return {
      type: UPDATE_SHORT_NAME,
      shortName
    };
  },
  updatePlusAllowed(allowed) {
    return {
      type: UPDATE_PLUS_ALLOWED,
      allowed
    };
  }
};
