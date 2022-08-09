import {
  HopeProvider,
  Input,
  IconButton,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
} from "@hope-ui/solid";
import { createSignal, createEffect, onMount, For } from "solid-js";
import { loadTodos, createTodo, updateTodo, deleteTodo } from "../services/todoService";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

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
  };
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
      <TodoForm submitTodo={handleFormSubmit} />
      <Table>
        <TableCaption>Codebrains Todo List</TableCaption>
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Complete</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          <For each={todos()}>
            {(todo) => (
              <TodoItem
                todo={todo}
                removeTodo={handleRemoveTodo}
                toggleTodo={toggleTodo}
              />
            )}
          </For>
        </Tbody>
      </Table>
    </div>
  );
};

export default TodoList;
