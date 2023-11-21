import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Toast from "./Toast";

const Notes = () => {
  const [notes, setNotes] = useState<Todo[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isDataFetched, setIsDataFetched] = useState<boolean>(false);
  const [currentToast, setCurrentToast] = useState<{
    id: number;
    type: string;
    message: string;
  } | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data: Todo[]) => {
        setNotes(data);
        if (!isDataFetched) {
          showToast("success", "Todos data fetched successfully");
          setIsDataFetched(true);
        }
      })
      .catch((err: Error) => {
        showToast("error", "Failed to fetch todos data");
        setError(err.message);
      });
  }, []);

  const showToast = (type: string, message: string) => {
    setCurrentToast({
      id: Date.now(),
      type,
      message,
    });
  };

  const closeToast = () => {
    setCurrentToast(null);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!notes.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {currentToast && (
        <Toast
          key={currentToast.id}
          type={currentToast.type}
          message={currentToast.message}
          onClose={closeToast}
        />
      )}
      <button onClick={() => showToast("error", "Failed to fetch todos data")}>
        Click to see how error toast looks like (for testing purposes)
      </button>
      {error && (
        <Toast type={"error"} message={error} onClose={() => setError(null)} />
      )}
      <h2>Notes Page</h2>
      <ul>
        {notes?.map((note: Todo) => (
          <li key={note.id}>
            <Link to={`/notes/${note.id}`}>{note.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
