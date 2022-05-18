/**
 * 待機
 * @param ms
 */
export const wait = (ms: number) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({});
    }, ms);
  });
};
