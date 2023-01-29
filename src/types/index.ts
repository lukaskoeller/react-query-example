export type TTodo = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export enum QueryKey {
  Todos = 'todos',
}