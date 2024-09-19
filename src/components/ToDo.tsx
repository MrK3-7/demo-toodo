import { useEffect, useState } from "react";
import { TodoResponse } from "./ToDoTypes";

const url = "http://localhost:3000/todos";

const ToDo = () => {
  const [todos, setTodos] = useState<TodoResponse | null>(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(url);

      const data: TodoResponse = await response.json();

      setTodos(data);
    })();
  }, []);
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold">ToDo App</h1>

      <div className="bg-indigo-50 p-12 rounded-xl">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 outline-none rounded-lg border border-indigo-500 focus:border-indigo-800"
          />

          <button className="px-4 py-2 rounded-lg bg-green-600 text-white">
            Add new
          </button>
        </div>
        <div className="space-y-3 mt-4">
          {todos ? (
            todos.map((task) => (
              <div>
                <div className="flex gap-2 items-center">
                  <input type="checkbox" />
                  <p>{task.title}</p> <p>{task.date}</p>
                </div>
                <button className="px-3 py-2 text-white bg-blue-500 rounded-lg">
                  EDIT
                </button>
                <button className="px-3 py-2 text-white bg-red-500 rounded-lg">
                  DELETE
                </button>
              </div>
            ))
          ) : (
            <div>Loading</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToDo;
