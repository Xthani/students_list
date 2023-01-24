export type TStudentsListState = {
  students: TStudentsList[] | null;
  count: number | null;
};

export type TStudentsList = {
  id: number;
  fullName: string;
  key: string;
  dateOfBirth: string;
  performance: string;
  isEdit: boolean;
};
