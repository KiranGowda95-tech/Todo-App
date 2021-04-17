// import CreateTodo from "./Components/create-todo";
// import EditTodo from "./Components/edit-todo";
// import Todo from "./Components/todos";

//more on hookrouter http://github.com/Parathron/hookrouuter;

const Routes = {
  "/": () => <Todo />,
  "/createtodo": () => <CreateTodo />,
  // "/edittodo":()=><EditTodo/>
};

export default Routes;
