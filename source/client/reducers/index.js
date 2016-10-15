import rsvpReducers from './rsvpReducers';
import rsvpSearchReducers from './rsvpSearchReducers';
import invitationReducers from './invitationReducers';
import venueMapReducers from './venueMapReducers';
import guideMapReducers from './guideMapReducers';
import adminReducers from './adminReducers';

const reducers = {
  rsvp : rsvpReducers,
  rsvpSearch : rsvpSearchReducers,
  newInvitation : invitationReducers,
  venueMap: venueMapReducers,
  guideMap: guideMapReducers,
  admin: adminReducers
};

export default reducers;
