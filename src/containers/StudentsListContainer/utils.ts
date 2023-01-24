import { TStudentsList } from '../../store/studentsList/types';

function studentAdd({
  fullName,
  students,
  count,
  id,
  isEditStudent,
                        dateOfBirth,
                        performance
}: {
  fullName: string;
  students: TStudentsList[] | null;
  count: number;
  id: number;
  isEditStudent: boolean;
    dateOfBirth: string;
    performance: string;
}): TStudentsList[] {
  if (isEditStudent)
    if (students && isEditStudent) {
      const editedTodos = students.map((student) =>
        student.id === id
          ? {
              id: student.id,
              fullName,
              key: student.key,
              isEdit: false,
              dateOfBirth: dateOfBirth,
              performance: performance,
            }
          : student,
      );
      return editedTodos;
    }

  const student = {
    id: count,
    fullName,
    key: `${String(count + 1)}_key`,
    isEdit: false,
    dateOfBirth: dateOfBirth,
    performance: performance,
  };
  if (students) {
    return [...students, student];
  }
  return [student];
}

function studentBtn({
  isEdit,
  students,
  id,
}: {
  isEdit?: boolean;
  isActive?: boolean;
  students: TStudentsList[] | null;
  id: number;
}): TStudentsList[] | null {
  if (students) {
    return students.map((student) =>
      student.id === id
        ? {
            id: student.id,
            fullName: student.fullName,
            key: student.key,
            isEdit: isEdit ? !student.isEdit : student.isEdit,
            dateOfBirth: student.dateOfBirth,
            performance: student.performance,
          }
        : student,
    );
  }
  return null;
}

function studentDelete({
  students,
  id,
}: {
  students: TStudentsList[] | null | undefined;
  id: number;
}): TStudentsList[] | null {
  if (students) {
    return students.filter((student) => student.id !== id);
  }
  return null;
}

export { studentAdd, studentBtn, studentDelete };
