import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { QueryKey, TTodo } from "../types";
import styles from "./Todos.module.css";

export const Todos: FC = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: [QueryKey.Todos],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/posts').then(
        (res) => res.json(),
      ),
  });

  return (
    <ul className={styles.container}>
      {isLoading ? (
        <>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </>
      ) : data.map((todo: TTodo) => (
        <li key={todo.id}>
          <details className={styles.details}>
            <summary className={styles.summary}>{todo.title}</summary>
            <span className={styles.desc}>{todo.body}</span>
          </details>
        </li>
      ))}
    </ul>
  );
};