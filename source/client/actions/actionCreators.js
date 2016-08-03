import { SET_RSVP, UPDATE_PERSON_RSVP, UPDATE_PLUS, UPDATE_RSVP_QUERY, UPDATE_RSVP_RESULT } from '../actions/actionTypes';

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
  }
};
