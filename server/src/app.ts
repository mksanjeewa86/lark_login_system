import * as express from 'express';
import * as compression from 'compression';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as httpContext from 'express-http-context';
import * as helmet from 'helmet';
import * as model from './model';

export const app = express();
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.urlencoded({ limit: '20mb', extended: true }));
app.use(express.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));
app.use(bodyParser.json({ limit: '20mb' }));
app.use(httpContext.middleware);

app.get('*', (req, res, next) => {
  if ('body' in req.query) {
    next();
  } else {
    res.status(400).json();
  }
});
app.put('*', (req, res, next) => {
  if ('body' in req) {
    next();
  } else {
    res.status(400).json();
  }
});
app.patch('*', (req, res, next) => {
  if ('body' in req) {
    next();
  } else {
    res.status(400).json();
  }
});
app.post('*', (req, res, next) => {
  if ('body' in req) {
    next();
  } else {
    res.status(400).json();
  }
});

// OPTIONは200
app.options('*', (req, res) => {
  res.sendStatus(200);
});

app.route(`/lark/callback/`).post(async (req: any, res: any) => {
  if (req.body.type === 'url_verification') {
    res.json({ challenge: req.body.challenge });
  } else {
    await model.callback(req.body);
  }
});

app.route(`/lark_login`).post(async (req: any, res: any) => {
  const json = await model.createLarkUser({ code: req.body.code });
  res.json(json);
});
