import path from 'path';
import express from 'express';
import horizon from '@horizon/server';
import devProps from '../../config/webpack/devProps';
import config from '../../config/page';
import weddingConfig from '../../config/wedding';
import apiKeys from '../../config/keys';

const app = express();

const googleMapsApi = apiKeys.googleMaps;

app.use('/static', express.static(path.join(process.cwd(), '.build')));

/**
 * @TODO move the html out of the server dir
 */
const host = process.env.NODE_ENV === 'production' ? '' : `http://127.0.0.1:${devProps.webpackPort}`;
const bundle = `${host}/static/client.bundle.js`;
const styles = `${host}/static/styles.css`;
const images = `${host}/static/images/`;

const htmlTitle = `${weddingConfig.couple[0].name.first} & ${weddingConfig.couple[1].name.first}`;

app.use('/', (req, res) => {
  res.status(200).send(`<!doctype html>
    <html>
      <head>
        <title>${htmlTitle}</title>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" type="text/css" href="${styles}" />
        <link rel="icon" href="${images}/favicon.ico">
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
