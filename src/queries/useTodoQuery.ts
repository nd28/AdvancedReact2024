import { useQuery } from "@tanstack/react-query"

// Fetch All Todo
const fetchAllTodoData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const json = await response.json()
  return json as Array<any>
};
export const useTodosQuery = () => {
  return useQuery({ queryKey: ['jsonp', 'todos'], queryFn: fetchAllTodoData })
}

// Fetch Single Todo Item
const fetchTodoById = (id: number) => async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const json = await response.json()
  return json
};
export const useTodoByIdQuery = (id: number) => {
  return useQuery({ queryKey: ['jsonp', 'todo', id], queryFn: fetchTodoById(id), enabled: id > 0 })
}

