import { useEffect, useState } from "react";
import { StudentList } from "./student-list/student-list";
import { Pagination } from "./pagination/pagination";

export function PaginatedStudentList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [students, setStudents] = useState([]);

  const pageCount = 86;

  function handlePageChanged(pageNumber) {
    setCurrentPage(pageNumber);
  }

  // Up to you to use useEffect properly here

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
