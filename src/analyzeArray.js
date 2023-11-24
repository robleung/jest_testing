function analyzeArray(arr) {
  let obj = {};
  obj.max = Math.max(...arr);
  obj.min = Math.min(...arr);
  obj.length = arr.length;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  obj.average = sum / parseFloat(arr.length);

  return obj;
}
export default analyzeArray;
