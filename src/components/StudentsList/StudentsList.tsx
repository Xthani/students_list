import styles from './StudentsList.module.scss';
import { TStudentsList } from '../../store/studentsList/types';
import cn from 'classnames';

function StudentsList({
  count,
  fullName,
  handleChangeFullName,
  handleClickAdd,
  students,
  handleClickBtn,
  isEditStudent,
  handleChangeSelect,
  handleChangeDateOfBirth,
  dateOfBirth,
}: {
  count: number;
  fullName: string;
  handleChangeFullName: (fullName: string) => void;
  handleClickAdd: () => void;
  students: TStudentsList[] | null;
  handleClickBtn: ({
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
  }) => void;
  isEditStudent: boolean;
  handleChangeSelect: (performance: string) => void;
  handleChangeDateOfBirth: (dateOfBirth: string) => void;
  dateOfBirth: string;
}) {
  return (
    <div className={styles.container}>
      <h1>Список Студентов {count}</h1>
      <div className={styles.container_form}>
        <input
          type="fullName"
          placeholder="ФИО"
          value={fullName}
          onChange={(e) => handleChangeFullName(e.target.value)}
        />
        <input
          type="date"
          value={dateOfBirth}
          onChange={(e) => handleChangeDateOfBirth(e.target.value)}
          className={styles.container_form_cursorText}
        />
        <select
          onChange={(e) => handleChangeSelect(e.target.value)}
          name="Успеваемость"
          id="select_id"
          className={styles.container_form_cursor}
        >
          <option value="неуд">неуд</option>
          <option value="уд">уд</option>
          <option value="хор">хор</option>
          <option value="отл">отл</option>
        </select>
        <button
          className={cn(styles.container_form_addBtn, {
            [styles.container_form_addBtnEdit]: isEditStudent,
          })}
          onClick={handleClickAdd}
        >
          {isEditStudent ? 'Сохранить' : 'Добавить'}
        </button>
      </div>
      <table>
        <thead>
          {students?.length ? (
            <tr>
              <th>ФИО</th>
              <th>Дата рождения</th>
              <th>Успеваемость</th>
              <th>Редактировать</th>
              <th>Удалить</th>
            </tr>
          ) : null}
        </thead>
        <tbody>
          {students &&
            students.map((st) => (
              <tr key={`${st.key}_li`}>
                <td>{st.fullName}</td>
                <td>{st.dateOfBirth}</td>
                <td>{st.performance}</td>
                <td>
                  <button
                    className={cn(styles.container_editBtn, {
                      [styles.container_editBtnActive]: st.isEdit,
                    })}
                    disabled={st.isEdit}
                    key={`${st.key}_edit`}
                    onClick={() =>
                      handleClickBtn({
                        isEdit: true,
                        id: st.id,
                        fullName: st.fullName,
                        dateOfBirth: st.dateOfBirth,
                        performance: st.performance,
                      })
                    }
                  >
                    •••
                  </button>
                </td>
                <td>
                  <button
                    className={cn(styles.container_editBtn, {
                      [styles.container_editBtnActive]: st.isEdit,
                    })}
                    disabled={st.isEdit}
                    key={`${st.key}_delete`}
                    onClick={() =>
                      handleClickBtn({ isDelete: true, id: st.id })
                    }
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentsList;
