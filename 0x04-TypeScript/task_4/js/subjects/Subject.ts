/// <reference path="Teacher.ts" />

namespace Subjects {
  export class Subject {
    teacher: Subjects.Teacher;

    set setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
