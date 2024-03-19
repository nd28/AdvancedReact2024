import React from "react";
import { app } from "./app";
import { UseQueryResult } from "@tanstack/react-query";
import { RenderQuery } from "./RenderQuery";

export const Request: React.FunctionComponent = () => {
  const [id, setId] = React.useState<number>(-1);

  const todos = app.queries.useTodosQuery();

  const todo = app.queries.useTodoByIdQuery(id);

  let result: React.JSX.Element;

  let response: UseQueryResult;

  if (id != -1) {
    response = todo;

    result = <div>

      <button onClick={() => setId(-1)}>BACK</button>

      <h1>Todo (#{id})</h1>

      <ul>
        {todo.data && Object.entries(todo.data).map(([key, value]) => <li key={key}>{key} : {value?.toString()}</li>)}
      </ul>

    </div>

  } else {

    response = todos;

    result = <div>

      <h1>Todos</h1>

      <ol>

        {todos.data?.map((todo) => (
          <li key={todo.id}>{todo.title}<button onClick={() => setId(todo.id)}> Open</button></li>
        ))}

      </ol >

      <button onClick={() => todos.refetch()}>refetch</button>

    </div >

  }

  return <RenderQuery response={response}>{result}</RenderQuery>
}

export const RequestSheet: React.FunctionComponent = () => {

  const response = app.queries.useSheetData({ sheetName: 'StageValidation' });

  return (
    <RenderQuery response={response}>

      {Array.isArray(response.data) ? 'Hurray!' : 'Alas!'}

      {}

    </RenderQuery>
  )
}

export default RequestSheet;
