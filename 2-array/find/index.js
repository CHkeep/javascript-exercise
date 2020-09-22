/* eslint-disable array-callback-return */
export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  const student = collection.find(item => {
    if (item.age > 10 && item.age < 20) return item;
  });
  return student.name;
}
