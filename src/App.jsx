import { HopeProvider, Input, Heading, Container } from '@hope-ui/solid';
import TodoList from './components/TodoList';

function App() {
  return (
    <HopeProvider>
      <Container maxW="$xl" style={{ "text-align": "center"}}>
      <Heading style={{"text-align": "center"}}size="6xl" level="1">Codebrains TodoList</Heading>
        <TodoList />
        </Container>
    </HopeProvider>
  );
}

export default App;
