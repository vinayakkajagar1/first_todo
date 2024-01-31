export function Todos({ todos }) {
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div key={todo._id} style={{border: "1px solid black", padding: "10px", background: "red", display:'flex', flexDirection: "column"
          ,justifyContent:"flex-start", width:"200px"}}>
            <h1 >{todo.title}</h1>
            <h2 >{todo.description}</h2>
            <button style={{width:"150px"}}>
              {todo.completed == true ? "Completed" : "Mark as completed"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
