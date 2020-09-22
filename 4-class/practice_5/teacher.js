import Person from './person';
// TODO 20: 在这里写实现代码
export default class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    return typeof this.klass !== 'undefined'
      ? `${super.introduce()} I am a Teacher. I teach Class ${this.klass}.`
      : `${super.introduce()} I am a Teacher. I teach No Class.`;
  }
}
