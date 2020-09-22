export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  const keys = [];
  for (const value of Object.values(source)) {
    keys.push(value);
  }
  return eval(keys.join('+'));
}
