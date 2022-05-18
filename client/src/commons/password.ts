export const generatePassword = (length = 8) => {
  const getRandomCharFromString = (str: any) => str.charAt(Math.floor(Math.random() * str.length));
  const allowed = {
    uppers: 'QWERTYUIOPASDFGHJKLZXCVBNM',
    lowers: 'qwertyuiopasdfghjklzxcvbnm',
    numbers: '1234567890',
    symbols: '@#$%&*',
  };
  let pwd = '';
  pwd += getRandomCharFromString(allowed.uppers); // pwd will have at least one upper
  pwd += getRandomCharFromString(allowed.lowers); // pwd will have at least one lower
  pwd += getRandomCharFromString(allowed.numbers); // pwd will have at least one number
  pwd += getRandomCharFromString(allowed.symbols); // pwd will have at least one symbol
  let i = pwd.length;
  while (i < length) {
    pwd += getRandomCharFromString(Object.values(allowed).join(''));
    i = i + 1;
  } // fill the rest of the pwd with random characters
  return pwd;
};
