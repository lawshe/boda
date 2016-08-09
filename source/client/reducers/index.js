import rsvpReducers from './rsvpReducers';
import rsvpSearchReducers from './rsvpSearchReducers';
import invitationReducers from './invitationReducers';

const reducers = {
  rsvp : rsvpReducers,
  rsvpSearch : rsvpSearchReducers,
  newInvitation : invitationReducers
};

export default reducers;
