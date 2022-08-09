import { HopeProvider, Input } from '@hope-ui/solid';
import TodoList from './components/TodoList';

function App() {
  return (
    <HopeProvider>
    
        <TodoList />

    </HopeProvider>
  );
}

export default App;
