import './App.css';
import TodoList from './todolist';

function App() {
  return (
    <>
      <h1 className="text-[#525252] text-[100px] -z-10 absolute lg:block lg:top-[50%] hidden lg:left-[50%] -translate-x-24">
        Todo
      </h1>
      <TodoList />
    </>
  );
}

export default App;
