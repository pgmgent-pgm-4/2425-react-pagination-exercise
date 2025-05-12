import { useEffect, useState } from "react";
import { fetchStudents } from "../../../data/fetchStudents";
import { StudentList } from "./student-list/student-list";
import { Pagination } from "./pagination/pagination";

export function PaginatedStudentList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [students, setStudents] = useState([]);

  function handlePageChanged(pageNumber) {
    setCurrentPage(pageNumber);
  }

  useEffect(() => {
    fetchStudents(currentPage).then((fetchedStudents) => {
      setStudents(fetchedStudents.data);
      setPageCount(fetchedStudents.meta.pagination.pageCount);
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
