import path from 'path';
import express from 'express';
import horizon from '@horizon/server';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import devProps from '../../config/webpack/devProps';
import config from '../../config/page';
import wedding from '../../config/wedding';
import variables from '../../config/variables';
import apiKeys from '../../config/keys';
import fxns from '../utils/fxns';

const app = express();

const googleMapsApi = apiKeys.googleMaps;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/static', express.static(path.join(process.cwd(), '.build')));

/**
 * @TODO move the html out of the server dir
 */
const host = process.env.NODE_ENV === 'production' ? '' : `http://127.0.0.1:${devProps.webpackPort}`;
const bundle = `${host}/static/client.bundle.js`;
const styles = `${host}/static/styles.css`;
const images = `${host}/static/images/`;

const coupleOne = wedding.couple[0].name.first;
const coupleTwo = wedding.couple[1].name.first;

const couple = `${coupleOne} & ${coupleTwo}`;
const coupleInitials = fxns.coupleInitials();
const weddingDate = new Date(wedding.date);
const weddingDay = weddingDate.getDate();
const weddingMonth = parseInt(weddingDate.getMonth() + 1, 10);
const weddingYear = weddingDate.getFullYear().toString().slice(-2);
const prettyWeddingDate = `${weddingMonth}·${weddingDay}·${weddingYear}`;

const transporter = nodemailer.createTransport(`smtps://${wedding.gmail.user}%40gmail.com:${wedding.gmail.pw}@smtp.gmail.com`);
const mailOptions = {
  from: `${couple} <${wedding.gmail.user}@gmail.com>`,
  subject: ` RSVP Received | ${coupleInitials} | ${prettyWeddingDate}`
};

app.post('/notify', (req) => {
  if (req.body && req.body.id) {
    // signature
    const attendingMsg = req.body.attendingNamesStr
      ? `Attending:<br/>${req.body.attendingNamesStr}`
      : '';

    const plusMsg = req.body.plusMessage
      ? `<br/>${req.body.plusMessage}`
      : '';

    const signature = `Love,<br/>${couple}`;

    const style = `color:${variables.black};font-family:Garamond,Palatino,serif; font-size: 12pt;`;
    // the body of the email
    const body = `
      <div style="${style}">
        <p>Hello ${req.body.salutationNamesStr},</p>
        <p>${req.body.rsvpReceivedMessage}</p>
        <p>${attendingMsg}${plusMsg}</p>
        <p>${signature}</p>
      </div>`;

    const sendTo = process.env.NODE_ENV !== 'production' ? wedding.email : req.body.toEmails;

    const mailOptionsCloned = Object.assign(
      { to: sendTo, html: body },
      mailOptions
    );

    transporter.sendMail(mailOptionsCloned, function(error, info){
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: ' + info.response);
    });
  }
});

app.use('/', (req, res) => {
  res.status(200).send(`<!doctype html>
    <html>
      <head>
        <title>${couple}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" type="text/css" href="${styles}" />
        <link rel="icon" href="${images}favicon.ico">
        <script type="text/javascript"
          src="https://maps.googleapis.com/maps/api/js?key=${googleMapsApi}&libraries=geometry,places,visualization">
        </script>
      </head>
      <body>
        <div id='root' style='min-height:100vh;height:100%;'></div>
        <script src="${bundle}"></script>
      </body>
    </html>`);
});

const run = () => {
  const port = process.env.PORT || config.port;

  const httpServer = app.listen(port, (err) => {
    if (err) {
      console.log(err); // eslint-disable-line
      return;
    }

    console.log(`Express listening at http://localhost:${port}`); // eslint-disable-line
  });

  // @TODO make this configurable
  const horizonServer = horizon(httpServer, {
    auto_create_collection: true,
    auto_create_index: true,
    project_name: 'boda',
    permissions: false, // waiting for additions to permission system atm
    auth: {
      allow_anonymous: true,
      allow_unauthenticated: true,
      token_secret: config.token_secret
    }
  });
};

export default {
  run
};
