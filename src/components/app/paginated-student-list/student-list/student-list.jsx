export function StudentList({ students }) {
  return (
    <ul>
      {students.map((student) => {
        return (
          <li key={student.id}>
            {student.firstName} {student.lastName}
          </li>
        );
      })}
    </ul>
  );
}
