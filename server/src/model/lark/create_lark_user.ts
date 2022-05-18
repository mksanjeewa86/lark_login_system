import axios from 'axios';
import DB from '../../lib/db/db';
import * as model from '../index';

export const createLarkUser = (body: any) => {
  return new Promise(async (resolve, reject) => {
    const db = DB.instance;
    try {
      await db.begin();
      const accessToken: any = await model.larkAccessToken();
      const reqConf = {
        conf: {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            charset: 'utf-8',
          },
        },
        data: {
          grant_type: 'authorization_code',
          code: body.code,
        },
      };
      await axios
        .post(`https://open.larksuite.com/open-apis/authen/v1/access_token`, reqConf.data, reqConf.conf)
        .then(async response => {
          const data: any = response.data.data;
          const readLark: any = await db.execQuery('lark/read', { email: response.data.data.email });
          if (readLark.length === 0) {
            await db.execQuery('lark/create', {
              email: data.email,
              en_name: data.en_name,
              name: data.name,
              user_id: data.user_id,
              open_id: data.open_id,
              union_id: data.union_id,
              avatar_url: data.avatar_url,
            });
          } else {
            await db.execQuery('lark/update', {
              email: data.email,
              en_name: data.en_name,
              name: data.name,
              user_id: data.user_id,
              open_id: data.open_id,
              union_id: data.union_id,
              avatar_url: data.avatar_url,
            });
          }
          await db.commit();
          resolve({
            error: false,
            errors: [],
            message: '',
            json: {},
          });
        })
        .catch(async error => {
          await db.rollback();
          console.log(error);
        });
    } catch (err) {
      await db.rollback();
      console.log(err);
      resolve({
        error: true,
        errors: [],
        message: 'システムエラーが発生しました。',
        json: {},
      });
    } finally {
      await db.close();
    }
  });
};
