/**
 * 数値のカンマ区切り
 * @param x
 */
export const formatCur = (x: string | number) => {
  const currencyFormat = new Intl.NumberFormat('ja');
  return currencyFormat.format(Number(x));
};
