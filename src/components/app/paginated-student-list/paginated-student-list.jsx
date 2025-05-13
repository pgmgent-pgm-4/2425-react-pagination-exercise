import { useEffect, useState } from "react";
import { StudentList } from "./student-list/student-list";
import { Pagination } from "./pagination/pagination";
import { API_TOKEN, API_URL } from "../../../constants/constants";

export function PaginatedStudentList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [students, setStudents] = useState([]);

  const pageCount = 86;

  function handlePageChanged(pageNumber) {
    setCurrentPage(pageNumber);
  }

  useEffect(() => {
    fetch(
      `${API_URL}/students?pagination[pageSize]=10&pagination[page]=${currentPage}`,
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      }
    )
      .then((data) => data.json())
      .then((jsonData) => {
        setStudents(jsonData.data);
      });
  }, [currentPage]);

  return (
    <>
      <div style={{ marginBottom: "2rem" }}>
        <StudentList students={students} />
      </div>
      <Pagination
        currentPage={currentPage}
        pageCount={pageCount}
        onPageChanged={handlePageChanged}
      />
    </>
  );
}
