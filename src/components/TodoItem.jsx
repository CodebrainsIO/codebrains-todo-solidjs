import {
  CheckboxPrimitive,
  CheckboxPrimitiveIndicator,
  Checkbox,
  CheckboxGroup,
  Tr,
  Th,
  Td,
  IconButton
} from "@hope-ui/solid";
import { createSignal, createEffect, onMount, For } from "solid-js";
import { IoTrashBinSharp } from 'solid-icons/io'

const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <Tr>
      <Td>{todo.title}</Td>
      <Td>
        <Checkbox defaultChecked={todo.completed} colorScheme="success" />
      </Td>
      <Td><IconButton aria-label="Search" icon={<IoTrashBinSharp size={24} color="#000000"/>} /></Td>
    </Tr>
  );
};

export default TodoItem;
