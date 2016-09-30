import wedding from '../../config/wedding';

const prettyGroupNames = (people) => {
  let prettyNames = '';
  if (people.length === 1) {
    prettyNames = `${people[0]}`;
  } if (people.length === 2) {
    prettyNames = `${people[0]} and ${people[1]}`;
  } else {
    prettyNames = people.join(', ');
  }
  return prettyNames;
};

module.exports = {
  prettyGroupNames,
  rsvpProcessData(rsvp) {
    const rsvpResult = {
      attending: 0,
      attendingNames: [],
      attendingNamesStr: '',
      salutationNames: [],
      salutationNamesStr: '',
      toEmails: [],
      plusMessage: '',
      rsvpReceivedMessage: 'We look forward to seeing yall!'
    };

    if (rsvp) {
      rsvp.guests.forEach((guest) => {
        let guestObj;

        if (typeof guest === 'string') {
          // post request to notify via email will have a string
          guestObj = JSON.parse(guest);
        } else {
          guestObj = guest;
        }

        if (guestObj.rsvp === true) {
          rsvpResult.attending++;

          // guest name - first and last name
          let fullName = '';
          if (guestObj.name.first) {
            fullName += guestObj.name.first;
          }
          if (guestObj.name.first && guestObj.name.last) {
            fullName += ' ';
          }
          if (guestObj.name.last) {
            fullName += guestObj.name.last;
          }
          rsvpResult.attendingNames.push(fullName);
        }

        // email salutation - just first name for all people with email, even if not attending
        if (guestObj.email) {
          if (guestObj.name.first) {
            rsvpResult.salutationNames.push(guestObj.name.first);
          }
          rsvpResult.toEmails.push(guestObj.email);
        }

        rsvpResult.salutationNamesStr = prettyGroupNames(rsvpResult.salutationNames);
        rsvpResult.attendingNamesStr = prettyGroupNames(rsvpResult.attendingNames);

        // plus
        let plus = 0;
        if (rsvp.returned) {
          plus = rsvp.plus.bringing;
        } else {
          if (rsvp.plus && typeof rsvp.plus === 'string') {
            // post request will pass as string
            plus = parseInt(rsvp.plus, 10);
          } else if (rsvp.plus && typeof rsvp.plus !== 'string') {
            plus = rsvp.plus;
          }
        }

        if (plus > 0 && rsvpResult.attending > 0) {
          rsvpResult.attending = rsvpResult.attending + plus;
          const guestWord = plus > 1 ? 'guests' : 'guest';
          rsvpResult.plusMessage = `+ ${plus} ${guestWord}`;
        }

        // extra message and name string
        if (rsvpResult.attending === 0) {
          rsvpResult.rsvpReceivedMessage = 'We will miss yall!';
        } else if (rsvpResult.attending === 1) {
          rsvpResult.rsvpReceivedMessage = 'We look forward to seeing you!';
        }
      });
    }

    return rsvpResult;
  },
  coupleInitials() {
    const coupleOneInitial = wedding.couple[0].name.first.charAt(0);
    const coupleTwoInitial = wedding.couple[1].name.first.charAt(0);
    return `${coupleOneInitial} & ${coupleTwoInitial}`;
  }
};
