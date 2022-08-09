import { HopeProvider, Input } from "@hope-ui/solid";
import { createSignal, createEffect, onMount, For } from "solid-js";
import { loadTodos, createTodo } from "../services/todoService";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [todos, setTodos] = createSignal([]);

  const handleFormSubmit = (todo) => {
    console.log("Todo to create", todo);
    createTodo(todo).then(() => refresh());
  };

  const toggleTodo = (todo) => {
    console.log("Todo to toggle", todo);
    todo.completed = !todo.completed;
    updateTodo(todo).them(() => refresh());
  }
  const handleRemoveTodo = (todo) => {
    console.log("Todo to remove", todo);
    deleteTodo(todo.id).then(() => refresh());
  };

  const refresh = () => {
    loadTodos()
      .then((json) => {
        setTodos(json);
        console.log("Loaded Todos", todos());
      })
      .catch((err) => {
        console.error(err);
      });
  };
  onMount(async () => {
    refresh();
  });
  return (
    <div>
      <TodoForm submitTodo={handleFormSubmit}/>
      <ul>
      <For each={todos()}>
        {(todo) => 
            <li>{todo.title}</li>
        }
      </For>
      </ul>
    </div>
  );
};

export default TodoList;
