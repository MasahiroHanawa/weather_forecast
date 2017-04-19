
export default function randomToken () {
  const num = 10;
  let str = 'abcdefghijklmnopqrstuvwxyz'
    + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    + '0123456789';
  str = str.split('');
  let randStr = '';
  for(let i = 0; i < num; i++) {
    randStr += str[Math.floor(Math.random() * str.length)];
  }
  return randStr;
};