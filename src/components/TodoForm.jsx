import { Input, Button} from '@hope-ui/solid';
import { createSignal, createEffect } from 'solid-js';

const TodoForm = ({submitTodo}) => {
    const [text, setText] = createSignal('');
    const handleInput = event => setText(event.target.value);

    const onSubmit = () => {
        console.log(text());
        submitTodo({title: text(), completed: false});
        setText('');
        console.log(text());
    };
    return (
        <div>
            <Input placeholder="Add a new todo" onInput={handleInput} />
            <Button onClick={() => onSubmit()}>Add Todo</Button>
        </div>
    );
}

export default TodoForm;