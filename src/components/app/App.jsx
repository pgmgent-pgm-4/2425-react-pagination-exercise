import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { PaginatedStudentList } from "./paginated-student-list/paginated-student-list";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ margin: "2rem" }}>
        <PaginatedStudentList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
