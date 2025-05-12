import { API_TOKEN, API_URL } from "../constants/constants";

export async function fetchStudents(page) {
  const result = await fetch(
    `${API_URL}/students?pagination[page]=${page}&pagination[pageSize]=10`,
    {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    }
  );
  const data = await result.json();
  return data;
}
