module.exports = {
  favicon: 'full url',
  adminSecret: 'this is a pw',
  accommodations: {
    name: 'Hyatt Regency Austin',
    location: '',
    address: {
      street: '208 Barton Springs Rd',
      city: 'Austin',
      state: 'Texas',
      zip: '78704'
    }
  },
  api: {
    googleAnalytics: 'UA-trackingId'
  },
  ceremony: {
    time: '4:30 pm'
  },
  city: {
    center: {
      lat: '30.2672',
      lng: '-97.7431'
    }
  },
  date: '01/01/2019',
  email: '',
  guide: {
    music: {
      list: [
        {
          name: 'Cheer Up Charlies',
          address: {
            street: '900 Red River St',
            city: 'Austin',
            state: 'TX',
            zip: '78701'
          },
          coordinates: {
            lat: '30.2696133',
            lng: '-97.7385746'
          },
          website: 'http://cheerupcharlies.com/'
        }
      ]
    },
    bar: {
      list : [
        {
          name: 'Yellow Jacket Social Club',
          address: {
            street: '1704 E 5th St',
            city: 'Austin',
            state: 'TX',
            zip: '78702'
          },
          coordinates: {
            lat: '30.2617913',
            lng: '-97.7269408'
          },
          website: 'http://www.yellowjacketsocialclub.com/',
          tip: '$2 Coors'
        }
      ]
    },
    food: {
      list: [
        {
          name: 'Ramen Tatsu-Ya',
          address: {
            street: '8557 Research Blvd #126',
            city: 'Austin',
            state: 'TX',
            zip: '78758'
          },
          coordinates: {
            lat: '30.361154',
            lng: '-97.7173387'
          },
          website: 'http://ramen-tatsuya.com/'
        }
      ]
    },
    fun: {
      list: [
        {
          name: 'Pinballz',
          address: {
            street: '8940 Research Blvd',
            city: 'Austin',
            state: 'TX',
            zip: '78758'
          },
          coordinates: {
            lat: '30.36999',
            lng: '-97.721556'
          },
          website: 'http://www.pinballzarcade.com/'
        }
      ]
    },
    shops: {
      list: [
        {
          name: 'Room Service',
          description: '...',
          address: {
            street: '117 N Loop Blvd E',
            city: 'Austin',
            state: 'TX',
            zip: '78751'
          },
          coordinates: {
            lat: '30.3175526',
            lng: '-97.7217232'
          },
          website: 'http://roomservicevintage.com/'
        }
      ]
    },
    transportation: {
      rideshare:{
        how: {
          name: 'Fare',
          website: 'http://www.ridefare.com/'
        }
      },
      bus: {
        how: {
          name: 'Capital Metro',
          website: 'http://www.capmetro.org/'
        }
      },
      taxi: {
        how: {
          name: 'Yellow Cab',
          website: 'http://www.yellowcabaustin.com/'
        }
      }
    }
  },
  venue: {
    name: 'The Driskill',
    address: {
      street: '604 Brazos St',
      city: 'Austin',
      state: 'Texas',
      zip: '78701'
    },
    coordinates: {
      lat: '30.268162',
      lng: '-97.7417'
    },
    directions: [
      'Take the overpass..'
    ]
  },
  couple: [
    {
      name: {
        first: 'Lisa',
        last: 'Johnson'
      }
    },
    {
      name: {
        first: 'Michael',
        last: 'Jones'
      }
    }
  ],
  registry: {
    messageToGuests: '',
    where: [
      {
        name: 'Amazon',
        link: 'https://www.amazon.com/wedding/home'
      }
    ],
    honeymoon: [
      {
        title: 'Dine Out',
        description: 'Dinner for 2',
        price: '50',
        remaining: 4
        payPal: 'this is the value for the embedded button that paypal provides'
      },
    ]
  },
  rsvp: {
    date: '12/01/16'
  },
  timeline: [
    {
      time: {
        start: '4:30 PM'
      },
      eventName: 'Ceremony'
    },
    {
      time: {
        start: '6:00 PM'
      },
      eventName: 'Dinner'
    }
  ],
  honeymoon: {
    city: 'Omaha',
    country: 'USA'
  },
  attire: {
    dressCode: 'Semiformal',
    message: [
      'Ceremony will be outside, weather permitting.'
    ]
  }
};
