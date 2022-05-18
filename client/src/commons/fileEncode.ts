/**
 * アップロードファイルをbase64にエンコード
 * @param file
 */
export const fileEncode = (file: any) => {
  return new Promise((resolve, reject) => {
    try {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        resolve(e.target.result);
      };
      reader.readAsDataURL(file);
    } catch (err) {
      reject(err);
    }
  });
};
