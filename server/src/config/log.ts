import * as config from '.';
import * as moment from 'moment-timezone';
import 'moment/locale/ja';
moment.locale('ja');
const TZ = config.TIME_ZONE;

// ログ出力
export const writeLog = (
  logger: any,
  level: string,
  url: string,
  user: any = {},
  body: any = {},
  message: any = {}
) => {
  const timestamp = moment()
    .tz(TZ)
    .format();
  let msg = '';
  if (level === 'line') {
    msg = message;
  } else if (typeof message === 'string') {
    msg = message;
  } else {
    msg = JSON.stringify(message);
  }
  const log = `time: ${timestamp}, url: ${url} user: ${JSON.stringify(user)}, body: ${JSON.stringify(
    body
  )}, message: ${msg}`;
  if (level === 'action') {
    logger.action.log('info', log);
  } else if (level === 'error') {
    logger.error.log('error', log);
  } else if (level === 'batch_info') {
    logger.batch.log('info', log);
  } else if (level === 'batch_err') {
    logger.batch.log('error', log);
  } else if (level === 'line') {
    logger.line.log('info', log);
  }
};
