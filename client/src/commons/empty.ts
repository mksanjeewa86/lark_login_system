/**
 * 空判定
 * @param str
 */
export const empty = (str: string | number | null | any[]) => {
  if (str === '') return true;
  if (str === null) return true;
  if (str === undefined) return true;
  return false;
};
