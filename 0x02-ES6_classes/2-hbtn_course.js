export default class HolbertonCourse {
  constructor(name = '', length = 0, students = []) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(currentStudents) {
    if (typeof currentStudents === 'object') {
      for (const student in currentStudents) {
        if (typeof student !== 'string') {
          throw new TypeError('Students must be an array of strings');
        }
      }
    } else {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = currentStudents;
  }
}
