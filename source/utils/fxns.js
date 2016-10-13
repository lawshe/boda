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

const ordinalSuffixOf = (i) => {
  const j = i % 10;
  const k = i % 100;

  if (j === 1 && k !== 11) {
    return `${i}st`;
  }
  if (j === 2 && k !== 12) {
    return `${i}nd`;
  }
  if (j === 3 && k !== 13) {
    return `${i}rd`;
  }
  return `${i}th`;
};

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

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
      rsvpReceivedMessage: 'We look forward to seeing you!'
    };

    if (rsvp) {
      rsvp.guests.forEach((guestObj) => {
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
      });

      rsvpResult.salutationNamesStr = prettyGroupNames(rsvpResult.salutationNames);
      rsvpResult.attendingNamesStr = prettyGroupNames(rsvpResult.attendingNames);

      // plus
      if (rsvp.plus.bringing > 0 && rsvpResult.attending > 0) {
        rsvpResult.attending = rsvpResult.attending + rsvp.plus.bringing;
        const guestWord = rsvp.plus.bringing > 1 ? 'guests' : 'guest';
        rsvpResult.plusMessage = `+ ${rsvp.plus.bringing} ${guestWord}`;
      }

      // extra message and name string
      if (rsvpResult.attending === 0) {
        rsvpResult.rsvpReceivedMessage = 'We will miss you!';
      } else if (rsvpResult.attending === 1) {
        rsvpResult.rsvpReceivedMessage = 'We look forward to seeing you!';
      }
    }

    return rsvpResult;
  },
  coupleInitials() {
    const coupleOneInitial = wedding.couple[0].name.first.charAt(0);
    const coupleTwoInitial = wedding.couple[1].name.first.charAt(0);
    return `${coupleOneInitial} & ${coupleTwoInitial}`;
  },
  weddingWordDate() {
    const weddingDate = new Date(wedding.date);
    const weddingDay = weddingDate.getDate();
    const weddingDaySuffix = ordinalSuffixOf(weddingDay);
    const weddingMonth = monthNames[weddingDate.getMonth()];
    const weddingYear = weddingDate.getFullYear();
    return `${weddingMonth} ${weddingDaySuffix}, ${weddingYear}`;
  }
};
