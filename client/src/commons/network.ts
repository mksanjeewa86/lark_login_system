import * as config from '../config';

/**
 * API接続
 * @param url
 * @param method
 * @param body
 */
export const api = (url: string, method: string, body: object) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Header生成
      let headers: any = '';
      headers = {
        'Content-Type': 'application/json',
      };

      const options: object = {
        method: method,
        headers: headers,
        mode: 'cors',
      };

      let requrl = url;
      if (method !== `GET` && method !== `DELETE`) {
        options[`body`] = JSON.stringify(body);
      } else if (method === `GET` || method === `DELETE`) {
        let reqBody = {};
        if (Object.keys(body).length) reqBody = body;
        requrl = `${url}?body=${encodeURIComponent(JSON.stringify(reqBody))}`;
      }
      // レスポンス取得
      const res = await fetch(`http://localhost:4001${requrl}`, options);
      // json生成
      const json = await res.json();
      resolve(json);
    } catch (err) {
      // console.log(err);
      reject(err);
    }
  });
};

export const createUrl = (url: string, body: object) => {
  let reqBody = {};
  if (Object.keys(body).length) reqBody = body;
  const requrl = `${url}?body=${encodeURIComponent(JSON.stringify(reqBody))}`;
  return `${config.API_ORIGIN}${config.API_VERSION}${requrl}`;
};
