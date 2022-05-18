import axios from 'axios';

export const larkAccessToken = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const reqConf = {
        "conf": {
          "headers": {
            "Content-Type": "application/json",
          },
        },
        "data": {
          "app_id": '', // lark app id
          "app_secret": '', // lark app secret
        }
      };
      await axios.post('https://open.larksuite.com/open-apis/auth/v3/tenant_access_token/internal/', reqConf.data, reqConf.conf)
        .then(function (response) {
          resolve(response.data.tenant_access_token);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
      resolve({
        error: true,
        errors: [],
        message: 'システムエラーが発生しました。',
        json: {},
      });
    }
  });
};
