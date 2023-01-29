import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FC, FormEvent } from "react";
import { QueryKey, TTodo } from "../types";

export const TodoForm: FC = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newTodo: Omit<TTodo, 'id'>) => {
      return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKey.Todos] })
    }
  });

  return (
    <form onSubmit={(e: FormEvent) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);

      const data = {
        title: formData.get('title') as string,
        body: formData.get('body') as string,
        userId: parseFloat(formData.get('userId') as string),
      }

      mutation.mutate(data);
    }}>
      <div className="input-wrapper">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" placeholder="What is your todo?" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="body">Description</label>
        <input type="text" name="body" id="body" placeholder="Some helpful details…" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="userId">User ID</label>
        <input type="number" name="userId" id="userId" placeholder="Assign a user" />
      </div>
      <button type="submit">Add new todo</button>
    </form>
  )
};
