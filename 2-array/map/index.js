export default function numberMapToWord(collection) {
  // TODO 3: 在这里写实现代码
  const collectionB = ['a', 'b', 'c', 'd', 'e'];

  const result = collection.map(item => {
    return collectionB[item - 1];
  });
  return result;
}
