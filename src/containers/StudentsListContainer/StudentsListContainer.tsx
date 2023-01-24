import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { updateStudentsList } from '../../store/studentsList/slice';
import { selectStudents } from '../../store/studentsList/selectors';
import StudentsList from '../../components/StudentsList/StudentsList';
import { studentAdd, studentDelete, studentBtn } from './utils';

function StudentsListContainer() {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState(0);
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [performance, setPerformance] = useState('неуд');
  const [id, setId] = useState(0);
  const [isEditStudent, setIsEditStudent] = useState(false);
  const students = useAppSelector(selectStudents);

  useEffect(() => {
    setCount(students ? students.length : 0);
  }, [students]);

  const handleChangeFullName = useCallback((fullName: string) => {
    setFullName(fullName);
  }, []);

  const handleChangeDateOfBirth = useCallback((dateOfBirth: string) => {
    setDateOfBirth(dateOfBirth);
  }, []);

  const handleChangeSelect = useCallback((performance: string) => {
    setPerformance(performance);
  }, []);

  const handleClickAdd = useCallback(() => {
    if (fullName && dateOfBirth && performance) {
      dispatch(
        updateStudentsList(
          studentAdd({
            fullName,
            students,
            count,
            id,
            isEditStudent,
            dateOfBirth,
            performance,
          }),
        ),
      );
      setFullName('');
      setDateOfBirth('');
      setIsEditStudent(false);
    }
  }, [
    count,
    fullName,
    students,
    dispatch,
    isEditStudent,
    id,
    dateOfBirth,
    performance,
  ]);

  const handleClickBtn = useCallback(
    ({
      isEdit,
      isDelete,
      id,
      fullName,
      dateOfBirth,
      performance,
    }: {
      isEdit?: boolean;
      isDelete?: boolean;
      id: number;
      fullName?: string;
      dateOfBirth?: string;
      performance?: string;
    }) => {
      if (isDelete) {
        dispatch(updateStudentsList(studentDelete({ students, id })));
      } else {
        dispatch(
          updateStudentsList(
            studentBtn({
              isEdit,
              students,
              id,
            }),
          ),
        );
      }
      if (isEdit && fullName && dateOfBirth && performance) {
        setIsEditStudent(true);
        setFullName(fullName);
        setDateOfBirth(dateOfBirth);
        setPerformance(performance);
      }
      setId(id);
    },
    [students, dispatch],
  );

  return (
    <StudentsList
      count={count}
      fullName={fullName}
      handleChangeFullName={handleChangeFullName}
      handleClickAdd={handleClickAdd}
      students={students}
      handleClickBtn={handleClickBtn}
      isEditStudent={isEditStudent}
      handleChangeSelect={handleChangeSelect}
      handleChangeDateOfBirth={handleChangeDateOfBirth}
      dateOfBirth={dateOfBirth}
    />
  );
}

export default StudentsListContainer;
