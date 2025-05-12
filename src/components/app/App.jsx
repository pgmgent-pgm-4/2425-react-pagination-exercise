import "./App.css";
import { PaginatedStudentList } from "./paginated-student-list/paginated-student-list";
import { Pagination } from "./paginated-student-list/pagination/pagination";

function App() {
  return (
    <div style={{ margin: "2rem" }}>
      <PaginatedStudentList />
    </div>
  );
}

export default App;
