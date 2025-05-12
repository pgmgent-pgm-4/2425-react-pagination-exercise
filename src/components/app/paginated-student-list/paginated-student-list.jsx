import { useEffect, useState } from "react";
import { fetchStudents } from "../../../data/fetchStudents";
import { StudentList } from "./student-list/student-list";
import { Pagination } from "./pagination/pagination";
import { PAGE_SIZE_OPTIONS } from "../../../constants/constants";

export function PaginatedStudentList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZE_OPTIONS[0]);
  const [students, setStudents] = useState([]);

  function handlePageChanged(pageNumber) {
    setCurrentPage(pageNumber);
  }

  function handlePageSizeChanged(size) {
    setPageSize(size);
  }

  useEffect(() => {
    fetchStudents(currentPage, pageSize).then((fetchedStudents) => {
      if (currentPage > fetchedStudents.meta.pagination.pageCount) {
        setCurrentPage(fetchedStudents.meta.pagination.pageCount);
      }
      setStudents(fetchedStudents.data);
      setPageCount(fetchedStudents.meta.pagination.pageCount);
    });
  }, [currentPage, pageSize]);

  return (
    <>
      <div style={{ marginBottom: "2rem" }}>
        <StudentList students={students} />
      </div>
      <Pagination
        currentPage={currentPage}
        pageCount={pageCount}
        pageSize={pageSize}
        onPageChanged={handlePageChanged}
        onPageSizeChanged={handlePageSizeChanged}
      />
    </>
  );
}
