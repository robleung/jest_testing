function cesarCipher(str, shift) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    // console.log(str.charCodeAt(i));
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      str.charCodeAt(i) + (shift % 26) > 90
        ? arr.push(65 + (str.charCodeAt(i) + (shift % 26)) - 91)
        : arr.push(str.charCodeAt(i) + (shift % 26));
    } else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      str.charCodeAt(i) + (shift % 26) > 122
        ? arr.push(97 + (str.charCodeAt(i) + (shift % 26)) - 123)
        : arr.push(str.charCodeAt(i) + (shift % 26));
    } else {
      arr.push(str.charCodeAt(i));
    }
  }
  //   console.log(arr);
  let cipher = String.fromCharCode(...arr);
  //   console.log(cipher);
  return cipher;
}
export default cesarCipher;
// cesarCipher("Odin", 15);
