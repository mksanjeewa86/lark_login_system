export const unloaded = (e: any) => {
  const confirmMessage = '解答内容が消えてしまいますがよろしいですか？';
  e.returnValue = confirmMessage;
  return confirmMessage;
};
