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


## Data
Via config file, /config/wedding.js, and RethinkDB.

## Routes
### Visitor
*   Home
*   About
*   Details
*   RSVP
*   RSVP search
 *   Search for RSVP via guest email
*   Registry

### Admin
*   Home
*   Add Invitation (coming soon)
*   Invitations
 *   Realtime updates

## To Do
*   Add loading template
*   RSVP
     * Only show plus option if someone invited is attending
     * After submitting, send email confirmation to guests, as well as the couple
     * Remove client library querying, move to server
*   RSVP Search
     * Email validation
     * Remove client library querying, move to server
*   Restrict App Access
 *   Visitor Site
     * Limit access to entire site to invitees only.
        * Possibly use a simple question to enter site. For ex, "In what city will the event happen?"
     * Updates only via RSVP page  
     * Limit data published
 *   Admin Site
     * Add user auth
*   CSV Export
*   Add Invitation Page

## License
(MIT)

## Special Thanks
Thanks to [Patrick Neschkudla](https://github.com/flipace) for creating the boilplate project [lovli.js](https://github.com/flipace/lovli.js)!
