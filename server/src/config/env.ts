// 実行環境
export const EXEC_ENV = process.env.EXEC_ENV || '';
export const ORIGIN = process.env.ORIGIN ? process.env.ORIGIN : '';
export const EXAM_ORIGIN = process.env.EXAM_ORIGIN ? process.env.EXAM_ORIGIN : '';

// API情報
export const API_VERSION = process.env.API_VERSION || '';
export const TIME_ZONE = process.env.TIME_ZONE || '';
export const TIME_LIMIT = process.env.TIME_LIMIT ? process.env.TIME_LIMIT : '';

// JWT情報
export const JWT_SECRET = process.env.JWT_SECRET || '';

// S3情報
export const S3_ACCESS_KEY_ID = process.env.S3_ACCESS_KEY_ID || '';
export const S3_SECRET_ACCESS_KEY = process.env.S3_SECRET_ACCESS_KEY || '';
export const S3_REGION_NAME = process.env.S3_REGION_NAME || '';
export const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME || '';

// 可逆暗号化用パスフレーズ
export const PASSPHRASE = process.env.PASSPHRASE || '';

// データベース情報
export const DB_HOST = process.env.DB_HOST || '';
export const DB_PORT = process.env.DB_PORT || '';
export const DB_NAME = process.env.DB_NAME || '';
export const DB_USER = process.env.DB_USER || '';
export const DB_PASSWORD = process.env.DB_PASSWORD || '';
export const SQL_PATH = process.env.SQL_PATH || '';

// メール送信情報
export const MAIL_HOST_NAME = process.env.MAIL_HOST_NAME || '';
export const MAIL_USER_NAME = process.env.MAIL_USER_NAME || '';
export const MAIL_PASSWORD = process.env.MAIL_PASSWORD || '';
export const MAIL_PORT_NUMBER = process.env.MAIL_PORT_NUMBER || '';
export const MAIL_ADDRESS_FROM = process.env.MAIL_ADDRESS_FROM || '';

// インポート
export const IMPORT_TMP_PATH = process.env.IMPORT_TMP_PATH || '';

// 受験バージョン
export const EXAM_YEAR = process.env.EXAM_YEAR || '';

// LOG出力パス
export const LOGS_PATH = process.env.LOGS_PATH || '';

// LINE
export const ACCESS_TOKEN = process.env.ACCESS_TOKEN || '';
export const BOT_BASIC_ID = process.env.BOT_BASIC_ID || '';
export const CHANNEL_ID = process.env.CHANNEL_ID || '';
export const CHANNEL_SECRET = process.env.CHANNEL_SECRET || '';
export const USER_ID = process.env.USER_ID || '';
export const LOGIN_URL = process.env.LOGIN_URL || '';

export const LINE_CLIENT = {
  channelAccessToken: ACCESS_TOKEN,
  channelSecret: CHANNEL_SECRET,
};
