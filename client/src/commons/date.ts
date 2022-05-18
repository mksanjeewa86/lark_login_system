import moment from 'moment-timezone';
import 'moment/locale/ja';
moment.locale('ja');
const TZ = 'Asia/Tokyo';
/**
 * 待機
 * @param ms
 */
export const today = () => {
  return moment()
    .tz(TZ)
    .format('YYYY-MM-DD');
};
export const timestamp = () => {
  return moment()
    .tz(TZ)
    .format('YYYY-MM-DDThh:mm');
};
