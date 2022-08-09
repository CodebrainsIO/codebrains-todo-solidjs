import {
  CheckboxPrimitive,
  CheckboxPrimitiveIndicator,
  Checkbox,
  CheckboxGroup,
  Tr,
  Th,
  Td,
} from "@hope-ui/solid";
import { createSignal, createEffect, onMount, For } from "solid-js";

const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <Tr>
      <Td>{todo.title}</Td>
      <Td>
        <Checkbox defaultChecked={todo.completed} colorScheme="success" />
      </Td>
      <Td>25.4</Td>
    </Tr>
  );
};

export default TodoItem;
