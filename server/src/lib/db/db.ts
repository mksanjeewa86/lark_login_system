import * as config from '../../config';
import * as mysql from 'promise-mysql';
import * as httpContext from 'express-http-context';
import * as fs from 'fs';

/**
 * データベース管理クラス
 */
export default class DB {
  /** インスタンスの削除 */
  public static revInstance() {
    const sessionId = httpContext.get('sessionId');
    delete this._instance[sessionId];
  }

  /** インスタンス */
  private static _instance: any = {};

  private con: any;

  /** プライベートコンストラクタ */
  private constructor() {}

  /** インスタンスの取得 */
  public static get instance(): DB {
    const sessionId = httpContext.get('sessionId');
    if (!sessionId) return new DB();
    if (!this._instance.hasOwnProperty(sessionId)) {
      this._instance[sessionId] = new DB();
    }
    // 生成済みのインスタンスを返す
    return this._instance[sessionId];
  }

  // クエリ実行
  public execQuery(sql: string, params?: any) {
    return new Promise(async (resolve, reject) => {
      try {
        await this.connection();
        const q: any = await this.readSql(sql, params);
        const data = await this.con.query(q.sql, q.params);
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  // データベース切断
  public async close() {
    return new Promise(async (resolve, reject) => {
      if (this.con) {
        if (this.con.connection.state === 'authenticated') {
          await this.con.end();
        }
        resolve({});
      }
    });
  }

  // トランザクション開始
  public async begin() {
    return new Promise(async (resolve, reject) => {
      await this.connection();
      await this.con.beginTransaction();
      resolve({});
    });
  }

  // ロールバック
  public async rollback() {
    return new Promise(async (resolve, reject) => {
      await this.con.rollback();
      resolve({});
    });
  }

  // コミット
  public async commit() {
    return new Promise(async (resolve, reject) => {
      await this.con.commit();
      resolve({});
    });
  }

  // データベース接続
  private async connection() {
    return new Promise(async (resolve, reject) => {
      try {
        let isConnection = true;
        if (this.con) {
          if (this.con.connection.state !== 'authenticated') isConnection = false;
        } else {
          isConnection = false;
        }
        if (!isConnection) {
          this.con = await mysql.createConnection({
            host: config.DB_HOST,
            user: config.DB_USER,
            password: config.DB_PASSWORD,
            database: config.DB_NAME,
            multipleStatements: true,
            charset: 'utf8mb4',
          });
        }
        resolve({});
      } catch (err) {
        reject(err);
      }
    });
  }

  // SQLファイルの読み込み
  private readSql(filename: string, param: any) {
    return new Promise(async (resolve, reject) => {
      let logSql = '';
      try {
        const path = `${config.SQL_PATH}${filename}.sql`; // SQLひな形ファイル読み込み
        let sql = fs.readFileSync(path, 'utf-8'); // 実行SQL
        logSql = sql; // ログ用SQL
        const newParams = Array(); // 実行用パラメータ

        for (const key in param) {
          // パラメータの存在チェック
          const regexpParam = new RegExp(`\\$${key}\\$`, `g`);

          // 一致するパラメータが無い場合、エラー
          if (sql.match(regexpParam) == null) {
            reject(`'$${key}$' not found in '${filename}.sql'.`);
          }

          // nullの場合
          if (param[key] == null) {
            logSql = logSql.replace(regexpParam, `NULL`);
          } else {
            // 配列のとき、IN句用に変換して挿入
            if (Array.isArray(param[key])) {
              for (const i in param[key]) {
                if (typeof param[key][i] === 'string') {
                  param[key][i] = `${param[key][i]}`;
                }
              }
              const paramList = param[key].join(',');
              logSql = logSql.replace(regexpParam, `(${paramList})`);
            }

            // 通常
            else {
              if (typeof param[key] === 'string') {
                param[key] = `"${param[key]}"`;
              }
              logSql = logSql.replace(regexpParam, `${param[key]}`);
            }
          }
        }
        // 未置換のパラメータがある行を削除
        const regexpRow = new RegExp(`.*\\$.*`, `g`);
        logSql = logSql.replace(regexpRow, ``);
        const rows = sql.match(regexpRow);
        if (rows != null) {
          rows.map((row: any) => {
            let match = false;
            for (const key in param) {
              if (row.indexOf(`$${key}$`) !== -1) {
                match = true;
                // プレースホルダを発見したら置換
                sql = sql.replace(`$${key}$`, `?`);
                if (typeof param[key] === 'string') {
                  param[key] = param[key].slice(1);
                  param[key] = param[key].slice(0, -1);
                  newParams.push(param[key]);
                } else {
                  newParams.push(param[key]);
                }
              }
            }
            if (!match) {
              sql = sql.replace(row, ``);
            }
          });
        }

        // 改行の削除とスペースの調整をして返却
        sql = sql.replace(/\r?\n/g, ` `).replace(/\s+/g, ` `);
        logSql = logSql.replace(/\r?\n/g, ` `).replace(/\s+/g, ` `);
        resolve({ sql: sql, params: newParams });
      } catch (err) {
        console.log(err);
        reject({ err: err, sql: logSql });
      }
    });
  }
}
