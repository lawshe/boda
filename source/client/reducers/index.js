import rsvpReducers from './rsvpReducers';
import rsvpSearchReducers from './rsvpSearchReducers';
import invitationReducers from './invitationReducers';
import venueMapReducers from './venueMapReducers';

const reducers = {
  rsvp : rsvpReducers,
  rsvpSearch : rsvpSearchReducers,
  newInvitation : invitationReducers,
  venueMap: venueMapReducers
};

export default reducers;
