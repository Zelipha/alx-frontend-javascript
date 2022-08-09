/// <reference path="Teacher.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      const xp = this.teacher.experienceTeachingReact;
      return xp > 0 ? `Available Teacher: ${this.teacher.firstName}` : "No available teacher";
    }
  }
}
