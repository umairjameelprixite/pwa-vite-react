import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NoteDetail = () => {
  const { id } = useParams();
  const [note, setNote] = useState<Todo | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data: Todo) => setNote(data))
      .catch((err: Error) => setError(err.message));
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!note) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Title: {note.title}</h2>
      <p>Status: {note.completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
};

export default NoteDetail;
