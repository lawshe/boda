# boda
A wedding website to manage RSVPs and provide event information.

## Stack
*   [Express](https://expressjs.com/)
*   [React Hot Loader](https://github.com/gaearon/react-hot-loader)
*   [horizon.io](http://horizon.io/)
*   [Horizon React](https://github.com/flipace/horizon-react)
*   [PostCSS](https://github.com/postcss/postcss)
*   [React](https://facebook.github.io/react/)
*   [Redux](https://github.com/reactjs/redux)
*   [React Bootstrap](https://react-bootstrap.github.io/)
*   [RethinkDB](https://github.com/rethinkdb/horizon)
*   [webpack](https://github.com/webpack/webpack)


## Installation
``` bash
$ git clone https://github.com/lawshe/boda.git
$ cd boda
$ npm i
```

**Run RethinkDB**
``` bash
$ cd boda
$ rethinkdb
```

**Create configs**

Use /config/wedding.js.ex to create /config/wedding.js

Use /config/gifnoc.js.ex to create /config/gifnoc.js

Get [Google Maps JavaScript API key](https://developers.google.com/maps/documentation/javascript/get-api-key) and use /config/keys.js.ex to create /config/keys.js

**Start**
``` bash
$ cd boda
$ npm run build
$ npm start
```

## Data
### Event
Via config files

### Invitations
Via RethinkDB

#### Schema
```javascript
{
  "id": "",
  "guests": [
    {
      "email": "",
      "name": {
        "first": "",
        "last": ""
      },
      "rsvp": false
    }
  ],
  "plus": {
    "allowed": 0,
    "bringing": 0
  },
  "shortName": "",
  "returned": false  
}
```

## Routes
### Visitor
*   Home
*   Details
*   RSVP
*   RSVP search
 *   Search for RSVP via guest email
*   Registry
*   City Guide

### Admin
*   Home
*   Add Invitation
*   Edit Invitation
*   Invitations

## License
(MIT)

## Special Thanks
[Patrick Neschkudla](https://github.com/flipace) for creating [lovli.js](https://github.com/flipace/lovli.js)
